"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, "errors")) {
          setErrorMessage(data.errors.map((error: any) => error.message).join(", "));
        } else {
          setErrorMessage("Oops! There was a problem submitting your form");
        }
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Oops! There was a problem submitting your form");
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#FAF9F6] text-gray-900 min-h-screen w-full flex flex-col items-center">
      <div className="flex-grow pt-[120px] pb-32 px-margin-mobile md:px-margin-desktop w-full max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="col-span-1 md:col-span-12 mb-16 md:mb-24">
            <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-[#C4B5FD] break-words max-w-5xl leading-[0.9]">
              LET'S<br />CREATE<br />TOGETHER
            </h1>
          </div>
          
          {/* Form Side */}
          <div className="col-span-1 md:col-span-7 pr-0 md:pr-12">
            <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
              <div className="group relative">
                <label htmlFor="name" className="font-label-technical text-label-technical text-gray-500 uppercase block mb-2">01 // Name</label>
                <input type="text" id="name" name="name" required className="w-full bg-transparent border-b border-gray-300 py-4 font-body-lg text-body-lg text-gray-900 focus:outline-none focus:border-[#C4B5FD] transition-colors" placeholder="What should I call you?" />
              </div>
              
              <div className="group relative">
                <label htmlFor="email" className="font-label-technical text-label-technical text-gray-500 uppercase block mb-2">02 // Email</label>
                <input type="email" id="email" name="email" required className="w-full bg-transparent border-b border-gray-300 py-4 font-body-lg text-body-lg text-gray-900 focus:outline-none focus:border-[#C4B5FD] transition-colors" placeholder="Where can I reach you?" />
              </div>
              
              <div className="group relative">
                <label htmlFor="project" className="font-label-technical text-label-technical text-gray-500 uppercase block mb-2">03 // Project Scope</label>
                <select id="project" name="project" defaultValue="" required className="w-full bg-transparent border-b border-gray-300 py-4 font-body-lg text-body-lg text-gray-900 focus:outline-none focus:border-[#C4B5FD] transition-colors appearance-none cursor-pointer">
                  <option value="" disabled className="bg-white text-gray-500">Select an option...</option>
                  <option value="video" className="bg-white">Video Editing</option>
                  <option value="motion" className="bg-white">Motion Graphics</option>
                  <option value="design" className="bg-white">Graphic Design</option>
                </select>
              </div>

              <div className="group relative">
                <label htmlFor="message" className="font-label-technical text-label-technical text-gray-500 uppercase block mb-2">04 // Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full bg-transparent border-b border-gray-300 py-4 font-body-lg text-body-lg text-gray-900 focus:outline-none focus:border-[#C4B5FD] transition-colors resize-none" placeholder="Tell me about your vision..."></textarea>
              </div>
              
              {status === "success" && (
                <div className="p-4 bg-green-50 text-green-800 border border-green-200 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="font-body-md text-body-md">Thanks for reaching out! I'll get back to you soon.</p>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-800 border border-red-200 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="font-body-md text-body-md">{errorMessage}</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full md:w-auto inline-flex justify-center items-center px-12 py-6 bg-gray-900 text-white font-label-technical text-label-technical uppercase tracking-widest hover:bg-[#C4B5FD] hover:text-gray-900 transition-colors duration-300 interactive-element group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Inquiry <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="col-span-1 md:col-span-4 md:col-start-9 mt-24 md:mt-0 space-y-16">
            <div>
              <p className="font-label-technical text-label-technical text-gray-500 uppercase mb-4">Direct</p>
              <a href={`mailto:${portfolioData.owner.email}`} className="font-headline-md text-headline-md text-gray-900 hover:text-[#C4B5FD] transition-colors break-all interactive-element">{portfolioData.owner.email}</a>
            </div>
            <div>
              <p className="font-label-technical text-label-technical text-gray-500 uppercase mb-4">Socials</p>
              <ul className="space-y-4">
                {portfolioData.owner.socialLinks.linkedin && (
                  <li><a href={portfolioData.owner.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="font-body-lg text-body-lg text-gray-600 hover:text-[#C4B5FD] transition-colors interactive-element flex items-center justify-between group">LinkedIn <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" /></a></li>
                )}
                {portfolioData.owner.socialLinks.vimeo && (
                  <li><a href={portfolioData.owner.socialLinks.vimeo} target="_blank" rel="noopener noreferrer" className="font-body-lg text-body-lg text-gray-600 hover:text-[#C4B5FD] transition-colors interactive-element flex items-center justify-between group">Vimeo <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" /></a></li>
                )}
                {portfolioData.owner.socialLinks.behance && (
                  <li><a href={portfolioData.owner.socialLinks.behance} target="_blank" rel="noopener noreferrer" className="font-body-lg text-body-lg text-gray-600 hover:text-[#C4B5FD] transition-colors interactive-element flex items-center justify-between group">Behance <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" /></a></li>
                )}
                {portfolioData.owner.socialLinks.instagram && (
                  <li><a href={portfolioData.owner.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="font-body-lg text-body-lg text-gray-600 hover:text-[#C4B5FD] transition-colors interactive-element flex items-center justify-between group">Instagram <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" /></a></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
