import React from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ text, className }) => {
    const letters = text.split("");

    // algorithm for letter order
    const letterOrders = letters.map((_, i) => {
        const half = Math.floor(letters.length / 2);
        return i % 2 === 0 ? half - Math.floor(i / 2) : half + Math.floor(i / 2) + 1;
    });


    console.log('letterorders', letterOrders);

    const letterVariant = {
        hidden: { y: "110vh", opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                type: "tween",
                ease: "easeIn",
                delay: i * 0.1, // Animate one letter at a time with a 0.3s gap
                duration: 2, // You can adjust this duration for each letter animation
            },
        }),
    };

    return (
        <motion.p initial="hidden" animate="visible" className="animated-text">
            {letters.map((letter, index) => (
                <motion.span
                    className={className}
                    key={index}
                    variants={letter === " " ? {} : letterVariant}
                    custom={letterOrders[index]}
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.p>
    );
};

export default TextAnimation;
