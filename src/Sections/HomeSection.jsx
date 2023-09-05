import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Work from "../Components/Work";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AboutRight from "../Components/AboutRight";
import Carousel from "../Components/Carousel";

const HomeSection = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <AboutRight />
            <About />
            <Work />
            <Carousel />
            <Footer />
           
        </div>
    )
}


export default HomeSection;