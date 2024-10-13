// src/pages/BlogPage.tsx
import React from 'react';
import HeaderComponent from '../components/Header/Header';

const BlogPage: React.FC = () => {
  return (
    <div>
      <HeaderComponent />
      <h1>Blog Page</h1>
      <p>This is where blog content will go.</p>
    </div>
  );
};

export default BlogPage;
