import React from 'react';
import { FiMonitor, FiTerminal } from 'react-icons/fi';

interface ModeToggleProps {
  onToggle: () => void;
  isTerminalMode?: boolean;
}

export const ModeToggle: React.FC<ModeToggleProps> = ({
  onToggle,
  isTerminalMode,
}) => {
  console.log(isTerminalMode);
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-lg ${
        isTerminalMode
          ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
          : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
      } transition-colors duration-200 flex items-center gap-2`}
      aria-label={isTerminalMode ? 'normal mode' : 'terminal mode'}
    >
      {isTerminalMode ? (
        <>
          <span className="text-2xl text-gray-300">
            <FiMonitor className="text-xl" />
          </span>
          <span className="hidden text-sm text-gray-300 sm:inline">
            Normal Mode
          </span>
        </>
      ) : (
        <>
          <span className="text-xl text-gray-300">
            <FiTerminal className="text-xl" />
          </span>
          <span className="hidden text-sm text-gray-300 sm:inline">
            Switch to Terminal
          </span>
        </>
      )}
    </button>
  );
};
