
//---------------------------------------------------------------------------------------------------------------------
// testing

import React from "react";
import { Box, CircularProgress } from "@mui/material";
import Carousel from "react-material-ui-carousel";

function ProjectCarousel(props) {
  const { items, styles } = props;
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [imagesLoaded, setImagesLoaded] = React.useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
    // console.log(items);
  };

  if (!items) {
    return null; // or some other fallback content
  }

  return (
    <Box sx={{ position: "relative", height: "65vh"}}>
      {!imagesLoaded && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <Carousel
        breakPoints={breakPoints}
        navButtonsAlwaysVisible={true}
        animation="slide"
        onChange={() => setImagesLoaded(false)}
      >
        {items.map((item, i) => (
          <Item
            key={i}
            item={item}
            styles={styles}
            handleImageLoad={handleImageLoad}
          />
        ))}
      </Carousel>
    </Box>
  );
}

function Item(props) {
  const { item, styles, handleImageLoad } = props;
  return (
    <Box position="relative" sx={{ height: "60vh" }}>
      <img
        src={item}
        alt="pro-img"
        style={styles.image}
        onLoad={handleImageLoad}
      />
    </Box>
  );
}

export default ProjectCarousel;
