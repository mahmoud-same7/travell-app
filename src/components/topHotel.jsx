import { Box,Grid, Container  } from "@mui/material";
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import img from '../assets/sea-3496528_640.jpg'
import img1 from '../assets/chinatown-4582511_640.jpg'
import img2 from '../assets/city-of-london-4481399_640.jpg'
const Top_Hotel_Part = () => {
  return (
    <Box sx={{pt:8,pb:4}}>
      <Container maxWidth="lg">
      <Typography variant="h4" component="h4" sx={{fontWeight:'bolder',mb:6}}>
        top hotel destination
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={3}>
            <Box className="grid_box" sx={{position:"relative"}}>
                <img src={img} style={{borderRadius:"20px" ,width:'100%' ,height:'100%'}} alt="" />
                <Box className="text_grid">
                    <Typography variant="body1" component='p' sx={{fontWeight:'bold', mb:1}}>london</Typography>
                    <Typography variant="span" component='span'>(0 hotels)</Typography>
                </Box>
            </Box>
          </Grid>
          <Grid item xs={4} md={5}>
          <Box className="grid_box" sx={{position:"relative"}}>
                <img src={img1} style={{borderRadius:"10px" ,width:'100%' ,height:'100%'}} alt="" />
                <Box className="text_grid">
                    <Typography variant="body1" component='p' sx={{fontWeight:'bold'}}>london</Typography>
                    <Typography variant="span" component='span'>(0 hotels)</Typography>
                </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box className="grid_box" sx={{position:"relative"}}>
                <img src={img2} style={{borderRadius:"10px" ,width:'100%' ,height:'100%'}} alt="" />
                <Box className="text_grid">
                    <Typography variant="body1" component='p' sx={{fontWeight:'bold'}}>london</Typography>
                    <Typography variant="span" component='span'>(0 hotels)</Typography>
                </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={8}>
          <Box className="grid_box" sx={{position:"relative"}}>
                <img src={img} style={{borderRadius:"10px" ,width:'100%' ,height:'100%'}} alt="" />
                <Box className="text_grid">
                    <Typography variant="body1" component='p' sx={{fontWeight:'bold'}}>london</Typography>
                    <Typography variant="span" component='span'>(0 hotels)</Typography>
                </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={4}>
          <Box className="grid_box" sx={{position:"relative"}}>
                <img src={img} style={{borderRadius:"10px" ,width:'100%' ,height:'100%'}} alt="" />
                <Box className="text_grid">
                    <Typography variant="body1" component='p' sx={{fontWeight:'bold'}}>london</Typography>
                    <Typography variant="span" component='span'>(0 hotels)</Typography>
                </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </Container>
    </Box>
  );
};
export default Top_Hotel_Part;
