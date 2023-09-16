import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Work from "../Components/Work";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AboutRight from "../Components/AboutRight";
import Carousel from "../Components/Carousel";
import StrategicAxisComponent from "../Components/StrategicAxesComponent";
import Resourses from "../Components/HomeComponents/Resources";

const HomeSection = () => {
    return (
        <div>
            <Navbar  />
            <Home />
            <AboutRight />
            <About />
            <Work />
            <StrategicAxisComponent />
            <Carousel />
            <Resourses />
            <Footer />
           
        </div>
    )
}


export default HomeSection;