import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Sholeye W.',
  title: 'Frontend Engineer',
  email: 'sholeyewareez982@gmail.com',
  github: 'https://github.com/sholeye',
  linkedin: 'https://www.linkedin.com/in/sholeye',
  location: 'Abeokuta, NG',
  about: `I create simple, usable interfaces using TypeScript, React, Next.js, and Node.js when needed.
`,

  skills: [
    'React',
    'JavaScript',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'GraphQL',
    'AWS',
    'Docker',
    'Jest',
    'Cypress',
    'Webpack',
    'Vite',
    'Figma',
    'Accessibility',
    'Performance Optimization',
    'CI/CD',
    'Micro Frontends',
    'Design Systems',
  ],

  projects: [
    {
      id: '1',
      title: 'Alumni Portal',
      description:
        'A centralized portal for alumni of multiple schools, offering onboarding, profiles, and community features geared toward long-term engagement.',
      technologies: [
        'TypeScript',
        'React',
        'Tailwind CSS',
        'Zod',
        'Express',
        'Node.js',
        'MongoDB',
      ],
      githubUrl: 'https://github.com/sholeye/alumni-portal',
      liveUrl: 'https://alumni-ashen.vercel.app/',
      status: 'completed',
    },
    {
      id: '2',
      title: 'Digitalized School Exit Form',
      description:
        'A web portal that replaces manual paper exit forms with a single online workflow for students, security staff, and admins at Crescent University.',
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
        'Express',
        'Node.js',
        'MongoDB',
      ],
      githubUrl: 'https://github.com/sholeye/exit-form',
      liveUrl: 'https://exit-clearance.vercel.app/',
      status: 'completed',
    },
    {
      id: '3',
      title: 'Subscription Tracking App',
      description:
        'A personal project to track recurring subscriptions and billing schedules, built to deepen core JavaScript and full-stack fundamentals.',
      technologies: [
        'JavaScript',
        'HTML',
        'SCSS',
        'Express',
        'Node.js',
        'MongoDB',
      ],
      githubUrl: 'https://github.com/sholeye/subscription-tracker',
      liveUrl: 'https://trackizer-frontend.vercel.app/',
      status: 'completed',
    },
    {
      id: '4',
      title: 'Portfolio Terminal',
      description:
        'An interactive portfolio built with a terminal-style UI that lets visitors explore information through commands. (this portfolio webpage)',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/sholeye/portfolio-terminal',
      status: 'completed',
    },
  ],

  experience: [
    {
      id: '1',
      role: 'Frontend Engineer',
      company: 'Equidaecore Integrated Limited',
      duration: '2024 – Present',
      description: [
        'Developed a multi-institution alumni portal used by varied schools',
        'Built onboarding, profile, and verification UI features',
        'Ensured consistent UI logic across pages and states',
        'Collaborated on APIs and validation logic',
      ],
      technologies: [
        'TypeScript',
        'React',
        'Tailwind',
        'Zod',
        'Express',
        'Node.js',
        'MongoDB',
        'JavaScript (server)',
      ],
    },
    {
      id: '2',
      role: 'Frontend Engineer',
      company: 'Crescent University, Abeokuta',
      duration: '2023',
      description: [
        'Built a digital exit form system to replace manual clearance processes',
        'Implemented student registration and exit submission flows',
        'Enabled unified review by security and admins',
        'Delivered full stack features from UI to backend routes',
      ],
      technologies: [
        'JavaScript',
        'HTML',
        'CSS',
        'Express',
        'Node.js',
        'MongoDB',
      ],
    },

    {
      id: '3',
      role: 'Full Stack Developer',
      company: 'Personal Project',
      duration: '2022',
      description: [
        'Created a subscription tracker for recurring services',
        'Handled both frontend and backend logic without frameworks',
        'Used raw JavaScript to reinforce core fundamentals',
        'Built routes, storage, and interface interactions',
      ],
      technologies: [
        'JavaScript',
        'HTML',
        'SCSS',
        'Express',
        'Node.js',
        'MongoDB',
      ],
    },
  ],
};
