import { Box, Container, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { holidayData } from "../data";
import img from "../assets/city-of-london-4481399_640.jpg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Holiday = () => {
  const [data, setData] = useState([...holidayData]);
  const {t} = useTranslation()
  return (
    <Box className="Holiday_section" sx={{ pt: 6, pb: 20 , background:'#f4f6f9' }}>
      <Container maxWidth="lg">
        <Box className="Holiday_header" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h4"
            sx={{ fontWeight: "bolder", mb: 2 }}
          >
            {t('prefectHoliday')}
          </Typography>
          <Typography
            variant="span"
            component="span"
            sx={{
              color: "#999",
              display: "block",
              m: "auto",
              width: { xs: "310px", md: "500px" },
            }}
          >
            {t('holiday_Span')}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {data.length
              ? data.map((el, indx) => {
                  return (
                    <Grid item xs={12} md={4} key={indx} sx={{mt:10}}>
                      <Box
                        className="box_holiday"
                        sx={{ position: "relative" }}
                      >
                        <img
                          src={el.img}
                          style={{ width: "100%", minHeight: "50%" }}
                          alt=""
                        />
                        <Box className="box_text">
                          <Typography
                            variant="div"
                            sx={{ position: "realtive", mb: "30px" }}
                          >
                            <Typography
                              variant="span"
                              color="#999"
                              component="span"
                              sx={{ fontSize: "12px" }}
                            >
                              <LocationOnIcon
                                sx={{
                                  mb: "5px",
                                  position: "absolute",
                                  left: "5px",
                                  top: "18px",
                                }}
                              />
                              <Typography
                                variant="span"
                                component="span"
                                sx={{ display: "inline-block", pl: "20px" }}
                              >
                                {el.subTitle}
                              </Typography>
                            </Typography>
                            <Typography
                              variant="p"
                              component="p"
                              sx={{ fontWeight: "bold", mt: "4px", mb: "10px" }}
                            >
                              {el.title}
                            </Typography>
                          </Typography>
                          <hr />
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              mt: "30px",
                              fontSize:'14px'
                            }}
                          >
                            <Box>
                              <Typography
                                variant="span"
                                color="#999"
                                sx={{ mr: "10px" }}
                              >
                                <AccessTimeIcon sx={{fontSize:'18px'}} /> {el.night} Nights
                              </Typography>
                              <Typography variant="span" color="#999">
                                <DateRangeIcon sx={{fontSize:'18px'}} /> {el.days} Days
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                fontWeight: "bold",
                                fontSize: "22px",
                                color: "red",
                              }}
                            >
                              SAR {el.price}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })
              : ""}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Holiday;
