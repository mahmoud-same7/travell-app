import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { visaData } from "../data";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const VisaCard = () => {
  const [data, setData] = useState([...visaData]);
  const {t} = useTranslation()
  return (
    <Box className="visa_card" sx={{ pt: 6, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h4"
          sx={{ fontWeight: "bolder", mb: 6 }}
        >
          {t('globalVisa')}
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {data.length ? (
              data.map((el, indx) => {
                return (
                  <Grid item xs={12} md={3} key={indx}>
                    <Box
                      className="visa_contain"
                      sx={{
                        background: "#eee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        p: "8px 15px",
                        borderRadius: "10px",
                      }}
                    >
                      <Typography variant="p" component="p">
                        {el.title}
                      </Typography>
                      <Avatar
                        alt="Remy Sharp"
                        src={el.icons}
                      />
                    </Box>
                  </Grid>
                );
              })
            ) : (
              <Typography
                variant="p"
                component="p"
                color="primary"
                sx={{ textAlign: "center", pt: 4, pb: 4 }}
              >
                no data to show
              </Typography>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default VisaCard;
