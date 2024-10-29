import { useState, useEffect } from "react";

const useIsLandscape = () => {
  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleResize = () =>
      setIsLandscape(window.innerWidth > window.innerHeight);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLandscape;
};

export default useIsLandscape;
