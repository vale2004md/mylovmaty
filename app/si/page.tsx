'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Drop = {
  id: number;
  left: number;
  duration: number;
  size: number;
  src: string;
};
const PARTICLES = ['🌹', '🌸', '🌼', '💎', '✨'];

export default function SiPage() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDrop: Drop = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        duration: 3 + Math.random() * 3,
        size: 28 + Math.random() * 20,
        src: PARTICLES[Math.floor(Math.random() * PARTICLES.length)],
      };

      setDrops(prev => [...prev.slice(-50), newDrop]);
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: 'url(/fondo-minecraft.png)',
        backgroundSize: 'cover',
      }}
    >
      {/* Partículas */}
      {drops.map(drop => (
        <div
          key={drop.id}
          className="absolute animate-fall pointer-events-none"
          style={{
            left: `${drop.left}%`,
            width: drop.size,
            height: drop.size,
            animationDuration: `${drop.duration}s`,
          }}
        >
          <Image
            src={drop.src}
            alt=""
            width={drop.size}
            height={drop.size}
            style={{
              imageRendering: 'pixelated',
            }}
          />
        </div>
      ))}

      {/* Mensaje central */}
      <div className="z-10 bg-white/90 border-4 border-black p-10 shadow-pixel text-center font-minecraft">
        <h1 className="text-4xl minecraft-text mb-4">
          💖 DIJO QUE SÍ 💖
        </h1>
        <p className="text-xl">
          Nuestro mundo empieza acá 🌸
        </p>
      </div>
    </div>
  );
}
