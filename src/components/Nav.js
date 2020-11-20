import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item"><Link to="/">Home</Link></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
                <li className="nav-item"><Link to="/count">Count</Link></li>
                <li className="nav-item"><Link to="/flags">Flags</Link></li>
            </ul>
        </div>
    );
}

export default Nav;
