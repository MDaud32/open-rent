import { Box, Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import IconButton from "@mui/material/IconButton";
import RoomIcon from "@mui/icons-material/Room";
import ViewListIcon from "@mui/icons-material/ViewList";
import * as React from "react";
import BasicModal from "./Modal";

const MainPageBottomNav = ({ setShowCard, setShowMap, showCard, showMap }) => {
  function cardClickHandler() {
    setShowCard(true);
    setShowMap(false);
  }

  function mapClickHandler() {
    setShowCard(false);
    setShowMap(true);
  }

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
        zIndex: 10,

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

          <BasicModal />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button
            onClick={mapClickHandler}
            sx={{
              backgroundColor: showMap ? "#3272a9" : "#468cc8",
              color: "white",
              width: "10px",
              ":hover": { backgroundColor: "rgb(50, 114, 169)" },
            }}>
            <RoomIcon />
          </Button>
          <Button
            onClick={cardClickHandler}
            sx={{
              backgroundColor: showCard ? "#3272a9" : "#468cc8",
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
