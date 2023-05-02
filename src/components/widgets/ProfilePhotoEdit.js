import React from 'react';
import { Box, Avatar, IconButton } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const ProfilePhotoEdit = ({ imageUrl, profileFile, setProfileFile }) => {

    const handleImageChange = (event) => {
        setProfileFile(event.target.files[0]);
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            {
                (imageUrl !== "" && profileFile === null) ?
                    <Avatar
                        sx={{ width: 120, height: 120, mt: 2 }}
                        alt={imageUrl + Math.floor(Math.random()) * 100 + 7}
                        src={imageUrl}
                    />
                    :
                    (
                        profileFile === null ? (
                            <Avatar
                                sx={{ width: 120, height: 120, mt: 2 }}
                                alt="Profile Photo"
                                src={profileFile}
                            />
                        )
                            : (
                                <Avatar
                                    sx={{ width: 120, height: 120, mt: 2 }}
                                    alt="Profile Photo"
                                    src={URL.createObjectURL(profileFile)}
                                />
                            )
                    )
            }

            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="image-uploader"
                type="file"
                onChange={handleImageChange}
            />
            <label htmlFor="image-uploader">
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        zIndex: 1,
                        mt: 2,
                        backgroundColor: 'white',
                        '&:hover': {
                            backgroundColor: 'white',
                        },
                    }}
                >
                    <PhotoCameraIcon fontSize="large" />
                </IconButton>
            </label>
        </Box>

    );
};

export default ProfilePhotoEdit;
