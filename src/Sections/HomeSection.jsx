import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Work from "../Components/Work";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AboutRight from "../Components/AboutRight";
import Carousel from "../Components/Carousel";
import StrategicAxisComponent from "../Components/StrategicAxesComponent";

const HomeSection = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <AboutRight />
            <About />
            <Work />
            <StrategicAxisComponent />
            <Carousel />
            <Footer />
           
        </div>
    )
}


export default HomeSection;