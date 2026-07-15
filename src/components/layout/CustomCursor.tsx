"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const addHoverEffect = () => {
      cursor.classList.add("active");
    };

    const removeHoverEffect = () => {
      cursor.classList.remove("active");
    };

    const attachListeners = () => {
      const interactives = document.querySelectorAll(".interactive-element, .interactive, a, button, input, select, textarea");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", addHoverEffect);
        el.addEventListener("mouseleave", removeHoverEffect);
      });
    };

    const detachListeners = () => {
      const interactives = document.querySelectorAll(".interactive-element, .interactive, a, button, input, select, textarea");
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };

    document.addEventListener("mousemove", moveCursor);
    
    // A small delay to ensure DOM is updated after navigation
    const timeoutId = setTimeout(attachListeners, 100);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      clearTimeout(timeoutId);
      detachListeners();
    };
  }, [pathname]);

  return (
    <div 
      ref={cursorRef} 
      className="custom-cursor hidden md:block" 
    />
  );
}
