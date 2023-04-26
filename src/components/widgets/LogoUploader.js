import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import PgLogo from "../../images/pglogo.jpg"

const LogoUploader = () => { 
    const [logo, setLogo] = useState(null);

    const handleLogoChange = (event) => {
        setLogo(URL.createObjectURL(event.target.files[0]));
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
                    Upload Logo
                </Button>
            </label>

            <Box mt={2}>
                <img src={logo == null ? PgLogo : logo} alt="logo preview" width="200" height="200" />

            </Box>

        </Box>
    );
};

export default LogoUploader;
