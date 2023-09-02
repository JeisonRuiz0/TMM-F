import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Work from "../Components/Work";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AboutRight from "../Components/AboutRight";

const HomeSection = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <AboutRight />
            <About />
            <Work />
            <Footer />
           
        </div>
    )
}


export default HomeSection;