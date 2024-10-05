import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Solutions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Policy Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Integrate gender considerations into climate resilience planning</li>
            <li>Improve gender-disaggregated data collection in climate impact assessments</li>
            <li>Increase funding for women-led climate initiatives</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Community Initiatives</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Training programs for women in sustainable agriculture</li>
            <li>Microfinance opportunities for climate-resilient businesses</li>
            <li>Community-based disaster preparedness with a focus on gender inclusion</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Solutions;