import { TextField, Typography } from '@mui/material';

function CustomTextField({ key, label, value, onChange, readOnly = false, errorMessage = "", isReuired = false }) {
    console.log("errorMessage");
    console.log(errorMessage);
    return (
        <>
            <TextField
                key={key}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={errorMessage !== ''}
                id={label.toLowerCase()}
                label={label}
                name={label.toLowerCase()}
                value={value}
                onChange={onChange}
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