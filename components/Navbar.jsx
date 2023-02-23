import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import Image from "next/image";
import HouseIcon from "@mui/icons-material/House";

const drawerWidth = 240;
const navItems = ["About", "Pricing & Services", "Add Listing", "Log In"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#999999" }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="sticky"
        component="nav"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: 3,
          borderBottomColor: "#468CC8",
        }}>
        <Toolbar
          sx={{ justifyContent: { xs: "space-between", md: "space-around" } }}>
          {/* hamburger icons */}
          <Box alignItems={"center"} sx={{ display: { sm: "none" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                color: "#999999",
              }}>
              <MenuIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                color: "#999999",
                borderRight: 1,
                borderLeft: 1,
                borderRadius: 0,
                borderRightColor: "#EEEEEE",
                borderLeftColor: "#EEEEEE",
              }}>
              <SearchOutlinedIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none" },
                color: "#999999",
                borderRight: 1,
                borderRadius: 0,
                borderRightColor: "#EEEEEE",
              }}>
              <QuestionMarkOutlinedIcon />
            </IconButton>
          </Box>

          {/* main logo */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton sx={{ padding: "2px" }}>
              <HomeIcon
                sx={{ fontSize: "20px", marginTop: "-2px", padding: "0px" }}
              />
            </IconButton>
            <Button
              sx={{
                color: "#999999",
                fontSize: "20px",
                padding: "0px",
              }}>
              OpenRent
            </Button>
          </Box>

          {/* desktop logo */}
          <Button
            className="btn"
            variant="h6"
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "#999999",
              flexDirection: "row",
              fontSize: "24px",
              gap: 2,
              alignItems: "center",
              textAlign: "center",
            }}>
            <IconButton>
              <HomeIcon sx={{ fontSize: "25px", marginTop: "-4px" }} />
            </IconButton>
            OpenRent
          </Button>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              sx={{ color: "#40586D", fontSize: "17px", fontWeight: 300 }}>
              About
            </Button>
            <Button
              sx={{ color: "#40586D", fontSize: "17px", fontWeight: 300 }}>
              Pricing & Services
            </Button>
            <Button
              sx={{
                color: "#40586D",
                fontSize: "17px",
                backgroundColor: "#5CB85C",
                color: "white",
                fontWeight: 300,
                padding: "4px 1rem",
                ":hover": { backgroundColor: "#5CA05C" },
              }}>
              Add Listing
            </Button>
            <Button
              sx={{ color: "#40586D", fontSize: "17px", fontWeight: 300 }}>
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box>
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
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

// const newLocal = DrawerAppBar.propTypes = {

//   Injected by the documentation to work in an iframe.
//   You won't need it on your project.

//   window: PropTypes.func,
// };

export default Navbar;
