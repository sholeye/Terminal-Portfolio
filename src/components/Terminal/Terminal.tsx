import React from 'react';
import type { PortfolioData } from '../../types';
import { useTerminal } from '../../hooks/useTerminal';
import { TerminalHeader } from './TerminalHeader';
import { TerminalBody } from './TerminalBody';

interface TerminalProps {
  portfolioData: PortfolioData;
  onToggleMode: () => void;
  isHideName: boolean;
  setIsHideName: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Terminal: React.FC<TerminalProps> = ({
  portfolioData,
  onToggleMode,
  isHideName,
  setIsHideName,
}) => {
  const {
    history,
    input,
    setInput,
    handleCommand,
    getCommandSuggestions,
    isTyping,
    historyEndRef,
  } = useTerminal(portfolioData);

  return (
    <div className="flex flex-col content-center h-screen overflow-hidden font-mono text-gray-100 bg-black md:items-center">
      <div className="flex flex-col h-screen min-w-full origin-top-left max-w-7xl move-up">
        <TerminalHeader
          isHideName={isHideName}
          setIsHideName={setIsHideName}
          onToggleMode={onToggleMode}
        />

        <TerminalBody
          history={history}
          input={input}
          setInput={setInput}
          handleCommand={handleCommand}
          getCommandSuggestions={getCommandSuggestions}
          isTyping={isTyping}
          historyEndRef={historyEndRef}
          setIsHideName={setIsHideName}
        />

        <footer className="px-4 py-3 bg-gray-900 border-t border-gray-800 rounded-b-lg border-x ">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>
              Press
              <button className="px-1 mx-1 text-gray-200 bg-gray-800 rounded-sm">
                Tab
              </button>
              for autocomplete
            </span>
            <span>
              Type{' '}
              <button className="px-1 mx-1 text-yellow-600 rounded-sm">
                'help'
              </button>{' '}
              for commands
            </span>
            <span className="text-center">
              <button className="px-1 mx-1 text-green-600 rounded-sm">
                {history.length - 1}
              </button>
              command
              {history.length - 1 > 1 && 's'}
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
