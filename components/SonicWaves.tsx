import React, { useEffect, useRef } from 'react';

const SonicWaves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Configuration for the "Liquid Gold" effect
    const waves = [
      { wavelength: 200, amplitude: 50, speed: 0.002, color: 'rgba(255, 215, 0, 0.4)', yOffset: 0 },
      { wavelength: 300, amplitude: 70, speed: 0.001, color: 'rgba(197, 160, 89, 0.3)', yOffset: 20 },
      { wavelength: 150, amplitude: 30, speed: 0.003, color: 'rgba(255, 223, 0, 0.2)', yOffset: -20 },
    ];
    
    // Particles representing "Gold Dust"
    let particles: { x: number; y: number; size: number; weight: number }[] = [];
    const particleCount = 120; // Number of points across the width

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: (i / particleCount) * width,
          y: height / 2,
          size: Math.random() * 2 + 0.5, // Tiny dust particles
          weight: Math.random() * 0.5 + 0.5,
        });
      }
    };

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update time for movement
      time += 1;

      // Draw each wave layer
      waves.forEach((wave) => {
        ctx.fillStyle = wave.color;
        
        // We iterate through particles to draw the wave
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          
          // Calculate Y based on sine wave physics
          // y = Center + Sin(x * frequency + time * speed) * amplitude
          const waveY = 
            (height / 2 + wave.yOffset) + 
            Math.sin((p.x / wave.wavelength) + (time * wave.speed)) * wave.amplitude * p.weight;

          // Draw "Dust" particle
          ctx.beginPath();
          // Adding a slight "glow" effect to each dot
          ctx.arc(p.x, waveY, p.size, 0, Math.PI * 2);
          ctx.fill();

          // Optional: Connect dots with very faint lines to simulate "structure" (Audio String)
          // This gives it the "Engineering" look
          if (i > 0) {
             const prevP = particles[i-1];
             const prevY = (height / 2 + wave.yOffset) + Math.sin((prevP.x / wave.wavelength) + (time * wave.speed)) * wave.amplitude * prevP.weight;
             
             ctx.beginPath();
             ctx.moveTo(prevP.x, prevY);
             ctx.lineTo(p.x, waveY);
             ctx.strokeStyle = wave.color.replace('0.4', '0.05').replace('0.3', '0.05'); // Very faint lines
             ctx.lineWidth = 0.5;
             ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    init();
    animate();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 opacity-80"
      style={{ filter: 'blur(1px)' }} // Slight blur for "dreamy" effect
    />
  );
};

export default SonicWaves;