import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className="about">
            <h1>This application is created to know the exchange rates.</h1>
            <div>
                <span>date of creation </span> <strong>04.05.2020</strong>
            </div>
            <p>Version: 1.0.0.1</p>
            <address>Armenia Yerevan</address>
            <p>Email: matevossyan77@gmail.com</p>
            <p>tel. +374 95572075</p>
        </div>
    )
}

export default About;