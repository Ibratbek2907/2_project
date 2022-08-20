import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Rasm from "../../assets/1.jpg"
import Rasm2 from "../../assets/2.jpg"
import Rasm3 from "../../assets/3.jpg"
import Rasm4 from "../../assets/4.jpg"
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Navbar from '../Navbar';
import { BiCoffeeTogo } from "react-icons/bi"
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
            <Navbar/>
        </Box>
      <Box sx={{ width: "100%", height: "600px", backgroundImage: `url(${Rasm})`, backgroundSize: "100%", backgroundRepeat: "no-repeat" }}>
        <Typography sx={{ color: "whitesmoke" }}>
          Home About us
        </Typography>
        <Typography sx={{ fontSize: "40px" }}>
          Abaut Us
        </Typography>

      </Box>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Item>
              <Box sx={{
                width: "100%",
                height: "300px",
                backgroundImage: `url(${Rasm2})`,
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
                backgroundImage: `url(${Rasm2})`,
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
            <Item> <Box sx={{
              width: "100%",
              height: "300px",
              backgroundImage: `url(${Rasm2})`,
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
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Item>
              <Box>
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={6}>
                    <Item><Box sx={{
                      width: "100%",
                      height: "70px",
                      backgroundImage: `url(${Rasm3})`,
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


              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box>
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={6}>
                    <Item>
                      <Box sx={{
                        width: "100%",
                        height: "70px",
                        backgroundImage: `url(${Rasm3})`,
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "100%"
                      }}></Box>
                    </Item>
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


              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box>
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={6}>
                    <Item>
                      <Box sx={{
                        width: "100%",
                        height: "70px",
                        backgroundImage: `url(${Rasm3})`,
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        borderRadius: "100%"
                      }}></Box>
                    </Item>
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


              </Box>
            </Item>
          </Grid>

        </Grid>
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
                      backgroundImage: `url(${Rasm4})`,
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
                      A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
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
                          <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
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
                                  <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
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
                                  <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
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
                                <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
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
                                  <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
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
                                <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
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
                                <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
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
                              textAlign: "right",
                              pb: "30px"
                            }}>
                              <Typography>

                                Tea Coffee
                              </Typography>
                              <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
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
      </Box >
      <Box>
        <Footer/>
      </Box>
    </Box >
  );
}
