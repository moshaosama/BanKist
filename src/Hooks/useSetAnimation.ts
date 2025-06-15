import { useState, useEffect } from "react";

const useSetAnimation = (scrollY: number) => {
  const [isTransiton, setIsTransition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollY) {
        setIsTransition(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransiton]);

  return {isTransiton}
};

export default useSetAnimation;
