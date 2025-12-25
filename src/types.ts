export interface Experience {
  id: string;
  role: string;
  company: string;
  logo?: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string; // Icon name
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    description: string;
    location: string;
    currentRole: string;
    currentCompany: string;
    avatarUrl: string;
  };
  contact: {
    email: string;
    telegram: string;
    whatsapp: string;
  };
  socials: SocialLink[];
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  growth: string[];
  languages: { language: string; level: string }[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}