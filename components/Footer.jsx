import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#D9D9D9",
        py: 6,
        mt: 3,
        display: { xs: "none", lg: "block" },
      }}>
      <Container maxWidth="lg">
        <Typography sx={{ alignitems: "start" }} color="#808080">
          © 2012 - 2023 OpenRent Ltd.
        </Typography>
        <Stack direction="row" gap={2}>
          <Link href="#" underline="none">
            Back To Top
          </Link>
          <Link href="#" underline="none">
            Blog
          </Link>
          <Link href="#" underline="none">
            Help Centre
          </Link>
          <Link href="#" underline="none">
            Community
          </Link>
          <Link href="#" underline="none">
            Terms
          </Link>
          <Link href="#" underline="none">
            Privacy
          </Link>
          <Link href="#" underline="none">
            Affiliates
          </Link>
          <Link href="#" underline="none">
            Testimonials
          </Link>
          <Link href="#" underline="none">
            Press
          </Link>
          <Link href="#" underline="none">
            Jobs
          </Link>
        </Stack>
        <Typography
          variant="subtitle1"
          alignItems="start"
          color="text.secondary"
          component="p"
          sx={{ mt: 2 }}>
          Ask Question - Office 34, 67-68 Hatton Garden London, EC1N 8JY
        </Typography>
        <Stack direction="row" gap={2}>
          <Link href="#" underline="none">
            Landlords
          </Link>
          <Link href="#" underline="none">
            Tenants
          </Link>
          <Link href="#" underline="none">
            Search Houses for Rent
          </Link>
          <Link href="#" underline="none">
            Properties in London
          </Link>
          <Link href="#" underline="none">
            Properties in the UK
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
