'use client';

import { useState } from 'react';
import CartaAnimada from './CartaModal';

export default function PreguntaPage() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(/fondo-minecraft.png)',
        backgroundSize: 'cover',
      }}
    >
      <CartaAnimada
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        />
    </div>
  );
}
