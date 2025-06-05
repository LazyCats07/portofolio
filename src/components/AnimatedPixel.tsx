import React, { useEffect, useRef } from 'react';

const AnimatedPixel: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const text = 'Get to know me, hi im rafi!';
    const fontSize = 16;
    ctx.font = `${fontSize}px monospace`;
    ctx.fillStyle = '#A03B1E';
    const charWidth = ctx.measureText('M').width;
    const amplitude = 6;
    const baseY = fontSize + amplitude;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < text.length; i += 1) {
        const x = i * charWidth;
        const y = baseY + Math.sin((i + frame / 2) / 2) * amplitude;
        ctx.fillText(text[i], x, y);
      }
      frame += 1;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={50}
      className="block mx-auto my-4 pixel-animation"
    />
  );
};

export default AnimatedPixel;
