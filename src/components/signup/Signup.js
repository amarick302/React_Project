import * as React from 'react';
import { Link } from 'react-router-dom';
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
import Navbar from "../navBar/Navbar";
import "./Signup.css"
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name*"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name*"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address*"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password*"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirm-password"
                                    label="Confirm Password*"
                                    type="password"
                                    id="confirm-password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="contactNumber"
                                    label="Contact Number*"
                                    type="Number"
                                    id="contactNumber"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Link to="/login" method="post">
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={async () => {
                                    const content = {
                                        email: document.getElementById('email').value,
                                        fName: document.getElementById('firstName').value,
                                        lName: document.getElementById('lastName').value,
                                        password: document.getElementById('password').value,
                                        contact: document.getElementById('contactNumber').value

                                    }
                                    const rawResponse=await fetch('http://localhost:3000/registration', {
                                        method: "post",
                                        body: JSON.stringify(content),
                                        headers: {
                                            "Accept": "application/json",
                                            "Content-Type": "application/json;charset=UTF-8"
                                        }
                                    })
                                    const result=await rawResponse.json();
                                    if(rawResponse.ok){
                                        console.log(result);
                                    }
                                }}
                            >
                                Sign Up
                            </Button>
                        </Link>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/login'>
                                    {/* This text-black is the bootstrap class for making the text color as black */}
                                    <p className='text-black'>
                                        Already have an account? Sign in
                                    </p>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
const Signup = () => {
    return (
        <React.Fragment>
            <Navbar />
            <SignUp />
        </React.Fragment>
    )
}
export default Signup;