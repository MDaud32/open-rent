import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import LeftContent from "../components/LeftContent";
import Navbar from "../components/Navbar";
import RightContent from "../components/RightContent";
import TopBanner from "../components/TopBanner";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#F5F5F5" }}>
      <Head>
        <title>Open Rent</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
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
      <Footer />
    </Box>
  );
}
