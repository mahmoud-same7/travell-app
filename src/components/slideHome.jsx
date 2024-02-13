import { Box, Typography } from "@mui/material"
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

const Slide_Home = ()=> {
    const { t ,i18n} = useTranslation();
    useEffect(()=> {
        const lang = 'ar-eg'
        console.log(lang)
        i18n.changeLanguage(lang)
    },[])
    return(
        <>
            <Box className="slide_home" sx={{display:'flex',alignItems:'center' , justifyContent:'center' ,width:'100%',height:'75vh'}}>
                <Typography variant="h4" component='h4' sx={{color:'#fff'}}>{t('translation:welcomeMessage')}</Typography>
            </Box>
        </>
    )
}

export default Slide_Home