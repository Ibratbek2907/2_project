import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rasm11 from "../../assets/1.jpg"
import Rasm12 from "../../assets/2.jpg"
import Rasm13 from "../../assets/3.jpg"
import Rasm14 from "../../assets/4.jpg"
import Navbar from '../Navbar';
import Footer from '../Footer'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));export default () => {
    return (
      <Box>
        <Box><Navbar/></Box>
          <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                <Grid item xs={12}>
                    <Box sx={{textAlign:"center",p:"7% 0%"}}>
                        <Typography variant='h2' sx={{
                            fontSize:"50px"
                        }}>
                           Apartment Room
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <CardMedia
                        component="img"
                        sx={{ width: "100%", height: "60vh" }}
                        image={Rasm11}
                        alt="Live from space album cover"
                    />
                </Grid>
                <Grid item xs={3}>
                    <Item sx={{
                        p:"25% 0%",
                        ":hover":{
                            backgroundColor:"#fd7792",
                            color:"white"
                        }
                    }}>
                        <Rating name="half-rating" defaultValue={5} precision={0.1} sx={{fontSize:"18px",color:"#fd7792",":hover":{
                            color:"white"
                        }}} />
                        <Typography variant='h5' sx={{
                            fontSize:"30px",
                            mt:"1%"
                        }}>
                            Suite Room
                        </Typography>
                        <Typography sx={{
                            mt:"2%"
                        }}>
                            Max: 3 Persons <br />
                            Size: 45 m2 <br />
                            View: Sea View <br />
                            Bed: 1
                        </Typography>
                        <Button variant="outlined" sx={{
                            backgroundColor: "white", border: "2px solid lightgray", color: "black",mt:"5%", ":hover": {
                                background: "white",
                                color: "black",
                                border: "2px solid lightgray"
                            }
                        }}>View Room Details</Button>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <CardMedia
                        component="img"
                        sx={{ width: "100%", height: "60vh" }}
                        image={Rasm12}
                        alt="Live from space album cover"
                    />
                </Grid>
                <Grid item xs={3}>
                    <Item sx={{
                        p:"25% 0%",
                        ":hover":{
                            backgroundColor:"#fd7792",
                            color:"white"
                        }
                    }}>
                        <Rating name="half-rating" defaultValue={5} precision={0.1} sx={{fontSize:"18px",color:"#fd7792",":hover":{
                            color:"white"
                        }}} />
                        <Typography variant='h5' sx={{
                            fontSize:"30px",
                            mt:"1%"
                        }}>
                            Standard Room
                        </Typography>
                        <Typography sx={{
                            mt:"2%"
                        }}>
                            Max: 3 Persons <br />
                            Size: 45 m2 <br />
                            View: Sea View <br />
                            Bed: 1
                        </Typography>
                        <Button variant="outlined" sx={{
                            backgroundColor: "white", border: "2px solid lightgray", color: "black",mt:"5%", ":hover": {
                                background: "white",
                                color: "black",
                                border: "2px solid lightgray"
                            }
                        }}>View Room Details</Button>
                    </Item>
                </Grid>
                
                <Grid item xs={3}>
                    <Item sx={{
                        p:"25% 0%",
                        ":hover":{
                            backgroundColor:"#fd7792",
                            color:"white"
                        }
                    }}>
                        <Rating name="half-rating" defaultValue={5} precision={0.1} sx={{fontSize:"18px",color:"#fd7792",":hover":{
                            color:"white"
                        }}} />
                        <Typography variant='h5' sx={{
                            fontSize:"30px",
                            mt:"1%"
                        }}>
                            Family Room
                        </Typography>
                        <Typography sx={{
                            mt:"2%"
                        }}>
                            Max: 3 Persons <br />
                            Size: 45 m2 <br />
                            View: Sea View <br />
                            Bed: 1
                        </Typography>
                        <Button variant="outlined" sx={{
                            backgroundColor: "white", border: "2px solid lightgray", color: "black",mt:"5%", ":hover": {
                                background: "white",
                                color: "black",
                                border: "2px solid lightgray"
                            }
                        }}>View Room Details</Button>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <CardMedia
                        component="img"
                        sx={{ width: "100%", height: "60vh" }}
                        image={Rasm13}
                        alt="Live from space album cover"
                    />
                </Grid>
                
                <Grid item xs={3}>
                    <Item sx={{
                        p:"25% 0%",
                        ":hover":{
                            backgroundColor:"#fd7792",
                            color:"white"
                        }
                    }}>
                        <Rating name="half-rating" defaultValue={5} precision={0.1} sx={{fontSize:"18px",color:"#fd7792",":hover":{
                            color:"white"
                        }}} />
                        <Typography variant='h5' sx={{
                            fontSize:"30px",
                            mt:"1%"
                        }}>
                            Deluxe Room
                        </Typography>
                        <Typography sx={{
                            mt:"2%"
                        }}>
                            Max: 3 Persons <br />
                            Size: 45 m2 <br />
                            View: Sea View <br />
                            Bed: 1
                        </Typography>
                        <Button variant="outlined" sx={{
                            backgroundColor: "white", border: "2px solid lightgray", color: "black",mt:"5%", ":hover": {
                                background: "white",
                                color: "black",
                                border: "2px solid lightgray"
                            }
                        }}>View Room Details</Button>
                    </Item>
                </Grid>
                <Grid item xs={3}>
                    <CardMedia
                        component="img"
                        sx={{ width: "100%", height: "60vh" }}
                        image={Rasm14}
                        alt="Live from space album cover"
                    />
                </Grid>
            </Grid>
        </Box>
        <Box>
            <Footer/>
        </Box>
      </Box>
    )
}
