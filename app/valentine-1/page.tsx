"use client";

import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function ValentineTemplate1() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: string; delay: string; size: number }[]>([]);

  useEffect(() => {
    // Generate random floating hearts
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: Math.floor(Math.random() * 20) + 10,
    }));
    setHearts(newHearts);
  }, []);

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoButtonPosition({ x, y });
    setIsNoButtonMoved(true);
  };

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-background-dark flex flex-col font-body text-white">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
        {/* Floating Hearts Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {hearts.map((heart) => (
            <div
              key={heart.id}
              className="absolute bottom-[-50px] animate-float opacity-20 text-primary"
              style={{
                left: heart.left,
                animationDelay: heart.delay,
                fontSize: `${heart.size}px`,
              }}
            >
              <Heart fill="currentColor" />
            </div>
          ))}
        </div>

        <div className="w-full max-w-md bg-surface-dark rounded-3xl shadow-2xl p-8 md:p-12 text-center relative z-10 border border-white/10 card-hover">
          {!showSuccess ? (
            <>
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="text-primary w-8 h-8" fill="currentColor" />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight font-display text-glow">
                Will you be my Valentine?
              </h1>
              
              <p className="text-gray-400 mb-8 text-lg font-body">
                Please say yes... 🥺👉👈
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleYesClick}
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 active:scale-95 font-display shadow-primary/20"
                >
                  YESSSS! ✨
                </button>

                <button
                  onMouseEnter={moveNoButton}
                  onClick={moveNoButton}
                  style={{
                    transform: isNoButtonMoved ? `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)` : "none",
                  }}
                  className="w-full sm:w-auto px-8 py-3 bg-transparent text-gray-300 border border-white/20 font-medium rounded-full shadow-sm hover:text-white hover:border-white/40 transition-all duration-300 font-display"
                >
                  No thanks
                </button>
              </div>

              <div className="mt-12 pt-6 border-t border-white/10">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold flex items-center justify-center gap-1 font-display">
                  MADE WITH <Heart className="w-3 h-3 text-primary" fill="currentColor" /> FOR YOU
                </p>
              </div>
            </>
          ) : (
            <div className="animate-in fade-in zoom-in duration-500">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                  <Heart className="text-white w-10 h-10" fill="white" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight font-display">
                Yay! I knew you'd say yes! ❤️
              </h1>
              <p className="text-gray-400 mb-8 text-lg font-body">
                I love you so much! See you on the 14th! 😘
              </p>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.2;
            }
            90% {
              opacity: 0.2;
            }
            100% {
              transform: translateY(-100vh) rotate(360deg);
              opacity: 0;
            }
          }
          .animate-float {
            animation: float 15s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
