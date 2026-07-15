"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

export function Lightbox({ isOpen, onClose, imageSrc, title }: LightboxProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      modalRef.current?.focus();
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{
        background: "rgba(0, 0, 0, 0.72)",
        backdropFilter: "blur(10px)",
      }}
      onClick={onClose}
      ref={modalRef}
      tabIndex={-1}
    >
      <div 
        className="relative flex flex-col items-center w-full h-full max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
      >
        <div className="w-full flex justify-end mb-4 max-w-[92vw]">
          <button
            onClick={onClose}
            className="text-white hover:text-primary transition-colors p-2 rounded-full bg-black/40 hover:bg-black/60"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="relative flex-grow flex items-center justify-center w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={title}
            className="shadow-2xl"
            style={{
              maxWidth: "min(92vw, 100%)",
              maxHeight: "86vh",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
        
        <div className="mt-4 text-center max-w-[92vw]">
          <h3 className="text-white font-headline-md text-lg tracking-wide">{title}</h3>
        </div>
      </div>
    </div>
  );
}
