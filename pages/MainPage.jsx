import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import React, { useRef } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import dynamic from "next/dynamic";
import SearchIcon from "@mui/icons-material/Search";
import PushPinIcon from "@mui/icons-material/PushPin";
import Card from "../components/Card";
import CardPage from "../components/Card";
import MainPageBottomNav from "../components/MainPageBottomNav";
import TuneIcon from "@mui/icons-material/Tune";
import InputCom from "../components/InputCom";

const MainMap = dynamic(() => import("../components/MainMap"), { ssr: false });

const MainPage = () => {
  return (
    <Box width="100%">
      <Box sx={{ mx: "auto", maxWidth: { md: "md" }, p: 1 }}>
        <Typography
          component="h1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "15px", sm: "25px" },
            color: "#40586D",
            mt: 2,
            alignItems: "center",
          }}>
          <IconButton>
            <PushPinIcon
              sx={{
                fontSize: { xs: "15px", sm: "25px" },
                mt: "-1px",
                mr: "-4px",
              }}
            />
          </IconButton>
          Properties To Rent In York, North Yorkshire
        </Typography>
        <Stack direction="row">
          <InputCom />
          <MainMap />
        </Stack>
        {/* text */}
        <Stack maxWidth="md">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
            maxWidth={{ lg: "md", md: "md" }}>
            <Stack direction="row" alignItems="center">
              Your search is displaying:
              <Typography color="#4699D5" fontSize={15} ml="3px" mt="2px">
                63 properties found
              </Typography>
            </Stack>
            <Button
              alignItems="center"
              textAlign="center"
              borderRadius="5px"
              py="1px"
              mb={2}
              sx={{
                bgcolor: "#5CB85C",
                ":hover": { bgcolor: "#5CA05C" },
                color: "white",
                display: { xs: "none", md: "block" },
              }}>
              Create Email Alert
            </Button>
          </Stack>
          <Typography
            color="gray"
            fontSize={{ xs: "10px", md: "15px" }}
            mb="4px">
            There are 2 new properties since your last visit 4 days ago.
          </Typography>
        </Stack>
        <CardPage />
      </Box>
      <MainPageBottomNav />
    </Box>
  );
};

export default MainPage;
