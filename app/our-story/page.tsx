"use client";

import React, { useState, useEffect } from "react";
import { Heart, ChevronRight, ChevronLeft, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import TemplateSidebar from "../components/TemplateSidebar";
import { useTemplateEditor } from "../hooks/useTemplateEditor";
import { OUR_STORY_CONFIG } from "../lib/templates";

export default function OurStoryTemplate() {
  const { 
    data, 
    updateField, 
    isViewMode, 
    isSidebarOpen, 
    setIsSidebarOpen, 
    publish 
  } = useTemplateEditor(OUR_STORY_CONFIG);

  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // Map edited data to story steps
  const storySteps = [
    {
      id: "intro",
      title: "A Story About Us",
      content: "Every love story is beautiful, but ours is my favorite. Here's a little reminder of our journey...",
    },
    {
      id: "step1",
      title: data.step1_title,
      content: data.step1_content,
    },
    {
      id: "step2",
      title: data.step2_title,
      content: data.step2_content,
    },
    {
      id: "step3",
      title: data.step3_title,
      content: data.step3_content,
    },
    {
      id: "final",
      title: data.final_title,
      content: data.final_content,
    }
  ];

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
      {!isViewMode && <Navbar />}

      {/* Sidebar for editing */}
      {!isViewMode && (
        <TemplateSidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
          config={OUR_STORY_CONFIG}
          data={data}
          onUpdate={updateField}
          onPublish={publish}
        />
      )}

      {/* Floating Edit Button */}
      {!isViewMode && !isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-105"
        >
          <Heart fill="currentColor" />
        </button>
      )}

      {/* Subtle Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-[#1a0510] to-background-dark animate-pulse z-0"></div>

      {/* Content Container */}
      <div className={`flex-grow flex flex-col items-center justify-center p-6 z-10 w-full max-w-2xl mx-auto relative transition-all duration-300 ${!isViewMode && isSidebarOpen ? 'md:ml-[400px]' : ''}`}>
        
        {/* Progress Dots (Hide if success) */}
        {!showSuccess && (
            <div className="flex gap-2 mb-8">
            {storySteps.map((_, idx) => (
                <div 
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentStep ? 'bg-primary w-6' : 'bg-gray-700'}`}
                />
            ))}
            </div>
        )}

        {/* Story Card */}
        <div className="w-full bg-surface-dark/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-16 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center">
            
            {!showSuccess ? (
                /* Transition Key */
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
                        <button 
                            onClick={() => setShowSuccess(true)}
                            className="w-full py-4 bg-primary text-white font-bold rounded-full text-lg shadow-lg hover:scale-105 transition-transform hover:shadow-primary/40 animate-pulse"
                        >
                        YES! Be My Valentine 💖
                        </button>
                        <button className="w-full py-4 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white rounded-full text-sm transition-colors">
                        Maybe later... (Just kidding!)
                        </button>
                    </div>
                    )}
                </div>
            ) : (
                /* Success View */
                <div className="animate-in fade-in zoom-in duration-500 flex flex-col items-center">
                     <div className="mb-6 flex justify-center">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
                           <Heart className="text-primary w-12 h-12" fill="currentColor" />
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-display font-bold text-white mb-6 text-glow">
                        {data.success_title}
                    </h2>
                    <p className="text-xl sm:text-2xl text-gray-300 font-body leading-relaxed max-w-lg">
                        {data.success_content}
                    </p>
                    <div className="mt-8 flex gap-2">
                        <Heart className="text-primary w-6 h-6 animate-pulse" fill="currentColor" />
                        <Heart className="text-primary w-8 h-8 animate-pulse delay-75" fill="currentColor" />
                        <Heart className="text-primary w-6 h-6 animate-pulse delay-150" fill="currentColor" />
                    </div>
                </div>
            )}

        </div>

        {/* Navigation Buttons (Hide if success) */}
        {!showSuccess && (
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
        )}

      </div>
    </div>
  );
}
