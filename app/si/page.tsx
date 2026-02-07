'use client';

import { useEffect, useState } from 'react';

const EMOJIS = ['🌹', '🌸', '🌼', '💎', '✨'];

type Drop = {
  id: number;
  left: number;
  duration: number;
  size: number;
  emoji: string;
};

export default function SiPage() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newDrop: Drop = {
        id: Date.now(),
        left: Math.random() * 100,
        duration: 3 + Math.random() * 3,
        size: 24 + Math.random() * 20,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
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
      {/* Emojis cayendo */}
      {drops.map(drop => (
        <span
          key={drop.id}
          className="absolute animate-fall select-none"
          style={{
            left: `${drop.left}%`,
            fontSize: drop.size,
            animationDuration: `${drop.duration}s`,
          }}
        >
          {drop.emoji}
        </span>
      ))}

      {/* Mensaje */}
      <div className="z-10 bg-white/90 border-4 border-black p-10 shadow-pixel text-center font-minecraft">
        <h1 className="text-4xl minecraft-text mb-4">
          💖 DIJO QUE SÍ 💖
        </h1>
        <p className="text-xl">
          Este mundo ahora es nuestro 🌸
        </p>
      </div>
    </div>
  );
}
