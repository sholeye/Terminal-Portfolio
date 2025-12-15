import React, { useState } from 'react';
import { Terminal } from './components/Terminal/Terminal';
import { NormalMode } from './components/NormalMode/NormalMode';
import { portfolioData } from './data/portfolio';

const App: React.FC = () => {
  const [isTerminalMode, setIsTerminalMode] = useState(true);
  const [isHideName, setIsHideName] = useState(false);

  const handleToggleMode = () => {
    setIsTerminalMode(() => !isTerminalMode);
  };

  return (
    <div className="transition-colors duration-300">
      {isTerminalMode ? (
        <Terminal
          portfolioData={portfolioData}
          onToggleMode={handleToggleMode}
          setIsHideName={setIsHideName}
          isHideName={isHideName}
        />
      ) : (
        <NormalMode
          portfolioData={portfolioData}
          onToggleMode={handleToggleMode}
          isTerminalMode={isTerminalMode}
        />
      )}
    </div>
  );
};

export default App;
