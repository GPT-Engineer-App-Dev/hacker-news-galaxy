import React from 'react';
import StockList from '../components/StockList';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Money = () => {
  return (
    <div className="min-h-screen bg-black text-hacker-green">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold animate-glow">Tech Stocks</h1>
          <Button asChild variant="outline" className="border-hacker-green text-hacker-green hover:bg-hacker-darkGreen">
            <Link to="/">Back to News</Link>
          </Button>
        </div>
        <StockList />
      </div>
    </div>
  );
};

export default Money;