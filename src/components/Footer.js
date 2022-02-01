import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import IconButton from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Footer() {
    return <Container maxWidth="xl" sx={{height:"185px", backgroundColor:"#302a42"}}>
         <Grid container sx={{height:"185px"}} >
         <Grid xs={12} md={4} item my='auto'  >
            <Box>
                <Typography sx={{color:'#fff', opacity:0.8, fontSize:"16px", pl:"75px"}}>
                    ИП Маринов Д.В.<br/>
                    ИНН/ОГРНИП<br/>
                    773271420181/30877463520017
                </Typography>              
            </Box>
        </Grid>
         <Grid xs={12} md={4} item my='auto' align="center">
            <Box align="center" >
                <Link sx={{color:'#fff',  fontWeight:600, fontSize:"20px",textAlign:"center", textDecoration:'none', cursor:"pointer"}}>
                        © LAKMUS SCHOOL<br/>
                        BE OUR FRIEND
                </Link>
            <Box sx={{justifyContent: 'center',}}>
                <IconButton >
                    <YouTubeIcon sx={{color:"#fff"}}/>
                </IconButton>
                <IconButton >
                     <InstagramIcon sx={{color:"#fff"}} />
                </IconButton>
            </Box>
            </Box>
         </Grid>
         <Grid xs={12} md={4} item my='auto'>
            <Box sx={{mx:"auto", display:"inline", textAlign:"center", width:"100%", }} >
                 
                    <Link sx={{color:'#fff', fontSize:"20px", textDecoration:'none', cursor:"pointer", }}>
                        Публичная оферта | Правила Школы<br/>
                        Политика безопасности
                    </Link>
                 
            </Box>

         </Grid>
         </Grid>
    </Container>
}