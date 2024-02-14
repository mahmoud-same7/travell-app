import { Box, Container,Typography } from "@mui/material";
import Form_Search from "../components/forms/Form_search";
import Footer from "../components/footer";
import Holiday from "../components/holidays";
import Slide_Home from "../components/slideHome";
import Slider_show from "../components/sliderShow";
import Deals from "../components/topDeals";
import Top_Hotel_Part from "../components/topHotel";
import VisaCard from "../components/visaCards";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import HotelIcon from "@mui/icons-material/Hotel";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import { useTranslation } from "react-i18next";
import {useState } from "react";
import Holiday_Form_Search from "../components/forms/hotelForm";
import Transfer_Form_Search from "../components/forms/transferForm";



const Home = () => {
  const { t } = useTranslation();
 const [show , setShow] = useState('Flight')

  let links = [
    {
      text: t("Flight"),
      icon: <AirplanemodeActiveIcon sx={{ mt: "0" }} />,
      show: 'Flight',
    },
    {
      text: t("Hotel"),
      icon: <HotelIcon sx={{ mt: "0" }} />,
      show: 'Hotel',
    },
    {
      text: t("Transfers"),
      icon: <TransferWithinAStationIcon sx={{ mt: "0" }} />,
      show: 'Transfers',
    },
    {
      text: t("car"),
      icon: <DirectionsCarIcon sx={{ mt: "0" }} />,
      show: 'car',
    },
    {
      text: t("holiday"),
      icon: <HomeIcon sx={{ mt: "0" }} />,
      show: 'holiday',
    },
  ];

  const shoose_Form = (e) => {
    setShow(e.show)
  };
  const FormShow = ()=> {
    switch(show){
      case 'Flight':
        return <Form_Search />
        break; 
      case "Hotel":
        return <Holiday_Form_Search/>
        break;  
      case "Transfers":
        return <Transfer_Form_Search/>
        break;  
      default:
        return <Form_Search />
    }
  }  
  return (
    <>
      <Slide_Home />
      <Container maxWidth="lg">
        <Box
          className="navigateIcon"
          sx={{
            borderRadius: "20px",
            background: "#eee",
            maxWidth: { xs: "300px", sm: "500px", md: "600px" },
            m: "30px auto 10px auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {links.map((el, indx) => {
            return (
              <Box
                onClick={() => shoose_Form(el)}
                key={indx}
                sx={{
                  display: "flex",
                  padding: "10px",
                  cursor: "pointer",
                  alignItems: "center",
                  background: el.show === true ? "#fc5b62" : "",
                  color: el.show === true ? "#fff" : "",
                  fontWeight: "bold",
                  ["&:hover"]: { background: "#fc5b62", color: "#fff" },
                }}
              >
                {el.icon}
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    mr: "10px",
                    display: { xs: "none", sm: "inline-block" },
                  }}
                >
                  {el.text}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
      {
        FormShow()
      }
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
