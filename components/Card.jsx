import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";

const CardPage = () => {
  return (
    <Box>
      {data.map((card) => (
        <Link href="/DetailPage" underline="none" key={card.id}>
          <Card
            sx={{
              maxWidth: { xs: "100%", sm: "94%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              mb: 2,
            }}>
            <CardMedia
              component="img"
              height="200"
              sx={{ width: { xs: "100%", sm: "30%" }, mr: "auto" }}
              image={card.image}
              alt="green iguana"
            />
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
                        {card.location}{" "}
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
                      <Typography fontSize="12px" mt="8px">
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
                    fontSize="15px"
                    mt="0.5rem"
                    sx={{ display: { xs: "none", sm: "block" } }}>
                    {card.description}
                  </Typography>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography fontSize="15px" fontWeight={500} mt="8px">
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
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default CardPage;

const data = [
  {
    id: 1,
    image: "/room1.jpeg",
    rent: "£1,500",
    location: "0.37",
    lastupdate: "Last Updated around 4 days ago",
    title: "2 Bed Flat, Kings Hudson Quarter, YO1",
    description:
      "*PRIVATE LANDLORD- NO AGENTS** * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
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
      "*PRIVATE LANDLORD- NO AGENTS** * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
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
      "*PRIVATE LANDLORD- NO AGENTS** * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
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
      "*PRIVATE LANDLORD- NO AGENTS** * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
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
      "*PRIVATE LANDLORD- NO AGENTS** * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
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
      "*PRIVATE LANDLORD- NO AGENTS** * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
    features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  },
];
