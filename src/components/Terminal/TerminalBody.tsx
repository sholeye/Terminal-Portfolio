import React from 'react';
import type { Command } from '../../types';
import { TerminalOutput } from './TerminalOutput';

interface TerminalBodyProps {
  history: Command[];
  input: string;
  setInput: (input: string) => void;
  handleCommand: (command: string) => void;
  getCommandSuggestions: (partialCommand: string) => string[];
  isTyping: boolean;
  historyEndRef: React.RefObject<HTMLDivElement | null>;
  setIsHideName: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TerminalBody: React.FC<TerminalBodyProps> = ({
  history,
  input,
  setInput,
  handleCommand,
  getCommandSuggestions,
  isTyping,
  historyEndRef,
  setIsHideName,
}) => {
  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim()) {
      setSuggestions(getCommandSuggestions(value));
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input);
      setSuggestions([]);
      setIsHideName(true);
    } else if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault();
      setInput(suggestions[0]);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setSuggestions([]);
    handleCommand(suggestion);
    setIsHideName(true);
  };

  return (
    <main className="flex-1 max-h-screen overflow-hidden overflow-y-auto border-gray-800 bg-linear-to-b from-black to-gray-900 border-x pb-30">
      <div className="w-full md:w-[70%] mx-auto overflow-y-auto">
        <div className="h-full p-4 overflow-y-auto font-mono">
          {/* Command History */}
          <div className="space-y-4">
            {history.map((cmd) => (
              <TerminalOutput key={cmd.id} command={cmd} />
            ))}
          </div>
          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="pl-3 mt-2 mb-4 border-l-2 border-yellow-600">
              <p className="mb-2 text-sm text-gray-400 animate-pulse">
                Suggestions:
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-3 py-1 text-sm text-gray-300 transition-colors duration-150 bg-gray-800 rounded hover:bg-gray-700"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Input Area */}

          <div className="mt-6">
            <div className="flex items-start gap-2">
              <span className="text-green-400 shrink-0">
                sholeye@portfolio:~$
              </span>
              <div className="flex-1">
                <input
                  // key={Date.now()}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    isTyping ? 'Processing...' : 'Type a command...'
                  }
                  disabled={isTyping}
                  className="w-full text-white placeholder-gray-500 bg-transparent outline-none"
                  autoFocus={true}
                />
                {isTyping && (
                  <div className="flex items-center gap-2 mt-2 text-gray-400">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" />
                      <div className="w-1 h-1 delay-150 bg-gray-400 rounded-full animate-pulse" />
                      <div className="w-1 h-1 delay-300 bg-gray-400 rounded-full animate-pulse" />
                    </div>
                    <span className="text-sm">
                      Processing command...
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div ref={historyEndRef} />
        </div>
      </div>
    </main>
  );
};
