import React from 'react';
import { Button, IconButton, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const ImageUploader = ({ pimages, setPimages }) => {

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setPimages(selectedFiles);
    };

    return (
        <div>
            <input
                accept="image/*"
                id="image-uploader"
                type="file"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <label htmlFor="image-uploader">
                <Button
                    variant="contained"
                    component="span"
                    startIcon={<AddIcon />}
                    style={{ backgroundColor: "black" }}

                >
                    Upload Images
                </Button>
            </label>

            <div style={{ marginTop: '10px' }}>
                {pimages.map((image, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton size="small">
                            <img
                                src={URL.createObjectURL(image)}
                                alt={`Uploaded ${index}`}
                                style={{ height: '30px', marginRight: '10px' }}
                            />
                        </IconButton>
                        <Typography variant="body2" noWrap>
                            {image.name}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageUploader;
