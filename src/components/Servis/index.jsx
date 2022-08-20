import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Rasm6 from "../../assets/1.jpg"
import Rasm7 from "../../assets/2.jpg"
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Navbar from '../Navbar';

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
        <Navbar />
      </Box>
      <Box sx={{
        width: "100%",
        height: "400px",
        backgroundImage: `ur;(${Rasm6})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat"
      }}>

      </Box>

      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <Item>
              <Box sx={{
                width: '100%',
                height: "300px",
                backgroundImage: `url(${Rasm7})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
              }}>

              </Box>
              <Box>
                <Typography>Map Direction</Typography>
                <Typography>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</Typography>
                <Button variant="outlined" disableElevation>
                  Disable elevation
                </Button>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box sx={{
                width: '100%',
                height: "300px",
                backgroundImage: `url(${Rasm7})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
              }}>

              </Box>
              <Box>
                <Typography>Map Direction</Typography>
                <Typography>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</Typography>
                <Button variant="outlined" disableElevation>
                  Disable elevation
                </Button>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box sx={{
                width: '100%',
                height: "300px",
                backgroundImage: `url(${Rasm7})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat"
              }}>

              </Box>
              <Box>
                <Typography>Map Direction</Typography>
                <Typography>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</Typography>
                <Button variant="outlined" disableElevation>
                  Disable elevation
                </Button>
              </Box>
            </Item>
          </Grid>

        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                  <Item>
                    <Box sx={{
                      width: "100%",
                      height: "80px",
                      backgroundImage: `url(${Rasm6})`,
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "100%"
                    }}>

                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box>
                      <Typography sx={{ fontSize: "20px" }}>
                        Laundry </Typography>
                      <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box sx={{
                      width: "100%",
                      height: "80px",
                      backgroundImage: `url(${Rasm6})`,
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "100%"
                    }}></Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box>
                      <Typography sx={{ fontSize: "20px" }}>
                        Laundry </Typography>
                      <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                  <Item>
                    <Box sx={{
                      width: "100%",
                      height: "80px",
                      backgroundImage: `url(${Rasm6})`,
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "100%"
                    }}>

                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Typography sx={{ fontSize: "20px" }}>
                      Laundry </Typography>
                    <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box sx={{
                      width: "100%",
                      height: "80px",
                      backgroundImage: `url(${Rasm6})`,
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "100%"
                    }}></Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box>
                      <Typography sx={{ fontSize: "20px" }}>
                        Laundry </Typography>
                      <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                  <Item>
                    <Box sx={{
                      width: "100%",
                      height: "80px",
                      backgroundImage: `url(${Rasm6})`,
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "100%"
                    }}>

                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box>
                      <Typography sx={{ fontSize: "20px" }}>
                        Laundry </Typography>
                      <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box sx={{
                      width: "100%",
                      height: "80px",
                      backgroundImage: `url(${Rasm6})`,
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "100%"
                    }}>

                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box>
                      <Typography sx={{ fontSize: "20px" }}>
                        Laundry </Typography>
                      <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>
                  <Item>
                    <Box sx={{
                      width: "100%",
                      height: "80px",
                      backgroundImage: `url(${Rasm6})`,
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "100%"
                    }}>

                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box>
                      <Typography sx={{ fontSize: "20px" }}>
                        Laundry </Typography>
                      <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box sx={{
                      width: "100%",
                      height: "80px",
                      backgroundImage: `url(${Rasm6})`,
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "100%"
                    }}>

                    </Box>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <Box>
                      <Typography sx={{ fontSize: "20px" }}>
                        Laundry </Typography>
                      <Typography>A small river named Duden flows by their place and supplies it with the necessary</Typography>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
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
