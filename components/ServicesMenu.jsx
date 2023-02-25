import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Divider, Stack, Typography } from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const options = [
  "Packages",
  "Property Advertising",
  "Full Tenancy Creation",
  "See All Pricing",
  "Services",
  "Tenant Referencing",
  "Gas Safety",
  "EPC",
  "Electrical Safety",
  "Rent Collection",
  "Inventory",
  "Photos & Floor Plans",
  "Rent Insurance",
  "Building Insurance",
  "Accompanied Viewings",
  "Legal Support",
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Stack
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ flexDirection: "row", mt: "8px" }}>
        Pricing & Services
        <Box sx={{ mt: "3px" }}>
          <ArrowDropDownOutlinedIcon />
        </Box>
      </Stack>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 15,
            width: "25ch",
          },
        }}>
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
