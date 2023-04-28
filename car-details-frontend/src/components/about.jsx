import React from 'react';
import '../css/about.css'
import '../css/home.css'

function About(props) {
    return (
        <div className="about-body">
            <h1 className="welcome">Ab<span className="red">out</span></h1>
            <br />
            
            <p className="about-details">
                Built using <span className="red">MERN</span> Stack <br />
                <span className="red">M</span> for MongoDB <br />
                <span className="red">E</span> for Express JS <br />
                <span className="red">R</span> for React JS <br />
                <span className="red">N</span> for Node JS
            </p>
            <br />
            <br />
            <p>This is a <span className="red">MERN</span> stack project which fetches the customer details from the <span className="red">MongoDB database</span> based on the constraints given through the <span className="red">API node.js</span></p>

        </div>
        
    );
}

export default About;