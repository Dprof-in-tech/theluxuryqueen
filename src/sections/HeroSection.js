import React from "react";

function HeroSection() {
    return (
        <section className="relative w-full h-[90vh] text-white bg-hero bg-no-repeat bg-cover  bg-blend-darken flex flex-col justify-center items-center">
            <div className="absolute flex flex-col justify-center items-center w-full h-[90vh] bg-black bg-opacity-80 text-white">
                <h1 className="text-6xl font-bold">The Luxury Queen</h1>
                <p className="text-xl">The most prestigious beauty pageant in the world</p>
                <button className="bg-white text-black px-4 py-2 rounded-lg mt-4">Register Now</button>
            </div>
        </section>
    );
}

export default HeroSection;
