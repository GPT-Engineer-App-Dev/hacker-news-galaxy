import React from 'react';
import { useQuery } from '@tanstack/react-query';
import StockCard from './StockCard';
import StockCardSkeleton from './StockCardSkeleton';

const API_KEY = 'demo'; // Replace with your Alpha Vantage API key

const fetchStockData = async (symbol) => {
  const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const StockList = () => {
  const stocks = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'META', 'TSLA'];

  const queries = stocks.map(symbol => ({
    queryKey: ['stock', symbol],
    queryFn: () => fetchStockData(symbol),
  }));

  const results = queries.map(query => useQuery(query));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((result, index) => (
        result.isLoading ? (
          <StockCardSkeleton key={index} />
        ) : result.error ? (
          <div key={index} className="text-red-500">Error: {result.error.message}</div>
        ) : (
          <StockCard key={index} data={result.data['Global Quote']} />
        )
      ))}
    </div>
  );
};

export default StockList;