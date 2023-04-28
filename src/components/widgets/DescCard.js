import { Star } from "@mui/icons-material";
import { Box, Card, CardContent, IconButton, Stack, Typography } from "@mui/material"
import { useState } from "react";


const styles = {
    card: {
        width: "50vw",
        margin: "3px",
        borderRadius: "16px",
        // backgroundColor: "transparent",
    },
    header: {
        backgroundColor: "#f2f2f2",
        borderBottom: "1px solid #ccc",
        padding: "16px",
        fontSize: '25px',
        fontWeight: "medium",
    },
    content: {
        padding: "16px",
        maxHeight: "22vh",
        overflowY: "auto", scrollbarWidth: "none",
    },
    rating: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        backgroundColor: "#f2f2f2",

        margin:"0",
        padding: "40px",
        fontSize: '25px',
        fontWeight: "medium",
        height: "4vh",
        maxHeight:'5vh'
    }
}





const DescCard = ({ pdesc }) => {
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedStars, setSelectedStars] = useState(new Array(5).fill(false));

    const handleStarClick = (index) => {
        const newSelectedStars = [...selectedStars];
        newSelectedStars[index] = !newSelectedStars[index];

        const newSelectedCount = newSelectedStars.filter((s) => s).length +1;
        setSelectedCount(newSelectedCount);
        setSelectedStars(newSelectedStars);

        console.log(selectedCount);

    };

    return (
        <Box sx={{ maxHeight: "35vh" }} styles={styles.card}>
            <Card elevation={5}>
                <div style={styles.header}>Project Insights</div>
                <CardContent style={styles.content}>
                    {/* <Typography gutterBottom variant='h5' component='div'>About</Typography> */}
                    <Typography variant='body2' color='text.secondary'>
                        {pdesc}
                    </Typography>

                </CardContent>
                <div style={styles.rating}>
                    <Typography variant='h6' color='text.secondary'>
                        Rate Us
                    </Typography>


                    {/* <Stack direction='row' spacing={1} justifyContent='center'>
                        <IconButton aria-label="star1"
                            disabled={selectedButtons[0]}
                            style={{ fontSize: '2rem' }}
                            onClick={() => handleStarClick(0)}
                        >
                            <Star style={{ color: selectedButtons[0] ? "orange" : "inherit", fontSize: '2rem' }} />
                        </IconButton>

                        <IconButton aria-label="star2"
                            disabled={selectedButtons[1]}
                            style={{ fontSize: '2rem' }}
                            onClick={() => handleStarClick(1)}
                        >
                            <Star style={{ color: selectedButtons[1] ? "orange" : "inherit", fontSize: '2rem' }} />
                        </IconButton>

                        <IconButton aria-label="star3"
                            disabled={selectedButtons[2]}
                            style={{ fontSize: '2rem' }}
                            onClick={() => handleStarClick(2)}
                        >
                            <Star style={{ color: selectedButtons[2] ? "orange" : "inherit", fontSize: '2rem' }} />
                        </IconButton>

                        <IconButton aria-label="star4"
                            disabled={selectedButtons[3]}
                            style={{ fontSize: '2rem' }}
                            onClick={() => handleStarClick(3)}
                        >
                            <Star style={{ color: selectedButtons[3] ? "orange" : "inherit", fontSize: '2rem' }} />
                        </IconButton>

                        <IconButton aria-label="star5"
                            disabled={selectedButtons[4]}
                            style={{ fontSize: '2rem' }}
                            onClick={() => handleStarClick(4)}
                        >
                            <Star style={{ color: selectedButtons[4] ? "orange" : "inherit", fontSize: '2rem' }} />
                        </IconButton>
                    </Stack> */}
                    <Stack direction="row" spacing={1} justifyContent="center">
                        {selectedStars.map((isStarred, index) => (
                            <IconButton
                                key={index}
                                aria-label={`star${index}`}
                                disabled={isStarred}
                                style={{ fontSize: "2rem" }}
                                onClick={() => handleStarClick(index)}
                            >
                                <Star
                                    style={{ color: isStarred ? "orange" : "inherit", fontSize: "2rem" }}
                                />
                            </IconButton>
                        ))}
                        {/* <div>{`${selectedCount} selected`}</div> */}
                    </Stack>
                </div>
            </Card>
        </Box>
    )
}
export default DescCard;


