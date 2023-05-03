import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomDropdown2 = ({
    label,
    options,
    selectedFilters,
    setSelectedFilters,
    height,
    width,
    color,
    marginLeft,
    marginRight,
}) => {

    const styles = {
        buttonStyle: {
            backgroundColor: color,
            color: 'black',
            height: height,
            width: width,
        },
        clearButtonStyle: {
            backgroundColor: 'red',
            color: 'white',
            marginLeft: '20px',
            border: "none",
            marginRight: '20px'
        },
    };


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [label]: option,
        }));
        setAnchorEl(null);
    };

    // const handleClearFilters = () => {
    //     setSelectedFilters({});
    //     setAnchorEl({});
    // }



    return (
        <div style={{ marginLeft, marginRight }}>
            <Button
                variant="outlined"
                onClick={handleClick}
                endIcon={<ExpandMoreIcon />}
                style={styles.buttonStyle}
            >
                {selectedFilters[label] || label}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {options.map((option) => (
                    <MenuItem key={option} onClick={() => handleClose(option)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>


        </div>
    );
};

export default CustomDropdown2;
