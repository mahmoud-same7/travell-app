import { Box, Button, Container, Typography } from "@mui/material";
import Box_show from "./boxShow";

const FlightInfo = ({showSearch}) => {
  return (
    <Box className="FlightInfo" sx={{ background: "darkblue", color: "#fff" ,p:'10px 2px' }}>
      <Container maxWidth="lg" sx={{display:'flex' ,flexDirection:{xs:'column', md:'row'} ,alignItems:{xs:'start' , md:'center'} , justifyContent:'space-between'}}>
        <Box_show title='One Way Trip' content='Alexandria (ALY) to Aswan (ASW)'/>
        <Box_show title='Departure' content='Mon, 12 Feb'/>
        <Box_show title='traveller' content={1}/>
        <Button onClick={showSearch} sx={{backgroundColor:'red' , color:'#fff'}}>modify search</Button>
      </Container>
    </Box>
  );
};

export default FlightInfo;
