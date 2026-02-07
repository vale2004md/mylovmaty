'use client';

import { useRouter } from 'next/navigation';

type Props = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export default function CartaModal({ open, onOpen, onClose }: Props) {
  const router = useRouter(); // 👈 ACÁ, ARRIBA

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-40"
          onClick={onClose}
        />
      )}

      <div className="relative z-50">
        <div
          onClick={onOpen}
          className={`envelope ${open ? 'open' : ''}`}
        >
          <div className="envelope-back" />
          <div className="envelope-front" />
          <div className="envelope-flap" />

          <div className="letter">
            <p className="font-minecraft text-xl text-center mb-6">
              ¿Querés ser mi <br />
              <strong>San Valentín?</strong>
            </p>

            <div className="flex gap-4 justify-center relative">
              {/* BOTÓN SÍ */}
              <button
                onClick={() => router.push('/si')}
                className="btn-minecraft bg-green-500"
              >
                Sí 💚
              </button>

              {/* BOTÓN NO */}
              <button
                onMouseEnter={(e) => {
                  const btn = e.currentTarget;
                  btn.style.position = 'absolute';
                  btn.style.left = `${Math.random() * 160 - 80}px`;
                  btn.style.top = `${Math.random() * 80 - 40}px`;
                }}
                className="btn-minecraft bg-red-500"
              >
                No 💔
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
