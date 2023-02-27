import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Bg from "../public/bg.jpeg";

import Features from "./Features";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";
import dynamic from "next/dynamic";
import OverView from "./OverView";

const Map = dynamic(() => import("./Map"), { ssr: false });
const LeftContent = () => {
  return (
    <Box>
      <Image
        src={Bg}
        alt="hero image"
        width={700}
        height={450}
        style={{ borderRadius: "5px" }}
      />
      <Typography
        component="h1"
        sx={{
          fontWeight: 400,
          fontSize: { xs: "1.8rem", sm: "30px" },
          color: "#40586D",
        }}>
        1 Bed Flat, Bootham Square, YO30
      </Typography>
      <Stack
        sx={{ display: { xs: "block", lg: "none" }, mt: "0.5rem", mb: "10px" }}>
        {/* features */}
        <Typography
          sx={{
            bgcolor: "white",
            borderTop: 3,
            width: 130,
            padding: "5px",

            borderLeft: "1px solid",
            borderRight: "1px solid",
            borderLeftColor: "#DFDFDF",
            borderRightColor: "#DFDFDF",
            borderTopColor: "#468CC8",
            mb: "-1px",
            zIndex: 2,
            position: "relative",
            fllexDirection: "row",
            fontSize: "18px",
            display: { xs: "none", lg: "block" },
          }}>
          <IconButton sx={{ ":hover": { bgcolor: "white" } }}>
            <StarRateOutlinedIcon />
          </IconButton>
          Favourite
        </Typography>

        {/* group */}
        <Stack
          direction="column"
          sx={{
            bgcolor: "white",
            width: { xs: "100%", md: 700, lg: 350 },
            borderRadius: "5px",
            borderTopLeftRadius: "0px",
            border: "1px solid",
            borderColor: "#DFDFDF",
            padding: "1rem",
            mr: 3,
            alignItems: "center",
          }}>
          <Typography sx={{ fontSize: "25px" }}>£1,100.00</Typography>
          <Typography sx={{ fontSize: "15px" }}>per month</Typography>
          <Typography
            sx={{ fontSize: "20px", marginTop: "0.5rem", fontWeight: 200 }}>
            £253.85
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>per week</Typography>
          <Typography sx={{ fontSize: "15px", mt: "0.5rem" }}>
            ✔️ No admin fees
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
            ✔️ No hidden charges
          </Typography>
        </Stack>
      </Stack>
      <Box>
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",
            border: "1px solid",
            borderColor: "#DFDFDF",
            padding: "1rem",
            width: { xs: "100%", md: 700 },
          }}>
          <Typography
            component="h1"
            sx={{ fontWeight: 300, fontSize: "2rem", color: "#9A9A9D" }}>
            Overview
          </Typography>

          {/* main box for house overview  */}
          <OverView />
          {/* description */}
          <Box>
            <Typography
              component="h1"
              sx={{
                fontWeight: 300,
                fontSize: "2rem",
                my: 1,
                color: "#9A9A9D",
              }}>
              Description
            </Typography>
            <Divider />
            <Box
              sx={{
                backgroundColor: "#fcf8e3",
                padding: "1rem",
                borderRadius: "5px",
                my: "1rem",
              }}>
              <Typography
                varient="v6"
                component="p"
                sx={{ fontWeight: 600, color: "#8A6D3B" }}>
                Note: This OpenRent Property Is No Longer Available For Rent.
              </Typography>
              <Typography
                varient="v6"
                component="p"
                sx={{ fontWeight: 300, color: "#8A6D3B" }}>
                Description below is only for reference, and you can no longer
                book a viewing or contact this private landlord.
              </Typography>
            </Box>
            <Typography
              varient="v6"
              component="p"
              sx={{ fontWeight: 300, color: "#808080" }}>
              We are proud to offer this delightful 1 bedroom, 1 bathroom flat
              in a great location.
              <br /> <br /> Available to move in from 02 February 2023. Property
              is offered unfurnished.
              <br /> <br />
              Viewing highly recommended. Contact OpenRent today for more
              details or to arrange a viewing!
            </Typography>
          </Box>
          {/* summary */}
          <Box>
            <Typography
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: "1rem",
                my: 2,
                color: "#808080",
              }}>
              Summary
            </Typography>
            <Typography
              varient="v6"
              component="p"
              sx={{ fontWeight: 300, color: "#808080" }}>
              Rent £1,100.00 per month (£253.85 per week)
              <br /> Deposit / Bond is £1,100.00
              <br />
              <br /> Minimum tenancy is 6 months
              <br /> Maximum number of tenants is 2
            </Typography>
          </Box>
        </Box>
        <Features />
        <Map />
        <Stack sx={{ display: { xs: "block", lg: "none", mt: "rem" } }}>
          {/* features */}
          <Typography
            sx={{
              bgcolor: "white",
              borderTop: 3,
              width: 130,
              padding: "5px",
              borderLeft: "1px solid",
              borderRight: "1px solid",
              borderLeftColor: "#DFDFDF",
              borderRightColor: "#DFDFDF",
              borderTopColor: "#468CC8",
              mb: "-1px",
              zIndex: 2,
              position: "relative",
              fllexDirection: "row",
              fontSize: "18px",
            }}>
            <IconButton sx={{ ":hover": { bgcolor: "white" } }}>
              <StarRateOutlinedIcon />
            </IconButton>
            Favourite
          </Typography>

          {/* group */}
          <Stack
            direction="column"
            sx={{
              bgcolor: "white",
              width: { xs: "100%", md: 700, lg: 350 },
              borderRadius: "5px",
              borderTopLeftRadius: "0px",
              border: "1px solid",
              borderColor: "#DFDFDF",
              padding: "1rem",
              mr: 3,
              alignItems: "center",
            }}>
            <Button
              disabled
              sx={{
                bgcolor: "#D7EDD7",
                color: "white",
                width: "100%",
                mt: "2rem",
              }}>
              Let Agreed
            </Button>
            <Typography sx={{ fontWeight: 700, fontSize: "17px", mt: "1rem" }}>
              Property Reference:
            </Typography>
            <Typography sx={{ fontWeight: 300, fontSize: "15px" }}>
              1616107
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default LeftContent;
