import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiURL from '../GetUrl'
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
import CustomTextField from "../widgets/CustomTextField";

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

const SignUp = () => {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState("");

    const [errorMessage, setErrorMessage] = useState('');


    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })

    const handleSignUp = async (event) => {
        event.preventDefault();

        if (username === '') {
            setErrorMessage("Username is required");
            return;
        }
        if (email === '') {
            setErrorMessage("Email is required");
            return;
        }
        if (password === '') {
            setErrorMessage("Password is required");
            return;
        }

        if (usernameError !== "" || emailError !== "") {
            return;
        }

        setLoading(true);
        try {
            let result = await fetch(`${ApiURL}/user/check-username`, {
                method: 'post',
                body: JSON.stringify({ username: username }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            result = await result.json()


            if (result.success === false) {
                setLoading(false);

                setUsernameError(result.message);
            } else {
                setUsernameError("");

                const newUser = {
                    username,
                    password,
                    email,
                    name: "",
                    phone: "",
                    bio: "",
                    github: "",
                    linkedIn: "",
                    tags: [],
                    college: "",
                    branch: "",
                    batch: "",
                    totalProjects: 0
                }

                let signUpResult = await fetch(`${ApiURL}/user/signup`, {
                    method: 'post',
                    body: JSON.stringify(newUser),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })

                signUpResult = await signUpResult.json()
                const statusCode = signUpResult.statusCode;

                if (statusCode === 401) {
                    setLoading(false);

                    setErrorMessage(signUpResult.message);
                }
                else if (statusCode === 200) {
                    setLoading(false);

                    localStorage.setItem("user", JSON.stringify(signUpResult.user));
                    if (signUpResult) {
                        // navigate('/')
                    }
                }
            }
        } catch (error) {
            setLoading(false);

            console.log(error.message);
        }
    }


    const validateUsername = (e) => {
        const usernameValue = e.target.value;
        setUserName(usernameValue);


        if (usernameValue.length < 4) {
            setUsernameError("Username should be at least 4 characters long");
        } else if (/[A-Z]/.test(usernameValue)) {
            setUsernameError("Username should not contain capital letters");
        } else if (/\s/.test(usernameValue)) {
            setUsernameError("Username should not contain spaces");
        } else {
            setUsernameError("");
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);

        if (email === "") {
            setEmailError("Email is required.");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Invalid email address.");
        } else {
            setEmailError("");
        }
    };

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
                        Sign up
                    </Typography>
                    <form style={styles.form} noValidate onSubmit={handleSignUp}>
                        <CustomTextField
                            label="Username"
                            value={username}
                            isReuired={true}
                            errorMessage={usernameError}
                            onChange={validateUsername}
                        />
                        <CustomTextField
                            label="Email Address"
                            value={email}
                            errorMessage={emailError}
                            onChange={validateEmail}
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
                            {!loading && 'Sign Up'}
                        </Button>
                    </form>
                </div>
            </Container>

            <Grid container justifyContent="center" style={{ margin: "20px 0 0 0" }}>
                <Grid item>
                    <Link
                        to="/login" variant="body2">
                        Already have an account? Login
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}

export default SignUp;