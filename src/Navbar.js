import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="header">
            <div >
                <Link to="/" className="linkClass">Play Game</Link>
                <Link to="/how-to-play" className="linkClass">How To Play</Link>
            </div>
        </div>
    );
}

export default Navbar;
