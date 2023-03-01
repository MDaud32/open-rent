import {
  Box,
  Container,
  Stack,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  Button,
  Divider,
  IconButton,
} from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import dynamic from "next/dynamic";
import SearchIcon from "@mui/icons-material/Search";
import PushPinIcon from "@mui/icons-material/PushPin";
import Card from "../components/Card";
import CardPage from "../components/Card";
import MainPageBottomNav from "../components/MainPageBottomNav";
import TuneIcon from "@mui/icons-material/Tune";

const MainMap = dynamic(() => import("../components/MainMap"), { ssr: false });

const options = [{ value: "Minutes" }, { value: "km" }];

const MainPage = () => {
  return (
    <Box width="100%">
      <Box sx={{ mx: "auto", maxWidth: { md: "md" }, p: 1 }}>
        <Typography
          component="h1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "15px", sm: "25px" },
            color: "#40586D",
            mt: 2,
            alignItems: "center",
          }}>
          <IconButton>
            <PushPinIcon
              sx={{
                fontSize: { xs: "15px", sm: "25px" },
                mt: "-1px",
                mr: "-4px",
              }}
            />
          </IconButton>
          Properties To Rent In York, North Yorkshire
        </Typography>
        <Stack direction="row">
          <Box
            sx={{
              bgcolor: "white",
              width: 250,
              border: "1px solid #DFDFDF",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              mr: { xs: 0, lg: "-4px" },
              padding: "6px",
              display: { xs: "none", md: "block" },
            }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Search:
            </InputLabel>
            {/* input */}
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-basic"
                label="York, North Yorkshire"
                variant="outlined"
                size="small"
              />
            </Box>
            <Stack direction="row" alignItems="center">
              {/* small input */}
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "11ch" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-basic"
                  label="eg 2..."
                  variant="outlined"
                  size="small"
                  width="50%"
                />
              </Box>
              {/* select input */}
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "11ch" },
                }}
                noValidate
                autoComplete="off">
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  width="12ch"
                  size="small"
                  defaultValue="km">
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              textAlign="center"
              bgcolor="#5CB85C"
              width="40%"
              mx="0.5rem"
              borderRadius="5px"
              py="1px"
              mb={2}
              sx={{ ":hover": { bgcolor: "#5CA05C" } }}>
              {/* <SearchIcon
                sx={{ color: "#fff", padding: 0, ml: 1, fontSize: "20px" }}
              /> */}
              <Button sx={{ color: "#fff", textAlign: "center", mx: "auto" }}>
                Search
              </Button>
            </Stack>
            <Divider />
            <InputLabel htmlFor="outlined-adornment-password">
              Filter Search:
            </InputLabel>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-basic"
                label="York, North Yorkshire"
                variant="outlined"
                size="small"
              />
            </Box>
            {/* select input */}
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                width="12ch"
                size="small"
                defaultValue="km">
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Button
              sx={{
                bgcolor: "#F0F0F0",
                color: "#959595",
                ":hover": { bgcolor: "white" },
                border: "1px solid #F0F0F0",
              }}>
              <TuneIcon sx={{ fontSize: "15px", mt: "-3px", ml: 1 }} />
              Advanced Filter
            </Button>
          </Box>
          <MainMap />
        </Stack>
        {/* text */}
        <Stack maxWidth="md">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
            maxWidth={{ lg: "md", md: "md" }}>
            <Stack direction="row" alignItems="center">
              Your search is displaying:
              <Typography color="#4699D5" fontSize={15} ml="3px" mt="2px">
                63 properties found
              </Typography>
            </Stack>
            <Button
              alignItems="center"
              textAlign="center"
              borderRadius="5px"
              py="1px"
              mb={2}
              sx={{
                bgcolor: "#5CB85C",
                ":hover": { bgcolor: "#5CA05C" },
                color: "white",
                display: { xs: "none", md: "block" },
              }}>
              Create Email Alert
            </Button>
          </Stack>
          <Typography
            color="gray"
            fontSize={{ xs: "10px", md: "15px" }}
            mb="4px">
            There are 2 new properties since your last visit 4 days ago.
          </Typography>
        </Stack>
        <CardPage />
      </Box>
      <MainPageBottomNav />
    </Box>
  );
};

export default MainPage;
