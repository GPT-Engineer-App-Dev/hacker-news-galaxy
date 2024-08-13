import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

const StockCard = ({ data }) => {
  const change = parseFloat(data['09. change']);
  const changePercent = parseFloat(data['10. change percent']);

  return (
    <Card className="bg-black border-hacker-green hover:border-hacker-green hover:shadow-[0_0_10px_#00ff00] transition-shadow duration-300">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-semibold mb-2 text-hacker-green">{data['01. symbol']}</h2>
        <p className="text-xl mb-2">${parseFloat(data['05. price']).toFixed(2)}</p>
        <div className={`flex items-center text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? <ArrowUpCircle className="w-4 h-4 mr-1" /> : <ArrowDownCircle className="w-4 h-4 mr-1" />}
          <span>{change.toFixed(2)} ({changePercent.toFixed(2)}%)</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StockCard;