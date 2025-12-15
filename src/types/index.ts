export interface Command {
  id: string;
  command: string;
  output: string | React.ReactNode;
  timestamp: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Theme {
  mode: 'dark' | 'light';
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface TerminalHistory {
  commands: Command[];
  currentDirectory: string;
  user: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  about: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
}
