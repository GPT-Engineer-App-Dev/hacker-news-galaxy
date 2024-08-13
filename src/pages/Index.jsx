import React from 'react';
import HackerNewsList from '../components/HackerNewsList';

const Index = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-center animate-glow text-hacker-green">
        Hacker News Top Stories
      </h1>
      <HackerNewsList />
    </>
  );
};

export default Index;