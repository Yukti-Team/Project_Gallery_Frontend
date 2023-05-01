// import React from 'react';
// import Carousel from 'react-material-ui-carousel'
// import { Button, Box, Typography } from '@mui/material'
// import Car1Image from "../../images/car1.jpeg"
// import Car2Image from "../../images/car2.jpg"
// import BirdImage from "../../images/bird.jpg"
 

// const styles = {
//     image: {
//         width: '100%',
//         height: '98vh',
//         objectFit: 'cover',
//         filter: 'blur(0px)',
//     },
//     overlay: {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "rgba(0, 0, 0, 0.5)",
//         color: "#fff",
//         zIndex: 1,
//         padding: '0px 16px'
//     },
//     button: {
//         margin: '1rem',
//         backgroundColor: 'black',
//         '&:hover': {
//             backgroundColor: 'white',
//             color: "black",
//         },
//     }
// }


// function CustomCarousel() {
//     var items = [
//         {
//             name: "Great Car",
//             description: "Probably the most random thing you have ever seen!",
//             image: Car1Image
//         },
//         {
//             name: "Rolls Royce",
//             description: "Hello World!",
//             image: Car2Image
//         },
//         {
//             name: "Bird",
//             description: "This is a Beautiful bird",
//             image: BirdImage
//         }
//     ]

//     return (
//         <Carousel>
//             {
//                 items.map((item, i) => <Item key={i} item={item} />)
//             }
//         </Carousel>
//     )
// }

// function Item(props) {
//     return (
//         <Box position="relative">
//             <img src={props.item.image} alt={props.item.name} style={styles.image} />
//             <Box style={styles.overlay}>
//                 <Typography variant="h2" component="h2" align="center" sx={{ marginBottom: '1rem'}}>
//                     {props.item.name}
//                 </Typography>
//                 <Typography variant="body1" align="center" sx={{ marginBottom: '1rem' }}>
//                     {props.item.description}
//                 </Typography>
//                 <Button variant="contained" color="primary" sx={styles.button}>
//                     Check it out!
//                 </Button>
//             </Box>

//         </Box>
//     )
// }

// export default CustomCarousel


// ---------------------------------------------------------------------------------------------------------------------------------------


// Testing

import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Button, Box, Typography } from '@mui/material'

 




function CustomCarousel(props) {
    const { items, styles } = props;

   
    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} styles={styles} />)
            }
        </Carousel>
    )
}

function Item(props) {
    const { item, styles } = props;
    return (
        <Box position="relative">
            <img src={item.image} alt={item.name} style={styles.image} />
            <Box style={styles.overlay}>
                <Typography variant="h2" component="h2" align="center" sx={{ marginBottom: '1rem'}}>
                    {item.name}
                </Typography>
                <Typography variant="body1" align="center" sx={{ marginBottom: '1rem' }}>
                    {item.description}
                </Typography>
                <Button variant="contained" color="primary" sx={styles.button}>
                    Check it out!
                </Button>
            </Box>

        </Box>
    )
}

export default CustomCarousel
