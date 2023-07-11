import { Box, Button } from "@mui/material";
import Head from "next/head";
import React from "react";
import Layout from "../layout/layout";
import { Content, Hero, Sidebar } from "../components";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>HomePage</title>
      </Head>

      <Hero />

      <Box sx={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  );
}
