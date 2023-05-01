import React  from "react";
import { Card, CardContent, Rating, Typography } from "@mui/material"



const styles = {

    header: {
        alignItems:'center',
        backgroundColor: "#f2f2f2",
        borderBottom: "1px solid #ccc",
        padding: "16px",
        fontSize: '25px',
        fontWeight: "medium",
    },
    content: {
        padding: "30px",
        maxHeight: '23vh',
        overflowY: "auto",
    },
    rating: {
        position: "absolute",
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#f2f2f2",
        padding: "1%",
        width: '100%',
        height: '25%',
        fontSize: '25px',
        fontWeight: "medium",
    }
}





const DescCard = ({ pdesc }) => {
 
    const [ratingval, setRatingVal] = React.useState(0);


    return (

        <Card elevation={5} sx={{ position: 'relative', height: '44vh' }}>
            <div style={styles.header}>Project Insights</div>
            <CardContent style={styles.content}>
                {/* <Typography gutterBottom variant='h5' component='div'>About</Typography> */}
                <Typography variant='body2' color='text.secondary' sx={{ fontSize: '19px' }}>
                    {pdesc}
                </Typography>

            </CardContent>

            <div style={styles.rating}>
                <Typography variant='h6' color='text.secondary'>
                    Rate Us
                </Typography>

                <Rating sx={{fontSize:'40px'}}>
                    name="simple-controlled"
                    value={ratingval}
                    onChange={(event, newValue) => {
                        setRatingVal(newValue);
                    }}
                </Rating>
                {/* <Typography>{ratingval.toFixed(1)}</Typography> */}
               
            </div>
        </Card>

    )
}
export default DescCard;


