"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { TemplateConfig } from "../lib/templates";

export function useTemplateEditor(config: TemplateConfig) {
  const searchParams = useSearchParams();
  const router = useRouter();
  

  const isViewMode = config.fields.some(field => searchParams.has(field.key));

  const [data, setData] = useState<Record<string, string>>(() => {
    const initialState: Record<string, string> = {};
    config.fields.forEach(field => {
      initialState[field.key] = field.defaultValue;
    });
    return initialState;
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  useEffect(() => {
    if (isViewMode) {
      const newData: Record<string, string> = {};
      config.fields.forEach(field => {
        const paramValue = searchParams.get(field.key);
        newData[field.key] = paramValue || field.defaultValue;
      });
      setData(newData);
      setIsSidebarOpen(false); 
    } else {
      // Load from LocalStorage
      const saved = localStorage.getItem(`template-${config.id}`);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setData(prev => ({ ...prev, ...parsed }));
        } catch (e) {
          console.error("Failed to parse saved template data", e);
        }
      }
    }
  }, [isViewMode, searchParams, config.id, config.fields]);

  // Save to LocalStorage
  useEffect(() => {
    if (!isViewMode) {
      localStorage.setItem(`template-${config.id}`, JSON.stringify(data));
    }
  }, [data, isViewMode, config.id]);

  const updateField = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const publish = () => {
    const params = new URLSearchParams();
    
    // Add all fields to params
    Object.entries(data).forEach(([key, value]) => {
      params.set(key, value);
    });
    
    const url = `${window.location.pathname}?${params.toString()}`;
    router.push(url);
  };

  return {
    data,
    updateField,
    isViewMode,
    isSidebarOpen,
    setIsSidebarOpen,
    publish
  };
}
