import { TextField, Typography } from '@mui/material';

function CustomTextField({ key, label, value, onChange, isRequired = true, readOnly = false, errorMessage = "", isReuired = false }) {
    return (
        <>
            <TextField
                key={key}
                variant="outlined"
                margin="normal"
                fullWidth
                error={errorMessage !== ''}
                id={label.toLowerCase()}
                label={label}
                name={label.toLowerCase()}
                value={value}
                onChange={onChange}
                required={isRequired}
                InputProps={{
                    startAdornment: isReuired ? <Typography>@</Typography> : null,
                    readOnly: readOnly,
                }}
            />
            <span style={{
                display: 'block',
                color: 'red',
                textAlign: 'left',
                fontSize: "14px"
            }}>
                {errorMessage === '' ? null : errorMessage}
            </span>
        </>
    );
}

export default CustomTextField;