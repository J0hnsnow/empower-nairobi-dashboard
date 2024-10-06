import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Solutions = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Proposed Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Gender-Responsive Climate Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Integrate gender considerations into national climate change policies and action plans.</li>
              <li>Ensure equal representation of women in climate change decision-making processes.</li>
              <li>Develop gender-specific climate adaptation and mitigation strategies.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Education and Empowerment</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Promote STEM education for girls and women to increase their participation in climate science and technology.</li>
              <li>Provide training on sustainable agriculture and resource management practices to rural women.</li>
              <li>Support women's entrepreneurship in green industries and renewable energy sectors.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Data Collection and Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Improve gender-disaggregated data collection on climate change impacts and responses.</li>
              <li>Develop tools and methodologies for gender-sensitive climate vulnerability assessments.</li>
              <li>Conduct intersectional analysis to understand how climate change affects different groups of women.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Community-Based Initiatives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Support women-led community organizations working on climate resilience projects.</li>
              <li>Implement gender-responsive disaster risk reduction strategies at the local level.</li>
              <li>Promote traditional ecological knowledge and practices of indigenous women in conservation efforts.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Solutions;