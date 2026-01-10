import React from 'react';
import './Agility.css';

const Agility = () => {
    const sections = [
        {
            title: "Cloud and Hyperscale Operators",
            desc: "HFCL DCI solutions enable hyperscale operators to handle multi-terabit workloads with ultra-low latency and secure inter-data center links, providing scalable, high-density fiber connectivity that ensures uninterrupted cloud performance and efficient network expansion.",
                img: "assets/agility1.jpg"
        },
        {
            title: "Telecom Networks",
            desc: "Telecom operators rely on HFCL DCI solutions for high-capacity, low-latency networks, supporting 5G backbones, cross-border traffic, and metro network expansion, ensuring reliable communication, rapid deployment, and future-ready network scalability.",
            img: "assets/agility2.jpg"
        },
        {
            title: "Financial Institutions",
            desc: "HFCL DCI solutions deliver secure, ultra-low-latency interconnectivity for global banks and trading platforms, enabling real-time transaction processing, high-frequency trading, and mission-critical financial data transfer with maximum reliability and compliance.",
            img: "assets/agility3.jpg"
        },
        {
            title: "Global Enterprises",
            desc: "Global enterprises leverage HFCL DCI solutions for high-speed, secure interconnects across offices, data centers, and cloud platforms, ensuring seamless collaboration, mission-critical application performance, and scalable infrastructure for distributed operations.",
            img: "assets/agility4.jpg"
        }
    ];

    return (
        <section className="agility">
            <div className="section-container">
                <h2 className="agility-title">Designed for Hyperscale Agility,<br />From metro to global scale; we build DCI networks that grow with your business.</h2>
                <div className="agility-grid">
                    {sections.map((item, i) => (
                        <div key={i} className="agility-card">
                            <div className="agility-image">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="agility-info">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Agility;
