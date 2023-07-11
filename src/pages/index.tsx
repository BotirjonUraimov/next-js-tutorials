import { Button } from "@mui/material";
import Head from "next/head";
import React from "react";
import Layout from "../layout/layout";
import { Hero } from "../components";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>HomePage</title>
      </Head>

      <Hero />
    </Layout>
  );
}
