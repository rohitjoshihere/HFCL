import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '/assets/hero.jpg';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <motion.img
                src={heroImage}
                alt="Data Center"
                className="hero-bg"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            />
                <div className='hero-content-main'>
            <ScrollReveal delay={0.4}>
                    <div className="hero-content">
                        <h1>Empowering the World's<br />Largest Data Centers</h1>
                        <p>Hyperscale-ready, high-capacity DCI Solutions</p>
                    </div>
            </ScrollReveal>
                </div>
        </section>
    );
};

export default Hero;
