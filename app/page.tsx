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
  useMantineColorScheme,
  useComputedColorScheme
} from '@mantine/core';
import { IconArrowDown } from '@tabler/icons-react';
import {FaSun, FaMoon} from 'react-icons/fa'
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({
  weight: '700',
  subsets: ['latin'],
});

export default function HomePage() {
  // State variables for visibility of navbar and arrow
  const [showNavbar, setShowNavbar] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  const secondPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Total duration for both typewriter animations
    const typingDuration1 = 2500; // 2.5 seconds for first line
    const typingDuration2 = 2000; // 2.0 seconds for second line
    const buffer = 500; // 0.5 seconds buffer

    const totalDuration = typingDuration1 + buffer + typingDuration2;

    // Show navbar and arrow after typing animations complete
    const timer = setTimeout(() => {
      setShowNavbar(true);
      setShowArrow(true);
    }, totalDuration);

    return () => clearTimeout(timer);
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
        mounted={showNavbar}
        transition="fade"
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => (
          <AppShell header={{height: 60}}>
            <AppShell.Header
              style={{ ...styles, position: 'fixed', top: 0, width: '100%' }}
            >
              <Group
                align="center"
                style={{ height: '100%', paddingLeft: 20, paddingRight: 20 }}
              >
                <Image
                  src="https://github.com/elijahjibben/mantine-testing/blob/master/images/turtle_icon.png?raw=true"
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
            transition="fade"
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
