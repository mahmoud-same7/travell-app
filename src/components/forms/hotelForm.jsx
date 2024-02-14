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
import { LocalActivity } from "@mui/icons-material";

const Holiday_Form_Search = ()=> {
  const [age, setAge] = React.useState("");
  const [show, setShow] = React.useState(false);
  const {t}  = useTranslation()

  return (
    <Box className="form_search" sx={{ p: 4 }}>
      <Container>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <TextField
            sx={{paddingLeft:'8px'}}
              id="input-with-icon-textfield"
              label={t('hotelForm.Going to')}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalActivity sx={{ color: "#1976d2" }} />
                  </InputAdornment>
                ),
              }}
              placeholder={t('hotelForm.Region,City,Area')}
              variant="filled"
            />
            <DatePicker
              label={t('hotelForm.Check-in')}
              defaultValue={dayjs("2024-02-7")}
              
              slotProps={{ textField: { variant: "filled" } }}
            //   onChange={(newVal) => setDepart(newVal.$d)}
            />
            <DatePicker
              label= {t("hotelForm.Check-out")}
              defaultValue={dayjs("2024-02-9")}
            
              slotProps={{ textField: { variant: "filled" } }}
            //   onChange={(newVal) => setReturnDate(newVal.$d)}
            />
            <TextField
              label = {t('hotelForm.No.of Nights')}
              type = 'number'
              variant="filled"
              defaultValue={1}
            />
            <TextField
              label = {t('hotelForm.Guests')}
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

export default Holiday_Form_Search