import React, { useState } from 'react'
import Button from '@mui/material/Button';

const MyButton= ({text, color, onClick})=>{
    function handleClick(){
       if(onClick)
       onClick();
    }

    return (
           <Button 
           variant="contained"
           style= {{backgroundColor: color}}
           onClick={handleClick}
           > {text}
           </Button>

    )
}

export default MyButton;