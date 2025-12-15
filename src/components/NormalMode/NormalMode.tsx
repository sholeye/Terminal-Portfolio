import React from 'react';
import type { PortfolioData } from '../../types';
// import { ModeToggle } from '../Common/ModeToggle';
// import { ThemeToggle } from '../Common/ThemeToggle';
import { Header } from './Header';
import { Hero } from './Hero';
import { Projects } from './Projects';
import { Contact } from './Contact';
import About from './About';
import Experience from './Experience';

interface NormalModeProps {
  portfolioData: PortfolioData;
  onToggleMode: () => void;
  isTerminalMode: boolean;
}

export const NormalMode: React.FC<NormalModeProps> = ({
  portfolioData,
  onToggleMode,
}) => {
  return (
    <div
      className="min-h-screen transition-all duration-300 bg-white dark:bg-gray-900 "
      id="top"
    >
      <div className="move-up">
        <Header onToggleMode={onToggleMode} />

        <main className="grid grid-cols-1 grid-rows-[max-content_1fr] lg:grid-rows-1 lg:grid-cols-2 px-[8.2%] min-h-full ">
          <div className="lg:fixed lg:left lg:top-0% h-fit flex items-start lg:w-2/6">
            <Hero data={portfolioData} />
          </div>
          <div className="flex flex-col gap-0 lg:col-start-2 pt-15">
            <About />
            <Experience />
            <Projects data={portfolioData} />
            <Contact />
          </div>
        </main>

        <footer className="px-4 py-2 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="pt-2 text-center ">
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                © {new Date().getFullYear()} {portfolioData.name}{' '}
                Cooked with React, TypeScript, and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
