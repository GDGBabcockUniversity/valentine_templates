"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function ValentineTemplate3() {
  return (
    <div className="min-h-screen bg-background-dark flex flex-col font-body items-center justify-center overflow-hidden">
      <Navbar />
      
      <div className="valentines-day-card relative">
        <input id="open" type="checkbox" className="hidden peer" />
        <label htmlFor="open" className="open" title="Click to Open/Close"></label>
        
        {/* Card Front */}
        <div className="card-front">
          <div className="note-text text-primary text-xl font-display font-bold">Click to Open</div>
        </div>
        
        {/* Card Inside */}
        <div className="card-inside">
          <div className="text-one font-display">
            <span className="block text-primary text-2xl mb-1">Happy</span>
            <span className="block text-gray-800 text-xl">Valentine's</span>
            <span className="block text-gray-800 text-xl">Day!</span>
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
          background-color: #fff0f3;
          width: 100%;
          height: 100%;
          transform-origin: left;
          box-shadow: inset 100px 20px 100px rgba(0,0,0,.15), 30px 0 50px rgba(0,0,0,0.3);
          transition: .3s;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
        }

        .card-front:before {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          background-color: var(--color-primary); /* Adapted to theme */
          top: 10px;
          left: 10px;
        }

        .note-text {
          position: relative;
          z-index: 6;
          background: #fff0f3;
          padding: 10px 20px;
          border-radius: 5px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
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

        input#open:checked ~ .card-front:before {
          z-index: 5;
          background-color: #fff0f3;
          box-shadow: inset 100px 20px 100px rgba(0,0,0,.1), 30px 0 50px rgba(0,0,0,0.1);
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
