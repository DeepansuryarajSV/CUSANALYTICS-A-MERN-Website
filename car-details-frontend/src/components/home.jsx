import React from 'react';
import '../css/home.css';
import img from '../images/home-background-pic.png'

export default function Home() {
    return (
        <div className="container">
            <div className="Home__section">
                <h1 className="welcome">Wel<span className="red">come</span></h1>
                <p>Surf this site for the <span className="red">better</span> customer <span className="red">analysis.</span></p>
            </div>
            <img src={img} className="home-pic"/>
        </div>
        
        
    );
}
