import { Button, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomDropDown2 = ({
    label,
    options,
    selectedFilters,
    handleFilterClick,
    handleFilterClose,
    anchorEl,
    setAnchorEl,
    height,
    width,
    color,
    marginLeft = "20px",
    marginRight = "20px",
}) => { 

    const styles = {
        buttonStyle: {
            backgroundColor: color,
            color: 'black',
            height: height,
            width: width,
        },
    };

    return (
        <div style={{ marginLeft: marginLeft, marginRight: marginRight }}>
            <Button
                style={styles.buttonStyle}
                variant="outlined"
                onClick={(event) => handleFilterClick(event, label)}
                endIcon={<ExpandMoreIcon />}
            >
                {selectedFilters[label] ? selectedFilters[label] : label}
            </Button>

            <Menu
                anchorEl={anchorEl[label]}
                open={Boolean(anchorEl[label])}
                onClose={() => setAnchorEl(prevState => ({ ...prevState, [label]: null }))}
            >
                {options.map(option => (
                    <MenuItem
                        key={option}
                        onClick={() => handleFilterClose(label, option)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default CustomDropDown2;
