import { Box, Typography } from "@mui/material"

const Slide_Home = ()=> {
    return(
        <>
            <Box className="slide_home" sx={{display:'flex',alignItems:'center' , justifyContent:'center' ,width:'100%',height:'75vh'}}>
                <Typography variant="h4" component='h4' sx={{color:'#fff'}}>Explore the world</Typography>
            </Box>
        </>
    )
}

export default Slide_Home