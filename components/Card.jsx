import { Box, IconButton, Stack, Typography } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Carousel } from "react-responsive-carousel";

import { Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const CardPage = () => {
  const theme = useTheme();
  console.log(theme.breakpoints.up("ipadLandscape"));

  const isIpadLandscape = useMediaQuery(theme.breakpoints.up("ipadLandscape"));
  console.log(isIpadLandscape);

  return (
    <Box sx={{ bgcolor: { md: "red", ipadlandscape: "green" } }}>
      {data.map((card) => (
        <Box
          key={card.id}
          sx={{
            maxWidth: { xs: "100%", sm: "100%", md: "100%" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            mb: 2,
            height: { md: 200 },
            backgroundColor: "#ffffff",
            boxShadow: "1px 1px 1px 1px #eaeaea",
          }}>
          <Carousel showIndicators={false} showThumbs={false}>
            {items.map((itemImg) => (
              // eslint-disable-next-line react/jsx-key
              <Box
                component="img"
                sx={{
                  height: 200,
                  display: "block",
                  maxWidth: { xs: "100%", sm: "400" },
                  objectFit: "cover",
                  overflow: "hidden",
                  width: "100%",
                }}
                src={itemImg.image}
                key={itemImg.id}
                alt={"haha"}
              />
            ))}
          </Carousel>
          <Link href="/DetailPage" underline="none" key={card.id}>
            <CardActionArea
              sx={{
                flexDirection: { xs: "column", sm: "row" },
              }}>
              <CardContent>
                <Box width={{ xs: "100%", sm: 500, md: "100%" }}>
                  <Stack direction="row" justifyContent="space-between">
                    {/* rent and location */}
                    <Stack
                      direction="row"
                      width={{ xs: "100%", md: "50%" }}
                      justifyContent="space-between"
                      alignItems="center">
                      <Typography
                        sx={{
                          color: "#6F8CD3",
                          fontSize: "20px",
                        }}>
                        {card.rent}{" "}
                        <span style={{ color: "black", fontSize: "12px" }}>
                          Per Month
                        </span>
                      </Typography>
                      <Typography sx={{ color: "#6F8CD3", fontSize: "20px" }}>
                        <LocationOnIcon
                          sx={{
                            fontSize: "20px",
                            mt: "-2px",
                            color: "#6F8CD3",
                          }}
                        />
                        {card.location}
                        <span style={{ color: "black", fontSize: "12px" }}>
                          km
                        </span>
                      </Typography>
                    </Stack>
                    {/* last update time */}
                    <Box
                      sx={{
                        display: { xs: "none", md: "block" },
                        alignItems: "center",
                      }}>
                      <Typography fontSize="12px" mt="8px" alignItems="center">
                        <AccessTimeIcon
                          sx={{ fontSize: "15px", mb: "-3px", mr: "2px" }}
                        />
                        {card.lastupdate}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography
                    color="#6F8CD3"
                    fontSize={{ xs: "15px", md: "20px" }}
                    fontWeight={300}
                    mt="4px">
                    {card.title}
                  </Typography>
                  <Typography
                    fontSize="14px"
                    mt="0.5rem"
                    color={"#808080"}
                    sx={{ display: { xs: "none", sm: "block" } }}>
                    {card.description}
                  </Typography>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography
                      fontSize="15px"
                      fontWeight={400}
                      mt="8px"
                      color={"#808080"}>
                      {card.features}
                    </Typography>

                    <Typography
                      width="20%"
                      textAlign="center"
                      underline="none"
                      borderRadius="5px"
                      py="12px"
                      sx={{
                        bgcolor: "#5CB85C",
                        ":hover": { bgcolor: "#5CA05C" },
                        color: "white",
                        display: { xs: "none", md: "block" },
                      }}>
                      View Details
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </CardActionArea>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default CardPage;

const items = [
  {
    id: 1,
    image: "/bg.jpeg",
  },
  {
    id: 2,
    image: "/room1.jpeg",
  },
];

const data = [
  {
    id: 1,
    rent: "£1,500",
    location: "0.37",
    lastupdate: "Last Updated around 4 days ago",
    title: "2 Bed Flat, Kings Hudson Quarter, YO1",
    description:
      "PRIVATE LANDLORD- NO AGENTS* * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
    features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  },
  {
    id: 2,
    image: "/bg.jpeg",
    rent: "£1,500",
    location: "0.37",
    lastupdate: "Last Updated around 4 days ago",
    title: "2 Bed Flat, Kings Hudson Quarter, YO1",
    description:
      "PRIVATE LANDLORD- NO AGENTS* * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
    features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  },
  {
    id: 3,
    image: "/room1.jpeg",
    rent: "£1,500",
    location: "0.37",
    lastupdate: "Last Updated around 4 days ago",
    title: "2 Bed Flat, Kings Hudson Quarter, YO1",
    description:
      "PRIVATE LANDLORD- NO AGENTS* * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
    features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  },
  {
    id: 4,
    image: "/bg.jpeg",
    rent: "£1,500",
    location: "0.37",
    lastupdate: "Last Updated around 4 days ago",
    title: "2 Bed Flat, Kings Hudson Quarter, YO1",
    description:
      "PRIVATE LANDLORD- NO AGENTS* * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
    features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  },
  {
    id: 5,
    image: "/room1.jpeg",
    rent: "£1,500",
    location: "0.37",
    lastupdate: "Last Updated around 4 days ago",
    title: "2 Bed Flat, Kings Hudson Quarter, YO1",
    description:
      "PRIVATE LANDLORD- NO AGENTS* * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
    features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  },
  {
    id: 6,
    image: "/bg.jpeg",
    rent: "£1,500",
    location: "0.37",
    lastupdate: "Last Updated around 4 days ago",
    title: "2 Bed Flat, Kings Hudson Quarter, YO1",
    description:
      "PRIVATE LANDLORD- NO AGENTS* * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
    features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  },
];
