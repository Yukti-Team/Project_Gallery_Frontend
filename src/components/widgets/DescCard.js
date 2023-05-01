import { Star } from "@mui/icons-material";
import { Card, CardContent, IconButton, Stack, Typography } from "@mui/material"
import { useState } from "react";


const styles = {

    header: {
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
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedStars, setSelectedStars] = useState(new Array(5).fill(false));
    const [selectedButton, setSelectedButton] = useState(-1);

    const [lastSelectedIndex, setLastSelectedIndex] = useState(null);

    //works fine
    // const handleStarClick = (index) => {
    //     const newSelectedStars = [...selectedStars];
    //     newSelectedStars[index] = !newSelectedStars[index];

    //     if (lastSelectedIndex >= 0 && index < lastSelectedIndex) {
    //         for (let i = index + 1; i <= lastSelectedIndex; i++) {
    //             newSelectedStars[i] = false;
    //         }
    //     }

    //     const newSelectedCount = newSelectedStars.filter((s) => s).length;
    //     setSelectedCount(newSelectedCount);
    //     setSelectedStars(newSelectedStars);
    //     setLastSelectedIndex(index);
    // };


    // check this
    const handleStarClick = (index) => {
        const newSelectedStars = [...selectedStars];
        const isStarSelected = newSelectedStars[index];
        let newSelectedCount = selectedCount;

        if (isStarSelected) {
            // Deselecting a star
            newSelectedStars[index] = false;
            newSelectedCount--;
        } else {
            // Selecting a star
            if (lastSelectedIndex >= 0 && index < lastSelectedIndex) {
                // Deselect the stars between the last selected star and the current one
                for (let i = index + 1; i <= lastSelectedIndex; i++) {
                    newSelectedStars[i] = false;
                    newSelectedCount--;
                }
            }

            newSelectedStars[index] = true;
            newSelectedCount++;
            setLastSelectedIndex(index);
        }

        setSelectedCount(newSelectedCount);
        setSelectedStars(newSelectedStars);
    };














      
    
    
    
    
    
    
    


 








    // const handleStarClick = (index) => {
    //     const newSelectedStars = [...selectedStars];
    //     const isSelected = newSelectedStars[index];

    //     if (isSelected) {
    //         newSelectedStars[index] = false;
    //         setSelectedCount(selectedCount - 1);
    //     } else {
    //         newSelectedStars[index] = true;
    //         setSelectedCount(selectedCount + 1);
    //     }

    //     setSelectedStars(newSelectedStars);
    // };
    // const handleStarClick = (index) => {
    //     const newSelectedStars = [...selectedStars];
    //     let newSelectedCount = selectedCount;
    //     if (index === selectedButton) {
    //       // If the currently clicked button is the same as the currently selected button,
    //       // deselect it and decrement the selected count
    //       newSelectedStars[index] = false;
    //       newSelectedCount--;
    //       setSelectedButton(-1);
    //     } else {
    //       // Otherwise, select the clicked button and increment the selected count
    //       newSelectedStars[index] = true;
    //       newSelectedCount++;
    //       setSelectedButton(index);
    //     }

    //     setSelectedCount(newSelectedCount);
    //     setSelectedStars(newSelectedStars);
    //   };
    // const handleStarClick = (index) => {
    //     const newSelectedStars = [...selectedStars];
    //     for (let i = index + 1; i < 5; i++) {
    //       newSelectedStars[i] = false;
    //     }
    //     newSelectedStars[index] = !newSelectedStars[index];

    //     const newSelectedCount = newSelectedStars.filter((s) => s).length;
    //     setSelectedCount(newSelectedCount);
    //     setSelectedStars(newSelectedStars);
    // };






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
                <Stack direction="row" spacing={1} justifyContent="center">
                    {selectedStars.map((isStarred, index) => (
                        <IconButton
                            key={index}
                            aria-label={`star${index}`}
                            // disabled={false}
                            disabled={isStarred}
                            style={{ fontSize: "2rem" }}
                            onClick={() => handleStarClick(index)}
                        >
                            <Star
                                style={{ color: isStarred ? "orange" : "inherit", fontSize: "2rem" }}
                            />
                        </IconButton>
                    ))}
                </Stack>
                <Typography variant='body2' color='text.secondary' sx={{ fontSize: '19px' }}>
                    {`${selectedCount} selected`}
                </Typography>
            </div>
        </Card>

    )
}
export default DescCard;


