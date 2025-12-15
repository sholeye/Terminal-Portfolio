import React from 'react';
import type { PortfolioData } from '../../types';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectsProps {
  data: PortfolioData;
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <section
      className="py-5 bg-gray-50 dark:bg-gray-900/50"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="ml-0 text-2xl font-normal text-gray-200 mb-7">
          PROJECTS
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {data.projects.map((project) => (
            <a
              href={project.liveUrl}
              key={project.id}
              className="block overflow-hidden transition-all duration-300 border border-gray-200 group dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <FiExternalLink className="w-4 h-4 text-gray-400 transition-opacity opacity-0 group-hover:opacity-100" />
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                        : project.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm text-gray-700 transition-colors bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
