import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import image2020 from '../../images/2020-is-subjets.webp';
import List from '@mui/material/List';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
 
 
//LIST 
const list = ['23 lessons/ 10 hours', 'Lifetime access', 'All future updates', '14 day money-back guarantee' ]



const cardLeftA = <CardContent>
     <Grid container >
         <Grid xs={12} md={3} item my='auto'><img src={image2020} alt="some pic"/></Grid>
         <Grid xs={12} md={6} item  my='auto'><Typography variant='h5' lineHeight='1.55' fontSize='20px' >Industrual Sketching — Full course/ 23 Lessons</Typography></Grid>
         <Grid xs={12} md={3} item my='auto' textAlign="right">
             <Typography variant='discount'><s>200$</s></Typography> 
             <Typography variant='price'>150 $</Typography>
        </Grid>
     </Grid>
  </CardContent>

const cardLeftB = <CardContent>
    <List>
       <ul>
        {list.map(item => 
            <li key={item} >
                <Typography variant='h5' lineHeight='1.55' fontSize='20px' >{item}</Typography>
            </li>)
        }
        </ul>
    </List>
</CardContent>

const cardRightA = <CardContent >
    <Box sx={{display:'flex', maxWidth:"450px"}}>
        <Typography variant="main" sx={{maxWidth:'122px', my:"auto"}}>Promo code:</Typography> 
        <TextField variant="outlined" sx={{maxWidth:'150px', ml:'15px'}} />
        <Button sx={{maxWidth:'155px'}} variant="contained">
         APPLY CODE
        </Button>
    </Box>
    <Box sx={{display:'flex', flexWrap:'nowrap', justifyContent:"space-between", mr:"30%" }} >
        <Typography variant="main" maxWidth="198px">Total: </Typography> 
        <Typography variant="main" maxWidth="198px">150$ </Typography>
        </Box>
        <Typography variant="main" >We accept: Visa, Master Card, Мир </Typography>
</CardContent>

const cardRightB = <CardContent >
<Box sx={{display:'flex', flexWrap:'wrap', maxWidth:'450px'}}>
        <Typography variant="main"
            sx={{maxWidth:"198px", 
            mt:"-25px",            
            position:"absolute", 
            zIndex:'100'}}>
                Your Profile
        </Typography> 
        <TextField variant="outlined" label="mail@example.com" sx={{width:'100%', mt:"10px"}} />
        <TextField variant="outlined" label="John Smith" sx={{width:'100%', mt:"15px"}} />
        <Button sx={{width:'450px',  mt:"15px", backgroundColor:'#00b358'}} variant="contained" >CHECK OUT</Button>
        <Typography sx={{fontSize:"18px", mt:'20px'}}>By proceeding here you are agreeing to our <Typography sx={{display:'inline', fontSize:"18px", color:"#fe5c07"}}>Terms of Service</Typography> and will be charged at the price quoted above.</Typography>
    </Box>
</CardContent>


const ContentBag = () => 
    <Container sx={{maxWidth:'1200px', mb:"135px"}}>
        <Box width='100%' height= '100px' sx={{ display:'flex', justifyContent:'center', outline:'3px'}}>
            {/* EMPTY */}
        </Box>
        <Box> 
            <Typography variant="h4" component='h1' fontSize='42px' align='center' color='primary' gutterBottom >
                My bag
            </Typography>
        </Box>
        <Box sx={{maxWidth: '1160px', mx:'auto'}}>
            <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{marginBottom:'37px', paddingTop:0}}>{cardLeftA}</Card> 
                        <Card variant="outlined" >{cardLeftB}</Card> 
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Card >{cardRightA}</Card>      
                    <Card >{cardRightB}</Card>                       
                    </Grid>   
            </Grid>
        </Box>
    <Divider sx={{mt:'105px', maxWidth:"1160px", mr:"20px"}}/>
    </Container> 
    
 

export default ContentBag;