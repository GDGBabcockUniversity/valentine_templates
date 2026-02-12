"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";
import Navbar from "../components/Navbar";
import TemplateSidebar from "../components/TemplateSidebar";
import { useTemplateEditor } from "../hooks/useTemplateEditor";
import { SECRET_CARD_CONFIG } from "../lib/templates";

export default function SecretCardTemplate() {
  const { 
    data, 
    updateField, 
    isViewMode, 
    isSidebarOpen, 
    setIsSidebarOpen, 
    publish 
  } = useTemplateEditor(SECRET_CARD_CONFIG);

  return (
    <div className="min-h-screen bg-background-dark flex flex-col font-body items-center justify-center overflow-hidden relative">
      {!isViewMode && <Navbar />}

      {/* Sidebar for editing */}
      {!isViewMode && (
        <TemplateSidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)}
          config={SECRET_CARD_CONFIG}
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
      
      <div className={`valentines-day-card relative transition-all duration-300 ${!isViewMode && isSidebarOpen ? 'ml-[0] md:ml-[400px]' : ''}`}>
        <input id="open" type="checkbox" className="hidden peer" />
        <label htmlFor="open" className="open" title="Click to Open/Close"></label>
        
        {/* Card Front */}
        <div className="card-front">
          <div className="white-note">
            <div className="heart-seal"></div>
            <div className="note-text-container font-display">
              <span className="block">{data.cover_text}</span>
            </div>
          </div>
        </div>
        
        {/* Card Inside */}
        <div className="card-inside">
          <div className="text-one font-display">
            <span className="block text-primary text-2xl mb-1">{data.line1}</span>
            <span className="block text-gray-800 text-xl">{data.line2}</span>
            <span className="block text-gray-800 text-xl">{data.line3}</span>
          </div>
          <div className="heart"></div>
          <div className="smile"></div>
          <div className="eyes"></div>
        </div>
      </div>

      <style jsx>{`
        .valentines-day-card {
          width: 300px;
          height: 300px;
          transform-style: preserve-3d;
          transform: perspective(2500px);
          transition: .3s;
        }

        .open {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 10;
          cursor: pointer;
        }

        .card-front {
          position: absolute;
          background-color: var(--color-primary);
          width: 100%;
          height: 100%;
          transform-origin: left;
          box-shadow: inset 100px 20px 100px rgba(0,0,0,.15), 30px 0 50px rgba(0,0,0,0.3);
          transition: .3s;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          overflow: hidden; /* Ensure content doesn't spill out visibly if not meant to */
        }

        /* Note styling */
        .white-note {
          position: relative;
          background-color: #fff0f3;
          width: 80%;
          height: 65%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          /* Slight styling to look like paper */
        }

        /* Heart Seal */
        .heart-seal {
          position: absolute;
          background-color: #c41e3a; /* Slightly darker red for contrast/depth */
          height: 50px;
          width: 50px;
          top: -25px; /* Half overlapping top edge */
          left: 50%;
          transform: translateX(-50%) rotate(-45deg);
          animation: none; /* No beat for the seal */
          box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
        }
        
        .heart-seal:before, .heart-seal:after {
          content: "";
          background-color: #c41e3a;
          border-radius: 50%;
          height: 50px;
          width: 50px;
          position: absolute;
        }
        
        .heart-seal:before { top: -25px; left: 0; }
        .heart-seal:after { left: 25px; top: 0; }

        /* Text styling */
        .note-text-container {
          text-align: center;
          z-index: 6;
          color: #333;
          font-weight: 700;
          font-size: 2rem;
          line-height: 1.1;
        }

        .card-inside {
          position: absolute;
          background-color: #fff0f3;
          width: 100%;
          height: 100%;
          z-index: -1;
          left: 0;
          top: 0;
          box-shadow: inset 100px 20px 100px rgba(0,0,0,0.22), 100px 20px 100px rgba(0,0,0,0.1);
        }

        /* Checkbox Logic */
        input#open:checked ~ .card-front {
          transform: rotateY(-155deg);
          box-shadow: inset 100px 20px 100px rgba(0,0,0,.13), 30px 0 50px rgba(0,0,0,0.1);
        }

        /* Inside Content */
        .text-one {
          position: absolute;
          top: 30px;
          width: 100%;
          text-align: center;
        }

        .heart {
          position: relative;
          background-color: var(--color-primary);
          height: 60px;
          width: 60px;
          top: 180px;
          left: 120px;
          transform: rotate(-45deg);
          animation: beat .8s infinite;
        }
        
        .heart:before, .heart:after {
          content: "";
          background-color: var(--color-primary);
          border-radius: 50%;
          height: 60px;
          width: 60px;
          position: absolute;
        }
        
        .heart:before { top: -30px; left: 0; }
        .heart:after { left: 30px; top: 0; }

        .smile {
          position: absolute;
          width: 30px;
          height: 15px;
          background-color: #333;
          border-radius: 0 0 100px 100px;
          top: 200px;
          left: 135px;
          overflow: hidden;
        }

        .smile:before {
          content: "";
          position: absolute;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          background-color: #030202;
          top: 5px;
          left: 5px;
        }

        .eyes {
          position: absolute;
          border-radius: 50%;
          background-color: #333;
          width: 10px;
          height: 10px;
          top: 190px;
          left: 165px;
          box-shadow: -40px 0 #333; /* Left eye */
          animation: close 2s infinite;
        }

        @keyframes close {
          0%, 100% { transform: scale(1, .05); }
          5%, 95% { transform: scale(1, 1); }
        }

        @keyframes beat {
          0%, 40%, 100% { transform: scale(1) rotate(-45deg); }
          25%, 60% { transform: scale(1.1) rotate(-45deg); }
        }

        /* Responsiveness: Scale down on mobile */
        @media (max-width: 400px) {
          .valentines-day-card {
            transform: perspective(2500px) scale(0.85);
          }
        }
      `}</style>
    </div>
  );
}
