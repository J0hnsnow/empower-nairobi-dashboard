import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Insights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Key Findings</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Climate events disproportionately affect women in informal settlements</li>
            <li>Economic vulnerabilities increase during climate-driven disasters</li>
            <li>Gender-responsive climate policies show promising results</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Case Study: Kibera Slum</CardTitle>
        </CardHeader>
        <CardContent>
          <p>In Kibera, the largest informal settlement in Nairobi, women-led initiatives have shown significant impact in improving both climate resilience and gender equality...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Insights;