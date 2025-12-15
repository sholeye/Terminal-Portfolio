import React from 'react';
import { ModeToggle } from '../Common/ModeToggle';

interface HeaderProps {
  onToggleMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleMode }) => {
  return (
    <header className=" max-w-6xl mx-auto sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md dark:border-gray-800 w-full flex justify-items-end py-5">
      <div className="flex self-end absolute right-10 top-5">
        <ModeToggle onToggle={onToggleMode} isTerminalMode={false} />
      </div>
    </header>
  );
};
