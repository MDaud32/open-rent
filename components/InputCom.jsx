import {
  Box,
  Stack,
  TextField,
  InputLabel,
  MenuItem,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";

const options = [{ value: "Minutes" }, { value: "km" }];

const InputCom = () => {
  return (
    <div>
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
        <InputLabel htmlFor="outlined-adornment-password">Search:</InputLabel>
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
    </div>
  );
};

export default InputCom;
