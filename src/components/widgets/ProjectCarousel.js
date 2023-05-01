import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function ProjectCarousel(props) {
    const { items, styles } = props;
    const breakPoints=[
        {width:1, itemsToShow: 1},
        {width:550, itemsToShow: 2},
        {width:768, itemsToShow: 3},
        {width:1200, itemsToShow: 4},

    ]

    console.log(items)

    if (!items) {
        return null; // or some other fallback content
    }
    
    return (
        <Carousel breakPoints={breakPoints}>
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
            <img src={item} alt="pro-img" style={styles.image} />
            {/* <Box style={styles.overlay}>
                <Typography variant="h2" component="h2" align="center" sx={{ marginBottom: '1rem'}}>
                    {item.name}
                </Typography>
                <Typography variant="body1" align="center" sx={{ marginBottom: '1rem' }}>
                    {item.description}
                </Typography>
                <Button variant="contained" color="primary" sx={styles.button}>
                    Check it out!
                </Button>
            </Box> */}

        </Box>
    )
}

export default ProjectCarousel;