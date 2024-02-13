import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
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

  Radio,
  RadioGroup,
  
  TextField,
} from "@mui/material";
import dayjs from "dayjs";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useTranslation } from "react-i18next";

export default function Form_Search() {
  const [depart, setDepart] = React.useState();
  const [returnDate, setReturnDate] = React.useState();
  const [age, setAge] = React.useState("");
  const [show, setShow] = React.useState(false);
  const {t}  = useTranslation()

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
            {t("Choose The Flight")}
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
              label={t('oneWay')}
            />
            <FormControlLabel
              value="Roundtrip/Return"
              control={<Radio />}
              label={t('twoWay')}
            />
          </RadioGroup>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <TextField
              id="input-with-icon-textfield"
              label={t('Departure')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightTakeoffIcon sx={{ color: "#1976d2" }} />
                  </InputAdornment>
                ),
              }}
              placeholder={t('From City')}
              variant="filled"
            />
            <TextField
              id="input-with-icon-textfield"
              label={t('Arrival')}
              sx={{paddingRight:'8px'}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightLandIcon sx={{ color: "#1976d2" }} />
                  </InputAdornment>
                ),
              }}
              placeholder={t('To City')}
              variant="filled"
            />
            <DatePicker
              label={t('Depart Date')}
              defaultValue={dayjs("2024-02-7")}
              slotProps={{ textField: { variant: "filled" } }}
              onChange={(newVal) => setDepart(newVal.$d)}
            />
            <DatePicker
              disabled={show ? false : true}
              label= {t("Retrun Date")}
              defaultValue={dayjs("2024-02-9")}
              slotProps={{ textField: { variant: "filled" } }}
              onChange={(newVal) => setReturnDate(newVal.$d)}
            />
            <TextField
              label = {t('Travell')}
              type = 'number'
              variant="filled"
              defaultValue={1}
            />
            <Button
              type="submit"
              sx={{
                fontSize: "14px",
                background: "#fc5b62",
                color: "#fff",
                ["&:hover"]: { background: "#fc5b62" },
              }}
            >
              {t('search')}
            </Button>
          </DemoContainer>
        </LocalizationProvider>
      </Container>
    </Box>
  );
}
