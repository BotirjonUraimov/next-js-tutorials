import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import { format } from "date-fns";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function Footer() {
  return (
    <>
      <Box
        sx={{
          height: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#141414",
          color: "white",

          paddingX: "20px",
          borderTop: "1px solid rgba(255, 255, 255, .5)",
        }}
      >
        <Typography>
          CopyRight {format(new Date(), "yyyy")} by NextJS, All rights reserved
        </Typography>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <TelegramIcon sx={{ cursor: "pointer" }} />
          <InstagramIcon sx={{ cursor: "pointer" }} />
          <YouTubeIcon sx={{ cursor: "pointer" }} />
        </Box>
      </Box>
    </>
  );
}

4;
