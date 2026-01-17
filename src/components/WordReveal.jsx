import React from 'react';
import { motion } from 'framer-motion';
import './WordReveal.css';

const WordReveal = ({
    text,
    delay = 0,
    distance = 30,
    duration = 0.6,
    staggerDelay = 0.1,
    className = ""
}) => {
    // Split text into words and preserve spaces
    const words = text.split(/(\s+)/);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay
            }
        }
    };

    const wordVariants = {
        hidden: {
            opacity: 0,
            y: distance, // Words come from bottom
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
                ease: [0.21, 0.47, 0.32, 0.98], // Smooth premium ease
            }
        }
    };

    return (
        <motion.div
            className={`word-reveal-container ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    variants={wordVariants}
                    style={{
                        // whiteSpace: word.includes(' ') ? 'pre' : 'normal'
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default WordReveal;
