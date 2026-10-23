export type ProjectCategory = 
  | "All"
  | "Computer Vision"
  | "Natural Language Processing"
  | "Deep Learning"
  | "MLOps & Pipelines"
  | "Business Analytics";

export interface ProjectMetric {
  label: string;
  value: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  featured: boolean;
  accuracyOrMetric: string;
  image: string;
  summary: string;
  problemStatement: string;
  solutionOverview: string;
  architecture: string[];
  keyHighlights: string[];
  techStack: string[];
  metrics: ProjectMetric[];
  githubUrl: string;
  demoUrl?: string;
  codeSnippet: {
    language: string;
    filename: string;
    code: string;
  };
  tradeoffs: {
    decision: string;
    rationale: string;
  }[];
}

export interface SkillItem {
  name: string;
  level: "Advanced" | "Proficient" | "Working Knowledge";
  popular?: boolean;
}

export interface SkillGroup {
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "Full-Time" | "Internship" | "Project Research" | "Academic";
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gradeOrSpecialization: string;
  highlights: string[];
}
