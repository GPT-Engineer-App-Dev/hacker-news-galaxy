import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ExternalLink } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <Card className="h-full flex flex-col bg-black border-hacker-green hover:border-hacker-green hover:shadow-[0_0_10px_#00ff00] transition-shadow duration-300">
      <CardContent className="flex-grow pt-6">
        <h2 className="text-xl font-semibold mb-2 text-hacker-green">{story.title}</h2>
        <div className="flex items-center text-sm text-hacker-darkGreen mb-4">
          <ArrowUpCircle className="w-4 h-4 mr-1" />
          <span>{story.points} points</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full border-hacker-green text-hacker-green hover:bg-hacker-darkGreen hover:text-hacker-green"
          onClick={() => window.open(story.url, '_blank')}
        >
          Read More <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;