import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 236;

export const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    let currentFrame = 0;
    let targetFrame = 0;
    let animationFrameId: number;

    const currentFramePath = (index: number) => {
      const paddedIndex = String(index).padStart(3, '0');
      const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
      return `${baseUrl}frames/ezgif-frame-${paddedIndex}.jpg`;
    };

    const drawCover = (img: HTMLImageElement) => {
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = window.devicePixelRatio || 1;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;

      const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const newWidth = imgWidth * scale;
      const newHeight = imgHeight * scale;

      const x = (canvasWidth - newWidth) / 2;
      const y = (canvasHeight - newHeight) / 2;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, x, y, newWidth, newHeight);
    };

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      const frameIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(currentFrame)));
      const img = images[frameIndex];
      if (img) {
        drawCover(img);
      }
    };

    const updateTargetFrame = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      if (maxScroll <= 0) {
        targetFrame = 0;
        return;
      }

      const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
      targetFrame = scrollFraction * (TOTAL_FRAMES - 1);
    };

    const render = () => {
      currentFrame += (targetFrame - currentFrame) * 0.12;

      const frameIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(currentFrame)));
      const img = images[frameIndex];

      if (img) {
        drawCover(img);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const preloadFrames = () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = currentFramePath(i);

        img.onload = () => {
          loadedCount++;
          setProgress((loadedCount / TOTAL_FRAMES) * 100);

          if (loadedCount === 1) {
            drawCover(img);
          }

          if (loadedCount >= TOTAL_FRAMES) {
            setIsLoaded(true);
          }
        };

        img.onerror = () => {
          loadedCount++;
          if (loadedCount >= TOTAL_FRAMES) {
            setIsLoaded(true);
          }
        };

        images.push(img);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', updateTargetFrame, { passive: true });
    window.addEventListener('wheel', updateTargetFrame, { passive: true });

    resizeCanvas();
    preloadFrames();
    updateTargetFrame();
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateTargetFrame);
      window.removeEventListener('wheel', updateTargetFrame);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="scroll-canvas"
        className="fixed top-0 left-0 w-screen h-screen block z-0 pointer-events-none"
      />
      
      {!isLoaded && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#0b0c10] flex justify-center items-center z-[100] transition-opacity duration-500">
          <div className="w-[200px] h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#66fcf1] to-[#45a29e] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </>
  );
};
