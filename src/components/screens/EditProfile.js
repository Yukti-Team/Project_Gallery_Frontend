// import React, { useState } from 'react';
// import {
//     Avatar,
//     Box,
//     Button,
//     Container,
//     TextField,
//     Typography,
// } from '@mui/material';

// const styles = {
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         width: 120,
//         height: 120,
//         marginBottom: 2,
//     },
//     input: {
//         marginBottom: 2,
//     },
//     button: {
//         marginTop: 2,
//     },
// };

// const EditProfile = () => {
//     const [values, setValues] = useState({
//         username: '',
//         name: '',
//         email: '',
//         phone: '',
//         about: '',
//         github: '',
//         linkedIn: '',
//         passoutYear: '',
//         college: '',
//         batch: '',
//     });

//     const handleChange = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Add logic to submit form data to backend
//     };

//     return (
//         <Container maxWidth="xs">
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     marginTop: 8,
//                 }}
//             >
//                 <Avatar
//                     alt="Profile Picture"
//                     src="https://via.placeholder.com/150"
//                     style={styles.avatar}
//                 />
//                 <Typography component="h1" variant="h5">
//                     Edit Profile
//                 </Typography>
//                 <Box component="form" style={styles.form} onSubmit={handleSubmit}>
//                     {/* <TextField
//                         style={styles.input}
//                         fullWidth
//                         id="username"
//                         label="Username"
//                         value={values.username}
//                         onChange={handleChange('username')}
//                     /> */}
//                     <TextField
//                         style={styles.input}
//                         fullWidth
//                         id="name"
//                         label="Name"
//                         value={values.name}
//                         onChange={handleChange('name')}
//                     />
//                     {/* <TextField
//                         style={styles.input}
//                         fullWidth
//                         id="email"
//                         label="Email"
//                         value={values.email}
//                         onChange={handleChange('email')}
//                     /> */}
//                     <TextField
//                         style={styles.input}
//                         fullWidth
//                         id="phone"
//                         label="Phone"
//                         value={values.phone}
//                         onChange={handleChange('phone')}    
//                     />
//                     <TextField
//                         style={styles.input}
//                         fullWidth
//                         id="about"
//                         label="About"
//                         value={values.about}
//                         onChange={handleChange('about')}
//                     />
//                     <TextField
//                         style={styles.input}
//                         fullWidth
//                         id="github"
//                         label="GitHub"
//                         value={values.github}
//                         onChange={handleChange('github')}
//                     />
//                     <TextField
//                         style={styles.input}
//                         fullWidth
//                         id="linkedIn"
//                         label="linkedIn"
//                         value={values.linkedIn}
//                         onChange={handleChange('linkedIn')}
//                     />
//                     <TextField
//                         style={styles.input}
//                         fullWidth
//                         id="passout-year"
//                         label="Passout Year"
//                         value={values.passoutYear}
//                         onChange={handleChange('passoutYear')}
//                     />
//                     <TextField
//                         style={styles.input}
//                         fullWidth
//                         id="college"
//                         label="College"
//                         value={values.college}
//                         onChange={handleChange('college')}
//                     />
//                     <TextField
//                         style={styles.input}
//                         fullWidth
//                         id="batch"
//                         label="Batch"
//                         value={values.batch
//                         }
//                         onChange={handleChange('batch')}
//                         variant="outlined"
//                     />
//                     <Button
//                         style={styles.submitButton}
//                         variant="contained"
//                         color="primary"
//                         onClick={handleSubmit}
//                     >
//                         Save Changes
//                     </Button>
//                 </Box>
//             </Box>
//         </Container>
//     );
// }

// export default EditProfile;

import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import ApiURL from "../GetUrl";
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Container,
    TextField,
    Typography,
} from '@mui/material';

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 800,
    },
    avatar: {
        width: 120,
        height: 120,
        marginBottom: 7,
    },
    input: {
        margin: 7,

    },
    button: {
        marginTop: 5,
    },
    // about: {
    //     width: 500,
    //     height: 20,
    //     margin: 3, 
    //     marginBottom: 2, 
    // }
};

const EditProfile = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const { username } = useParams();
    const [user, setUser] = useState({});
    const [values, setValues] = useState({
        username: '',
        name: '',
        email: '',
        phone: '',
        bio: '',
        github: '',
        linkedIn: '',
        passoutYear: '',
        college: '',
        branch: '',
    });

    useEffect(() => {
        getUserByUsername(username);
    }, [username])


    const getUserByUsername = async (username) => {
        // console.log("username");
        // console.log(username);

        try {
            let result = await fetch(`${ApiURL}/user/${username}`);
            result = await result.json();

            // console.log(result);
            setUser(result);
            setValues(result);
        } catch (error) {
            console.log("Error while fetching data:", error);
        }
    }


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Add logic to submit form data to backend
        setLoading(true);
        try {
            console.log(JSON.stringify(values));
            await fetch(`${ApiURL}/user/update/${values._id}`, {
                method: "PATCH",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }
            })
            setLoading(false);
            navigate(`/user/${username}`)
        } catch (err) {
            setLoading(false)
            console.log(err);
        }
    };

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 1,

                }}
            >
                <Avatar
                    alt="Profile Picture"
                    src="https://via.placeholder.com/150"

                    style={styles.avatar}

                />
                <Typography style={{ margin: 10 }} component="h1" variant="h5">
                    Edit Profile
                </Typography>
                <Box component="form" style={styles.form} onSubmit={handleSubmit}>
                    <div style={{ display: 'flex' }}>
                        <TextField
                            style={styles.input}
                            
                            fullWidth
                            id="name"
                            label="Name"
                            value={values.name}
                            onChange={handleChange('name')}
                        />
                    </div>
                    {/*  */}
                    <div style={{ display: 'flex' }}>
                        <TextField
                            style={styles.input}
                            fullWidth
                            id="username"
                            disabled
                            value={values.username}
                        />

                        <TextField
                            style={styles.input}
                            fullWidth
                            id="email"
                            disabled
                            // label='email'

                            value={values.email}
                        // onChange={handleChange('email')}
                        />
                    </div>

                    <div style={{ display: 'flex' }}>
                        <TextField
                            style={styles.input}
                            fullWidth
                            id="phone"
                            label="phone"
                            value={values.phone}
                            onChange={handleChange('phone')}
                        />
                        <TextField
                            style={styles.input}
                            fullWidth
                            id="branch"
                            label='Branch'
                            value={values.branch
                            }
                            onChange={handleChange('branch')}
                            variant="outlined"
                        />

                    </div>
                    <div style={{ display: 'flex' }}>
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
                            id="linkedIn"
                            label="linkedIn"
                            value={values.linkedIn}
                            onChange={handleChange('linkedIn')}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <TextField
                            style={styles.input}
                            fullWidth
                            id="passout-year"
                            label="Passout Year"
                            value={values.passoutYear}
                            onChange={handleChange('passout-year')}
                        />
                        <TextField
                            style={styles.input}
                            fullWidth
                            id="college"
                            label="College"
                            value={values.college}
                            onChange={handleChange('college')}
                        />
                    </div>

                    <TextField
                        style={{ width: 430, margin: 10 }}
                        // style={{margin: 4}}
                        id="bio"
                        label="Bio"
                        multiline
                        rows={4}
                        value={values.about}
                        onChange={handleChange('bio')}
                    />

                    <div style={{ height: 39 }}>

                    </div>
                    <Button
                        style={styles.submitButton}

                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                    >
                        {loading && <CircularProgress style={{ color: "white" }} size={24} />}
                        {!loading && "Save"}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default EditProfile;

// console.log('hello')