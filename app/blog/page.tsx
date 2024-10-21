import React from 'react';
import HeaderComponent from '../components/Header/Header';
import ArticlesCardsGrid from './BlogArticlesCardsGrid';

const BlogPage: React.FC = () => (
  <div style={{ paddingTop: '50px' }}>
    <HeaderComponent />
    <ArticlesCardsGrid />
  </div>
);

export default BlogPage;
