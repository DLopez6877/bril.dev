import { useState, useEffect } from "react";

const useIsMobileLandscape = () => {
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      const isMobile = window.innerWidth <= 768;
      setIsMobileLandscape(isLandscape && isMobile);
    };

    handleResize(); // Initialize the state on mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobileLandscape;
};

export default useIsMobileLandscape;
