'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const FRAME_COUNT = 120; // frame_000 to frame_119

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameString = i.toString().padStart(3, '0');
      img.src = `/sequence/frame_${frameString}_delay-0.066s.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          drawFrame(0, loadedImages);
        }
      };
      loadedImages.push(img);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const drawFrame = (index: number, imgs: HTMLImageElement[]) => {
    const canvas = canvasRef.current;
    if (!canvas || !imgs[index]) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgs[index];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;

    let renderWidth = canvas.width;
    let renderHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    // object-fit: cover equivalent for canvas
    if (canvasRatio > imgRatio) {
      renderHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === FRAME_COUNT) {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      );
      // Efficient rendering with rAF
      requestAnimationFrame(() => drawFrame(frameIndex, images));
    }
  });

  // Handle window resize updates
  useEffect(() => {
    const handleResize = () => {
      if (images.length === FRAME_COUNT) {
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(scrollYProgress.get() * FRAME_COUNT)
        );
        drawFrame(frameIndex, images);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </div>
    </div>
  );
}
