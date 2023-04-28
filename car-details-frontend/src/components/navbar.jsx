//rsf

import React from 'react';
import '../css/navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
        <nav className="nav">
            <Link to="/" className="nav__brand"><span className="nav__logo">Cus</span>Analytics</Link>
            <ul className="nav__menu">
                <li className="nav__item"><Link to="/" className="nav__link">Home</Link></li>
                <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                <li className="nav__item"><Link to="/analysis" className="nav__link">Analysis</Link></li>
            </ul>
        </nav>
    );
}
