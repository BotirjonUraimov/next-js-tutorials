import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";

const data = [
  {
    image: "https://media.graphassets.com/MxJZhmooRRuudoErkQ38",
    title: "Technical SEO with Hygraph",
    exerpt:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Samar Badriddinov",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
  {
    image: "https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h",
    title: "Union Types and Sortable Relations with Hygraph",
    exerpt:
      "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
    author: {
      name: "Samar Badriddinov",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
];

export default function Content() {
  return (
    <Box sx={{ width: { xs: "100%", md: "70%" } }}>
      {data.map((item) => (
        <Box
          key={item.title}
          sx={{
            backgroundColor: "rgba(0,0,0,4)",
            padding: "20px",
            mt: "20px",
            borderRadius: "8px",
            boxShadow: "0px 8px 16px rgba(255,255,255,.2)",
          }}
        >
          <Box
            position={"relative"}
            width={"100%"}
            height={{ xs: "30vh", md: "50vh" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>
          <Typography variant="h5" mt={"30px"}>
            {item.title}
          </Typography>
          <Typography variant="body1" color={"gray"}>
            {item.exerpt}
          </Typography>
          <Divider sx={{ mt: "30px" }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <Avatar alt={item.author.name} src={item.author.image} />
            <Box>
              <Typography variant="body2">{item.author.name}</Typography>
              <Box sx={{ opacity: 0.4 }}>
                {format(new Date(), "dd MMM, yyyy")} &#x2022; read
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
