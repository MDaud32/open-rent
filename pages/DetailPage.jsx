import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Head from "next/head";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
import TopBanner from "../components/TopBanner";

const DetailPage = () => {
  return (
    <Box>
      <Container sx={{ mx: "auto", width: { lg: "70%" } }}>
        <TopBanner />
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          sx={{ gap: 2 }}>
          <LeftContent />
          <RightContent />
        </Stack>
      </Container>
      <Button
        sx={{
          bgcolor: "#468CC8",
          width: "100%",
          color: "white",
          fontSize: "1rem",
          mt: 1,
          display: { xs: "block", sm: "none" },
        }}>
        Message Landlord or Request Viewing
      </Button>
    </Box>
  );
};

export default DetailPage;
