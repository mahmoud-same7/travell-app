import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import { AccountCircle } from "@mui/icons-material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export default function Form_Search() {
  const [depart, setDepart] = React.useState();
  const [returnDate, setReturnDate] = React.useState();
  const [age, setAge] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const RadioBtn = (e)=> {
    if(e.target.value === 'oneWay') {
        setShow(false)
    }else if(e.target.value === 'Roundtrip/Return') {
        setShow(true)
    }
  }
  React.useEffect(()=> {

  },[])
  return (
    <Box className="form_search" sx={{ p: 4 }}>
      <Container>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Choose the flight
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={RadioBtn}
          >
            <FormControlLabel
              value="oneWay"
              control={<Radio />}
              label="one Way"
            />
            <FormControlLabel
              value="Roundtrip/Return"
              control={<Radio />}
              label="Roundtrip / Return"
            />
          </RadioGroup>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <TextField
              id="input-with-icon-textfield"
              label="Departure"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightTakeoffIcon sx={{ color: "#1976d2" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="From City"
              variant="filled"
            />
            <TextField
              id="input-with-icon-textfield"
              label="Arrival"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightLandIcon sx={{ color: "#1976d2" }} />
                  </InputAdornment>
                ),
              }}
              placeholder="To City"
              variant="filled"
            />
            <DatePicker
              label="Depart Date"
              defaultValue={dayjs("2024-02-7")}
              slotProps={{ textField: { variant: "filled" } }}
              onChange={(newVal) => setDepart(newVal.$d)}
            />
            <DatePicker
              disabled={show ? false : true}
              label="Return Date"
              defaultValue={dayjs("2024-02-9")}
              slotProps={{ textField: { variant: "filled" } }}
              onChange={(newVal) => setReturnDate(newVal.$d)}
            />
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                variant="filled"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              sx={{
                fontSize: "14px",
                background: "#fc5b62",
                color: "#fff",
                ["&:hover"]: { background: "#fc5b62" },
              }}
            >
              search
            </Button>
          </DemoContainer>
        </LocalizationProvider>
      </Container>
    </Box>
  );
}
