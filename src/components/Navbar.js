import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Navbar(){
    return(
        <nav className="max-w-8xl mx-auto flex flex-row justify-between items-center w-full h-[10vh] px-32 py-2 bg-black text-white">
            <div className="hidden md:flex w-[60px] h-full">
                <img src={Logo} alt="The Luxury Queen" className="w-full h-full object-fit"/>
            </div>
            
            <ul className="flex flex-row w-full md:w-auto gap-4 justify-center items-center">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contestants'>Contestants</Link></li>
                <li><Link to='/leaderboard'>Leaderboard</Link></li>
                <li><Link to='/'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar