import { AppBar, Box, Divider, IconButton, Toolbar } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import { navItem } from "@/src/config/constants";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";

interface Props {
  window?: () => Window;
}
const drawerWidth = 240;
export default function Navbar({ window }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "20px",
        }}
      >
        {" "}
        <Typography
          variant="h5"
          sx={{ my: 2, fontWeight: "700", cursor: "pointer" }}
          onClick={() => router.push(`/`)}
        >
          Next JS
        </Typography>
        <CloseIcon />
      </Box>

      <Divider />
      <List>
        {navItem.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                onClick={() => router.push(item.route)}
                primary={item.label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box>
      <Box sx={{ display: "flex", height: "8vh" }}>
        <AppBar
          sx={{ height: "8vh", backgroundColor: "#141414" }}
          component="nav"
        >
          <Toolbar sx={{ height: "8vh" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", fontWeight: "700" },
                cursor: "pointer",
              }}
              onClick={() => router.push(`/`)}
            >
              Next JS
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItem.map((item) => (
                <Button
                  key={item.route}
                  sx={{ color: "#fff" }}
                  onClick={() => router.push(item.route)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "100%",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
}
