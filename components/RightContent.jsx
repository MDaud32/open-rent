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
import Pricing from "./Pricing";
import profile from "../public/image.jpeg";
import facebook from "../public/facebook.png";
import email from "../public/email.png";
import gmail from "../public/gmail.png";
import twitter from "../public/twitter.png";
import writing from "../public/writing.png";
import sum from "../public/sum.png";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined";

const RightContent = () => {
  return (
    <Box>
      <Pricing />
      <Stack>
        {/* Landlord card */}
        <Stack
          direction="column"
          sx={{
            bgcolor: "white",
            width: { xs: "100%", md: 650, lg: 335 },
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

        {/* share property */}
        <Stack
          direction="column"
          sx={{
            bgcolor: "white",
            width: { xs: "100%", md: 650, lg: 335 },
            borderRadius: "5px",
            borderTopLeftRadius: "0px",
            border: "1px solid",
            borderColor: "#DFDFDF",
            padding: "1rem",
            alignItems: "center",
            mt: 2,
          }}>
          <Typography sx={{ fontSize: "25px", fontWeight: 200 }}>
            Share Property
          </Typography>
          <Stack
            direction={{ xs: "row", sm: "column" }}
            sx={{ alignItems: "center", gap: 2, mt: 1 }}>
            <Stack direction="row" gap={1}>
              <Image
                src={facebook}
                alt="profile image"
                width={50}
                height={50}
              />
              <Image src={email} alt="profile image" width={50} height={50} />
              <Image src={gmail} alt="profile image" width={50} height={50} />
              <Image src={twitter} alt="profile image" width={50} height={50} />
            </Stack>
            <Stack direction="row" gap={1}>
              <Image src={writing} alt="profile image" width={50} height={50} />
              <Image src={sum} alt="profile image" width={50} height={50} />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          textAlign: "center",
          width: 200,
          mt: 2,
          borderRadius: 2,
          mx: "auto",
        }}>
        <IconButton>
          <WarningOutlinedIcon />
        </IconButton>
        <Button
          sx={{ alignItems: "center", color: "#888888", textAlign: "center" }}>
          Report Listing
        </Button>
      </Stack>
      <Box width={250} sx={{ borderBottom: "1px solid #888888", mx: "auto" }} />
      <Stack
        sx={{
          alignItems: "center",
          textAlign: "center",
          bgcolor: "#AFAFAF",
          width: 180,
          mt: 2,
          borderRadius: 2,
          mx: "auto",
        }}
        direction={"row"}>
        <IconButton>
          <WarningOutlinedIcon sx={{ fontSize: "3rem", color: "white" }} />
        </IconButton>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "1rem",
            width: 180,
            borderRadius: "10px",
            fontWeight: 700,
          }}>
          The Property Ombudsman
        </Typography>
      </Stack>
    </Box>
  );
};

export default RightContent;
