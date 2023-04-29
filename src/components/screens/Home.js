import React from "react";
import HomeCard from "../widgets/HomeCard";
import flutterimage from "../../images/flutter.png"
import reactimage from "../../images/react.png"
import angularimage from "../../images/angular.png"
import kotlinimage from "../../images/kotlin.png"
import pythonimage from "../../images/python.png"
import nextjsimage from "../../images/nextjs.webp"
import CustomCarousel from "../widgets/Carousel";
import ImageUploader from "../widgets/ImageUploader";

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

    return (
        <>
            <CustomCarousel />
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