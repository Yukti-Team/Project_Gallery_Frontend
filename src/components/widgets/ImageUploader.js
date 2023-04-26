import React, { useState } from 'react';
import { Button, IconButton, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const ImageUploader = ({pimage, setPimage}) => {

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setPimage(selectedFiles);
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
                    style={{ backgroundColor: "black" }}
                    startIcon={<AddIcon />}
                >
                    Upload Images
                </Button>
            </label>

            <div style={{ marginTop: '10px' }}>
                {pimage.map((image, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton size="small">
                            <img
                                src={URL.createObjectURL(image)}
                                alt={`Upload ${index}`}
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
