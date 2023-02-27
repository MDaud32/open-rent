import React from "react";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, IconButton, Stack, Typography } from "@mui/material";

const OverView = () => {
  return (
    <>
      <Box sx={{ alignItems: "start", textAlign: "start" }}>
        {/* 1st group */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            justifyContent: "space-between",
            backgroundColor: { xs: "white", sm: "#FAFAFA" },
            alignItems: "start",
          }}>
          {/* bedrooms */}
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: { xs: "15%", sm: "40%" },
              ml: { xs: "0.6rem", sm: "2rem" },
            }}>
            <IconButton
              sx={{
                gap: 1,
                fontSize: "20px",
                alignItems: "start",
                ":hover": { backgroundColor: "#FAFAFA" },
              }}>
              <HotelIcon sx={{ fontSize: "20px", color: "#808080" }} />
              <Typography
                display={{ xs: "none", sm: "block" }}
                fontWeight={"300"}
                color={"#8f8f8f"}>
                Bedrooms:
              </Typography>
            </IconButton>
            <Typography
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: "16px",
                color: "#8f8f8f",
              }}>
              1
            </Typography>
          </Stack>
          {/* bathrooms */}
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: { xs: "20%", sm: "50%" },
            }}>
            <IconButton
              sx={{
                gap: 1,
                fontSize: "20px",
                alignItems: "center",
                ":hover": { backgroundColor: "#FAFAFA" },
              }}>
              <BathtubIcon sx={{ fontSize: "20px", color: "#808080" }} />
              <Typography
                display={{ xs: "none", sm: "block" }}
                fontWeight={"300"}
                color={"#8f8f8f"}>
                Bathrooms:
              </Typography>
            </IconButton>
            <Typography
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: "16px",
                color: "#8f8f8f",
              }}>
              1
            </Typography>
          </Stack>
        </Stack>
        {/* 2nd group */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            justifyContent: "space-around",
            alignItems: "start",
          }}>
          {/* Tenants */}
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: { xs: "20%", sm: "48%" },
              ml: { xs: 0, sm: "12px" },
            }}>
            <IconButton
              sx={{
                gap: 1,
                fontSize: "20px",
                alignItems: "center",
                ":hover": { backgroundColor: "#FAFAFA" },
              }}>
              <FamilyRestroomIcon sx={{ fontSize: "20px", color: "#808080" }} />
              <Typography
                display={{ xs: "none", sm: "block" }}
                fontWeight={"300"}
                color={"#8f8f8f"}>
                Maximum Tenants:
              </Typography>
            </IconButton>
            <Typography
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: "16px",
                color: "#8f8f8f",
              }}>
              2
            </Typography>
          </Stack>
          {/* Location */}
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              width: { xs: "20%", sm: "50%" },
              ml: { xs: 1, sm: "10px" },
            }}>
            <IconButton
              sx={{
                gap: 1,
                fontSize: "20px",
                alignItems: "center",
                ":hover": { backgroundColor: "#FAFAFA" },
              }}>
              <LocationOnIcon sx={{ fontSize: "20px", color: "#808080" }} />
              <Typography
                display={{ xs: "none", sm: "block" }}
                fontWeight={"300"}
                color={"#8f8f8f"}>
                Location:
              </Typography>
            </IconButton>
            <Typography
              component="h1"
              sx={{
                fontWeight: 400,
                fontSize: "16px",
                color: "#8f8f8f",
              }}>
              York
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default OverView;
