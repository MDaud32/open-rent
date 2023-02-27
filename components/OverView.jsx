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
              width: { xs: "16%", sm: "39%" },
              ml: { xs: 1, sm: 5 },
            }}>
            <IconButton
              sx={{
                gap: 1,
                fontSize: "20px",
                alignItems: "start",
                ":hover": { backgroundColor: "#FAFAFA" },
              }}>
              <HotelIcon sx={{ fontSize: "25px" }} />
              <Typography display={{ xs: "none", sm: "block" }}>
                BedRooms:
              </Typography>
            </IconButton>
            <Typography
              component="h1"
              sx={{
                fontWeight: 600,
                fontSize: "20px",
                color: "#737373",
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
              <BathtubIcon sx={{ fontSize: "25px" }} />
              <Typography display={{ xs: "none", sm: "block" }}>
                Bathrooms:
              </Typography>
            </IconButton>
            <Typography
              component="h1"
              sx={{
                fontWeight: 600,
                fontSize: "20px",
                color: "#737373",
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
              <FamilyRestroomIcon sx={{ fontSize: "25px" }} />
              <Typography display={{ xs: "none", sm: "block" }}>
                Maximum Tenants:
              </Typography>
            </IconButton>
            <Typography
              component="h1"
              sx={{
                fontWeight: 600,
                fontSize: "20px",
                color: "#737373",
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
              <LocationOnIcon sx={{ fontSize: "25px" }} />
              <Typography display={{ xs: "none", sm: "block" }}>
                Location:
              </Typography>
            </IconButton>
            <Typography
              component="h1"
              sx={{
                fontWeight: 600,
                fontSize: "20px",
                color: "#737373",
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
