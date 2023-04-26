import { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';


const styles = {
    checkbox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '0px',
        marginTop: "20px",
    },
};

const PrivateCheckbox = (isPrivate, setIsPrivate) => {

    const handlePrivateChange = (e) => {
        setIsPrivate(e.target.checked);
    };

    return (
        <FormControlLabel

            control={
                <Checkbox
                    checked={isPrivate}
                    onChange={handlePrivateChange}
                    color="primary"
                />
            }
            style={styles.checkbox}
            label="Do you want this project to remain private?"
        />
    );
};

export default PrivateCheckbox;
