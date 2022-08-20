import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { height } from '@mui/system';
import Rasm10 from "../../assets/1.jpg"
import { Typography } from '@mui/material';
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
                <Navbar/>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Item>
                            <Box sx={{
                                width: "100%",
                                height: "200px",
                                backgroundImage: `url(${Rasm10})`,
                                backrpundSize: "100%"
                            }}>

                            </Box>
                            <Typography>
                                WORLD HA RD ,PARTY HARD in a<br />
                                Luxury Chalet in the Alps
                            </Typography>
                            <Typography>January 30,2020 Admin iconca 3</Typography>
                            <Typography>Far far away, behind the word mountains, far<br /> from the countries Vokalia and Consonantia</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Box sx={{
                                width: "100%",
                                height: "200px",
                                backgroundImage: `url(${Rasm10})`,
                                backrpundSize: "100%"
                            }}>

                            </Box>
                            <Typography>
                                WORLD HARD ,PARTY HARD in a<br />
                                Luxury Chalet in the Alps
                            </Typography>
                            <Typography>January 30,2020 Admin iconca 3</Typography>
                            <Typography>Far far away, behind the word mountains, far<br /> from the countries Vokalia and Consonantia</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Box sx={{
                                width: "100%",
                                height: "200px",
                                backgroundImage: `url(${Rasm10})`,
                                backrpundSize: "100%"
                            }}>

                            </Box>
                            <Typography>
                                WORLD HARD ,PARTY HARD in a<br />
                                Luxury Chalet in the Alps
                            </Typography>
                            <Typography>January 30,2020 Admin iconca 3</Typography>
                            <Typography>Far far away, behind the word mountains, far<br /> from the countries Vokalia and Consonantia</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <Item>
                                <Box sx={{
                                    width: "100%",
                                    height: "200px",
                                    backgroundImage: `url(${Rasm10})`,
                                    backrpundSize: "100%"
                                }}>

                                </Box>
                                <Typography>
                                    WORLD HARD ,PARTY HARD in a<br />
                                    Luxury Chalet in the Alps
                                </Typography>
                                <Typography>January 30,2020 Admin iconca 3</Typography>
                                <Typography>Far far away, behind the word mountains, far<br /> from the countries Vokalia and Consonantia</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <Box sx={{
                                    width: "100%",
                                    height: "200px",
                                    backgroundImage: `url(${Rasm10})`,
                                    backrpundSize: "100%"
                                }}>

                                </Box>
                                <Typography>
                                    WORLD HARD ,PARTY HARD in a<br />
                                    Luxury Chalet in the Alps
                                </Typography>
                                <Typography>January 30,2020 Admin iconca 3</Typography>
                                <Typography>Far far away, behind the word mountains, far<br /> from the countries Vokalia and Consonantia</Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>
                                <Box sx={{
                                    width: "100%",
                                    height: "200px",
                                    backgroundImage: `url(${Rasm10})`,
                                    backrpundSize: "100%"
                                }}>
                                </Box>
                                <Typography>
                                    WORLD HARD ,PARTY HARD in a<br />
                                    Luxury Chalet in the Alps
                                </Typography>
                                <Typography>January 30,2020 Admin iconca 3</Typography>
                                <Typography>Far far away, behind the word mountains, far<br /> from the countries Vokalia and Consonantia</Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box>
                <Footer/>
            </Box>
        </Box>
    );
}
