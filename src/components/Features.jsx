import React from 'react';
import { Wifi, ClipboardCheck, HandCoins, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <Wifi size={32} />,
            title: "Beyond 800G Optical Capacity per Wavelength",
            desc: "Deliver over 800G per wavelength and move the world's heaviest data workloads instantly. Scale globally with zero bottlenecks, ultra-low latency, and infrastructure built to future-proof exponential data growth."
        },
        {
            icon: <ClipboardCheck size={32} />,
            title: "99.999% Uptime for Mission-Critical Reliability",
            desc: "Ensure always-on operations with carrier-grade DCI infrastructure delivering 99.999% availability across high-demand, latency-sensitive, and multi-site environments. Keep your critical services online, no compromise."
        },
        {
            icon: <HandCoins size={32} />,
            title: "Up to 40% Lower TCO",
            desc: "Optimize both CAPEX and OPEX with HFCL's intelligent design and localized manufacturing, reducing total lifecycle costs by up to 40% while maintaining high-performance, scalable connectivity."
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Carrier-grade Security",
            desc: "Protect sensitive data with end-to-end Layer-1 encryption, tamper-evident enclosures, and ruggedized, fire-rated designs, ensuring compliance and resilience for mission-critical DCI applications worldwide."
        },
        {
            icon: <Globe size={32} />,
            title: "Proven Global Deployments",
            desc: "Trusted by leading telecom operators, cloud providers, and hyperscale data centers in 40+ countries, HFCL's DCI solutions deliver high-speed, reliable interconnectivity at a global scale."
        }
    ];

    return (
        <section className="features">
            <div className="section-container">
                <h2 className="features-headline">From edge to core. From India to the world. HFCL keeps your data moving faster, safer, and smarter.</h2>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <div key={i} className="feature-card">
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.desc}</p>
                        </div>
                    ))}
                </div>

                <button className="btn-orange get-in-touch-btn">
                    Get in Touch <svg width="42" height="24" viewBox="0 0 42 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 4C18 1.79086 19.7909 0 22 0H38C40.2091 0 42 1.79086 42 4V20C42 22.2091 40.2091 24 38 24H22C19.7909 24 18 22.2091 18 20V4Z" fill="white" />
                        <path d="M36.6364 12.6364C36.9879 12.2849 36.9879 11.7151 36.6364 11.3636L30.9088 5.63604C30.5574 5.28457 29.9875 5.28457 29.636 5.63604C29.2846 5.98751 29.2846 6.55736 29.636 6.90883L34.7272 12L29.636 17.0912C29.2846 17.4426 29.2846 18.0125 29.636 18.364C29.9875 18.7154 30.5574 18.7154 30.9088 18.364L36.6364 12.6364ZM24 12V12.9H36V12V11.1H24V12Z" fill="#FC5100" />
                        <path d="M12.6364 12.6364C12.9879 12.2849 12.9879 11.7151 12.6364 11.3636L6.90883 5.63604C6.55736 5.28457 5.98751 5.28457 5.63604 5.63604C5.28457 5.98751 5.28457 6.55736 5.63604 6.90883L10.7272 12L5.63604 17.0912C5.28457 17.4426 5.28457 18.0125 5.63604 18.364C5.98751 18.7154 6.55736 18.7154 6.90883 18.364L12.6364 12.6364ZM0 12V12.9H12V12V11.1H0V12Z" fill="#FC5100" />
                    </svg>

                </button>
            </div>
        </section>
    );
};

export default Features;
