// src/app/projects/page.tsx

'use client';

import React from 'react';
import HeaderComponent from '../components/Header/Header';
import ArticlesCardsGrid from './ProjectsArticlesCardsGrid';

const ProjectsPage: React.FC = () => (
  <div style={{ paddingTop: '50px' }}>
    <HeaderComponent />
    <ArticlesCardsGrid />
  </div>
);

export default ProjectsPage;
