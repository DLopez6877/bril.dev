import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Typewriter = ({ delay, className }) => {
    const baseText = "Currently seeking new opportunities.";
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.slice(0, latest)
    );

    useEffect(() => {
        const controls = animate(count, baseText.length, {
            type: "tween",
            delay: delay,
            duration: 1,
            ease: "easeInOut"
        });
        return controls.stop;
    }, []);

    return (
        <span className={className}>
            <motion.span>{displayText}</motion.span>
        </span>
    );
};

export default Typewriter;
