import { TextField, Typography } from '@mui/material';

function CustomTextField({ label, value, onChange, errorMesssage = "", isReuired = false }) {
    return (
        <>
            <TextField
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
                }}
            />  
            <span style={{ display: 'block', color: 'red', textAlign: 'left', fontSize: "14px" }}>
                {errorMesssage === '' ? null : errorMesssage}
            </span>



        </>
    );
}

export default CustomTextField;