"use client";

import { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface ProjectVideoProps {
  thumbnail: string;
  posterImage?: string;
  videoUrl?: string;
}

function getEmbedUrl(url: string) {
  // strip brackets if user left them in the placeholder
  let cleanUrl = url.replace(/\[|\]/g, "").trim();
  
  try {
    if (cleanUrl.includes("youtu.be/")) {
      const id = cleanUrl.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    } else if (cleanUrl.includes("youtube.com/watch")) {
      const urlParams = new URL(cleanUrl).searchParams;
      return `https://www.youtube.com/embed/${urlParams.get("v")}?autoplay=1`;
    } else if (cleanUrl.includes("vimeo.com/")) {
      const id = cleanUrl.split("vimeo.com/")[1];
      return `https://player.vimeo.com/video/${id}?autoplay=1`;
    }
    return cleanUrl;
  } catch (e) {
    return cleanUrl;
  }
}

export function ProjectVideo({ thumbnail, posterImage, videoUrl }: ProjectVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#project-media") {
      const el = document.getElementById("project-media");
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
      }
    }
  }, []);

  // If no video URL or it's just the placeholder, don't allow playback
  const hasValidVideo = videoUrl && videoUrl !== "" && !videoUrl.includes("INSERT_VIDEO_URL_HERE");

  if (isPlaying && hasValidVideo) {
    const embedUrl = getEmbedUrl(videoUrl);
    
    // If it's an mp4, use native video tag
    if (embedUrl.endsWith(".mp4") || embedUrl.endsWith(".webm")) {
      const cleanPoster = (posterImage || thumbnail).replace(/\[|\]/g, "").trim();
      return (
        <div className="aspect-video relative bg-black w-full overflow-hidden border border-border">
          <video 
            src={embedUrl}
            poster={cleanPoster}
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>
      );
    }
    
    // Otherwise use iframe (YouTube/Vimeo)
    return (
      <div className="aspect-video relative bg-black w-full overflow-hidden border border-border">
        <iframe
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    );
  }

  // Ensure thumbnail string is properly cleaned of brackets if any
  const imageToUse = posterImage || thumbnail;
  const cleanThumbnail = imageToUse.replace(/\[|\]/g, "").trim();

  return (
    <div className="aspect-video relative bg-black border border-border w-full flex items-center justify-center group overflow-hidden">
      {/* 
        Using an img element with object-fit: cover is more semantic and avoids background-image loading issues 
        where the container appears black before the CSS image loads.
      */}
      <img
        src={cleanThumbnail}
        alt="Video thumbnail preview"
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity"
      />
      <div className="absolute inset-0 bg-black/20" />
      
      {hasValidVideo && (
        <button 
          onClick={() => setIsPlaying(true)}
          className="z-10 w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center text-white hover:bg-primary transition-colors transform hover:scale-105 shadow-lg"
          aria-label="Play video"
        >
          <Play className="w-8 h-8 ml-1" />
        </button>
      )}

      {!hasValidVideo && (
        <div className="z-10 px-6 py-3 bg-black/60 rounded-full text-white/80 font-mono text-sm uppercase tracking-widest backdrop-blur-sm">
          Coming Soon
        </div>
      )}
      
      {/* Player controls mock (only show if not playing) */}
      {hasValidVideo && (
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end pointer-events-none">
          <div className="w-full h-1 bg-[#262626] rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/3" />
          </div>
        </div>
      )}
    </div>
  );
}
