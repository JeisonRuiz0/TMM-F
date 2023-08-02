import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Work from "../Components/Work";
import Testimonial from "../Components/Testimonial";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AboutProfile from "../Components/ProfileComponents/AboutProfile";
import WorkProfile from "../Components/ProfileComponents/WorkProfile";
import TestimonialProfile from "../Components/ProfileComponents/TestimonialProfile";
import Formation from "../Components/ProfileComponents/Formation";
import ContactProfile from "../Components/ProfileComponents/ContactProfile";

const CandidateProfile = () => {
    return (
        <div>
            <Navbar />
            <AboutProfile />
            <Formation />
            <WorkProfile />
            <TestimonialProfile />
            <ContactProfile />
            <Footer />
        </div>
    )
}


export default CandidateProfile;