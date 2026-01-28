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
    // Split text into parts, keeping the <br/> tags
    const parts = text.split(/(<br\s*\/?>)/gi);

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
        <motion.h1
            className={`word-reveal-container ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            {parts.map((part, index) => {
                // If it's a <br/> tag, render a break
                if (part.toLowerCase().match(/<br\s*\/?>/)) {
                    return <br key={`br-${index}`} />;
                }

                // Split the remaining text into words and spaces
                const words = part.split(/(\s+)/);
                return words.map((word, wordIndex) => {
                    if (word === "") return null;
                    return (
                        <motion.h2
                            key={`${index}-${wordIndex}`}
                            variants={wordVariants}
                        >
                            {word}
                        </motion.h2>
                    );
                });
            })}
        </motion.h1>
    );
};

export default WordReveal;
