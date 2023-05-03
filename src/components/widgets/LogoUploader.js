import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import PgLogo from "../../images/pglogo.jpg"

const LogoUploader = ({ plogo, setPlogo }) => {
    const [logoPreview, setLogoPreview] = useState(plogo);

    const handleLogoChange = (event) => {
        console.log(event);
        setPlogo(event.target.files[0]);
        setLogoPreview(URL.createObjectURL(event.target.files[0]));
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
                    src={logoPreview === null ? PgLogo : logoPreview}
                    alt="plogo preview"
                    width="200"
                    height="200"
                />
            </Box>
        </Box>
    );
};

export default LogoUploader;
