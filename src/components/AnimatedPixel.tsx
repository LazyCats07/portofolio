import React, { useEffect, useRef } from 'react';

const AnimatedPixel: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    let x = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, canvas.height);
      ctx.fillStyle = '#A03B1E';
      ctx.fillRect(x, 10, 10, 10);
      x = (x + 1) % width;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={150}
      height={30}
      className="block mx-auto my-4 pixel-animation"
    />
  );
};

export default AnimatedPixel;
