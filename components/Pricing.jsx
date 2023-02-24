import { Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import StarRateOutlinedIcon from "@mui/icons-material/StarRateOutlined";

const Pricing = () => {
  return (
    <Stack sx={{ display: { xs: "none", lg: "block", mt: "2rem" } }}>
      {/* features */}
      <Typography
        sx={{
          bgcolor: "white",
          borderTop: 3,
          width: 130,
          padding: "5px",

          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderLeftColor: "#DFDFDF",
          borderRightColor: "#DFDFDF",
          borderTopColor: "#468CC8",
          mb: "-1px",
          zIndex: 2,
          position: "relative",
          fllexDirection: "row",
          fontSize: "18px",
        }}>
        <IconButton sx={{ ":hover": { bgcolor: "white" } }}>
          <StarRateOutlinedIcon />
        </IconButton>
        Favourite
      </Typography>

      {/* group */}
      <Stack
        direction="column"
        sx={{
          bgcolor: "white",
          width: { sm: 350 },
          borderRadius: "5px",
          borderTopLeftRadius: "0px",
          border: "1px solid",
          borderColor: "#DFDFDF",
          padding: "1rem",
          mr: 3,
          alignItems: "center",
        }}>
        <Typography sx={{ fontSize: "25px" }}>£1,100.00</Typography>
        <Typography sx={{ fontSize: "15px" }}>per month</Typography>
        <Typography
          sx={{ fontSize: "20px", marginTop: "1rem", fontWeight: 200 }}>
          £253.85
        </Typography>
        <Typography sx={{ fontSize: "15px" }}>per week</Typography>
        <Typography sx={{ fontSize: "15px", mt: "1rem" }}>
          ✔️ No admin fees
        </Typography>
        <Typography sx={{ fontSize: "15px" }}>✔️ No hidden charges</Typography>
        <Divider sx={{ width: "100%", mt: 3 }} />
        <Button
          disabled
          sx={{
            bgcolor: "#D7EDD7",
            color: "white",
            width: "100%",
            mt: "2rem",
          }}>
          Let Agreed
        </Button>
        <Typography sx={{ fontWeight: 700, fontSize: "17px", mt: "1rem" }}>
          Property Reference:
        </Typography>
        <Typography sx={{ fontWeight: 300, fontSize: "15px" }}>
          1616107
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Pricing;
