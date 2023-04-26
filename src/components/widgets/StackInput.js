import React, { useState } from "react";
import { Chip, TextField, Button, Box } from "@mui/material";

const StackList = ({  stack, setStack}) => {
  // const [stack, setStack] = useState([]);
  const [newStack, setNewStack] = useState("");

  const handleAddStack = () => {
    setStack([...stack, newStack]);
    setNewStack("");
  };

  const handleDeleteStack = (index) => {
    const newStackList = [...stack];
    newStackList.splice(index, 1);
    setStack(newStackList);
  };

  const handleNewStackChange = (event) => {
    setNewStack(event.target.value);
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center" , marginLeft:"1vh", }}>
        <TextField 
          //add styling later on
          
          label="Add Stack"
          value={newStack}
          onChange={handleNewStackChange}
          InputProps={{
            style: { backgroundColor: 'white' },
          }}
        />
        <Button onClick={handleAddStack}>Add</Button>
      </Box>
      {stack.map((stackItem, index) => (
        <Chip
          key={index}
          label={stackItem}
          onDelete={() => handleDeleteStack(index)}
          color="primary"
          sx={{ margin: "5px" }}
        />
      ))}
    </div>
  );
};

export default StackList;
