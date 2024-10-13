// components/Main/LaunchPage.tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Text, Center, Transition, Stack } from '@mantine/core';
import { Space_Mono } from 'next/font/google';
import ArrowButton from './ArrowButton';
import GradientText from '../common/GradientText';

const spaceMono = Space_Mono({
  weight: '700',
  subsets: ['latin'],
});

const MainSection: React.FC<{ secondPageRef: React.RefObject<HTMLDivElement> }> = ({ secondPageRef }) => {
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
      <GradientText text="Chemistry" gradient="var(--gradient-primary)" />{' + '}
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
        <h1 className={spaceMono.className}>
          {renderDisplayedText2()}
        </h1>
      </div>

      {/* Arrow that scrolls down */}
      <div style={{ height: '50px', marginTop: 20 }}>
        <ArrowButton show={showArrow} onClick={() => {
          if (secondPageRef.current) {
            secondPageRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }} />
      </div>
    </Center>
  );
};

export default MainSection;
