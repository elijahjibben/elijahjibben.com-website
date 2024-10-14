'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AppShell, Flex, Transition } from '@mantine/core';
import Logo from './Logo';
import NavigationButtons from './NavigationButtons';

const HeaderComponent: React.FC = () => {
  const pathname = usePathname(); // Get the current route
  const isRoot = pathname === '/'; // Determine if it's the root route
  const [showHeader, setShowHeader] = useState(!isRoot); // If not root, show header by default

  useEffect(() => {
    if (isRoot) {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setShowHeader(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
    setShowHeader(true); // Ensure header is visible on non-root routes

    return undefined;
  }, [isRoot]);

  return (
    <Transition
      mounted={showHeader}
      transition={isRoot ? 'slide-down' : undefined} // Apply transition only on root
      duration={isRoot ? 1000 : 0} // Duration 0 for no transition on non-root
      timingFunction={isRoot ? 'ease' : undefined}
    >
      {(styles) => (
        <AppShell header={{ height: 60 }}>
          <AppShell.Header
            style={{
              ...styles,
              position: 'fixed',
              top: 0,
              width: '100%',
              zIndex: 1000,
            }}
          >
            <Flex
              align="center"
              justify="space-between"
              style={{ height: '100%', paddingLeft: 20, paddingRight: 20, width: '100%' }}
            >
              <Logo />
              <NavigationButtons />
            </Flex>
          </AppShell.Header>
        </AppShell>
      )}
    </Transition>
  );
};

export default HeaderComponent;
