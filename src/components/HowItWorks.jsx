import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            title: "High-Speed Data Transmission",
            desc: "Enable high-bandwidth, low-latency data transfer between dispersed data centers, ensuring mission-critical workloads."
        },
        {
            title: "Intra-Rack Connectivity",
            desc: "Enable efficient intra-rack cabling connecting servers, storage, and network devices, reducing latency and simplifying management."
        },
        {
            title: "100/400/800G Networks",
            desc: "Deploy 100G to 800G networks effortlessly with HFCL's high-density MPO and VSFF connectors."
        },
        {
            title: "High-density Fiber Management",
            desc: "Manage high fiber counts efficiently with easy access, simplified maintenance, scalable, organized, reliable networks."
        }
    ];

    return (
        <section className="how-it-works">
            <div className="section-container">
                <h2 className="how-it-works-title">From Rack to Global Network: How HFCL DCI Works for You</h2>
                <div className="how-it-works-grid">
                    <div className="steps-grid">
                        {steps.map((step, i) => (
                            <div key={i} className="step-card">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="visual-area">
                        <div className="placeholder-visual">
                            {/* Image placeholder */}
                            <img src="/assets/bg2.jpg" alt="DCI Visualization" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
