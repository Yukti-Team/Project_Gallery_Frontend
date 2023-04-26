import Button from '@mui/material/Button';


const MyButton = ({ text, color, onClick }) => {

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
            type="submit"
            onClick={onClick}
        >
            {text}
        </Button>

    )
}

export default MyButton;