import { Box, Container, Typography ,Grid } from "@mui/material"
import { useTranslation } from "react-i18next"


const Footer = ()=> {
    const {t} = useTranslation()
    const company=  [t('Contact Us'),t('About'),t('Terms & Conditions'),t('Refund Policy'),]
    const links = [t('Flight') , t('Hotel') ,t('Transfers'),t('car') , t('Active') ,t('holiday')]
    const support = [t('Privacy Policy') ,t('Disclaimer Policy') ,t('Refund Policy')]
    return (
        <Box className="footer" sx={{background: "#f4f6f9", pt:10 ,pb:10}}>
            <Container maxWidth="lg">
                <Box sx={{flexGrow :1}}>
                <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={3}>
                    <>
                        <Box sx={{width:'200px' , height:'200px' ,position:'relative',borderRadius:'50%'}}>
                         <img style={{width:'100%' , height:'100%',borderRadius:'50%',position:'absolute' , top:'-30px' , display:'block'}} src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148627268.jpg" alt="" />
                        </Box>
                        <Typography variant="p" component='p' sx={{fs:'18px' ,color:'#999'}}>Ali Ibn Abi As Sadat, Ar Rawdah, Riyadh 13211, Saudi Arabia.</Typography>
                    </>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant="p" component='p'
                     sx={{fontWeight:'bold',fs:'18px'}}>
                        {t('CompanyFooter')}
                     </Typography>
                    <ul>
                        {company.map((el,indx)=> {
                            return (
                                <li key={indx}>{el}</li>
                            )
                        })}
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant="p" component='p' 
                    sx={{fontWeight:'bold',fs:'18px'}}>
                        {t('Quick Links')}
                    </Typography>
                    <ul>
                        
                            {links.map((el,indx)=> {
                                return (
                                    <li key={indx}>{el}</li>
                                )
                            })}
                        
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <Typography variant="p" component='p' 
                    sx={{fontWeight:'bold',fs:'18px'}}
                    >{t('Supporting')}
                    </Typography>
                    <ul>
                    {support.map((el,indx)=> {
                            return (
                                <li key={indx}>{el}</li>
                            )
                        })}
                    </ul>
                </Grid>
                </Grid>
                </Box>
            </Container>
        </Box>
    )
}
export default Footer