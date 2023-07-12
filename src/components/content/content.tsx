import { Avatar, Box, Divider, Typography } from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import React from "react";
import { ContentProps } from "./content.props";
import { calculateEstimatedTimeToRead } from "@/src/helpers/time.format";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Content({ blogs }: ContentProps) {
  const router = useRouter();
  return (
    <Box sx={{ width: { xs: "100%", md: "70%" } }}>
      {blogs.map((item) => (
        <Box
          key={item.id}
          sx={{
            backgroundColor: "rgba(0,0,0,4)",
            padding: "20px",
            mt: "20px",
            borderRadius: "8px",
            boxShadow: "0px 8px 16px rgba(255,255,255,.2)",
            cursor: "pointer",
          }}
          onClick={() => router.push(`/blog/${item.slug}`)}
        >
          <Box
            position={"relative"}
            width={"100%"}
            height={{ xs: "30vh", md: "50vh" }}
          >
            <Image
              src={item.image.url}
              alt={item.title}
              fill
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </Box>
          <Typography variant="h5" mt={"30px"}>
            {item.title}
          </Typography>
          <Typography variant="body1" color={"gray"}>
            {item.excerpt}
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
            <Avatar alt={item.author.name} src={item.author.avatar.url} />
            <Box>
              <Typography variant="body2">{item.author.name}</Typography>
              <Box sx={{ opacity: 0.4 }}>
                {format(new Date(item.createdAt), "dd MMM, yyyy")} &#x2022;{" "}
                {calculateEstimatedTimeToRead(item.description.text)} minutes
                read
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
