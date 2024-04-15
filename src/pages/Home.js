import React from "react";
import Navbar from "../components/Navbar";
import '@fontsource/ojuju';
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import Contact from "../sections/Contact";

const Home = () => {
    return(
        <div className="w-full font-ojuju">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <Contact />
        </div>
    )
}

export default Home