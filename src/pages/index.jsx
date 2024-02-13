import { Box, Container, Grid, Typography } from "@mui/material";
import Form_Search from "../components/Form_search";
import Footer from "../components/footer";
import Holiday from "../components/holidays";
import Slide_Home from "../components/slideHome";
import Slider_show from "../components/sliderShow";
import Deals from "../components/topDeals";
import Top_Hotel_Part from "../components/topHotel";
import VisaCard from "../components/visaCards";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const links = [
    {
      text: t("Flight"),
      icon: <AirplanemodeActiveIcon sx={{ mt: "0" }} />,
    },
    {
      text: t("Hotel"),
      icon: <HotelIcon sx={{ mt: "0" }} />,
    },
    {
      text: t("Transfers"),
      icon: <TransferWithinAStationIcon sx={{ mt: "0" }} />,
    },
    {
      text: t("car"),
      icon: <DirectionsCarIcon sx={{ mt: "0" }} />,
    },
    {
      text: t("holiday"),
      icon: <HomeIcon sx={{ mt: "0" }} />,
    },
  ];
  return (
    <>
      <Slide_Home />
      <Container maxWidth="lg">
        <Box
          className="navigateIcon"
          sx={{
            borderRadius: "20px",
            background: "#eee",
            maxWidth: { xs: "300px", sm: "400px", md: "600px" },
            m: "30px auto 10px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
            {links.map((el, indx) => {
            return (
              <Box key={indx} sx={{display:'flex',padding:'10px',cursor:'pointer',alignItems:'center' , fontWeight:'bold',['&:hover']:{background:'#fc5b62',color:'#fff'}}}>
                {el.icon}
                <Typography variant="p" component="p" sx={{mr:'10px'}}>
                  {el.text}
                </Typography>
              </Box>
            );
          })}
          </Box>
      </Container>
      <Form_Search />
      <Top_Hotel_Part />
      <Deals />
      <VisaCard />
      <Holiday />
      <Slider_show />
      <Footer />
    </>
  );
};

export default Home;
