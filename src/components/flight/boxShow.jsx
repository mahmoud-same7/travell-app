import { Box, Typography } from "@mui/material"

const Box_show = ({title,content})=> {
    return (
        <Box>
          <Typography variant="p" component="p" sx={{pb:'10px' , fontWeight:'bold'}}>
            {title}
          </Typography>
          <Typography variant="p" component="p" >
            {content}
          </Typography>
        </Box>
    )
}
export default Box_show