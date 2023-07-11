import { navItem } from "@/src/config/constants";
import { Box, Typography, Button, Divider, Avatar } from "@mui/material";
import React, { Fragment } from "react";
import Image from "next/image";
import { format } from "date-fns";

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

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "30%" },
      }}
    >
      <Box
        position={"sticky"}
        top={"100px"}
        sx={{ transition: "all .3s easy" }}
      >
        <Box
          sx={{
            padding: "20px",
            border: "1px solid gray",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h5">Category</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mt: "20px" }}>
            {navItem.map((nav) => (
              <Fragment key={nav.label}>
                <Button
                  key={nav.route}
                  fullWidth
                  sx={{ justifyContent: "flex-start", height: "50px" }}
                >
                  {nav.label}
                </Button>
                <Divider />
              </Fragment>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            padding: "20px",
            border: "1px solid gray",
            borderRadius: "8px",
            mt: "20px",
          }}
        >
          <Typography variant="h5">Latest Blogs</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mt: "20px" }}>
            {data.map((item) => (
              <Box key={item.title} sx={{ mt: "20px" }}>
                <Box
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover", borderRadius: "5px" }}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="body1">{item.title}</Typography>
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
                        <Typography variant="body2">
                          {item.author.name}
                        </Typography>
                        <Box sx={{ opacity: 0.4 }}>
                          {format(new Date(), "dd MMM, yyyy")} &#x2022; read
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ mt: "20px" }} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
