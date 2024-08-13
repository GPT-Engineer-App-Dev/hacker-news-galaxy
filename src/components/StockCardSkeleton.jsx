import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StockCardSkeleton = () => {
  return (
    <Card className="bg-black border-hacker-darkGreen">
      <CardContent className="pt-6">
        <Skeleton className="h-8 w-24 mb-2 bg-hacker-darkGreen" />
        <Skeleton className="h-6 w-20 mb-2 bg-hacker-darkGreen" />
        <Skeleton className="h-4 w-32 bg-hacker-darkGreen" />
      </CardContent>
    </Card>
  );
};

export default StockCardSkeleton;