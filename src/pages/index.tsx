import { Button } from "@mui/material";
import Head from "next/head";
import React from "react";
import Layout from "../layout/layout";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>HomePage</title>
      </Head>

      <Button>Click</Button>
    </Layout>
  );
}
