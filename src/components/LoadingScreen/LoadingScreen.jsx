import { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { motion, useAnimation } from "framer-motion";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();
  const controls = useAnimation();

  const icons = [
    "fa-skull",
    "fa-skull-crossbones",
    "fa-dice-d20",
    "fa-dice",
    "fa-gamepad",
    "fa-chess-knight",
    "fa-chess-board",
    "fa-music",
    "fa-wizards-of-the-coast",
    "fa-hat-wizard",
    "fa-github",
    "fa-pen-nib",
    "fa-ghost",
    "fa-docker",
    "fa-plane",
    "fa-power-off",
    "fa-react",
    "fa-rebel",
    "fa-twitch",
    "fa-yin-yang",
    "fa-radiation",
    "fa-pizza-slice",
    "fa-headphones",
    "fa-guitar",
    "fa-face-surprise",
    "fa-face-smile-wink",
    "fa-face-laugh-beam",
    "fa-face-dizzy",
    "fa-cat",
    "fa-bowling-ball",
    "fa-xbox",
    "fa-seedling",
  ];

  const [bars, setBars] = useState(
    Array(5)
      .fill()
      .map(() => ({
        progress: 0,
        updateCount: 0,
        interval: Math.floor(Math.random() * 6) + 1,
        replaceIcon: false,
      }))
  );

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 0.1 });
      setTimeout(() => lenis.stop(), 150);
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(100, prev + 1));

      setBars((prevBars) =>
        prevBars.map((bar) => {
          const nextProgress = Math.min(100, bar.progress + 1);
          const shouldReplaceIcon = bar.updateCount + 1 === bar.interval;

          return {
            ...bar,
            progress: nextProgress,
            updateCount: shouldReplaceIcon ? 0 : bar.updateCount + 1,
            replaceIcon: shouldReplaceIcon,
            interval: shouldReplaceIcon
              ? Math.floor(Math.random() * 6) + 1
              : bar.interval,
          };
        })
      );
    }, 50);

    return () => {
      clearInterval(progressInterval);
      if (lenis) lenis.start();
    };
  }, [lenis]);

  useEffect(() => {
    if (progress === 100) {
      if (lenis) lenis.start();
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 12000);

      return () => clearTimeout(timer);
    }
  }, [progress, lenis]);

  const renderProgressWithIcon = (bar) => {
    if (bar.progress === 100) {
      return <span className="scroll-text">100</span>;
    }
    const progressStr = bar.progress.toString();

    if (bar.replaceIcon && progressStr.length > 1) {
      const randomIndex = Math.floor(Math.random() * progressStr.length);
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];

      return (
        <span className="scroll-text">
          {progressStr
            .split("")
            .map((digit, index) =>
              index === randomIndex ? (
                <i key={index} className={`fa-solid ${randomIcon}`}></i>
              ) : (
                digit
              )
            )}
        </span>
      );
    }

    return <span className="scroll-text">{bar.progress}</span>;
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="loading-screen-container">
        <div className="bars">
          {bars.map((bar, index) => (
            <div className="intro-bar" key={"bar" + index}>
              <span aria-hidden="true">{progress}</span>
              {renderProgressWithIcon(bar)}
              <span aria-hidden="true">{progress}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="center-progress">{renderProgressWithIcon(bars[2])}%</div>
    </>
  );
};

export default LoadingScreen;
