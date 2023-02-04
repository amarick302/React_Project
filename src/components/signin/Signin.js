import Navbar from "../navBar/Navbar";
import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./Signin.css"
import { useContext } from "react";
// import { SetMealTwoTone } from "@mui/icons-material";
import ProductPage from "../../ProductPage";
import Context from "../../Context";
/* eslint-disable */
const theme = createTheme();
function SignIn() {
    const{setIsActive,element, setElement}=useContext(Context);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, p: 4 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address*"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password*"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={async () => {
                                const content = {
                                    email: document.getElementById('email').value,
                                    password: document.getElementById('password').value

                                }
                                const rawResponse = await fetch('http://localhost:3000/login', {
                                    method: "post",
                                    body: JSON.stringify(content),
                                    headers: {
                                        "Accept": "application/json",
                                        "Content-Type": "application/json;charset=UTF-8"
                                    }
                                })
                                const result = await rawResponse.json();
                                if (result.length>0) {
                                    setIsActive(true);
                                    setElement(['Logout'])
                                    console.log(result);
                                }
                            }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/signup">
                                    <a className="text-black">
                                        Don't have an account? Sign Up
                                    </a>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}
const Signin = () => {
    const{isActive}=useContext(Context);
    return (
        <div>
            {isActive === false ?(
                <React.Fragment>
                    <Navbar />
                    <SignIn />
                </React.Fragment>
            ):(
                <React.Fragment>
                    <ProductPage/>
                </React.Fragment>
            )}
        </div>
    )
}
export default Signin;