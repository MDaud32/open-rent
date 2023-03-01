import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Head from "next/head";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
import TopBanner from "../components/TopBanner";

const DetailPage = () => {
  return (
    <Box>
      <Box sx={{ mx: "auto", maxWidth: { md: "md" }, p: 1 }}>
        <TopBanner />
        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          sx={{ gap: 2 }}>
          <LeftContent />
          <RightContent />
        </Stack>
      </Box>
      <Button
        sx={{
          bgcolor: "#468CC8",
          width: "100%",
          color: "white",
          fontSize: "1rem",
          mt: 1,
          display: { xs: "block", md: "none" },
        }}>
        Message Landlord or Request Viewing
      </Button>
    </Box>
  );
};

export default DetailPage;
