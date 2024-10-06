import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Climate Change & Gender Inequality</h1>
      <p className="text-xl mb-8 max-w-2xl text-center">
        Exploring the intersection of climate action and gender equality to support sustainable development for all.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link to="/dashboard">Explore Data</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/about">Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;