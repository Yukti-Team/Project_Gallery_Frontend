import React, { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    TextField,
    Typography,
} from '@mui/material';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        marginBottom: 2,
    },
    input: {
        marginBottom: 2,
    },
    button: {
        marginTop: 2,
    },
};

const EditProfile = () => {
    const [values, setValues] = useState({
        username: '',
        name: '',
        email: '',
        phone: '',
        about: '',
        github: '',
        linkedin: '',
        passoutYear: '',
        college: '',
        batch: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to submit form data to backend
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 8,
                }}
            >
                <Avatar
                    alt="Profile Picture"
                    src="https://via.placeholder.com/150"
                    style={styles.avatar}
                />
                <Typography component="h1" variant="h5">
                    Edit Profile
                </Typography>
                <Box component="form" style={styles.form} onSubmit={handleSubmit}>
                    <TextField
                        style={styles.input}
                        fullWidth
                        id="username"
                        label="Username"
                        value={values.username}
                        onChange={handleChange('username')}
                    />
                    <TextField
                        style={styles.input}
                        fullWidth
                        id="name"
                        label="Name"
                        value={values.name}
                        onChange={handleChange('name')}
                    />
                    <TextField
                        style={styles.input}
                        fullWidth
                        id="email"
                        label="Email"
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                    <TextField
                        style={styles.input}
                        fullWidth
                        id="phone"
                        label="Phone"
                        value={values.phone}
                        onChange={handleChange('phone')}
                    />
                    <TextField
                        style={styles.input}
                        fullWidth
                        id="about"
                        label="About"
                        value={values.about}
                        onChange={handleChange('about')}
                    />
                    <TextField
                        style={styles.input}
                        fullWidth
                        id="github"
                        label="GitHub"
                        value={values.github}
                        onChange={handleChange('github')}
                    />
                    <TextField
                        style={styles.input}
                        fullWidth
                        id="linkedin"
                        label="LinkedIn"
                        value={values.linkedin}
                        onChange={handleChange('linkedin')}
                    />
                    <TextField
                        style={styles.input}
                        fullWidth
                        id="passout-year"
                        label="Passout Year"
                        value={values.passoutYear}
                        onChange={handleChange('passoutYear')}
                    />
                    <TextField
                        style={styles.input}
                        fullWidth
                        id="college"
                        label="College"
                        value={values.college}
                        onChange={handleChange('college')}
                    />
                    <TextField
                        style={styles.input}
                        fullWidth
                        id="batch"
                        label="Batch"
                        value={values.batch
                        }
                        onChange={handleChange('batch')}
                        variant="outlined"
                    />
                    <Button
                        style={styles.submitButton}
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        Save Changes
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default EditProfile;