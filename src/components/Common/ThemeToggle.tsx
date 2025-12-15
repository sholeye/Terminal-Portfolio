import React from 'react';
import { FiSun } from 'react-icons/fi'; // For light theme
import { FiMoon } from 'react-icons/fi'; // For dark theme

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDark,
  onToggle,
}) => {
  return (
    <button
      onClick={onToggle}
      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 
                 transition-colors duration-200"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <span className="text-yellow-300">
            <FiSun />
          </span>
        ) : (
          <span className="text-gray-400">
            <FiMoon />
          </span>
        )}
      </div>
    </button>
  );
};
