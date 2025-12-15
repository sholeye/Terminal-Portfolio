import { FiGithub, FiLinkedin } from 'react-icons/fi';
import type { Command, PortfolioData } from '../types';
import { CgFileDocument } from 'react-icons/cg';
import { BiBriefcase, BiLocationPlus } from 'react-icons/bi';

const commandDescriptions: Record<string, string> = {
  help: 'Display all available commands',
  about: 'Display information about me',
  skills: 'Display my technical skills',
  projects: 'Display my projects',
  experience: 'Display my work experience',
  contact: 'Display contact information',
  clear: 'Clear terminal history',
  social: 'Display social media links',
  resume: 'View/download my resume',
  theme: 'Toggle between dark/light themes',
};

export const executeCommand = (
  command: string,
  data: PortfolioData,
  setHistory: React.Dispatch<React.SetStateAction<Command[]>>
): string | React.ReactNode => {
  const cmd = command.toLowerCase().trim();
  //   const args = command.split(' ').slice(1);

  switch (cmd.split(' ')[0]) {
    case 'help':
      return (
        <div className="space-y-2">
          <div className="font-mono text-green-400">
            Available commands:
          </div>
          {Object.entries(commandDescriptions).map(([cmd, desc]) => (
            <div key={cmd} className="flex gap-4">
              <span className="w-24 text-blue-400">{cmd}</span>
              <span className="text-gray-300">- {desc}</span>
            </div>
          ))}
        </div>
      );

    case 'about':
      return (
        <div className="space-y-4">
          <div className="font-mono text-green-400">
            About {data.name}:
          </div>
          <p className="leading-relaxed text-gray-300">
            {data.about}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center justify-between gap-1 px-3 py-1 text-sm text-blue-300 rounded-full bg-blue-500/20">
              <BiLocationPlus /> {data.location}
            </span>
            <span className="flex items-center justify-between gap-1 px-3 py-1 text-sm text-green-300 rounded-full bg-green-500/20">
              <BiBriefcase /> {data.title}
            </span>
          </div>
        </div>
      );

    case 'skills':
      return (
        <div className="space-y-3">
          <div className="font-mono text-green-400">
            Technical Skills:
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 transition-colors duration-200 border border-gray-700 rounded-lg bg-gray-800/50 hover:border-blue-500"
              >
                <span className="text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case 'projects':
      return (
        <div className="space-y-4">
          <div className="font-mono text-green-400">
            Recent Projects:
          </div>
          {data.projects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="p-4 transition-colors duration-200 border border-gray-700 rounded-lg hover:border-blue-500"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    project.status === 'completed'
                      ? 'bg-green-500/20 text-green-300'
                      : project.status === 'in-progress'
                      ? 'bg-yellow-500/20 text-yellow-300'
                      : 'bg-gray-500/20 text-gray-300'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="mb-3 text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-sm text-gray-300 rounded bg-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  className="text-blue-400 line-through transition-colors opacity-50 pointer-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="text-green-400 transition-colors hover:text-green-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      );

    case 'experience':
      return (
        <div className="space-y-6">
          <div className="font-mono text-green-400">
            Work Experience:
          </div>
          {data.experience.map((exp) => (
            <div
              key={exp.id}
              className="py-2 pl-4 transition-all duration-200 border-l-2 border-blue-500 hover:border-l-4"
            >
              <div className="flex flex-col mb-2 sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="mt-1 text-sm text-gray-500 sm:mt-0">
                  {exp.duration}
                </span>
              </div>
              <ul className="mb-3 space-y-1">
                {exp.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-300"
                  >
                    <span className="mr-2 text-blue-400">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs text-gray-300 bg-gray-800 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case 'contact':
      return (
        <div className="space-y-4">
          <div className="font-mono text-green-400">
            Contact Information:
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-24 text-gray-400">Email:</span>
              <a
                href={`mailto:${data.email}`}
                className="text-blue-400 transition-colors hover:text-blue-300"
              >
                {data.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-24 text-gray-400">GitHub:</span>
              <a
                href={data.github}
                className="text-blue-400 transition-colors hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.github.split('//')[1]}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-24 text-gray-400">LinkedIn:</span>
              <a
                href={data.linkedin}
                className="text-blue-400 transition-colors hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.linkedin.split('//')[1]}
              </a>
            </div>
          </div>
          <p className="pt-4 text-gray-300">
            Feel free to reach out for collaborations, opportunities,
            or just to chat about tech!
          </p>
        </div>
      );

    case 'social':
      return (
        <div className="space-y-3">
          <div className="font-mono text-green-400">
            Social Links:
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <a
              href={data.github}
              className="flex items-center gap-3 p-3 transition-colors duration-200 rounded-lg bg-gray-800/50 hover:bg-gray-700/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded">
                <FiGithub />
              </div>
              <span className="text-gray-200">GitHub</span>
            </a>
            <a
              href={data.linkedin}
              className="flex items-center gap-3 p-3 transition-colors duration-200 rounded-lg bg-gray-800/50 hover:bg-gray-700/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center w-8 h-8 bg-gray-700 rounded">
                <FiLinkedin />
              </div>
              <span className="text-gray-200">LinkedIn</span>
            </a>
          </div>
        </div>
      );

    case 'clear':
      setHistory([
        {
          id: '1',
          command: 'help',
          output: 'Type "help" to see available commands',
          timestamp: new Date(),
        },
      ]);
      return 'clear';

    case 'resume':
      return (
        <div className="space-y-3">
          <div className="font-mono text-green-400">Resume:</div>
          <p className="text-gray-300">
            You can view and download my resume from the following
            link:
          </p>
          <a
            href="/sholeye_resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-between gap-1">
              <CgFileDocument /> View Resume
            </span>
          </a>
        </div>
      );

    default:
      return (
        <>
          <span className="text-red-500">
            Command not found:{' '}
            <span className="text-red-500/80">${cmd}</span>
          </span>
          <br />
          <span>
            Type <span className="text-yellow-500">"help"</span> for
            available commands.
          </span>
        </>
      );
  }
};
