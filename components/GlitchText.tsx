'use client';

import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
      }, 200);
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <span className={`glitch-text ${className} ${isGlitching ? 'glitching' : ''}`} data-text={text}>
      {text}
    </span>
  );
}

