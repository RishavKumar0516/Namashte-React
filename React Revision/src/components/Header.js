import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div>
                {/* <img src="" alt="logo" /> */}
                <h2>Allen Parker</h2>
            </div>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;