import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const filterOptions = [
    {
        label: 'Branch', 
        options: ['CSE', 'IT', 'Entc', 'Mech', 'Civil', 'Electrical'],
    },
    { 
        label: 'Domain',
        options: ['Web Dev', 'Android Dev', 'ML', 'AI'],
    },
    {
        label: 'Tech Stack',
        options: ['React', 'Node', 'Flutter'],
    },
    {
        label: 'Year',
        options: ['2023', '2022', '2021'],
    },
    {
        label: 'Status',
        options: ['Pending', 'In Progress', 'Completed'],
    },
    {
        label: 'Rating',
        options: ['5 star', '4 star', '3 star', '2 star', '1 star'],
    },
];

const styles = {
    divStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    lableRowStyle: {
        marginLeft: '20px',
        marginRight: '20px'

    },
    buttonStyle: {
        backgroundColor: '#faf1aa',
        color: "black",
        // border: "1px black solid",
    },
    clearButtonStyle: {
        backgroundColor: 'red',
        color: 'white',
        marginLeft: '20px',
        border: "none",
        marginRight: '20px'
    },
}

function FilterRow() {
    const [selectedFilters, setSelectedFilters] = useState({});
    const [anchorEl, setAnchorEl] = useState({});

    const handleFilterClick = (event, label) => {
        setAnchorEl(prevState => ({
            ...prevState,
            [label]: event.currentTarget,
        }));
    };

    const handleFilterClose = (label, option) => {
        setAnchorEl(prevState => ({
            ...prevState,
            [label]: null,
        }));
        setSelectedFilters(prevState => ({
            ...prevState,
            [label]: option,
        }));
    };

    const handleClearFilters = () => {
        setSelectedFilters({});
        setAnchorEl({});
    }

    return (
        <div style={styles.divStyle}>
            {filterOptions.map(({ label, options }) => (
                <div key={label} style={styles.lableRowStyle}>
                    <Button style={styles.buttonStyle} variant="outlined" onClick={(event) => handleFilterClick(event, label)}>
                        {selectedFilters[label] ? selectedFilters[label] : label}
                    </Button>
                    <Menu
                        anchorEl={anchorEl[label]}
                        open={Boolean(anchorEl[label])}
                        onClose={() => setAnchorEl(prevState => ({ ...prevState, [label]: null }))}
                    >
                        {options.map(option => (
                            <MenuItem key={option} onClick={() => handleFilterClose(label, option)}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            ))}
            {
                (selectedFilters && Object.keys(selectedFilters).length > 0) ? (
                    <Button style={styles.clearButtonStyle} variant="outlined" onClick={handleClearFilters}>
                        Clear Filters
                    </Button>
                ) : null

            }
        </div>
    );
}

export default FilterRow;