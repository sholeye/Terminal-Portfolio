import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Sholeye W.',
  title: 'Rust Architect',
  email: 'sholeyewareez982@gmail.com',
  github: 'https://github.com/sholeye',
  linkedin: 'https://www.linkedin.com/in/sholeye',
  location: 'Abeokuta, NG',
  about: `Rust Systems, Open Source & Backend Engineer Solving problems with Rust.
`,

  skills: [
    'Rust',
    'JavaScript',
    'TypeScript',
    'SQL',
    'Node.js',
    'GraphQL',
    "Rust", "Tokio", "Axum", "Actix-web", "Serde", "SQLx",
  ],

  projects: [
    {
      id: '1',
      title: 'Workspace Manager - WSM',
      description:
        'A rust-based command line tool used for workspace management.',
      technologies: [
        'Rust',
      ],
      githubUrl: 'coming soon',
      // liveUrl: 'https://alumni-ashen.vercel.app/',
      status: 'ongoing',
    }
  ],

  experience: [
    {
      id: '1',
      role: 'Rust Software Architect',
      company: 'Equidaecore Integrated Limited',
      duration: '2024 – Present',
      description: [
        'Building something "big" with Rust',
      ],
      technologies: [
        'Rust',
      ],
    },
};
