import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";

const Features = () => {
  return (
    <Box sx={{ mt: "2rem" }}>
      {/* features */}
      <Typography
        sx={{
          bgcolor: "white",
          borderTop: 3,
          width: 100,
          padding: 1,

          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderLeftColor: "#DFDFDF",
          borderRightColor: "#DFDFDF",
          borderTopColor: "#468CC8",
          mb: "-1px",
          zIndex: 2,
          position: "relative",
        }}>
        Features
      </Typography>

      {/* group */}
      <Stack
        direction="column"
        sx={{
          bgcolor: "white",
          width: { xs: "100%", md: 700 },
          borderRadius: "5px",
          borderTopLeftRadius: "0px",
          border: "1px solid",
          borderColor: "#DFDFDF",
          padding: "1rem",
        }}>
        {/* first row */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {/* first box */}
          <Stack
            width={{ xs: "100%", sm: "50%" }}
            sx={{ padding: 1, mt: { xs: "0px", sm: "-3rem" } }}>
            <Box>
              <Typography
                sx={{
                  alignItems: "center",
                  fontSize: "25px",
                  color: "#9A9A9A",
                }}>
                <IconButton sx={{}}>
                  <LocalAtmIcon
                    sx={{ fontSize: "2.5rem", mt: "-6px", color: "#9A9A9A" }}
                  />
                </IconButton>
                Price & Bills
              </Typography>
            </Box>

            {/* all line container */}
            <Box sx={{}}>
              {/* first line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  bgcolor: "#FAFAFA",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Deposit
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 300, color: "#808080", fontSize: "20px" }}>
                  £1,100.00
                </Typography>
              </Stack>
              {/* 2nd row */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Rent PCM
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 300, color: "#808080", fontSize: "20px" }}>
                  £1,100.00
                </Typography>
              </Stack>
              {/* third row */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  bgcolor: "#FAFAFA",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Bills Included
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 300, color: "#808080", fontSize: "20px" }}>
                  ✔️
                </Typography>
              </Stack>
              {/* fourth row */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Broadband
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 400, color: "#6Faffe", fontSize: "20px" }}>
                  View Offers
                </Typography>
              </Stack>
            </Box>
          </Stack>

          {/* second box */}
          <Stack
            width={{ xs: "100%", sm: "50%" }}
            sx={{ alignContent: "center", padding: 1 }}>
            <Box>
              <Typography
                sx={{
                  alignItems: "center",
                  fontSize: "25px",
                  color: "#9A9A9A",
                }}>
                <IconButton>
                  <PersonIcon
                    sx={{ fontSize: "2.5rem", mt: "-6px", color: "#9A9A9A" }}
                  />
                </IconButton>
                Tenant Preference
              </Typography>
            </Box>
            <Box>
              {/* fifth line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  bgcolor: "#FAFAFA",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Student Friendly
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 300, color: "#808080", fontSize: "20px" }}>
                  ✔️
                </Typography>
              </Stack>
              {/* six line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Families Allowed
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 300, color: "#808080", fontSize: "20px" }}>
                  ✔️
                </Typography>
              </Stack>
              {/* seven line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  bgcolor: "#FAFAFA",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Pets Allowed
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 300, color: "#808080", fontSize: "20px" }}>
                  ❌
                </Typography>
              </Stack>
              {/* eight line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Smokers Allowed
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 400,
                    color: "#6Faffe",
                    fontSize: "20px",
                  }}>
                  ❌
                </Typography>
              </Stack>
              {/* eight line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  DSS Income Accepted
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 400,
                    color: "#6Faffe",
                    fontSize: "20px",
                  }}>
                  ✔️
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>

        {/* second row */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ mt: { md: "3rem" } }}>
          {/* first box */}
          <Stack
            width={{ xs: "100%", sm: "50%" }}
            sx={{ padding: 1, mt: { xs: "0px", sm: "rem" } }}>
            <Box>
              <Typography
                sx={{
                  alignItems: "center",
                  fontSize: "25px",
                  color: "#9A9A9A",
                }}>
                <IconButton sx={{}}>
                  <CalendarMonthIcon
                    sx={{ fontSize: "2.5rem", color: "#9A9A9A" }}
                  />
                </IconButton>
                Availability
              </Typography>
            </Box>

            {/* all line container */}
            <Box sx={{}}>
              {/* first line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  bgcolor: "#FAFAFA",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Available From
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 300, color: "#808080", fontSize: "20px" }}>
                  Today
                </Typography>
              </Stack>
              {/* 2nd line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Minimum Tenancy
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 300, color: "#808080", fontSize: "20px" }}>
                  6 Months
                </Typography>
              </Stack>
            </Box>
          </Stack>

          {/* second box */}
          <Stack
            width={{ xs: "100%", sm: "50%" }}
            sx={{ alignContent: "center", padding: 1 }}>
            <Box>
              <Typography
                sx={{
                  alignItems: "center",
                  fontSize: "25px",
                  color: "#9A9A9A",
                }}>
                <IconButton>
                  <FeaturedPlayListIcon
                    sx={{ fontSize: "2.5rem", mt: "-6px", color: "#9A9A9A" }}
                  />
                </IconButton>
                Features
              </Typography>
            </Box>
            <Box>
              {/* fifth line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  bgcolor: "#FAFAFA",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Garden
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 300, color: "#808080", fontSize: "20px" }}>
                  ❌
                </Typography>
              </Stack>
              {/* six line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Parking
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 300, color: "#808080", fontSize: "20px" }}>
                  ❌
                </Typography>
              </Stack>
              {/* seven line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  bgcolor: "#FAFAFA",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Fireplace
                </Typography>
                <Typography
                  component="p"
                  sx={{ fontWeight: 300, color: "#808080", fontSize: "20px" }}>
                  ❌
                </Typography>
              </Stack>
              {/* eight line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  Furnishing
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 400,
                    color: "#6Faffe",
                    fontSize: "20px",
                  }}>
                  Unfurnished
                </Typography>
              </Stack>
              {/* eight line */}
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  padding: 1,
                }}>
                <Typography
                  component="p"
                  sx={{ fontWeight: 700, color: "#808080", fontSize: "20px" }}>
                  EPC Rating
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontWeight: 400,
                    color: "#6Faffe",
                    fontSize: "20px",
                  }}>
                  Currently Being Obtained
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Features;
