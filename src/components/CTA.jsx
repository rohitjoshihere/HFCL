import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="section-container">
                <div className="cta-content">
                    <h2>Upgrade to Hyperscale Connectivity</h2>
                    <p>Let our experts help you unlock 800G performance with five-nine reliability.</p>
                    <button className="cta-btn">
                        <span className="cta-btn-text">Schedule a meeting</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_11392_691)">
                                <path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#FC5100" />
                                <path d="M18.6364 12.6364C18.9879 12.2849 18.9879 11.7151 18.6364 11.3636L12.9088 5.63604C12.5574 5.28457 11.9875 5.28457 11.636 5.63604C11.2846 5.98751 11.2846 6.55736 11.636 6.90883L16.7272 12L11.636 17.0912C11.2846 17.4426 11.2846 18.0125 11.636 18.364C11.9875 18.7154 12.5574 18.7154 12.9088 18.364L18.6364 12.6364ZM6 12V12.9H18V12V11.1H6V12Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_11392_691">
                                    <path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
