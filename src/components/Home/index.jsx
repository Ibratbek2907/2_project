import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Rasm33 from '../../assets/1.jpg'
import Rasm32 from '../../assets/2.jpg'
import Rating from '@mui/material/Rating';
import { Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { BiCoffeeTogo } from 'react-icons/bi'
import Footer from '../Footer'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    return (
        <Box>
            <Box>
                <Box sx={{
                    width: "100%",
                    height: "400px",
                    backgroundImage: `url(${Rasm33})`,
                    backgroundSize: "100%"
                }}>
                    <Box>
                        <Typography sx={{

                            color: "white",
                            textAlign: "left"
                        }}>
                            Welcome to Vacation Rental</Typography>
                        <Typography sx={{
                            pt: "30px",
                            fontSize: "40px",
                            color: "white",
                            textAlign: "left"
                        }}>Rent an appartment for <br />your vacation</Typography>
                    </Box>
                    <Box sx={{
                        float: "right"
                    }}>

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6} sx={{
                                ml: "700px",
                                mt: '-80px'
                            }}>
                                <Item>
                                    <Box sx={{ width: '100%' }}>
                                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <Grid item xs={12} sx={{
                                                mt:"20px"
                                            }}>
                                                <Item>
                                                    <input type="text" name="" id="" placeholder='Full Name' />
                                                </Item>
                                            </Grid>
                                            <Grid item xs={6} sx={{
                                                mt:"20px"
                                            }}>
                                                <Item>
                                                    <input type="text" name="" id="" placeholder='Full Name' />
                                                </Item>
                                            </Grid>
                                            <Grid item xs={6} sx={{
                                                mt:"20px"
                                            }}>
                                                <Item>
                                                    <input type="text" name="" id="" placeholder='Full Name' />
                                                </Item>
                                            </Grid>
                                            <Grid item xs={6} sx={{
                                                mt:"20px"
                                            }}>
                                                <Item>
                                                    <input type="text" name="" id="" placeholder='Full Name' />
                                                </Item>
                                            </Grid>
                                            <Grid item xs={6} sx={{
                                                mt:"20px"
                                            }}>
                                                <Item>
                                                    <input type="text" name="" id="" placeholder='Full Name' />
                                                </Item>
                                            </Grid>
                                            <Grid item xs={6} sx={{
                                                mt:"20px"
                                            }}>
                                                <Item>
                                                    <input type="text" name="" id="" placeholder='Full Name' />
                                                </Item>
                                            </Grid>
                                            <Grid item xs={6} sx={{
                                                mt:"20px"
                                            }}>
                                                <Item>
                                                    <input type="text" name="" id="" placeholder='Full Name' />
                                                </Item>
                                            </Grid>

                                        </Grid>
                                        <Box sx={{
                                                mt:"20px"
                                            }}>
                                            <Button variant="contained" disableElevation>
                                                Disable elevation
                                            </Button>
                                        </Box>
                                    </Box>
                                </Item>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Item>
                            <Box sx={{
                                width: "100%",
                                height: "300px",
                                backgroundImage: `url(${Rasm33})`,
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat"
                            }}>

                            </Box>
                            <Typography sx={{ fontSize: "30px", color: "black" }}>Map Direction</Typography>
                            <Typography>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</Typography>
                            <Button variant="outlined" disableElevation>
                                Disable elevation
                            </Button>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Box sx={{
                                width: "100%",
                                height: "300px",
                                backgroundImage: `url(${Rasm33})`,
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat"
                            }}>

                            </Box>
                            <Typography sx={{ fontSize: "30px", color: "black" }}>Map Direction</Typography>
                            <Typography>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</Typography>
                            <Button variant="outlined" disableElevation>
                                Disable elevation
                            </Button>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Box sx={{
                                width: "100%",
                                height: "300px",
                                backgroundImage: `url(${Rasm33})`,
                                backgroundSize: "100%",
                                backgroundRepeat: "no-repeat"
                            }}>

                            </Box>
                            <Typography sx={{ fontSize: "30px", color: "black" }}>Map Direction</Typography>
                            <Typography>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</Typography>
                            <Button variant="outlined" disableElevation>
                                Disable elevation
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Box sx={{ width: '100%', mt: "30%" }}>
                    <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                        <Grid item xs={12}>
                            <Box sx={{ textAlign: "center", p: "7% 0%" }}>
                                <Typography variant='h2' sx={{
                                    fontSize: "50px"
                                }}>
                                    Apartment Room
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <CardMedia
                                component="img"
                                sx={{ width: "100%", height: "60vh" }}
                                image={Rasm33}
                                alt="Live from space album cover"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Item sx={{
                                p: "25% 0%",
                                ":hover": {
                                    backgroundColor: "#fd7792",
                                    color: "white"
                                }
                            }}>
                                <Rating name="half-rating" defaultValue={5} precision={0.1} sx={{
                                    fontSize: "18px", color: "#fd7792", ":hover": {
                                        color: "white"
                                    }
                                }} />
                                <Typography variant='h5' sx={{
                                    fontSize: "30px",
                                    mt: "1%"
                                }}>
                                    Suite Room
                                </Typography>
                                <Typography sx={{
                                    mt: "2%"
                                }}>
                                    Max: 3 Persons <br />
                                    Size: 45 m2 <br />
                                    View: Sea View <br />
                                    Bed: 1
                                </Typography>
                                <Button variant="outlined" sx={{
                                    backgroundColor: "white", border: "2px solid lightgray", color: "black", mt: "5%", ":hover": {
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
                                image={Rasm33}
                                alt="Live from space album cover"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Item sx={{
                                p: "25% 0%",
                                ":hover": {
                                    backgroundColor: "#fd7792",
                                    color: "white"
                                }
                            }}>
                                <Rating name="half-rating" defaultValue={5} precision={0.1} sx={{
                                    fontSize: "18px", color: "#fd7792", ":hover": {
                                        color: "white"
                                    }
                                }} />
                                <Typography variant='h5' sx={{
                                    fontSize: "30px",
                                    mt: "1%"
                                }}>
                                    Standard Room
                                </Typography>
                                <Typography sx={{
                                    mt: "2%"
                                }}>
                                    Max: 3 Persons <br />
                                    Size: 45 m2 <br />
                                    View: Sea View <br />
                                    Bed: 1
                                </Typography>
                                <Button variant="outlined" sx={{
                                    backgroundColor: "white", border: "2px solid lightgray", color: "black", mt: "5%", ":hover": {
                                        background: "white",
                                        color: "black",
                                        border: "2px solid lightgray"
                                    }
                                }}>View Room Details</Button>
                            </Item>
                        </Grid>

                        <Grid item xs={3}>
                            <Item sx={{
                                p: "25% 0%",
                                ":hover": {
                                    backgroundColor: "#fd7792",
                                    color: "white"
                                }
                            }}>
                                <Rating name="half-rating" defaultValue={5} precision={0.1} sx={{
                                    fontSize: "18px", color: "#fd7792", ":hover": {
                                        color: "white"
                                    }
                                }} />
                                <Typography variant='h5' sx={{
                                    fontSize: "30px",
                                    mt: "1%"
                                }}>
                                    Family Room
                                </Typography>
                                <Typography sx={{
                                    mt: "2%"
                                }}>
                                    Max: 3 Persons <br />
                                    Size: 45 m2 <br />
                                    View: Sea View <br />
                                    Bed: 1
                                </Typography>
                                <Button variant="outlined" sx={{
                                    backgroundColor: "white", border: "2px solid lightgray", color: "black", mt: "5%", ":hover": {
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
                                image={Rasm33}
                                alt="Live from space album cover"
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <Item sx={{
                                p: "25% 0%",
                                ":hover": {
                                    backgroundColor: "#fd7792",
                                    color: "white"
                                }
                            }}>
                                <Rating name="half-rating" defaultValue={5} precision={0.1} sx={{
                                    fontSize: "18px", color: "#fd7792", ":hover": {
                                        color: "white"
                                    }
                                }} />
                                <Typography variant='h5' sx={{
                                    fontSize: "30px",
                                    mt: "1%"
                                }}>
                                    Deluxe Room
                                </Typography>
                                <Typography sx={{
                                    mt: "2%"
                                }}>
                                    Max: 3 Persons <br />
                                    Size: 45 m2 <br />
                                    View: Sea View <br />
                                    Bed: 1
                                </Typography>
                                <Button variant="outlined" sx={{
                                    backgroundColor: "white", border: "2px solid lightgray", color: "black", mt: "5%", ":hover": {
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
                                image={Rasm33}
                                alt="Live from space album cover"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box>

                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <Item>
                                <Grid container spacing={2} columns={16}>
                                    <Grid item xs={6}>
                                        <Item><Box sx={{
                                            width: "100%",
                                            height: "70px",
                                            backgroundImage: `url(${Rasm32})`,
                                            backgroundSize: "100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "100%"
                                        }}></Box></Item>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Item>
                                            <Box>
                                                <Typography>
                                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                                                </Typography>
                                                <Typography>
                                                    Rolden Golez
                                                </Typography>
                                                <Typography>
                                                    Byssunneswoman
                                                </Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <Grid container spacing={2} columns={16}>
                                    <Grid item xs={6}>
                                        <Item><Box sx={{
                                            width: "100%",
                                            height: "70px",
                                            backgroundImage: `url(${Rasm32})`,
                                            backgroundSize: "100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "100%"
                                        }}></Box></Item>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Item>
                                            <Box>
                                                <Typography>
                                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                                                </Typography>
                                                <Typography>
                                                    Rolden Golez
                                                </Typography>
                                                <Typography>
                                                    Byssunneswoman
                                                </Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <Grid container spacing={2} columns={16}>
                                    <Grid item xs={6}>
                                        <Item><Box sx={{
                                            width: "100%",
                                            height: "70px",
                                            backgroundImage: `url(${Rasm32})`,
                                            backgroundSize: "100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "100%"
                                        }}></Box></Item>
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Item>
                                            <Box>
                                                <Typography>
                                                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                                                </Typography>
                                                <Typography>
                                                    Rolden Golez
                                                </Typography>
                                                <Typography>
                                                    Byssunneswoman
                                                </Typography>
                                            </Box>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>

                    </Grid>
                </Box>

            </Box>
            <Box>
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                        <Item>
                            <Grid container spacing={2} columns={16}>
                                <Grid item xs={16}>
                                    <Item>
                                        <Box sx={{
                                            width: "100%",
                                            height: "420px",
                                            backgroundImage: `url(${Rasm32})`,
                                            backgroundSize: "100%",
                                            backgroundRepeat: "no-repeat",
                                        }}></Box>
                                        <Typography sx={{
                                            fontSize: "33px",
                                            color: "black"
                                        }}>

                                            The most recommended vacation rental
                                        </Typography>
                                        <Typography>
                                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.A small river named Duden flows by their A small river named Duden flows by their
                                        </Typography>
                                    </Item>
                                </Grid>

                            </Grid>


                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <Box>
                                <Typography sx={{
                                    fontSize: "40px",
                                    color: "black",
                                    textAlign: "left"
                                }}>
                                    What we offer
                                </Typography>
                                <Typography sx={{
                                    textAlign: "left"
                                }}>
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                                </Typography>
                                <Box>
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item xs={8}>

                                            <Item>
                                                <Grid container spacing={2} columns={16}>
                                                    <Grid item xs={8}>
                                                        <Item>
                                                            <Box sx={{
                                                                fontSize: "40px",
                                                                color: "orange",
                                                                textAlign: "left"
                                                            }}><BiCoffeeTogo /></Box>
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Item>
                                                            <Box>
                                                                <Typography>Tea Coffee</Typography>
                                                                <Typography>A small river named Duden flows by their </Typography>
                                                            </Box>
                                                        </Item>
                                                    </Grid>
                                                </Grid>


                                            </Item>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Item>
                                                <Grid container spacing={2} columns={16}>
                                                    <Grid item xs={8}>
                                                        <Item>
                                                            <Box sx={{
                                                                fontSize: "40px",
                                                                color: "orange",
                                                                textAlign: "left"
                                                            }}><BiCoffeeTogo /></Box>
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Item>
                                                            <Box>
                                                                <Box>
                                                                    <Typography>Tea Coffee</Typography>
                                                                    <Typography>A small river named Duden flows by their</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Item>
                                                    </Grid>
                                                </Grid>


                                            </Item>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item xs={8}>
                                            <Item>
                                                <Box>
                                                    <Grid container spacing={2} columns={16}>
                                                        <Grid item xs={8}>
                                                            <Item><Box sx={{
                                                                fontSize: "40px",
                                                                color: "orange",
                                                                textAlign: "left"
                                                            }}><BiCoffeeTogo /></Box>
                                                                <Box></Box></Item>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Item>
                                                                <Box>
                                                                    <Typography>Tea Coffee</Typography>
                                                                    <Typography>A small river named Duden flows by their </Typography>
                                                                </Box>
                                                            </Item>
                                                        </Grid>
                                                    </Grid>
                                                </Box>

                                            </Item>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Item>
                                                <Grid container spacing={2} columns={16}>
                                                    <Grid item xs={8}>
                                                        <Item>
                                                            <Box sx={{
                                                                fontSize: "40px",
                                                                color: "orange",
                                                                textAlign: "left"
                                                            }}><BiCoffeeTogo /></Box>
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Item>
                                                            <Box>
                                                                <Typography>Tea Coffee</Typography>
                                                                <Typography>A small river named Duden flows by their </Typography>
                                                            </Box>
                                                        </Item>
                                                    </Grid>
                                                </Grid>


                                            </Item>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item xs={8}>
                                            <Item>
                                                <Box>
                                                    <Grid container spacing={2} columns={16}>
                                                        <Grid item xs={8}>
                                                            <Item>
                                                                <Box sx={{
                                                                    fontSize: "40px",
                                                                    color: "orange",
                                                                    textAlign: "left"
                                                                }}><BiCoffeeTogo /></Box>
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <Item>
                                                                <Box>
                                                                    <Typography>Tea Coffee</Typography>
                                                                    <Typography>A small river named Duden flows by their </Typography>
                                                                </Box>
                                                            </Item>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Item>
                                                <Grid container spacing={2} columns={16}>
                                                    <Grid item xs={8}>
                                                        <Item>
                                                            <Box sx={{
                                                                fontSize: "40px",
                                                                color: "orange",
                                                                textAlign: "left"
                                                            }}><BiCoffeeTogo /></Box>
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Item>
                                                            <Box>
                                                                <Typography>Tea Coffee</Typography>
                                                                <Typography>A small river named Duden flows by their </Typography>
                                                            </Box>
                                                        </Item>
                                                    </Grid>
                                                </Grid>


                                            </Item>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item xs={8}>
                                            <Item>
                                                <Grid container spacing={2} columns={16}>
                                                    <Grid item xs={8}>
                                                        <Item>
                                                            <Box sx={{
                                                                fontSize: "40px",
                                                                color: "orange",
                                                                textAlign: "left"
                                                            }}><BiCoffeeTogo /></Box>
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Item>
                                                            <Box>
                                                                <Typography>Tea Coffee</Typography>
                                                                <Typography>A small river named Duden flows by their </Typography>
                                                            </Box>
                                                        </Item>
                                                    </Grid>
                                                </Grid>

                                            </Item>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Grid container spacing={2} columns={16}>
                                                <Grid item xs={8}>
                                                    <Item>
                                                        <Box sx={{
                                                            fontSize: "40px",
                                                            color: "orange",
                                                            textAlign: "left",
                                                            textAlign: "left"
                                                        }}><BiCoffeeTogo /></Box>
                                                    </Item>
                                                </Grid>
                                                <Grid item xs={8}>
                                                    <Item>

                                                        <Box sx={{
                                                        }}>
                                                            <Typography>

                                                                Tea Coffee
                                                            </Typography>
                                                            <Typography>A small river named Duden flows by their </Typography>
                                                        </Box>
                                                    </Item>
                                                </Grid>
                                            </Grid>
                                            <Item>

                                            </Item>
                                        </Grid>
                                    </Grid>

                                </Box>
                            </Box>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>

    );
}
