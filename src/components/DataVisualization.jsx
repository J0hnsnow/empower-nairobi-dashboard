import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Region A', climateImpact: 4000, genderDisparity: 2400 },
  { name: 'Region B', climateImpact: 3000, genderDisparity: 1398 },
  { name: 'Region C', climateImpact: 2000, genderDisparity: 9800 },
  { name: 'Region D', climateImpact: 2780, genderDisparity: 3908 },
  { name: 'Region E', climateImpact: 1890, genderDisparity: 4800 },
];

const DataVisualization = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Climate Impact and Gender Disparities by Region</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="climateImpact" fill="#8884d8" />
              <Bar dataKey="genderDisparity" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      {/* Add more charts and visualizations here */}
    </div>
  );
};

export default DataVisualization;