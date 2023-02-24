import { Box, Button, Typography } from "@mui/material";
import React from "react";

const TopBanner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fcf8e3",
        padding: "1rem",
        borderRadius: "5px",
        my: "2rem",
      }}>
      <Typography varient="v6" component="p" sx={{ fontWeight: 600 }}>
        Let Agreed - This property is no longer available for rent
      </Typography>
      <Typography varient="v6" component="p" sx={{ fontWeight: 300 }}>
        This property has now been taken off the market (as of 12 February
        2023).
      </Typography>
      <Button
        sx={{
          backgroundColor: "#468CC8",
          color: "white",
          mt: "1rem",
          fontWeight: 400,
          ":hover": { backgroundColor: "#0080C0" },
        }}>
        See Available Properties In This Area
      </Button>
    </Box>
  );
};

export default TopBanner;