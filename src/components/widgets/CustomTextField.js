import { TextField, Typography } from '@mui/material';

function CustomTextField({ key, label, value, onChange, readOnly = false, errorMesssage = "", isReuired = false }) {
    return (
        <>
            <TextField
                key={key}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                error={errorMesssage !== ''}
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
            <span style={{ display: 'block', color: 'red', textAlign: 'left', fontSize: "14px" }}>
                {errorMesssage === '' ? null : errorMesssage}
            </span>



        </>
    );
}

export default CustomTextField;