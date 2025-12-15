import { useState, useCallback, useEffect, useRef } from 'react';
import type { Command, PortfolioData } from '../types';
import { executeCommand } from '../utils/commands';

export const useTerminal = (portfolioData: PortfolioData) => {
  const [history, setHistory] = useState<Command[]>([
    {
      id: '1',
      command: 'help',
      output: 'Type "help" to see available commands',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const historyEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    historyEndRef.current?.scrollIntoView({
      inline: 'start',

      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (history.length > 2) {
      scrollToBottom();
    }
  }, [history]);

  const handleCommand = useCallback(
    async (command: string) => {
      if (!command.trim()) return;

      setIsTyping(true);

      // Add command to history
      const newCommand: Command = {
        id: Date.now().toString(),
        command,
        output: '',
        timestamp: new Date(),
      };

      setHistory((prev) => [...prev, newCommand]);
      setInput('');

      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Execute command
      const output = executeCommand(
        command,
        portfolioData,
        setHistory
      );

      // Update command with output
      setHistory((prev) =>
        prev.map((cmd) =>
          cmd.id === newCommand.id ? { ...cmd, output } : cmd
        )
      );

      setIsTyping(false);
    },
    [portfolioData]
  );

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const getCommandSuggestions = useCallback(
    (partialCommand: string) => {
      const commands = [
        'help',
        'about',
        'skills',
        'projects',
        'experience',
        'contact',
        'clear',
        'social',
        'resume',
        'theme',
      ];
      return commands.filter((cmd) =>
        cmd.startsWith(partialCommand.toLowerCase())
      );
    },
    []
  );

  return {
    history,
    input,
    setInput,
    handleCommand,
    clearHistory,
    getCommandSuggestions,
    isTyping,
    historyEndRef,
  };
};
