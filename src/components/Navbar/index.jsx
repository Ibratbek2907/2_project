import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link, NavLink } from "react-router-dom";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import LocalGroceryStoreOutlined from '@mui/icons-material/LocalGroceryStoreOutlined';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: "none",
    boxShadow: "none"
}));



export default () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? "#FC456A" : "black",
            textDecoration: isActive ? "none" : "none",
            marginLeft: '6%',
            borderBottom: isActive ? "1px solid #FC456A" : "1px solid white",
        };
    };

    return (
        <Box sx={{
            pt: "4%",
            width: "100%",
        }}>
            <Box sx={{
                width: "100%",
                height: "4vh",
                backgroundColor: "#FC456A",
                display: "flex",
                alignItems: "center"
            }}>
                <Box sx={{ width: "50%" }}>
                    <Typography sx={{ fontSize: "12px", ml: "10%" }}><b style={{ color: "#FEB3C1", fontWeight: "normal" }}> Phone no</b> <b style={{ color: "white", fontWeight: "normal" }}> : +00 1234 567 or</b> <b style={{ color: "#FEB3C1", fontWeight: "normal" }}> email us</b> <b style={{ color: "white", fontWeight: "normal" }}> : emailsample@email.com</b></Typography>
                </Box>
                <Box sx={{ ml: "36%" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
                        <Grid item xs={3}>
                            <Item sx={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <FacebookOutlinedIcon sx={{ color: "white", fontSize: "18px" }} />
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item sx={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <TwitterIcon sx={{ color: "white", fontSize: "18px" }} />
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item sx={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <InstagramIcon sx={{ color: "white", fontSize: "18px" }} />
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item sx={{
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <LanguageIcon sx={{ color: "white", fontSize: "18px" }} />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor: "white",
                    padding: "1.5% 0%",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={5.0}>
                        <Box sx={{ display: "flex", alignItems: "center", width: "50%", p: "1% 1.5%" }}>
                            <Typography variant='h4' sx={{
                                fontWeight: "bold",
                                fontSize: "25px"
                            }}>
                                Vacation <b style={{ color: "#FC456A" }}>Rental</b>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4.8}>
                        <Box sx={{ display: "flex", width: "100%" }}>
                            <NavLink to="/" style={navLinkStyles}>
                                <ListItem sx={{ "&:hover": { color: "#FC456A" } }} disablePadding>
                                    <ListItemButton sx={{ ":hover": { backgroundColor: "white" } }} >
                                        <ListItemText primary="Home" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/About" style={navLinkStyles}>
                                <ListItem sx={{ "&:hover": { color: "#FC456A" } }} disablePadding>
                                    <ListItemButton sx={{ ":hover": { backgroundColor: "white" } }}>
                                        <ListItemText primary="About" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/Servis" style={navLinkStyles}>
                                <ListItem sx={{ "&:hover": { color: "#FC456A" } }} disablePadding>
                                    <ListItemButton sx={{ ":hover": { backgroundColor: "white" } }} >
                                        <ListItemText primary="Servis" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/AparmetsRooms" style={navLinkStyles}>
                                <ListItem sx={{ "&:hover": { color: "#FC456A" } }} disablePadding>
                                    <ListItemButton sx={{ ":hover": { backgroundColor: "white" } }} >
                                        <ListItemText primary="AparmentsRooms" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/Blog" style={navLinkStyles}>
                                <ListItem sx={{ "&:hover": { color: "#FC456A" } }} disablePadding>
                                    <ListItemButton sx={{ ":hover": { backgroundColor: "white" } }} >
                                        <ListItemText primary="Blog" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                            <NavLink to="/Contact" style={navLinkStyles}>
                                <ListItem sx={{ "&:hover": { color: "#FC456A" } }} disablePadding>
                                    <ListItemButton sx={{ ":hover": { backgroundColor: "white" } }} >
                                        <ListItemText primary="Contact" />
                                    </ListItemButton>
                                </ListItem>
                            </NavLink>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}