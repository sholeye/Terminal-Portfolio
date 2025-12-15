import { useState } from 'react';

const Experience = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const experience = [
    {
      id: '1',
      role: 'Frontend Engineer',
      company: 'Equidaecore Integrated Limited',
      duration: '2024 – Present',
      description:
        'Coordinated and led three frontend teams to develop a multi-institution alumni portal serving varied schools. Built comprehensive onboarding flows, profile management, and verification UI features while ensuring consistent UI logic across pages. Provided technical support across engineering teams to expedite development, troubleshoot issues, and implement bug fixes.',
      technologies: [
        'TypeScript',
        'React',
        'Tailwind',
        'Zod',
        'Express',
        'Node.js',
        'MongoDB',
        'JavaScript',
      ],
    },
    {
      id: '2',
      role: 'Frontend Engineer',
      company: 'Crescent University, Abeokuta',
      duration: '2023',
      description:
        'Developed a digital exit form system that replaced manual clearance processes, streamlining administrative workflows. Implemented student registration and multi-department submission flows with validation. Built a unified review dashboard for security and admin staff to process clearances efficiently.',
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
      description:
        'Created a subscription tracking application for managing recurring services. Handled frontend and backend implementation using vanilla JavaScript to strengthen fundamental concepts. Built RESTful routes, storage solutions, and interface interactions from scratch.',
      technologies: [
        'JavaScript',
        'HTML',
        'SCSS',
        'Express',
        'Node.js',
        'MongoDB',
      ],
    },
  ];

  return (
    <section
      className="w-full max-w-4xl py-12 mx-auto"
      id="experience"
    >
      <h2 className="text-2xl font-normal text-gray-200 mb-7">
        EXPERIENCE
      </h2>

      <div className="space-y-8">
        {experience.map((job) => (
          <article
            key={job.id}
            className="relative group"
            onMouseEnter={() => setHoveredId(job.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="p-6 transition-all duration-300 border border-gray-700 rounded-lg hover:border-gray-600 hover:bg-slate-800/30">
              <div className="flex flex-col mb-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3
                    className={`text-lg font-semibold transition-colors duration-300 mb-1 ${
                      hoveredId === job.id
                        ? 'text-gray-200'
                        : 'text-gray-300'
                    }`}
                  >
                    {job.role} · {job.company}
                  </h3>
                  <time className="text-sm tracking-wide text-gray-400 uppercase">
                    {job.duration}
                  </time>
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-gray-400">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                      hoveredId === job.id
                        ? 'bg-gray-600/50 text-gray-200'
                        : 'bg-gray-700/50 text-gray-300'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <a
        href="/sholeye_resume.pdf"
        className="inline-flex items-center gap-2 px-4 py-2 text-white text-xl transition-colors mt-2 hover:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Full Resume ➡
      </a>
    </section>
  );
};

export default Experience;
