import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import PushPinIcon from "@mui/icons-material/PushPin";
import CardPage from "../components/Card";
import MainPageBottomNav from "../components/MainPageBottomNav";
import InputCom from "../components/InputCom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MainMap = dynamic(() => import("../components/MainMap"), { ssr: false });

const MainPage = () => {
  const [showMap, setShowMap] = useState(false);
  const [showCard, setCard] = useState(true);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setShowMap(true);
    setCard(true);
    const handleResize = () => {
      const isSm = window.innerWidth >= theme.breakpoints.values.sm;
      if (isSm) {
        setShowMap(true);
        setCard(true);
      } else if (isMd) {
        setShowMap(false);
        setCard(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme.breakpoints.values.sm, isMd]);

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
          {showMap && <MainMap />}
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
        {showCard && <CardPage />}
      </Box>
      <MainPageBottomNav
        setShowCard={setCard}
        showCard={showCard}
        setShowMap={setShowMap}
        showMap={showMap}
      />
    </Box>
  );
};

export default MainPage;
