// pages/index.tsx
"use client";

import React, { useRef } from 'react';
import HeaderComponent from '../components/Header/Header';
import MainSection from '../components/Main/LaunchPage';
import SecondPage from '../components/Pages/SecondPage';

export default function HomePage() {
  const secondPageRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <HeaderComponent />

      <MainSection secondPageRef={secondPageRef} />

      <div ref={secondPageRef} style={{ height: '100vh' }}>
        <SecondPage />
      </div>
    </div>
  );
}
