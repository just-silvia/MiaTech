import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <div>
            <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default Navbar;