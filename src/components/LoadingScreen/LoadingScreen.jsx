import {useEffect, useState} from "react";
import {motion, useAnimation} from "framer-motion";
import {useLenis} from "@studio-freight/react-lenis";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  // Retrieve CSS variable and convert it to milliseconds
  const animationLengthStr = getComputedStyle(document.documentElement).getPropertyValue("--intro-animation-length").trim();
  const animationLengthMS = parseFloat(animationLengthStr) * 1000;

  const totalDelay = animationLengthMS + 2000;
  const controls = useAnimation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "instant"});
    if (lenis) lenis.stop();

    controls.start("animate"); // Start framer-motion animations

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (lenis) lenis.start();
    }, totalDelay);

    return () => {
      clearTimeout(timer);
      if (lenis) lenis.start();
    };
  }, [controls, lenis, totalDelay]);

  // Progress updater to simulate percentage
  useEffect(() => {
    if (isVisible) {
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(100, prev + 1));
      }, animationLengthMS / 100);

      return () => clearInterval(progressInterval);
    }
  }, [isVisible, animationLengthMS]);

  // Variants for the motion animations
  const containerVariants = {
    initial: {opacity: 1},
    animate: {
      opacity: 0,
      transition: {delay: animationLengthMS / 1000 + 2, duration: 0.4},
    },
  };

  const barVariants = {
    initial: (index) => ({
      x: index % 2 === 0 ? "100%" : "-100%",
    }),
    animate: (index) => ({
      x: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: [0.785, 0.135, 0.15, 0.86],
      },
    }),
    exit: (index) => ({
      x: index % 2 === 0 ? "100%" : "-100%",
      transition: {
        delay: animationLengthMS / 1000 + 2,
        duration: 0.6,
        ease: [0.95, 0.05, 0.795, 0.035],
      },
    }),
  };

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div className="loading-screen-container" initial="initial" animate="animate" exit="exit" variants={containerVariants}>
      <motion.h1 id="progress">{progress}%</motion.h1>
      {Array(5)
        .fill()
        .map((_, index) => (
          <motion.div key={index} className="intro-bar" custom={index} initial="initial" animate="animate" exit="exit" variants={barVariants}>
            <span className="scroll-text">LOADING</span>
          </motion.div>
        ))}
    </motion.div>
  );
};

export default LoadingScreen;
