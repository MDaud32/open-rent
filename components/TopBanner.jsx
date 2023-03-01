import {Box, Button, IconButton, Typography} from "@mui/material";
import React from "react";
import {Close} from "@mui/icons-material";

const TopBanner = ({setShowBanner}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fcf8e3",
        paddingX: "0.6rem",
          paddingY: "0.2rem",
        borderRadius: "5px",
        mt: "1rem",
        mb: { xs: 2, lg: 2 },
        maxWidth: "md",
          display  : 'flex',
          flexDirection : 'column'
      }}>
          <IconButton sx={{display : 'flex',alignSelf : 'end'}} onClick={() => setShowBanner(false)}>
                <Close/>
            </IconButton>
      <Typography
        varient="v6"
        component="p"
        sx={{ fontWeight: 600, color: "#8A6D3B" }}>
        Let Agreed - This property is no longer available for rent
      </Typography>
      <Typography
        varient="v6"
        component="p"
        sx={{ fontWeight: 300, color: "#8A6D3B" }}>
        This property has now been taken off the market (as of 12 February
        2023).
      </Typography>
        <Box>

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

    </Box>
  );
};

export default TopBanner;
