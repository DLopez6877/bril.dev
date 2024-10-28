import {useEffect, useState} from "react";
import {useLenis} from "@studio-freight/react-lenis";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, {duration: 0.1});
      setTimeout(() => lenis.stop(), 150);
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = Math.min(100, Math.floor(prev + 100 / (4000 / 100)));
        return nextProgress >= 100 ? 100 : nextProgress;
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
      if (lenis) lenis.start();
    };
  }, [lenis]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (lenis) lenis.start();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [progress, lenis]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="loading-screen-container">
      {Array(5)
        .fill()
        .map((_, index) => (
          <div className="intro-bar" key={"bar" + index}>
            <span className="scroll-text">{progress}</span>
          </div>
        ))}
    </div>
  );
};

export default LoadingScreen;
