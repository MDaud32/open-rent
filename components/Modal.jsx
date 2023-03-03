import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TuneIcon from "@mui/icons-material/Tune";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  FormLabel,
  ListItemText,
  Slider,
  Stack,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {};

function valuetext(value) {
  return `${value}`;
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState([1, 8]);

  const handleChangeSilder = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
        sx={{ backgroundColor: "#f0f0f0", color: "gray", height: "100%" }}>
        <TuneIcon />
      </Button>
      <Modal
        sx={{
          overflowY: "scroll",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            borderRadius: "5px",
            position: "absolute",
            overflow: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 600,
            bgcolor: "background.paper",
            border: "2px solid #F8F9F9",
            boxShadow: 24,
            paddingX: 4,
          }}>
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
          {/* input */}
          <FormControl sx={{ m: 1, width: 300 }}>
            <Typography>Rent</Typography>
            <TextField
              id="select"
              label={"select"}
              select
              placeholder="select"
              size="small"
              value={selectedValue}
              onChange={handleValueChange}>
              <MenuItem value="option1">Option 1</MenuItem>
              {/* <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem> */}
              <FormControl sx={{ m: 1, width: "40%" }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  size="small"
                  label="Age"
                  onChange={handleChange}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: "40%" }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  size="small"
                  label="Age"
                  onChange={handleChange}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Divider />
              <Box sx={{ width: "90%", mx: "auto" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChangeSilder}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </TextField>
          </FormControl>
          {/* input 2nd */}
          <FormControl sx={{ m: 1, width: 300 }}>
            <Typography>Bedrooms</Typography>

            <TextField
              id="select"
              label={"select"}
              select
              placeholder="select"
              size="small"
              value={selectedValue}
              onChange={handleValueChange}>
              <MenuItem value="option1">Option 1</MenuItem>

              <Typography>Shared hourse, Studio or 1-5 bed</Typography>
              <FormControl sx={{ m: 1, width: "40%" }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  size="small"
                  label="Age"
                  onChange={handleChange}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, width: "40%" }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  size="small"
                  label="Age"
                  onChange={handleChange}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <Divider />
              <Box sx={{ width: "90%", mx: "auto" }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChangeSilder}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </TextField>
          </FormControl>
          {/* bedrooms 1-8 */}
          <Box sx={{ width: 300 }}>
            <Typography>Bedrooms 1-8+</Typography>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChangeSilder}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              step={0.00000002}
              marks
              min={-0.00000005}
              max={0.0000001}
            />
          </Box>
          {/* input 3rd */}
          <FormControl sx={{ m: 1, width: 300 }}>
            <Typography>Furnished Options</Typography>
            <TextField
              id="select"
              label={"select"}
              select
              placeholder="select"
              size="small"
              value={selectedValue}
              onChange={handleValueChange}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </TextField>
          </FormControl>
          {/* input 4th */}
          <FormControl sx={{ m: 1, width: 300 }}>
            <Typography>Property Type:</Typography>

            <TextField
              id="select"
              label={"select"}
              select
              placeholder="select"
              size="small"
              value={selectedValue}
              onChange={handleValueChange}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </TextField>
          </FormControl>
          {/* checkbox */}
          <FormControl component="fieldset">
            <FormGroup aria-label="position" column alignItems="center">
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Accept Students"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Ignore Students only properties"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Accept DSS Income"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Accept Pets"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Bills Included"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Graden Access"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Parking Access"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Has Fireplace"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Video Tour"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
          <Typography>Move in Date Options:</Typography>
          {/* input 3rd */}
          <FormControl sx={{ m: 1, width: 300 }}>
            <Typography>Move In Before</Typography>
            <TextField
              id="select"
              label={"select"}
              select
              placeholder="select"
              size="small"
              value={selectedValue}
              onChange={handleValueChange}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </TextField>
          </FormControl>
          {/* input 4th */}
          <FormControl sx={{ m: 1, width: 300 }}>
            <Typography>Fixed Term:</Typography>

            <TextField
              id="select"
              label={"select"}
              select
              placeholder="select"
              size="small"
              value={selectedValue}
              onChange={handleValueChange}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </TextField>
          </FormControl>
          <Divider />
          <Typography>View Options:</Typography>
          {/* checkbox */}
          <FormControl component="fieldset">
            <FormGroup aria-label="position" row alignItems="center">
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Only Available Properties"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="Show Rent Per Week"
                labelPlacement="end"
              />
            </FormGroup>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }}>
            <Typography>Sort By:</Typography>

            <TextField
              id="select"
              label={"select"}
              select
              placeholder="select"
              size="small"
              value={selectedValue}
              onChange={handleValueChange}>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
              <MenuItem value="option3">Option 3</MenuItem>
            </TextField>
          </FormControl>

          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              position: "sticky",
              top: "0",
              bottom: "0",
              right: "0",
              width: "100% ",
              backgroundColor: "white",
              paddingBottom: "10px",
              paddingTop: "10px",
              zIndex: "10",
              display: "flex",
              justifyItems: "center",
            }}>
            <Button
              sx={{
                bgcolor: "#5CB85C",
                color: "white",
                position: "sticky",
                bottom: "16px",
                right: "16px",
                ":hover": { bgcolor: "#5cb85d" },
              }}>
              Update
            </Button>
            <Button
              sx={{
                bgcolor: "#EC971F",
                color: "white",
                mx: 1,
                ":hover": { bgcolor: "#ec972f" },
              }}>
              Reset
            </Button>
            <Button
              sx={{
                bgcolor: "#D9534F",
                color: "white",
                ":hover": { bgcolor: "#d9535f" },
              }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
