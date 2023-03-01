import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TuneIcon from "@mui/icons-material/Tune";
import { Divider, Stack, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const names = ["Oliver Hansen"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedSubValue, setSelectedSubValue] = React.useState("");

  const handleValueChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubValueChange = (event) => {
    setSelectedSubValue(event.target.value);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ backgroundColor: "#f0f0f0", color: "gray" }}>
        <TuneIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Property Filter
          </Typography>
          <Stack direction="row" alignItems="center">
            Your search is displaying:
            <Typography color="#4699D5" fontSize={15} ml="3px" mt="2px">
              63 properties found
            </Typography>
          </Stack>
          <Divider />
          <Typography>Rent</Typography>
          {/* input */}
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Name</InputLabel>
            <TextField
              id="select"
              select
              label="Select"
              value={selectedValue}
              onChange={handleValueChange}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </TextField>
            {selectedValue && (
              <TextField
                id="sub-select"
                select
                label="Sub Select"
                value={selectedSubValue}
                onChange={handleSubValueChange}>
                {selectedValue === "option1" && (
                  <>
                    <MenuItem value="sub-option1">Sub Option 1</MenuItem>
                    <MenuItem value="sub-option2">Sub Option 2</MenuItem>
                  </>
                )}
                {selectedValue === "option2" && (
                  <>
                    <MenuItem value="sub-option3">Sub Option 3</MenuItem>
                    <MenuItem value="sub-option4">Sub Option 4</MenuItem>
                  </>
                )}
                {selectedValue === "option3" && (
                  <>
                    <MenuItem value="sub-option5">Sub Option 5</MenuItem>
                    <MenuItem value="sub-option6">Sub Option 6</MenuItem>
                  </>
                )}
              </TextField>
            )}
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}
