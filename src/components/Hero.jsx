import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero.jpg'; // I'll copy the generated image to this location

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <img src={heroImage} alt="Data Center" className="hero-bg" />
            <div className="hero-content">
                <h1>Empowering the World's<br />Largest Data Centers</h1>
                <p>Hyperscale-ready, high-capacity DCI Solutions</p>
            </div>
        </section>
    );
};

export default Hero;
