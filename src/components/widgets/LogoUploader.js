import React from 'react';
import { Button, Box } from '@mui/material';
import PgLogo from "../../images/pglogo.jpg"


const LogoUploader = ({ plogo, setPlogo }) => {

    const handleLogoChange = (event) => {
        setPlogo(event.target.files[0]);
    };

    return (
        <Box>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="logo-uploader"
                type="file"
                onChange={handleLogoChange}
            />
            <label htmlFor="logo-uploader">
                <Button
                    variant="contained"
                    component="span"
                    style={{ backgroundColor: "black" }}
                >
                    Upload Logo*
                </Button>
            </label>

            <Box mt={2}>
                <img
                    src={plogo === null ? PgLogo : URL.createObjectURL(plogo)}
                    alt="plogo preview"
                    width="200"
                    height="200"
                />
            </Box>

        </Box>
    );
};

export default LogoUploader;
