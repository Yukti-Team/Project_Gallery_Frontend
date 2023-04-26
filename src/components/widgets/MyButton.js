import Button from '@mui/material/Button';

 
const MyButton = ({ text, color, onClick }) => {
    function handleClick() {
        if (onClick)
            onClick();
    }
    const styles = {
        button: {
            backgroundColor: color,
            marginBottom: "3%",
        },
    }

    return (
        <Button
            variant="contained"
            component="span"
            style={styles.button}
            onClick={handleClick}
        >
            {text}
        </Button>

    )
}

export default MyButton;