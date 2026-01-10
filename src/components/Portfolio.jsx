import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
    const items = [
        {
            title: "Optical Fiber Cables",
            desc: "HFCL fiber cables form the backbone of high-speed, high-density interconnects, ensuring low-loss reliability across data centers and long-haul networks.",
            img: "/assets/img1.jpg"
        },
        {
            title: "Fiber Cable Assemblies",
            desc: "Our cable assemblies deliver plug-and-play precision, reducing installation time and effort, including distribution assemblies, duplex patch cords, pigtails, and MPO trunks.",
            img: "../assets/img2.jpg"
        },
        {
            title: "Panels",
            desc: "High-density panels deliver organized, scalable fiber and copper management using patch panels, adapter modules, and splice cassettes for global networks.",
            img: "../assets/img3.jpg"
        },
        {
            title: "Copper Cabling Systems",
            desc: "Our copper cabling systems complement fiber networks, enabling high-speed Ethernet and low-latency connectivity with cables, patch cords, jacks, panels, and hybrid flexibility.",
            img: "../assets/img4.jpg"
        }
    ];

    return (
        <section className="portfolio">
            <div className="section-container">
                <h2 className="portfolio-title">Explore HFCL's End-to-End DCI Portfolio</h2>
                <div className="portfolio-grid">
                    {items.map((item, i) => (
                        <div key={i} className="portfolio-card">
                            <div className="portfolio-image">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="portfolio-info">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className="portfolio-arrow">
                                    <ArrowRight size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a target="_blank" href="https://www.hfcl.com/contact-us" className="btn-orange ordering-guide-btn">
                    Ordering Guide <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 4C18 1.79086 19.7909 0 22 0H38C40.2091 0 42 1.79086 42 4V20C42 22.2091 40.2091 24 38 24H22C19.7909 24 18 22.2091 18 20V4Z" fill="white" />
                        <path d="M36.6364 12.6364C36.9879 12.2849 36.9879 11.7151 36.6364 11.3636L30.9088 5.63604C30.5574 5.28457 29.9875 5.28457 29.636 5.63604C29.2846 5.98751 29.2846 6.55736 29.636 6.90883L34.7272 12L29.636 17.0912C29.2846 17.4426 29.2846 18.0125 29.636 18.364C29.9875 18.7154 30.5574 18.7154 30.9088 18.364L36.6364 12.6364ZM24 12V12.9H36V12V11.1H24V12Z" fill="#FC5100" />
                        <path d="M12.6364 12.6364C12.9879 12.2849 12.9879 11.7151 12.6364 11.3636L6.90883 5.63604C6.55736 5.28457 5.98751 5.28457 5.63604 5.63604C5.28457 5.98751 5.28457 6.55736 5.63604 6.90883L10.7272 12L5.63604 17.0912C5.28457 17.4426 5.28457 18.0125 5.63604 18.364C5.98751 18.7154 6.55736 18.7154 6.90883 18.364L12.6364 12.6364ZM0 12V12.9H12V12V11.1H0V12Z" fill="#FC5100" />
                    </svg>

                </a>
            </div>
        </section>
    );
};

export default Portfolio;
