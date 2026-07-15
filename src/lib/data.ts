export type ProjectCategory = 'Video Editing' | 'Motion Graphics' | 'Graphic Design';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  role: string;
  year: string;
  client: string;
  description: string;
  thumbnail: string;
  videoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'studio-vfx-oceanic',
    title: 'Studio VFX (Oceanic)',
    category: 'Motion Graphics',
    role: 'VFX Artist',
    year: '2025',
    client: 'Oceanic Films',
    description: 'A cinematic visual effects sequence for the Oceanic short film, featuring complex particle simulations and fluid dynamics.',
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '2',
    slug: 'cyberpunk-city-edit',
    title: 'Cyberpunk City Edit',
    category: 'Video Editing',
    role: 'Lead Editor',
    year: '2024',
    client: 'Neon Studios',
    description: 'High-energy pacing and sound design for a cyberpunk-themed short film trailer.',
    thumbnail: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '3',
    slug: 'brand-identity-nova',
    title: 'Nova Brand Identity',
    category: 'Graphic Design',
    role: 'Art Director',
    year: '2024',
    client: 'Nova Tech',
    description: 'Complete rebranding including logo design, typography selection, and digital asset creation.',
    thumbnail: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2194&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '4',
    slug: 'abstract-loop-series',
    title: 'Abstract Loop Series',
    category: 'Motion Graphics',
    role: 'Motion Designer',
    year: '2025',
    client: 'Personal Project',
    description: 'A series of looping 3D animations exploring satisfying mechanical movements and lighting.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    featured: false,
  }
];

export const skills = [
  { category: 'Video Editing', items: ['Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro'] },
  { category: 'Motion Graphics', items: ['After Effects', 'Cinema 4D', 'Blender'] },
  { category: 'Graphic Design', items: ['Photoshop', 'Illustrator', 'Figma'] },
];

export const experience = [
  {
    id: '1',
    role: 'Senior Motion Designer',
    company: 'Creative Agency Inc.',
    period: '2022 - Present',
    description: 'Leading a team of 4 motion designers creating high-end commercial content for global tech brands.'
  },
  {
    id: '2',
    role: 'Video Editor',
    company: 'Studio Productions',
    period: '2019 - 2022',
    description: 'Edited short films, documentaries, and commercial spots with a focus on narrative pacing.'
  }
];

export const education = [
  {
    id: '1',
    degree: 'Bachelor of Fine Arts in Digital Media',
    school: 'Design Institute',
    period: '2015 - 2019'
  }
];
