import { useState, useEffect } from "react";

const useIsWideAspectRatio = () => {
  const [isWideAspectRatio, setIsWideAspectRatio] = useState(false);

  useEffect(() => {
    const checkAspectRatio = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      const targetAspectRatio = 1130 / 800;
      setIsWideAspectRatio(aspectRatio > targetAspectRatio);
    };

    checkAspectRatio(); // Initial check
    window.addEventListener("resize", checkAspectRatio);

    return () => {
      window.removeEventListener("resize", checkAspectRatio);
    };
  }, []);

  return isWideAspectRatio;
};

export default useIsWideAspectRatio;
