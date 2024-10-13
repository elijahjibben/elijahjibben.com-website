// app/page.tsx
"use client";

import React from 'react';
import HeaderComponent from './components/Header/Header';
import LaunchPage from './components/Main/LaunchPage';
import SecondPage from './components/Pages/SecondPage';
import { useScrollIntoView } from '@mantine/hooks';

export default function HomePage() {
  // Initialize the useScrollIntoView hook
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
  });

  return (
    <div>
      <HeaderComponent />

      {/* Pass the scrollIntoView function to LaunchPage */}
      <LaunchPage scrollIntoView={scrollIntoView} />

      {/* Attach targetRef to the SecondPage container */}
      <div ref={targetRef} style={{ height: '80vh' }}>
        <SecondPage />
      </div>
    </div>
  );
}
