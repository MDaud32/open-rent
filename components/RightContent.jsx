import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Pricing from "./Pricing";
import profile from "../public/image.jpeg";

const RightContent = () => {
  return (
    <Box>
      <Pricing />
      <Stack>
        <Stack
          direction="column"
          sx={{
            bgcolor: "white",
            width: { xs: '100%', md: 700, lg: 350,  },
            borderRadius: "5px",
            borderTopLeftRadius: "0px",
            border: "1px solid",
            borderColor: "#DFDFDF",
            padding: "1rem",
            alignItems: "center",
            mt: 2,
          }}>
          <Typography sx={{ fontSize: "25px", fontWeight: 200 }}>
            Meet the landlord
          </Typography>
          <Image
            src={profile}
            alt="profile image"
            width={120}
            height={110}
            style={{ borderRadius: "50%" }}
          />
          <Typography sx={{ fontSize: "15px" }}>Stephanie B.</Typography>
          <Typography sx={{ fontSize: "15px", marginTop: "1rem" }}>
            Response Rate: 100% ★
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
            Response Time: Within 2 Days ★
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default RightContent;
