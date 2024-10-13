// components/Header/Header.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Transition, AppShell, Flex, Group } from '@mantine/core';
import { useRouter, usePathname } from 'next/navigation';
import Logo from './Logo';
import NavigationButtons from './NavigationButtons';

const HeaderComponent: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowHeader(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <Transition
      mounted={showHeader}
      transition="slide-down"
      duration={1000}
      timingFunction="ease"
    >
      {(styles) => (
        <AppShell header={{ height: 60 }}>
          <AppShell.Header
            style={{ ...styles, position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}
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
