import React from 'react';
import StockList from '../components/StockList';

const Money = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6 text-center animate-glow text-hacker-green">
        Tech Stocks
      </h1>
      <StockList />
    </>
  );
};

export default Money;