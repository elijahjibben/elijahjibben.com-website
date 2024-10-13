// components/common/GradientText.tsx
import React from 'react';

interface GradientTextProps {
  text: string;
  gradient: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, gradient }) => {
  return (
    <span style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
      {text}
    </span>
  );
};

export default GradientText;
