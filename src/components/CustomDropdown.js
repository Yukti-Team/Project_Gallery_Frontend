// import React, { useState } from 'react';

// import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }));

// function CustomDropdown() {
//   const classes = useStyles();
//   const [selectedValue, setSelectedValue] = useState('');

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <FormControl className={classes.formControl}>
//       <InputLabel id="dropdown-label">Select Option</InputLabel>
//       <Select
//         labelId="dropdown-label"
//         id="dropdown"
//         value={selectedValue}
//         onChange={handleChange}
//       >
//         <MenuItem value="">Select an option</MenuItem>
//         <MenuItem value="option1">Option 1</MenuItem>
//         <MenuItem value="option2">Option 2</MenuItem>
//         <MenuItem value="option3">Option 3</MenuItem>
//       </Select>
//     </FormControl>
//   );
// }

// export default CustomDropdown;
