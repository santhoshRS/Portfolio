export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  email: string;
  linkedin: string;
  github: string;
  resumePath: string;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  responsibilities: string[];
  outcome: string;
  links?: {
    github?: string;
    live?: string;
  };
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
}