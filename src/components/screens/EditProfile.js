import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import ApiURL from "../GetUrl";
import {
    Box,
    Button,
    CircularProgress,
    Container,
    TextField,
    Typography,
} from '@mui/material';
import ProfilePhotoEdit from '../widgets/ProfilePhotoEdit';


import { storage } from "../FirebaseConfig.js"; // import your Firebase configuration here
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import imageCompression from "browser-image-compression";

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
    submitButton: {
        marginBottom: 15
    }
};

const EditProfile = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [userId, setUserId] = useState("")
    const [profileFile, setProfileFile] = useState(null)
    const { username } = useParams();

    const [values, setValues] = useState({
        name: '',
        phone: '',
        bio: '',
        github: '',
        linkedIn: '',
        passoutYear: '',
        college: '',
        branch: '',
        imageUrl: '',
    });




    const getUserByUsername = useCallback(async (username) => {
        try {
            let result = await fetch(`${ApiURL}/user/${username}`);
            result = await result.json();

            setUserId(result._id);

            setValues({
                ...values,
                name: result.name,
                phone: result.phone,
                bio: result.bio,
                github: result.github,
                linkedIn: result.linkedIn,
                college: result.college,
                branch: result.branch,
                passoutYear: result.passoutYear,
                imageUrl: result.imageUrl,
            });
        } catch (error) {
            console.log("Error while fetching data:", error);
        }
    }, [setUserId, setValues, values]);

    useEffect(() => {
        getUserByUsername(username);
    }, [getUserByUsername, username]);


    const handleChange = (prop) => (event) => {
        if (values.hasOwnProperty(prop)) {
            setValues({ ...values, [prop]: event.target.value });
        }
    };


    async function uploadProfilePhoto() {
        let img;
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };
        if (!(profileFile))
            return "";

        try {
            setLoading(true);
            img = await imageCompression(profileFile, options);

            // Upload images to Firebase Storage
            const storageRef = ref(
                storage,
                `profile/${Date.now().toString()}`
            );
            const metadata = { contentType: img.type };
            await uploadBytesResumable(storageRef, img, metadata);
            const urlC = await getDownloadURL(storageRef);

            return urlC;
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        let imageUrl = await uploadProfilePhoto();

        try {
            await fetch(`${ApiURL}/user/update/${userId}`, {
                method: "PATCH",
                body: JSON.stringify({ ...values, imageUrl }),
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
                }
            })
            setLoading(false);
            navigate(`/user/${username}`)
        } catch (err) {
            console.log(err);
        }
        setLoading(false)
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

                <ProfilePhotoEdit
                    imageUrl={values.imageUrl}
                    profileFile={profileFile}
                    setProfileFile={setProfileFile}
                />

                <Typography style={{ margin: 10 }} component="h1" variant="h5">
                    Edit Profile
                </Typography>
                <Box component="form" style={styles.form} onSubmit={handleSubmit}>
                    {/* <div style={{ display: 'flex' }}>
                        <TextField
                            style={styles.input}
                            fullWidth
                            id="name"
                            label="Name"
                            value={values.name}
                            onChange={handleChange('name')}
                        />
                    </div> */}
                    <div style={{ display: 'flex' }}>

                        <TextField
                            style={styles.input}
                            fullWidth
                            id="name"
                            label="Name"
                            value={values.name || ''}
                            onChange={handleChange('name')}
                            InputLabelProps={{
                                shrink: values.name !== ''
                            }}
                            autoFocus={true}
                        />
                    </div>

                    <div style={{ display: 'flex' }}>

                        <TextField
                            style={styles.input}
                            fullWidth
                            id="phone"
                            label="phone"
                            value={values.phone || ''}
                            onChange={handleChange('phone')}
                            InputLabelProps={{
                                shrink: values.phone !== ''
                            }}
                        />

                        <TextField
                            style={styles.input}
                            fullWidth
                            id="branch"
                            label="Branch"
                            value={values.branch || ''}
                            onChange={handleChange('branch')}
                            InputLabelProps={{
                                shrink: values.branch !== ''
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>

                        <TextField
                            style={styles.input}
                            fullWidth
                            id="github"
                            label="GitHub"
                            value={values.github || ''}
                            onChange={handleChange('github')}
                            InputLabelProps={{
                                shrink: values.github !== ''
                            }}
                        />
                        <TextField
                            style={styles.input}
                            fullWidth
                            id="linkedIn"
                            label="LinkedIn"
                            value={values.linkedIn || ''}
                            onChange={handleChange('linkedIn')}
                            InputLabelProps={{
                                shrink: values.linkedIn !== ''
                            }}
                        />

                    </div>
                    <div style={{ display: 'flex' }}>
                        <TextField
                            style={styles.input}
                            fullWidth
                            id="passoutYear"
                            label="Passout Year"
                            value={values.passoutYear || ''}
                            onChange={handleChange('passoutYear')}
                            InputLabelProps={{
                                shrink: values.passoutYear !== ''
                            }}
                        />
                        <TextField
                            style={styles.input}
                            fullWidth
                            id="college"
                            label="College"
                            value={values.college || ''}
                            onChange={handleChange('college')}
                            InputLabelProps={{
                                shrink: values.college !== ''
                            }}
                        />

                    </div>
                    <TextField
                        style={{ width: 430, margin: 10 }}
                        fullWidth
                        id="bio"
                        multiline
                        rows={4}
                        label="Bio"
                        value={values.bio || ''}
                        onChange={handleChange('bio')}
                        InputLabelProps={{
                            shrink: values.bio !== ''
                        }}
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