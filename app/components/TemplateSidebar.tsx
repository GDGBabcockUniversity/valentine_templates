"use client";

import React from "react";
import { ArrowLeft, Share2, X } from "lucide-react";
import Link from "next/link";
import { TemplateConfig } from "../lib/templates";

interface TemplateSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  config: TemplateConfig;
  data: Record<string, string>;
  onUpdate: (key: string, value: string) => void;
  onPublish: () => void;
}

export default function TemplateSidebar({ 
  isOpen, 
  onClose, 
  config, 
  data, 
  onUpdate, 
  onPublish 
}: TemplateSidebarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 h-full w-full md:w-[400px] bg-[#121212] flex flex-col z-50 overflow-y-auto border-r border-[#333] shadow-2xl font-sans text-white">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
            <ArrowLeft size={16} /> Back to Gallery
          </Link>
          <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="animate-in fade-in slide-in-from-left-4 duration-300">
          <h2 className="text-2xl font-bold mb-6">Edit {config.name}</h2>
          
          <div className="space-y-6">
            {config.fields.map((field) => {
              const currentValue = data[field.key] || '';
              const currentLength = currentValue.length;
              const hasMaxLength = typeof field.maxLength === 'number';

              return (
                <div key={field.key} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {field.label}
                    </label>
                    {hasMaxLength && (
                      <span className={`text-[10px] font-medium ${currentLength >= field.maxLength! ? 'text-red-400' : 'text-gray-600'}`}>
                        {currentLength}/{field.maxLength}
                      </span>
                    )}
                  </div>
                  
                  {field.type === 'textarea' ? (
                    <textarea 
                      value={currentValue}
                      onChange={(e) => onUpdate(field.key, e.target.value)}
                      className="w-full bg-[#1e1e1e] border border-[#333] rounded-xl p-3 text-white focus:outline-none focus:border-[#e00b5c] transition-colors resize-none h-24"
                      placeholder={field.placeholder}
                      maxLength={field.maxLength}
                    />
                  ) : (
                    <input 
                      type="text"
                      value={currentValue}
                      onChange={(e) => onUpdate(field.key, e.target.value)}
                      className="w-full bg-[#1e1e1e] border border-[#333] rounded-xl p-3 text-white focus:outline-none focus:border-[#e00b5c] transition-colors"
                      placeholder={field.placeholder}
                      maxLength={field.maxLength}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 mb-12">
             <button 
              onClick={onPublish}
              className="w-full bg-white hover:bg-gray-100 text-black font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-white/10"
            >
              <Share2 size={18} /> Publish & Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
