import { useEffect, useRef } from 'react';

interface GifAnimationConfig {
  startX: number;
  startY: number;
  width: number;
  height: number;
  speed: number;
}

export const useGifAnimation = (config: GifAnimationConfig) => {
  const elementRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let screenW = window.innerWidth;
    let screenH = window.innerHeight;
    let x = config.startX;
    let y = config.startY;
    
    let dx = (Math.random() > 0.5 ? 1 : -1) * config.speed;
    let dy = (Math.random() > 0.5 ? 1 : -1) * config.speed;

    const move = () => {
      x += dx;
      y += dy;

      if (x < 0) {
        x = 0;
        dx = Math.abs(dx);
        element.style.transform = "scaleX(1)";
      } else if (x > screenW - config.width) {
        x = screenW - config.width;
        dx = -Math.abs(dx);
        element.style.transform = "scaleX(-1)";
      }

      if (y < 0) {
        y = 0;
        dy = Math.abs(dy);
      } else if (y > screenH - config.height) {
        y = screenH - config.height;
        dy = -Math.abs(dy);
      }

      element.style.left = x + "px";
      element.style.top = y + "px";
      
      requestAnimationFrame(move);
    };

    const handleResize = () => {
      screenW = window.innerWidth;
      screenH = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    move();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [config]);

  return elementRef;
};
