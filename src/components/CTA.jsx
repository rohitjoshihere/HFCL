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
                    <a href="#" target="_blank" className="cta-btn cta-btns">
                        <span className="cta-btn-text ">Schedule a meeting</span>
                        <div class="icon w-embed">
                                    <svg width="100%" height="100%" viewBox="18 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path class="button_square" d="M18 4C18 1.79086 19.7909 0 22 0H38C40.2091 0 42 1.79086 42 4V20C42 22.2091 40.2091 24 38 24H22C19.7909 24 18 22.2091 18 20V4Z" fill="#FC5100"></path>
                                        <path class="button_arrow arrow1" d="M36.6364 12.6364C36.9879 12.2849 36.9879 11.7151 36.6364 11.3636L30.9088 5.63604C30.5574 5.28457 29.9875 5.28457 29.636 5.63604C29.2846 5.98751 29.2846 6.55736 29.636 6.90883L34.7272 12L29.636 17.0912C29.2846 17.4426 29.2846 18.0125 29.636 18.364C29.9875 18.7154 30.5574 18.7154 30.9088 18.364L36.6364 12.6364ZM24 12.9H36V11.1H24V12.9Z" fill="white"></path>
                                        <path class="button_arrow arrow2" d="M12.6364 12.6364C12.9879 12.2849 12.9879 11.7151 12.6364 11.3636L6.90883 5.63604C6.55736 5.28457 5.98751 5.28457 5.63604 5.63604C5.28457 5.98751 5.28457 6.55736 5.63604 6.90883L10.7272 12L5.63604 17.0912C5.28457 17.4426 5.28457 18.0125 5.63604 18.364C5.98751 18.7154 6.55736 18.7154 6.90883 18.364L12.6364 12.6364ZM0 12.9H12V11.1H0V12.9Z" fill="white"></path>
                                    </svg>
                                </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
