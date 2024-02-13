import { Box, Button, Container } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const HeaderFilter = ()=> {
    return(
        <Box className="HeaderFilter" sx={{mt:'15px' , mb:'15px'}}>
            <Container maxWidth="lg" sx={{display:'flex',textAlign:'center',alignItems:'center' ,justifyContent:'space-between'}}>
            <Button sx={{display:'block',borderRight:'1px solid #999',borderRadius:'0',textTransform:'lowercase'}}>
                    Airplane
                    <ArrowUpwardIcon sx={{color:'#999' ,fontSize:'14px'}}/>
                </Button>
                <Button sx={{display:'block',borderRight:'1px solid #999',borderRadius:'0',textTransform:'lowercase'}}>
                    Depart
                    <ArrowUpwardIcon sx={{color:'#999' ,fontSize:'14px'}}/>
                </Button>
                <Button sx={{display:'block',borderRight:'1px solid #999',borderRadius:'0',textTransform:'lowercase'}}>
                    Duration
                    <ArrowUpwardIcon sx={{color:'#999' ,fontSize:'14px'}}/>
                </Button>
                <Button sx={{display:'block',borderRight:'1px solid #999',borderRadius:'0',textTransform:'lowercase'}}>
                    Arrive
                    <ArrowUpwardIcon sx={{color:'#999' ,fontSize:'14px'}}/>
                </Button>
                <Button sx={{display:'block',borderRight:'1px solid #999',borderRadius:'0',textTransform:'lowercase'}}>
                    Pric
                    <ArrowUpwardIcon sx={{color:'#999' ,fontSize:'14px'}}/>
                </Button>
            </Container>
        </Box>
    )
}
export default HeaderFilter