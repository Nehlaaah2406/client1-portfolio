export interface EngineeringProject {
  id: string;
  title: string;
  projectType: string;
  objective: string;
  contribution: string;
  tools: string[];
  skillsLearned: string[];
  summary: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  period: string;
  affiliation?: string;
  location: string;
  highlights?: string[];
}

export interface InternshipEntry {
  company: string;
  location: string;
  role: string;
  exposures: string[];
  whatILearned: string;
}

export interface SeminarEntry {
  id: string;
  title: string;
  type: string;
  coverage: string[];
  relevance: string;
}

export interface LeadershipEntry {
  id: string;
  role: string;
  organization: string;
  highlights: string[];
}

export interface SkillCategory {
  category: 'Technical' | 'Professional' | 'Additional Interest';
  skills: string[];
}
