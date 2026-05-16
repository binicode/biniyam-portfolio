export interface Trait {
  label: string;
  description: string;
}

export interface AboutData {
  bio: string[];
  location: string;
  traits: Trait[];
  resumeUrl: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  domain: string;
  available: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  number: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  status: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  status: "completed" | "inprogress";
}

export interface ContactData {
  heading: string;
  subheading: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string;
}