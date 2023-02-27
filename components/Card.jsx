import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import room1 from "../public/room1.jpeg";

const Card = () => {
  return (
    <Stack>
      {data.map((card) => {
        return (
          <Stack key={card.id} direction={{ xs: "column", md: "row" }} mt={1}>
            <Box
              sx={
                {
                  // width: { xs: "100%", md: 200 },
                  // height: { xs: 400, md: 150 },
                }
              }>
              <Image
                src={room1}
                alt="card img"
                style={{
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
                className="img1"
              />
            </Box>
            <Box
              sx={{
                bgcolor: "white",
                width: { xs: "100%", md: 700 },
                padding: 1,
              }}>
              <Stack>
                <Stack direction="row" justifyContent="space-between">
                  {/* rent and location */}
                  <Stack
                    direction="row"
                    width={{ xs: "100%", md: "50%" }}
                    justifyContent="space-between">
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
                  <Box sx={{ display: { xs: "none", md: "block" } }}>
                    <Typography>{card.lastupdate}</Typography>
                  </Box>
                </Stack>
                <Typography
                  color="#6F8CD3"
                  fontSize="20px"
                  fontWeight={300}
                  mt="4px">
                  {card.title}
                </Typography>
                <Typography
                  fontSize="15px"
                  mt="0.5rem"
                  sx={{ display: { xs: "none", md: "block" } }}>
                  {card.description}
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontSize="15px" fontWeight={500} mt="8px">
                    {card.features}
                  </Typography>
                  <Button
                    alignItems="center"
                    textAlign="center"
                    width="40%"
                    mx="0.5rem"
                    borderRadius="5px"
                    py="1px"
                    mb={2}
                    sx={{
                      bgcolor: "#5CB85C",
                      ":hover": { bgcolor: "#5CA05C" },
                      color: "white",
                      display: { xs: "none", md: "block" },
                    }}>
                    View Details
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Card;

const data = [
  {
    id: 1,
    image: `${room1}`,
    rent: "£1,500",
    location: "0.37",
    lastupdate: "Last Updated around 4 days ago",
    title: "2 Bed Flat, Kings Hudson Quarter, YO1",
    description:
      "**PRIVATE LANDLORD- NO AGENTS*** * VIEWING IS HIGHLY RECOMMENDED TO APPRECIATE THE ACCOMMODATION ON OFFER * *Main Features",
    features: "2 Beds . 2 Baths . Furnishing at tenant choice",
  },
];
