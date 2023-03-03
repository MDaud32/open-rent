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
        sx={{
          bgcolor: "#F0F0F0",
          color: "#959595",
          ":hover": { bgcolor: "white" },
          border: "1px solid #F0F0F0",
        }}>
        <TuneIcon sx={{ fontSize: "15px", mt: "-3px", ml: 1 }} />
        Advanced Filter
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
            width: 630,
            height: 600,
            bgcolor: "background.paper",
            border: "2px solid #F8F9F9",
            boxShadow: 24,
            paddingX: 2,
            paddingTop: 2,
          }}>
          <Stack direction="row">
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Property Filter
              </Typography>

              {/* bedrooms 1-8 */}
              <Box sx={{ width: 270 }}>
                <Typography fontWeight={600}>Bedrooms 1-8+</Typography>
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
              <FormControl sx={{ m: 1, width: 270 }}>
                <Typography fontWeight={600}>Furnished Options</Typography>
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
              <FormControl sx={{ m: 1, width: 270 }}>
                <Typography fontWeight={600}>Property Type:</Typography>

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
            </Box>
            <Box>
              <Typography fontSize={20}>Move in Date Options:</Typography>
              {/* input 3rd */}
              <FormControl sx={{ m: 1, width: 270 }}>
                <Typography fontWeight={600}>Move In Before</Typography>
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
              <FormControl sx={{ m: 1, width: 270 }}>
                <Typography fontWeight={600}>Fixed Term:</Typography>

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
              <Divider width={290} />
              <Typography fontWeight={600}>View Options:</Typography>
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
              <FormControl sx={{ m: 1, width: 270 }}>
                <Typography fontWeight={600}>Sort By:</Typography>

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
            </Box>
          </Stack>
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
