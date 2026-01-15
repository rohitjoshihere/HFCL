import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, delay = 0, direction = 'up', distance = 30, duration = 0.6, stagger = false, staggerDelay = 0.1 }) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
            x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Smooth premium ease
                ...(stagger && {
                    staggerChildren: staggerDelay,
                    delayChildren: delay
                })
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
