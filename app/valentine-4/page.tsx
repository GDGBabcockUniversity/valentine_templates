"use client";

import React, { useState, useEffect } from "react";
import { Heart, ChevronRight, ChevronLeft, Image as ImageIcon } from "lucide-react";
import Navbar from "../components/Navbar";

// Story Steps Data
const storySteps = [
  {
    id: "intro",
    title: "A Story About Us",
    content: "Every love story is beautiful, but ours is my favorite. Here's a little reminder of our journey...",
  },
  {
    id: "step1",
    title: "How it Started",
    content: "Remember when we first met? I knew right then that you were someone special.",
  },
  {
    id: "step2",
    title: "The Memories",
    content: "From our late night talks to our little adventures, every moment with you is a treasure I hold dear.",
  },
  {
    id: "step3",
    title: "Why I Love You",
    content: "I love your kindness, your laugh, and the way you make everything better just by being you.",
  },
  {
    id: "final",
    title: "One Last Question...",
    content: "We've made so many memories, and I want to make millions more with you.",
  }
];

export default function ValentineTemplate4() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < storySteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const currentData = storySteps[currentStep];
  const isFinalStep = currentData.id === 'final';

  return (
    <div className="min-h-screen bg-background-dark flex flex-col font-body text-white relative overflow-hidden">
      <Navbar />

      {/* Subtle Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-[#1a0510] to-background-dark animate-pulse z-0"></div>

      {/* Content Container */}
      <div className="flex-grow flex flex-col items-center justify-center p-6 z-10 w-full max-w-2xl mx-auto relative">
        
        {/* Progress Dots */}
        <div className="flex gap-2 mb-8">
          {storySteps.map((_, idx) => (
            <div 
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentStep ? 'bg-primary w-6' : 'bg-gray-700'}`}
            />
          ))}
        </div>

        {/* Story Card */}
        <div className="w-full bg-surface-dark/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-16 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center">
            
            {/* Transition Key */}
            <div key={currentStep} className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both w-full flex flex-col items-center">
                
                <Heart className="w-20 h-20 text-primary mb-8 animate-pulse" fill="currentColor" />

                <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary mb-6">
                  {currentData.title}
                </h2>
                
                <p className="text-xl sm:text-2xl text-gray-300 font-body leading-relaxed max-w-lg">
                  {currentData.content}
                </p>

                {isFinalStep && (
                  <div className="mt-10 flex flex-col gap-4 w-full max-w-xs animate-in zoom-in duration-700 delay-300">
                    <button className="w-full py-4 bg-primary text-white font-bold rounded-full text-lg shadow-lg hover:scale-105 transition-transform hover:shadow-primary/40 animate-pulse">
                      YES! Be My Valentine 💖
                    </button>
                    <button className="w-full py-4 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white rounded-full text-sm transition-colors">
                      Maybe later... (Just kidding!)
                    </button>
                  </div>
                )}
            </div>

        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-full mt-8 max-w-md px-4">
          <button 
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 text-gray-400 hover:text-white transition-colors ${currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <ChevronLeft className="w-5 h-5" /> Previous
          </button>

          {!isFinalStep && (
            <button 
              onClick={handleNext}
              className="flex items-center gap-2 text-primary hover:text-primary-light font-bold transition-colors"
            >
              Next <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
