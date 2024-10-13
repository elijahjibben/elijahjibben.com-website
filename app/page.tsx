"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  Center,
  Transition,
  Stack,
  Button,
  Image,
  Group,
  AppShell,
} from '@mantine/core';
import { IconArrowDown } from '@tabler/icons-react';
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
  weight: '700',
  subsets: ['latin'],
});

export default function HomePage() {
  // State variables for visibility of navbar and arrow
  const [showHeader, setShowHeader] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const secondPageRef = useRef<HTMLDivElement>(null);

  // useEffect for showing the arrow after typing animations
  useEffect(() => {
    // Total duration for both typewriter animations
    const typingDuration1 = 2500; // 2.5 seconds for first line
    const typingDuration2 = 2000; // 2.0 seconds for second line
    const buffer = 750; // 0.75 seconds buffer

    const totalDuration = typingDuration1 + buffer + typingDuration2;

    // Show arrow after typing animations complete
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, totalDuration);

    return () => clearTimeout(timer);
  }, []);

  // useEffect for showing the header on first scroll
  useEffect(() => {
    // Handler for scroll event
    const handleScroll = () => {
      // Check if user has scrolled down
      if (window.scrollY > 0) {
        setShowHeader(true);
        // Remove the event listener after the first scroll
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to render the second line with gradient text
  function renderDisplayedText2() {
    return (
      <Text component="span" inherit>
        <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Chemistry
        </span>
        {' + '}
        <span style={{ background: 'var(--gradient-secondary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Computer Science
        </span>
      </Text>
    );
  }

  return (
    <div>
      {/* Navigation bar that fades in */}
      <Transition
        mounted={showHeader}
        transition="fade"
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => (
          <AppShell header={{ height: 60 }}>
            <AppShell.Header
              style={{ ...styles, position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}
            >
              <Group
                align="center"
                style={{ height: '100%', paddingLeft: 20, paddingRight: 20 }}
              >
                <Image
                  src="https://github.com/elijahjibben/elijahjibben.com-website/blob/master/images/turtle_icon.png?raw=true"
                  alt="Logo"
                  radius={"xl"}
                  width={40}
                  height={40}
                />
                <Group>
                  <Button variant="light">Blog</Button>
                  <Button variant="light">Projects</Button>
                  <Button variant="light">Resume</Button>
                  <Button variant="light">Contact</Button>
                </Group>
              </Group>
            </AppShell.Header>
          </AppShell>
        )}
      </Transition>

      {/* Main content with typewriter effect */}
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
          <Transition
            mounted={showArrow}
            transition="fade-down"
            duration={1000}
            timingFunction="ease"
          >
            {(styles) => (
              <Button
                variant="subtle"
                style={styles}
                onClick={() => {
                  if (secondPageRef.current) {
                    secondPageRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <IconArrowDown size={32} />
              </Button>
            )}
          </Transition>
        </div>
      </Center>

      {/* Second page content */}
      <div ref={secondPageRef} style={{ height: '100vh' }}>
        <Center style={{ height: '100vh' }}>
          <Stack align="center">
            <Text size="xl">Sample Header</Text>
            <Text>This is a sample paragraph.</Text>
          </Stack>
        </Center>
      </div>
    </div>
  );
}
