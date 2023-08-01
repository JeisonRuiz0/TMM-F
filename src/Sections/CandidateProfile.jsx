import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Work from "../Components/Work";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AboutProfile from "../Components/ProfileComponents/AboutProfile";
import Formation from "../Components/ProfileComponents/Formation";

const CandidateProfile = () => {
    return (
        <div>
            <Navbar />
            <AboutProfile />
            <Formation />
            <Work />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    )
}


export default CandidateProfile;