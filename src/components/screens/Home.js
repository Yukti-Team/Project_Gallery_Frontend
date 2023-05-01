import React from "react";
import HomeCard from "../widgets/HomeCard";
import flutterimage from "../../images/flutter.png"
import reactimage from "../../images/react.png"
import angularimage from "../../images/angular.png"
import kotlinimage from "../../images/kotlin.png"
import pythonimage from "../../images/python.png"
import nextjsimage from "../../images/nextjs.webp"
import CustomCarousel from "../widgets/Carousel";
import Tech from "../../images/tech.jpg"
import Rover from "../../images/rover.jpeg"
import Transistor from "../../images/transistors.jpeg"
import Electrical from "../../images/bulb.jpg"
import HPC from "../../images/hpc.jpeg"

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
            name: "Innovation",
            description: "Every once in a while, a new technology, an old problem, and a big idea turn into an innovation",
            image: Tech
        },
        {
            name: "Exploring Incredible",
            description: "Rovers are the eyes and hands of scientists on other planets",
            image: Rover
        },
        {
            name: "Continuing Moore's Law",
            description: "The future of Electronics is all about integration and miniaturization",
            image: Transistor
        },
        {
            name: "Luminaire",
            description: "Electricity is the universal language of energy",
            image: Electrical
        },
        {
            name: "Super Computing",
            description: "Supercomputing is the backbone of scientific discovery and innovation",
            image: HPC
        },
    ]

    const styles= {
        image: {
            width: '100%',
            height: '98vh',
            objectFit: 'cover',
            filter: 'blur(0px)',
        },
        overlay: {
            // position: "absolute",
            // top: 0,
            // left: 0,
            // width: "50%",
            // height: "50%",
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            // color: "#fff",
            // zIndex: 1,
            // padding: '0px 16px'


            position: "absolute",
            top: "18%",
            right:0,
            height:0,
            width: "40%",
            borderTop: "80vh solid transparent",
            borderRight: "70vw solid rgba(0, 0, 0, 0.5)",
            zIndex: 1,
            padding: '0px 16px'
        },
        content:{
            // position:'absolute',
            // bottom:0,
            // left: "20%",
            // width: "50%",
            // height: "20%",
            // display: "flex",
            // flexDirection: "column",
            // justifyContent: "right",
            // alignItems: "right",
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
            // color: "#fff",
            // padding: '0px 12px'
            position:'absolute',
            bottom:0,
            right:0,
            width: "50%",
            margin: 'auto',
            marginRight:'0',
            marginBottom:'5%',
            textAlign: 'center',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            padding: '0px 10px',
            zIndex:2
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