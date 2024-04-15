import React from "react";
import About from "../images/about.png"

function AboutSection() {
    return (
        <section className="max-w-8xl mx-auto w-full bg-transparent h-[90vh] flex flex-col justify-center items-center py-8 mt-20" id="about">
            <div className="flex flex-row justify-center items-start gap-10 px-32 py-2">
                <span className="flex flex-col gap-4 text-white w-[45%]">
                    <h1 className="text-[1rem] font-bold">About the Luxury Queen Pageant</h1>
                    <h2 className="text-[1.5rem] max-w-[85%] font-semibold">We are the most prestigious beauty pageant in the whole of Nigeria
                        and we give you a stage to achieve your pageantry dreams. 
                    </h2>
                    <button className="bg-black border-white border w-[50%] text-white px-4 py-2 rounded-lg mt-4">Register Now</button>
                </span>
                <div className="w-[50%] h-[500px]">
                    <img src={About} alt="What we do" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;