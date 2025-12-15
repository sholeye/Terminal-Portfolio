// import React, { useEffect, useRef } from 'react';
import { ModeToggle } from '../Common/ModeToggle';
import { Typewriter } from '../Common/Typewriter';

interface TerminalHeaderProps {
  onToggleMode: () => void;
  isHideName: boolean;
  setIsHideName: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  onToggleMode,
  isHideName,
}) => {
  // const timeRef = useRef<HTMLSpanElement | null>(null);
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     const time = new Date().toLocaleTimeString(navigator.language, {
  //       hour: '2-digit',
  //       minute: '2-digit',
  //       second: '2-digit',
  //     });
  //     if (timeRef.current) timeRef.current.innerText = time;
  //   }, 1000);

  //   return function () {
  //     clearInterval(id);
  //   };
  // });
  return (
    <header className="relative">
      {/* MacBook-style window controls */}
      <div className="bg-gray-900 ">
        <div
          className="flex items-center gap-2 px-4 py-2 w-full md:w-[70%] mx-auto
                    rounded-t-lg border-b border-gray-800 "
        >
          <div className="flex gap-2 ">
            <button
              className="w-3 h-3 transition-colors bg-red-500 rounded-full hover:bg-red-600"
              aria-label="Close"
            />
            <button
              className="w-3 h-3 transition-colors bg-yellow-500 rounded-full hover:bg-yellow-600"
              aria-label="Minimize"
            />
            <button
              className="w-3 h-3 transition-colors bg-green-500 rounded-full hover:bg-green-600"
              aria-label="Maximize"
            />
          </div>

          <Typewriter
            text="<hey there/>"
            speed={100}
            className="flex justify-center flex-1 text-sm"
          ></Typewriter>

          <div className="flex items-center gap-2">
            <ModeToggle
              onToggle={onToggleMode}
              isTerminalMode={true}
            />
          </div>
        </div>

        {/* ASCII Art */}
        <div
          className={`px-4 py-6 bg-black border-x border-gray-800 ${
            isHideName && 'hidden'
          } `}
        >
          <div className="w-full md:w-[70%] mx-auto">
            <pre
              className={`text-gray-400 text-xs font-mono leading-tight hidden md:block origin-left`}
            >
              {`
╔═════════════════════════════════════════════════════════════════╗
║                                                                 ║
║    ███████╗██╗  ██╗ ██████╗ ██╗     ███████╗██╗   ██╗███████╗   ║
║    ██╔════╝██║  ██║██╔═══██╗██║     ██╔════╝╚██╗ ██╔╝██╔════╝   ║
║    ███████╗███████║██║   ██║██║     █████╗   ╚████╔╝ █████╗     ║
║    ╚════██║██╔══██║██║   ██║██║     ██╔══╝    ╚██╔╝  ██╔══╝     ║
║    ███████║██║  ██║╚██████╔╝███████╗███████╗   ██║   ███████╗   ║
║    ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚══════╝   ║
║                                                                 ║
║    Frontend Engineer - Equidaecore                              ║
║                                                                 ║
╚═════════════════════════════════════════════════════════════════╝
          `.trim()}
            </pre>
            <div className="text-lg md:hidden">
              Frontend Engineer - <br />
              <span className="text-gray-200/90">Equidaecore</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
