import { Box, Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import IconButton from "@mui/material/IconButton";
import RoomIcon from "@mui/icons-material/Room";
import ViewListIcon from "@mui/icons-material/ViewList";
import * as React from "react";

const MainPageBottomNav = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "100%",
        paddingX: "8px",
        position: "fixed",
        bottom: "0px",
        left: "0px",
        backgroundColor: "#ffffff",
        color: "white",
        pb: "6px",

        display: { xs: "block", sm: "none" },
      }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{
              color: "white",
              display: "flex",
              height: "48px",
              width: "90px",
              backgroundColor: "#5cb85c",
              ":hover": { backgroundColor: "rgb(68, 157, 68)" },
            }}>
            <SearchOutlinedIcon />

            <Typography color={"white"} marginLeft={"-4px"} fontSize={"14px"}>
              Search
            </Typography>
          </Button>

          <Button
            variant={"solid"}
            sx={{ backgroundColor: "#f0f0f0", color: "gray" }}>
            <TuneIcon />
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{
              backgroundColor: "#468cc8",
              color: "white",
              width: "10px",
              ":hover": { backgroundColor: "rgb(50, 114, 169)" },
            }}>
            <RoomIcon />
          </Button>

          <Button
            sx={{
              backgroundColor: "#3272a9",
              color: "white",
              ":hover": { backgroundColor: "rgb(50, 114, 169)" },
            }}>
            <ViewListIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPageBottomNav;
