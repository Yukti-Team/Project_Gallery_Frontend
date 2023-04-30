import {
    Snackbar,
    Alert,
    Avatar,
    Button,
    Container,
    CssBaseline,
    Typography,
    CircularProgress,
    Grid,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomTextField from "../widgets/CustomTextField";
import ApiURL from '../GetUrl'

const styles = {
    paper: {
        marginTop: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: '4px',
        backgroundColor: '#000',
    },
    form: {
        width: '100%',
        marginTop: '4px',
    },
    submit: {
        marginTop: "20px",
        backgroundColor: "black"

    },
};

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/')
        }
    })

    const handleLogin = async (event) => {
        event.preventDefault();


        console.log(email, password);
        if (password === '') {
            setErrorMessage("Password is required");
            return;
        }
        if (email === '') {
            setErrorMessage("Email is required");
            return;
        }

        setLoading(true);
        try {
            let result = await fetch(`${ApiURL}/user/login`, {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            result = await result.json();
            console.log(result);
            if (result.statusCode === 400) {

                setLoading(false);
                setErrorMessage(result.message);

                return;
            }


            if (result.user.username) {
                setLoading(false);
                localStorage.setItem("user", JSON.stringify(result.user));
                navigate('/')
            } else {
                setLoading(false);
                setErrorMessage("Something went wrong")
            }
        } catch (error) {
            console.log(error.message);
        }

    }


    return (
        <>
            <Snackbar
                open={errorMessage !== ''}
                autoHideDuration={2000}
                onClose={() => setErrorMessage('')}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    elevation={6}
                    variant="filled"
                    onClose={() => setErrorMessage('')}
                    severity="error"
                >
                    {errorMessage}
                </Alert>
            </Snackbar>

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={styles.paper}>
                    <Avatar style={styles.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form style={styles.form} noValidate onSubmit={handleLogin}>
                        <CustomTextField
                            label="Email Address/Username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <CustomTextField
                            label="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); }}
                        />



                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={styles.submit}
                        >
                            {loading && <CircularProgress style={{ color: "white" }} size={24} />}
                            {!loading && 'Login'}
                        </Button>
                    </form>
                </div>
            </Container>

            <Grid container justifyContent="center" style={{ margin: "20px 0 0 0" }}>
                <Grid item>
                    <Link
                        to="/signup" variant="body2">
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}

export default Login;