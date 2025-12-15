import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  className = '',
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => {
        clearTimeout(timeout);
      };
    }
    // setDisplayedText('');
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">
        {currentIndex + 1 > text.length ? '' : '|'}
      </span>
    </span>
  );
};
