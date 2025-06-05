import React, { useEffect, useRef } from 'react';

const asciiArt = `   █████████            █████        █████

  ███░░░░░███          ░░███        ░░███

 ███     ░░░   ██████  ███████      ███████    ██████

░███          ███░░███░░░███░      ░░░███░    ███░░███

░███    █████░███████   ░███         ░███    ░███ ░███

░░███  ░░███ ░███░░░    ░███ ███     ░███ ███░███ ░███

 ░░█████████ ░░██████   ░░█████      ░░█████ ░░██████

  ░░░░░░░░░   ░░░░░░     ░░░░░        ░░░░░   ░░░░░░

 █████   ████                                        ██████   ██████

░░███   ███░                                        ░░██████ ██████

 ░███  ███    ████████    ██████  █████ ███ █████    ░███░█████░███   ██████

 ░███████    ░░███░░███  ███░░███░░███ ░███░░███     ░███░░███ ░███  ███░░███

 ░███░░███    ░███ ░███ ░███ ░███ ░███ ░███ ░███     ░███ ░░░  ░███ ░███████

 ░███ ░░███   ░███ ░███ ░███ ░███ ░░███████████      ░███      ░███ ░███░░░

 █████ ░░████ ████ █████░░██████   ░░████░████       █████     █████░░██████

░░░░░   ░░░░ ░░░░ ░░░░░  ░░░░░░     ░░░░ ░░░░       ░░░░░     ░░░░░  ░░░░░░

  ██ █████   █████  ███  ███    █████  ██                    ███████████                ██████   ███   ██
 ███░░███   ░░███  ░░░  ░███   ░░███  ███                   ░░███░░░░░███              ███░░███ ░░░   ███
░░░  ░███    ░███  ████ ░███    ░███ ░░░  █████████████      ░███    ░███   ██████    ░███ ░░░  ████ ░░░ 
     ░███████████ ░░███ ░███    ░███     ░░███░░███░░███     ░██████████   ░░░░░███  ███████   ░░███     
     ░███░░░░░███  ░███ ░███    ░███      ░███ ░███ ░███     ░███░░░░░███   ███████ ░░░███░     ░███     
     ░███    ░███  ░███ ░░░     ░███      ░███ ░███ ░███     ░███    ░███  ███░░███   ░███      ░███     
     █████   █████ █████ ███    █████     █████░███ █████    █████   █████░░████████  █████     █████    
    ░░░░░   ░░░░░ ░░░░░ ░░░    ░░░░░     ░░░░░ ░░░ ░░░░░    ░░░░░   ░░░░░  ░░░░░░░░  ░░░░░     ░░░░░   
`;

const AsciiWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const lines = asciiArt.split('\n');
    const fontSize = 12;
    ctx.font = `${fontSize}px monospace`;
    ctx.fillStyle = '#A03B1E';
    const charWidth = ctx.measureText('M').width;
    const lineHeight = fontSize + 2;
    const amplitude = 4;
    canvas.width = charWidth * Math.max(...lines.map((l) => l.length));
    canvas.height = lineHeight * lines.length + amplitude * 2;

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let row = 0; row < lines.length; row += 1) {
        const line = lines[row];
        for (let col = 0; col < line.length; col += 1) {
          const ch = line[col];
          const x = col * charWidth;
          const y = (row + 1) * lineHeight + Math.sin((col + frame / 2) / 2) * amplitude;
          ctx.fillText(ch, x, y);
        }
      }
      frame += 1;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} className="block mx-auto my-4" />;
};

export default AsciiWave;
