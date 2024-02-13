import { Avatar, Box, Button, Container, Typography } from "@mui/material";

const FlightAir = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#eee",
          p: "15px 10px",
          borderBottom:'4px solid #999',
          m:'15px 0'
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar alt="" src={require("../../assets/4312298.png")} sx={{pr:'10px'}} />
          <Box>
            <Typography variant="p" component="p">
              Egyptair
            </Typography>
            <Typography variant="span" component="span" sx={{display:'block' ,fontSize:'14px' ,color:'#999',mt:'5px',fontWeight:'bold'}}>
              MS 191
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="p" component="p" sx={{ fontWeight: "bold" }}>
            10:30
          </Typography>
          <Typography variant="span" component="span" sx={{display:'block' ,fontSize:'14px' ,color:'#999',mt:'5px',fontWeight:'bold'}}>
            Borg El Arab (HBE)
          </Typography>
        </Box>
        <Box>
          <Typography variant="span" component="span" sx={{display:'block' ,fontSize:'14px' ,color:'#999',mb:'5px',fontWeight:'bold'}}>
            22h 40m
          </Typography>
          <img
            width='100px'
            height='20px'
            alt=""
            src="https://static.vecteezy.com/system/resources/thumbnails/020/986/881/small/straight-line-from-start-to-finish-points-symbol-of-direction-aim-target-short-path-easy-challenge-fast-way-ideal-plan-vector.jpg"
          />
          <Typography variant="span" component="span" sx={{display:'block' ,fontSize:'14px' ,color:'#999',mt:'5px',fontWeight:'bold'}}>
            Stop:2SSH
          </Typography>
        </Box>
        <Box>
          <Typography variant="p" component="p" sx={{ fontWeight: "bold", }}>
            10:30
          </Typography>
          <Typography variant="span" component="span" sx={{display:'block' ,fontSize:'14px' ,color:'#999',mt:'5px',fontWeight:'bold'}}>
            Borg El Arab (HBE)
          </Typography>
        </Box>
        <Box>
          <Typography variant="p" component="p" sx={{ fontWeight: "bold" }}>
            SAR 1500
          </Typography>
          <Typography
            variant="span"
            component="span"
            sx={{display:'block' ,fontSize:'14px' ,color:'#999',mt:'5px',fontWeight:'bold'}}
          >
            Non-Refundable
          </Typography>
          <Button>Book now</Button>
        </Box>
      </Box>
    </Container>
  );
};
export default FlightAir;
