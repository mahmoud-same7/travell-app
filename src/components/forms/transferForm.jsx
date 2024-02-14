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
  
  Stack,
  
  TextField,
} from "@mui/material";
import dayjs from "dayjs";

import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useTranslation } from "react-i18next";
import { LocalActivity } from "@mui/icons-material";

const Transfer_Form_Search = ()=> {
  const [age, setAge] = React.useState("");
  const [show, setShow] = React.useState(false);
  const {t}  = useTranslation()

  return (
    <Box className="form_search" sx={{width:'98%', m:'10px auto' }}>
      <Container>
            <FormControl sx={{ width:'100%' }}>
            <Stack direction='row'>
            <TextField
            sx={{flexGrow:1}}
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
            </Stack>
            </FormControl>
      </Container>
    </Box>
  );
}

export default Transfer_Form_Search