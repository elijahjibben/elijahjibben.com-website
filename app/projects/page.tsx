// src/pages/ProjectsPage.tsx
'use client'

import React from 'react';
import { CardsCarousel } from '../components/Carousels/CardsCarousel';
import HeaderComponent from '../components/Header/Header';

const ProjectsPage: React.FC = () => {
  return (
    <div style={{ paddingTop: '50px' }}>
      <HeaderComponent/>
      <h1>Projects Page</h1>
      <p>This is where project content will go.</p>
    </div>
  );
};

export default ProjectsPage;