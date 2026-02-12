"use client";

import React, { useState } from "react";
import { Copy, Check, X, Twitter, MessageCircle, Send } from "lucide-react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function ShareModal({ isOpen, onClose, url }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareSocial = (platform: string) => {
    let rawUrl = "";
    const text = "Check out this Valentine surprise I made! ❤️";
    
    switch (platform) {
      case 'twitter':
        rawUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        rawUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
        break;
      case 'telegram':
        rawUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
    }
    
    if (rawUrl) window.open(rawUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-6 shadow-2xl animate-in zoom-in-95 fade-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce">
            <Send className="text-primary w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 font-display">It&apos;s Ready!</h3>
          <p className="text-gray-400 text-sm">Copy the link below and share the love.</p>
        </div>

        {/* Copy Link Section */}
        <div className="relative flex items-center gap-2 bg-black/40 border border-white/5 rounded-2xl p-2 pl-4 mb-8">
          <span className="text-gray-300 text-xs font-mono truncate flex-1">
            {url}
          </span>
          <button 
            onClick={copyToClipboard}
            className={`min-w-[100px] h-10 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all ${
              copied ? 'bg-green-500 text-white' : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            {copied ? (
              <><Check size={16} /> Copied</>
            ) : (
              <><Copy size={16} /> Copy</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
