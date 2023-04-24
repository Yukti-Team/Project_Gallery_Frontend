import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
 
const StyledTextField = styled(TextField)({ 
    width: "40%",
    margin: "auto",
    "& .MuiOutlinedInput-root": {
        borderRadius: 0,
        height: "40px",
        marginBottom: "30px",
        marginTop: "30px",
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#000"
        }
    },
    "& .MuiOutlinedInput-input": {
        paddingLeft: "10px"
    },
    "& .MuiOutlinedInput-adornedStart": {
        paddingLeft: "10px"
    },
    "& .MuiInputAdornment-positionStart": {
        marginRight: "0px"
    }
});

const Container = styled("div")({
    marginLeft: "40px",
    marginRight: "40px"
});

export { StyledTextField, Container }