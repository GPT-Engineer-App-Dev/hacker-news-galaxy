import React from 'react';
import HackerNewsList from '../components/HackerNewsList';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-hacker-green">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-center animate-glow">
          Hacker News Top Stories
        </h1>
        <HackerNewsList />
      </div>
    </div>
  );
};

export default Index;