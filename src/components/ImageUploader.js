import React, { useState } from 'react';
import { Typography } from '@mui/material';
import FileBase64 from 'react-file-base64';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2px',
        marginBottom: '20%',
    },
    input: {
        display: 'none',
    },
    previewContainer: {
        width: '100%',
        height: '0',
        paddingTop: '56.25%', 
        position: 'relative',
        marginBottom: '20px',
    },
    preview: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
};

const ImageUploader = () => {
    const [file, setFile] = useState(null);
    const [aspectRatioError, setAspectRatioError] = useState('');
    const [crop, setCrop] = useState({ aspect: 16 / 9 });

    const handleImageUpload = (file) => {
        const img = new Image();
        img.src = file.base64;

        img.onload = () => {
            setFile(file);
        };
    };

    const handleCropComplete = (croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels);
        // handle the cropped image here
    };

    const handleAspectRatioChange = (event) => {
        const value = event.target.value;
        let aspectRatio = 1;
        switch (value) {
            case '9:16':
                aspectRatio = 9 / 16;
                break;
            case '1:1':
                aspectRatio = 1;
                break;
            default:
                aspectRatio = 16 / 9;
        }
        setCrop({ aspect: aspectRatio });
    };

    return (
        <div style={styles.container}>
            <Typography variant="h6">
                Upload an image
            </Typography>
            <FileBase64 multiple={false} onDone={handleImageUpload} />
            {file && (
                <>
                    <div style={styles.previewContainer}>
                        <img style={styles.preview} src={file.base64} alt="Preview" />
                    </div>
                    <ReactCrop
                        src={file.base64}
                        crop={crop}
                        onChange={(newCrop) => setCrop(newCrop)}
                        onComplete={handleCropComplete}
                    />
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="subtitle1">
                            Select aspect ratio:
                        </Typography>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="aspectRatio"
                                    value="16:9"
                                    checked={crop.aspect === 16 / 9}
                                    onChange={handleAspectRatioChange}
                                />
                                16:9
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="aspectRatio"
                                    value="9:16"
                                    checked={crop.aspect === 9 / 16}
                                    onChange={handleAspectRatioChange}
                                />
                                9:16
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="aspectRatio"
                                    value="1:1"
                                    checked={crop.aspect}
                                    onChange={(e) => setCrop({ ...crop, aspect: e.target.value })}
                                />
                                1:1
                            </label>
                        </div>
                    </div>
                    <ReactCrop
                        src={file.base64}
                        crop={crop}
                        onChange={(newCrop) => setCrop(newCrop)}
                        onComplete={handleCropComplete}
                    />
                </>
            )}
            {aspectRatioError && (
                <Typography variant="body1" color="error">
                    {aspectRatioError}
                </Typography>
            )}
        </div>
    );
};

export default ImageUploader;