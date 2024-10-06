import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">About the Project</h1>
      <Card>
        <CardHeader>
          <CardTitle>Understanding the Intersection</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This project aims to explore the complex relationship between climate change and gender inequality, two critical issues addressed by the United Nations Sustainable Development Goals (SDGs).
          </p>
          <p>
            By analyzing data on gender inequality indices and climate change indicators, we seek to uncover patterns and correlations that can inform policy decisions and drive action towards a more sustainable and equitable future.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Our Approach</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Collect and analyze open-source data on gender inequality and climate change.</li>
            <li>Develop interactive visualizations to illustrate the relationships between these issues.</li>
            <li>Identify potential solutions that address both gender equality and climate action.</li>
            <li>Promote awareness and encourage action through data-driven insights.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;