"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { TemplateConfig } from "../lib/templates";
import { supabase } from "../lib/supabase";

const generateShortId = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export function useTemplateEditor(config: TemplateConfig) {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const templateId = searchParams.get("id");
  const isViewMode = !!templateId;

  const [data, setData] = useState<Record<string, string>>(() => {
    const initialState: Record<string, string> = {};
    config.fields.forEach(field => {
      initialState[field.key] = field.defaultValue;
    });
    return initialState;
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(isViewMode);
  const [isPublishing, setIsPublishing] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState("");

  // Load from Supabase if id is present
  useEffect(() => {
    async function loadTemplate() {
      if (templateId) {
        setIsLoading(true);
        const { data: record, error } = await supabase
          .from("templates")
          .select("data")
          .eq("id", templateId)
          .single();

        if (error) {
          console.error("Error loading template:", error);
        } else if (record) {
          setData(record.data);
          setIsSidebarOpen(false);
        }
        setIsLoading(false);
      } else {
        // Load from LocalStorage for editing
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
    }

    loadTemplate();
  }, [templateId, config.id]);

  // Save to LocalStorage for persistence during editing
  useEffect(() => {
    if (!isViewMode) {
      localStorage.setItem(`template-${config.id}`, JSON.stringify(data));
    }
  }, [data, isViewMode, config.id]);

  const updateField = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const publish = async () => {
    const shortId = generateShortId();
    setIsPublishing(true);
    const { error } = await supabase
      .from("templates")
      .insert([
        { 
          id: shortId,
          template_type: config.id, 
          data: data 
        }
      ]);

    setIsPublishing(false);

    if (error) {
      console.error("Error publishing template:", error);
      alert("Failed to publish. Check console for details.");
      return;
    }

    const url = `${window.location.origin}${window.location.pathname}?id=${shortId}`;
    setPublishedUrl(url);
    setIsShareModalOpen(true);
  };

  return {
    data,
    updateField,
    isViewMode,
    isSidebarOpen,
    setIsSidebarOpen,
    publish,
    isLoading,
    isPublishing,
    isShareModalOpen,
    setIsShareModalOpen,
    publishedUrl
  };
}
