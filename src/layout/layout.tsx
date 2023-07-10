import { Box } from "@mui/material";
import { Navbar, Footer } from "../components";
import { LayoutProps } from "./layout.props";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box minHeight={"90hv"}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
