"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/fondo-minecraft.png")',
      }}
    >
      <div className="flex flex-col items-center pt-24 gap-12">
        <h1 className="text-8xl text-white text-center font-minecraft minecraft-text minecraft-title">
          Matias y Valeria
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <Link
          href="/pregunta"
          className="flex flex-col items-center gap-3 text-white"
        >
          <img
            className="w-20 md:w-24 parpadeo hover:scale-110 transition-transform cursor-pointer"
            src="/corazon.png"
            alt="corazon"
          />

          <span className="text-xl font-minecraft minecraft-text press-start">
            Presiona el corazon
          </span>
        </Link>
      </div>
    </div>
  );
}
