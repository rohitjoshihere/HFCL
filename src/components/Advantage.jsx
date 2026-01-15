import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Advantage.css';
import ScrollReveal from './ScrollReveal';

const Advantage = () => {
    return (
        <section className="advantage">
            <ScrollReveal>
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
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            target="_blank"
                            href="https://www.hfcl.com/contact-us"
                            className="btn-orange"
                        >
                            Schedule a meeting
                            <span className='animate-arrow'>
                                <ArrowRight size={18} />
                            </span>
                        </motion.a>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default Advantage;
