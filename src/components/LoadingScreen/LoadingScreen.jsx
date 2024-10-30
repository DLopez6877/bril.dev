import { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  const icons = [
    "fa-solid fa-skull",
    "fa-solid fa-skull-crossbones",
    "fa-solid fa-dice-d20",
    "fa-solid fa-dice",
    "fa-solid fa-gamepad",
    "fa-solid fa-chess-knight",
    "fa-solid fa-chess-board",
    "fa-solid fa-music",
    "fa-brands fa-wizards-of-the-coast",
    "fa-solid fa-hat-wizard",
    "fa-brands fa-github",
    "fa-solid fa-pen-nib",
    "fa-solid fa-ghost",
    "fa-brands fa-docker",
    "fa-solid fa-plane",
    "fa-solid fa-power-off",
    "fa-brands fa-react",
    "fa-brands fa-rebel",
    "fa-brands fa-twitch",
    "fa-solid fa-yin-yang",
    "fa-solid fa-radiation",
    "fa-solid fa-pizza-slice",
    "fa-solid fa-headphones",
    "fa-solid fa-guitar",
    "fa-solid fa-face-surprise",
    "fa-solid fa-face-smile-wink",
    "fa-solid fa-face-laugh-beam",
    "fa-solid fa-face-dizzy",
    "fa-solid fa-cat",
    "fa-solid fa-bowling-ball",
    "fa-brands fa-xbox",
    "fa-solid fa-seedling",
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
                <i key={index} className={randomIcon}></i>
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
