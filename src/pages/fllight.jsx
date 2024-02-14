import { Box, Typography } from "@mui/material"
import FlightInfo from "../components/flight/flightInfo"
import { useState } from "react"
import Form_Search from "../components/forms/Form_search"
import FlightAir from "../components/flight/flightAir"
import HeaderFilter from "../components/flight/headerFilter"

const Flight = ()=> {
    const [show , setShow] = useState(false)
    const showSearch = ()=> {
        setShow(!show)
    }
    return (
        <Box className="Flight_air">
            <FlightInfo showSearch={showSearch} />
            {show && <Form_Search/>}
            <Box className="" sx={{width:'80%' , m:'10px auto' ,p:'10px',color:'#fff' ,background:'linear-gradient(to right, #00a0d2, #33cde5);'}}>
                <Typography variant="p" component="p" sx={{fontWeight:'bold',mb:'5px'}}>Important Advisories & State Guidelines</Typography>
                <Typography variant="span" component='span'>With travel opening up, govt. advisories and state/UT guidelines are constantly evolving</Typography>
            </Box>
            <HeaderFilter/>
           <FlightAir/> 
           <FlightAir/> 
           <FlightAir/> 
           <FlightAir/> 
        </Box>
    )
}
export default Flight