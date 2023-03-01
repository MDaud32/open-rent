import { Box, IconButton, Stack, Typography } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Carousel from "react-material-ui-carousel";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Paper } from "@mui/material";

const CardPage = () => {
  return (
    <Box>
      {data.map((card) => (
        <Link href="/DetailPage" underline="none" key={card.id}>
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: "md" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              mb: 2,
              backgroundColor: "#ffffff",
              boxShadow: "1px 1px 1px 1px #eaeaea",
            }}>
            <CardMedia
              component="img"
              height="200"
              sx={{ width: { xs: "100%", sm: "30%" }, mr: "auto" }}
              image={card.image}
              alt="green iguana"
            />
            {items.map((itemImg) => (
              <Carousel
                key={itemImg.id}
                NextIcon={<NavigateNextIcon />}
                PrevIcon={<NavigateBeforeIcon />}
                autoPlay={false}
                animation="fade"
                indicators={false}
                navButtonsAlwaysVisible={true}>
                <Paper>
                  <CardMedia
                    image={itemImg.image}
                    component="img"
                    height={200}
                    sx={{ width: { xs: "100%", sm: "30%" }, mr: "auto" }}
                    alt="green iguana"
                  />
                </Paper>
              </Carousel>
            ))}
            <CardActionArea
              sx={{
                flexDirection: { xs: "column", sm: "row" },
              }}>
              <CardContent>
                <Box>
                  <Stack direction="row" justifyContent="space-between">
                    {/* rent and location */}
                    <Stack
                      direction="row"
                      width={{ xs: "100%", sm: "50%" }}
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
                        display: { xs: "none", sm: "block" },
                        alignItems: "center",
                      }}>
                      <Typography fontSize="12px" mt="8px" alignItems="center">
                        <AccessTimeIcon sx={{ fontSize: "15px" }} />
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
                        display: { xs: "none", sm: "block" },
                      }}>
                      View Details
                    </Typography>
                  </Stack>
                </Box>
              </CardContent>
            </CardActionArea>
          </Box>
        </Link>
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
  // {
  //   id: 2,
  //   image: "/bg.jpeg",
  //   rent: "£1,500",
  //   location: "0.37",
  //   lastupdate: "Last Updated around 4 days ago",
  //   title: "2 Bed Flat, Kings Hudson Quarter, YO1",
  //   description:
  //     "PRIVATE LANDLORD- NO AGENTS* * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
  //   features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  // },
  // {
  //   id: 3,
  //   image: "/room1.jpeg",
  //   rent: "£1,500",
  //   location: "0.37",
  //   lastupdate: "Last Updated around 4 days ago",
  //   title: "2 Bed Flat, Kings Hudson Quarter, YO1",
  //   description:
  //     "PRIVATE LANDLORD- NO AGENTS* * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
  //   features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  // },
  // {
  //   id: 4,
  //   image: "/bg.jpeg",
  //   rent: "£1,500",
  //   location: "0.37",
  //   lastupdate: "Last Updated around 4 days ago",
  //   title: "2 Bed Flat, Kings Hudson Quarter, YO1",
  //   description:
  //     "PRIVATE LANDLORD- NO AGENTS* * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
  //   features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  // },
  // {
  //   id: 5,
  //   image: "/room1.jpeg",
  //   rent: "£1,500",
  //   location: "0.37",
  //   lastupdate: "Last Updated around 4 days ago",
  //   title: "2 Bed Flat, Kings Hudson Quarter, YO1",
  //   description:
  //     "PRIVATE LANDLORD- NO AGENTS* * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
  //   features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  // },
  // {
  //   id: 6,
  //   image: "/bg.jpeg",
  //   rent: "£1,500",
  //   location: "0.37",
  //   lastupdate: "Last Updated around 4 days ago",
  //   title: "2 Bed Flat, Kings Hudson Quarter, YO1",
  //   description:
  //     "PRIVATE LANDLORD- NO AGENTS* * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
  //   features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  // },
];
