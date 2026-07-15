// Interfaces for strict typing

export interface SocialLinks {
  linkedin?: string;
  vimeo?: string;
  instagram?: string;
  twitter?: string;
  behance?: string;
}

export interface PortfolioOwner {
  fullName: string;
  displayNameLines: string[];
  initials: string;
  professionalTitle: string;
  description: string;
  email: string;
  location?: string;
  socialLinks: SocialLinks;
  resumeUrl?: string;
}

export interface HeroData {
  sectionLabel: string;
  heading: string;
  highlightedText: string;
  description: string;
  supportingText: string;
  buttonText: string;
  buttonUrl: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  period: string;
  honors?: string;
  description: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  category: string;
  type: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  featured: boolean;
  aspectRatio: string; // e.g., "aspect-[3/4]", "aspect-square", "aspect-[21/9]", "aspect-[4/5]"
  role?: string;
  client?: string;
  year?: string;
}

export interface PortfolioData {
  owner: PortfolioOwner;
  hero: HeroData;
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectData[];
}

export const portfolioData: PortfolioData = {
  owner: {
    fullName: "Altamash A. Khan",
    displayNameLines: [
      "ALTAMASH",
      "A. KHAN"
    ],
    initials: "MXD",
    professionalTitle: "Video Editor, Motion Graphics Designer and Graphic Designer",
    description: "Focusing on rhythm, emotion, and visual impact. Dedicated to crafting narratives that resonate.",
    email: "[EMAIL_ADDRESS]",
    location: "UP, Jharkhand",
    socialLinks: {
      linkedin: "https://linkedin.com",
      vimeo: "https://vimeo.com",
      instagram: "https://instagram.com",
      behance: "https://behance.net"
    }
  },
  hero: {
    sectionLabel: "INTRO",
    heading: "I am a versatile video editor who partners with directors.",
    highlightedText: "video editor",
    description: "Focusing on rhythm, emotion, and visual impact.",
    supportingText: "Dedicated to crafting narratives that resonate.",
    buttonText: "See My Reel",
    buttonUrl: "/work"
  },
  skills: [
    {
      category: "Video Editing",
      items: [
        "Premiere Pro",
        "DaVinci Resolve",
        "Color Grading"
      ]
    },
    {
      category: "Motion Graphics",
      items: [
        "After Effects",
        "Typography Animation"
      ]
    },
    {
      category: "Graphic Design",
      items: [
        "Photoshop",
        "Illustrator",
        "Figma"
      ]
    }
  ],
  experience: [
    {
      id: "exp1",
      role: "Senior Video Editor",
      company: "[COMPANY NAME]",
      period: "2021 — PRESENT",
      type: "Full-time",
      description: "Lead editor for commercial and narrative content"
    },
    {
      id: "exp2",
      role: "Freelance Motion Designer",
      company: "Various Agencies",
      period: "2018 — 2021",
      type: "Contract",
      description: "Developed high-impact motion graphics"
    }
  ],
  education: [
    {
      id: "edu1",
      degree: "B.A (Hons) in English",
      school: "I.G.N.O.U",
      period: "2012 — 2016",
      honors: "Honors",
      description: "Specialized in English"
    }
  ],
  projects: [
    {
      id: "proj1",
      slug: "type-poster",
      title: "Type Exhibition Poster",
      category: "Graphic Design",
      type: "Print // Design",
      description: "A typographic poster design for an international exhibition.",
      thumbnail: "[INSERT_THUMBNAIL_URL_HERE]",
      videoUrl: "[INSERT_VIDEO_URL_HERE]",
      featured: true,
      aspectRatio: "aspect-[3/4]"
    },
    {
      id: "proj2",
      slug: "tech-explainer",
      title: "Tech Co. Explainer",
      category: "Motion Graphics",
      type: "Motion // 2D",
      description: "An animated explainer video breaking down complex tech concepts.",
      thumbnail: "[INSERT_THUMBNAIL_URL_HERE]",
      videoUrl: "[INSERT_VIDEO_URL_HERE]",
      featured: true,
      aspectRatio: "aspect-square"
    },
    {
      id: "proj3",
      slug: "doc-short",
      title: "Documentary Short",
      category: "Video Editing",
      type: "Film // Edit",
      description: "A short documentary film highlighting local artists.",
      thumbnail: "[INSERT_THUMBNAIL_URL_HERE]",
      videoUrl: "[INSERT_VIDEO_URL_HERE]",
      featured: true,
      aspectRatio: "aspect-[21/9]"
    },
    {
      id: "proj4",
      slug: "sustainable-campaign",
      title: "Sustainable Living Campaign",
      category: "Graphic Design",
      type: "Ad // Visuals",
      description: "A visual campaign promoting sustainable lifestyle choices.",
      thumbnail: "[INSERT_THUMBNAIL_URL_HERE]",
      videoUrl: "[INSERT_VIDEO_URL_HERE]",
      featured: true,
      aspectRatio: "aspect-[4/5]"
    }
  ]
};
