import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>About This Project</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This dashboard is part of a project aimed at integrating gender equality and climate action initiatives in Nairobi, Kenya. It uses data from various sources including NASA's SEDAC, Kenya National Bureau of Statistics, UN Women, and UN Environment Programme.</p>
          <p className="mt-4">Our goal is to provide data-driven insights that can inform policy decisions and community actions to address the interconnected challenges of gender inequality and climate change.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;