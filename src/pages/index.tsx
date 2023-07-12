import { Box, Button } from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Layout from "../layout/layout";
import { Content, Hero, Sidebar } from "../components";
import { BlogsService } from "../services/blog.service";
import { GetServerSideProps } from "next";
import { BlogsType } from "../interfaces/blogs.interface";
import { CategoryType } from "../interfaces/categories.interface";
import SEO from "../layout/seo/seo";

export default function IndexPage({
  blogs,
  latestBlogs,
  categories,
}: HomePageProps) {
  return (
    <SEO>
      <Layout>
        <Hero blogs={blogs.slice(0, 3)} />{" "}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: { xs: "column", md: "row" },
            padding: "20px",
          }}
        >
          <Sidebar latestBlogs={latestBlogs} categories={categories} />{" "}
          <Content blogs={blogs} />
        </Box>
      </Layout>
    </SEO>
  );
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const blogs = await BlogsService.getAllBLogs();
  const latestBlogs = await BlogsService.getLatestBlog();
  const categories = await BlogsService.getCategories();
  return {
    props: {
      blogs,
      latestBlogs,
      categories,
    },
  };
};

interface HomePageProps {
  blogs: BlogsType[];
  latestBlogs: BlogsType[];
  categories: CategoryType[];
}
