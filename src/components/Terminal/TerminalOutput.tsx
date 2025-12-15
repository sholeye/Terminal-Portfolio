import React from 'react';
import type { Command } from '../../types';

interface TerminalOutputProps {
  command: Command;
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({
  command,
}) => {
  return (
    <div className="space-y-2">
      {/* Command Input */}
      <div className="flex items-start gap-2">
        <span></span>
        <span className="text-green-400 shrink-0">
          sholeye@portfolio:~$
        </span>
        <span className="text-white">{command.command}</span>
      </div>

      {/* Command Output */}
      <div className="py-5 pl-5 ml-8 border-l border-solid border-l-gray-700 bg-gray-900/60">
        {typeof command.output === 'string' ? (
          <p style={{}} className="leading-5 text-gray-300">
            Type <span className="text-yellow-500">"help"</span> to
            see available commands
          </p>
        ) : (
          command.output
        )}
      </div>

      {/* Timestamp */}
      {/* <div className="ml-8 text-xs text-gray-500">
          {command.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div> */}
    </div>
  );
};
