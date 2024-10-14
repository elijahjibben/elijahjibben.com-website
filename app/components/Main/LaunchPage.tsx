// components/Main/LaunchPage.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { Space_Mono } from 'next/font/google';
import { Center, Text } from '@mantine/core';
import GradientText from '../common/GradientText';
import ArrowButton from './ArrowButton';

// Initialize the Space Mono font
const spaceMono = Space_Mono({
  weight: '700',
  subsets: ['latin'],
});

// Define the props interface to include scrollIntoView
interface LaunchPageProps {
  scrollIntoView: (params?: { alignment?: 'start' | 'end' | 'center' }) => void;
}

const LaunchPage: React.FC<LaunchPageProps> = ({ scrollIntoView }) => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const typingDuration1 = 2500;
    const typingDuration2 = 2000;
    const buffer = 750;

    const totalDuration = typingDuration1 + buffer + typingDuration2;

    const timer = setTimeout(() => {
      setShowArrow(true);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);

  // Function to render the second line with gradient text
  const renderDisplayedText2 = () => (
    <Text component="span" inherit>
      <GradientText text="Chemistry" gradient="var(--gradient-primary)" />
      {' + '}
      <GradientText text="Computer Science" gradient="var(--gradient-secondary)" />
    </Text>
  );

  return (
    <Center style={{ height: '100vh', flexDirection: 'column' }}>
      {/* First Line with Typewriter Effect */}
      <div className="typewriter1">
        <h1 className={spaceMono.className}>Elijah Jibben</h1>
      </div>

      {/* Second Line with Typewriter Effect and Delay */}
      <div className="typewriter2">
        <h1 className={spaceMono.className}>{renderDisplayedText2()}</h1>
      </div>

      {/* Arrow that triggers scrolling */}
      <div style={{ height: '50px', marginTop: 20 }}>
        <ArrowButton show={showArrow} onClick={() => scrollIntoView({ alignment: 'center' })} />
      </div>
    </Center>
  );
};

export default LaunchPage;
