import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Introduction</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This dashboard integrates data on gender equality (SDG 5) and climate action (SDG 13) in Nairobi, Kenya. It aims to highlight the interconnected challenges and propose data-driven solutions.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Key Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Population affected by climate disasters: X%</li>
            <li>Gender inequality index: Y</li>
            <li>Women in informal settlements: Z%</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;