import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const StoryCardSkeleton = () => {
  return (
    <Card className="h-full flex flex-col bg-black border-hacker-darkGreen">
      <CardContent className="flex-grow pt-6">
        <Skeleton className="h-6 w-3/4 mb-2 bg-hacker-darkGreen" />
        <Skeleton className="h-4 w-1/4 mb-4 bg-hacker-darkGreen" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full bg-hacker-darkGreen" />
      </CardFooter>
    </Card>
  );
};

export default StoryCardSkeleton;