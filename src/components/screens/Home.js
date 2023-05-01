import React from "react";
import HomeCard from "../widgets/HomeCard";
import flutterimage from "../../images/flutter.png"
import reactimage from "../../images/react.png"
import angularimage from "../../images/angular.png"
import kotlinimage from "../../images/kotlin.png"
import pythonimage from "../../images/python.png"
import nextjsimage from "../../images/nextjs.webp"
import CustomCarousel from "../widgets/Carousel";
import Car1Image from "../../images/car1.jpeg"
import Car2Image from "../../images/car2.jpg"
import BirdImage from "../../images/bird.jpg"

const Home = () => {
    const homeCards = [
        {  
            imageUrl: `${flutterimage}`,
            imageAlt: 'FLutter',
        },
        {
            imageUrl: `${kotlinimage}`,
            imageAlt: 'Next.js',
        },
        {
            imageUrl: `${pythonimage}`,
            imageAlt: 'Python',
        },
        {
            imageUrl: `${reactimage}`,
            imageAlt: 'React',
        },
        {
            imageUrl: `${nextjsimage}`,
            imageAlt: 'Angular',
        },
        {
            imageUrl: `${angularimage}`,
            imageAlt: 'Kotlin',
        },
    ]

    var items = [
        {
            name: "Great Car",
            description: "Probably the most random thing you have ever seen!",
            image: Car1Image
        },
        {
            name: "Rolls Royce",
            description: "Hello World!",
            image: Car2Image
        },
        {
            name: "Bird",
            description: "This is a Beautiful bird",
            image: BirdImage
        }
    ]

    const styles= {
        image: {
            width: '100%',
            height: '98vh',
            objectFit: 'cover',
            filter: 'blur(0px)',
        },
        overlay: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            zIndex: 1,
            padding: '0px 16px'
        },
        button: {
            margin: '1rem',
            backgroundColor: 'black',
            '&:hover': {
                backgroundColor: 'white',
                color: "black",
            },
        }
    }


    return (
        <>
            <CustomCarousel items={items} styles={styles}/>

            
            <div className="homeGrid">
                <div className="cardGrid">
                    {homeCards.map((homeCard, index) => (
                        <HomeCard
                            key={index}
                            imageUrl={homeCard.imageUrl}
                            imageAlt={homeCard.imageAlt}
                        />
                    ))}

                </div>
            </div>
        </>

    )
}
export default Home;