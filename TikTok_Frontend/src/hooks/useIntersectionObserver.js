import { useEffect, useState } from "react";

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return isVisible;
};

export default useIntersectionObserver;