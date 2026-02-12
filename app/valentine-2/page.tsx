"use client";

import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import Navbar from "../components/Navbar";

export default function ValentineTemplate2() {
  const [isOpen, setIsOpen] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: string; delay: string; size: number }[]>([]);

  useEffect(() => {
    // Generate random floating hearts on client side only to avoid hydration mismatch
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      size: Math.floor(Math.random() * 20) + 10,
    }));
    setHearts(newHearts);
  }, []);

  // Toggle open/closed state
  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-background-dark flex flex-col font-body text-white relative overflow-hidden">
      <Navbar />

      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
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

      <div className="flex-grow flex items-center justify-center p-4 z-10">
        <div className="relative w-[320px] h-[220px] sm:w-[500px] sm:h-[300px] cursor-pointer group" onClick={toggleEnvelope}>
          
          {/* Envelope Wrapper */}
          <div className={`relative w-full h-full transition-transform duration-700 ${isOpen ? 'translate-y-[100px] sm:translate-y-[120px]' : 'hover:scale-105'}`}>
            
            {/* Back Flap */}
            <div className="absolute inset-0 bg-[#b00848] rounded-md shadow-lg"></div>
            
            {/* Letter */}
            <div 
              className={`absolute left-1/2 -translate-x-1/2 w-[90%] h-[85%] bg-white text-gray-800 transition-all duration-700 ease-in-out z-10 flex flex-col items-center justify-center text-center p-5 shadow-md rounded-sm border border-gray-100
                ${isOpen ? 'bottom-[140px] sm:bottom-[180px] opacity-100 rotate-0' : 'bottom-0 opacity-0 rotate-180 scale-90'}`}
            >
              <Heart className="text-primary w-6 h-6 sm:w-8 sm:h-8 mb-3 animate-pulse" fill="currentColor" />
              <h2 className="text-primary font-display font-bold text-lg sm:text-2xl mb-2 sm:mb-3">Happy Valentine's!</h2>
              <p className="text-gray-600 text-xs sm:text-base font-body leading-relaxed max-w-[240px] sm:max-w-xs mx-auto">
                You make every day brighter. <br/> Will you be my Valentine? 
              </p>
              <p className="text-primary font-bold mt-3 sm:mt-4 text-xs sm:text-sm tracking-widest uppercase">xoxo</p>
            </div>

            {/* Front Flap (Left) */}
            <div className="absolute left-0 bottom-0 width-0 height-0 border-l-[160px] sm:border-l-[250px] border-b-[110px] sm:border-b-[150px] border-l-transparent border-b-[#e00b5c] z-20 rounded-bl-md shadow-sm"></div>
            
            {/* Front Flap (Right) */}
            <div className="absolute right-0 bottom-0 width-0 height-0 border-r-[160px] sm:border-r-[250px] border-b-[110px] sm:border-b-[150px] border-r-transparent border-b-[#e00b5c] z-20 rounded-br-md shadow-sm"></div>
            
            {/* Top Flap (The one that opens) */}
            <div 
              className={`absolute top-0 left-0 width-0 height-0 border-l-[160px] sm:border-l-[250px] border-r-[160px] sm:border-r-[250px] border-t-[110px] sm:border-t-[150px] border-l-transparent border-r-transparent border-t-[#ff5c9d] origin-top transition-transform duration-700 drop-shadow-md
                ${isOpen ? 'rotate-x-180 z-0' : 'rotate-x-0 z-30'}`}
              style={{ transformStyle: 'preserve-3d' }}
            ></div>
            
          </div>
          
          {/* Instructions */}
          <div className={`absolute -bottom-16 left-1/2 -translate-x-1/2 text-white/50 text-sm font-body tracking-wider uppercase transition-all duration-300 ${isOpen ? 'opacity-0 translate-y-4' : 'opacity-100 animate-bounce'}`}>
            Click to open 💌
          </div>

        </div>
      </div>

      <style jsx>{`
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        .rotate-x-0 {
          transform: rotateX(0deg);
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-float {
          animation: float 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
