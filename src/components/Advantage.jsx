import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Advantage.css';

const Advantage = () => {
    return (
        <section className="advantage">
            <div className="section-container advantage-grid">
                <div className="advantage-left">
                    <h2>Power Hyperscale Growth with Future-ready DCI Solutions</h2>
                </div>
                <div className="advantage-right">
                    <p>
                        800G performance. 99.999% uptime. 40% lower TCO.
                        <br />
                        That's our Data Center Interconnect (DCI) Solutions Advantage.
                    </p>
                    <button className="btn-orange">
                        Schedule a meeting <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Advantage;
