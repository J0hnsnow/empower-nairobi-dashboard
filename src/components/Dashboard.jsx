import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeIcon, BarChartIcon, LightbulbIcon, HeartHandshakeIcon, InfoIcon } from "lucide-react";
import HomePage from './HomePage';
import DataVisualization from './DataVisualization';
import Insights from './Insights';
import Solutions from './Solutions';
import About from './About';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Empowering Communities: Bridging Gender Equality and Climate Action in Nairobi</h1>
      <Tabs defaultValue="home">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="home"><HomeIcon className="mr-2" />Home</TabsTrigger>
          <TabsTrigger value="data"><BarChartIcon className="mr-2" />Data Visualization</TabsTrigger>
          <TabsTrigger value="insights"><LightbulbIcon className="mr-2" />Insights</TabsTrigger>
          <TabsTrigger value="solutions"><HeartHandshakeIcon className="mr-2" />Solutions</TabsTrigger>
          <TabsTrigger value="about"><InfoIcon className="mr-2" />About</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <HomePage />
        </TabsContent>
        <TabsContent value="data">
          <DataVisualization />
        </TabsContent>
        <TabsContent value="insights">
          <Insights />
        </TabsContent>
        <TabsContent value="solutions">
          <Solutions />
        </TabsContent>
        <TabsContent value="about">
          <About />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;