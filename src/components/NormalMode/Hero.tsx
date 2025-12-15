import React from 'react';
import type { PortfolioData } from '../../types';
import { Typewriter } from '../Common/Typewriter';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

interface HeroProps {
  data: PortfolioData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section className="h-full py-5 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* <div className="grid items-center"> */}
        <div className="h-full space-y-6">
          <div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-200 text-nowrap">
              {data.name}
            </h1>
            <div className="text-xl text-gray-600 sm:text-2xl dark:text-gray-300">
              <Typewriter text={data.title} />
            </div>
          </div>
          <div className="flex flex-col justify-between h-full min-h-[20vh]  lg:min-h-[35vh] ">
            <p className="text-lg leading-relaxed text-gray-600 font-extralight dark:text-gray-300/70">
              {data.about}
            </p>

            {/* <nav className="flex flex-wrap gap-3 nav-trans">
              {[
                { href: '#top', text: 'About' },
                { href: '#experience', text: 'Experience' },
                { href: '#projects', text: 'Projects' },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center justify-start transition-all w-full gap-2 font-medium text-gray-500 uppercase hover:text-gray-400 hover:[&>span]:translate-x-1 group"
                >
                  <span className="h-[2%] bg-gray-400 w-1/13 transition-all duration-300 transform group-hover:translate-x-1"></span>
                  <div>{item.text}</div>
                </a>
              ))}
            </nav> */}

            <div className="flex gap-4">
              {[
                {
                  icon: <FiGithub />,
                  href: 'https://github.com/sholeye',
                },
                {
                  icon: <FiLinkedin />,
                  href: 'https://www.linkedin.com/in/sholeye',
                },
                {
                  icon: <FiMail />,
                  href: 'mailto:sholeyewareez982@gmail.com',
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-2 text-2xl transition-colors duration-200 border-2 border-gray-500 rounded-full hover:bg-gray-800 [&>svg]:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};
