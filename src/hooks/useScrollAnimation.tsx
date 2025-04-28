
import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const {
    rootMargin = '0px',
    threshold = 0.1,
    triggerOnce = true
  } = options;
  
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          if (triggerOnce) {
            observer.unobserve(currentElement);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );
    
    observer.observe(currentElement);
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [rootMargin, threshold, triggerOnce]);
  
  return { ref: elementRef, isVisible };
};

export default useScrollAnimation;
