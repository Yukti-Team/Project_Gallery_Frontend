import {  Card,  CardMedia } from '@mui/material';
import React from 'react';

  
const ImageCard= ({image})=>{

    return (
          <Card 
            sx={{
                display:'flex',
                alignItems:"center",
                justifyContent:"center",    
                height: '30vh',
                width:'15vw',
                margin:'0% 30%',
                marginBottom:'5vh',
                marginTop:'1%',
                boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.16)',
                borderRadius:'40px',
            }}
            >
                <CardMedia 
                component='img'
                sx={{
                    width: '15vw',
                    height:'30vh',
           
                     // Sets the aspect ratio to 1:1 (square)
                  }}
                image={image}
                alt='custom-image'
                />

            </Card>
      
     
    )
}
export default ImageCard;