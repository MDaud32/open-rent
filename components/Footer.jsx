import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Button, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import InfoIcon from "@mui/icons-material/Info";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#D9D9D9",
        py: 4,
        mt: 3,
        display: { xs: "none", lg: "block" },
      }}>
      <Container maxWidth="md">
        <Typography
          sx={{ alignitems: "start", fontSize: "12px" }}
          color="#808080">
          © 2012 - 2023 OpenRent Ltd.
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" gap={2} fontSize="12px">
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
          <Stack direction="row" color="#468CC8" gap={1}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </Stack>
        </Stack>
        <Typography
          variant="subtitle1"
          alignItems="start"
          color="text.secondary"
          component="p"
          sx={{ mt: 4, fontSize: "12px" }}>
          Ask Question - Office 34, 67-68 Hatton Garden London, EC1N 8JY
        </Typography>
        <Stack direction="row" gap={2} fontSize="12px">
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
      <Button
        maxWidth="md"
        sx={{
          bgcolor: "#468CC8",
          padding: "13px 10px",
          fontSize: "20px",
          width: 220,
          ml: "auto",
          ":hover": {
            backgroundColor: "rgb(48, 109, 161)",
          },
          color: "white",
          textAlign: "center",
          display: "flex",
          gap: "5px",
          mr: "30px",
          borderStartStartRadius: "5px",
          borderTopRightRadius: "5px",
          mb: "-2rem",
        }}>
        <InfoIcon />
        <Typography fontSize={"18px"} fontWeight={"300"}>
          {" "}
          Need Help?
        </Typography>
      </Button>
    </Box>
  );
}

export default Footer;
