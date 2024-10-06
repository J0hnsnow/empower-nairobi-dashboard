import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, PieChart, Pie, Cell } from 'recharts'; // Import additional chart types
import { saveAs } from 'file-saver'; // Import file-saver for PDF download

// Sample data for different impact areas
const agriculturalData = [
  { year: 2010, region: 'East Africa', yieldLoss: 10 },
  { year: 2011, region: 'West Africa', yieldLoss: 12 },
  // Add more data points
];

const nutritionData = [
  { region: 'East Africa', year: 2010, malnutritionRate: 25 },
  { region: 'West Africa', year: 2011, malnutritionRate: 30 },
  // Add more data points
];

const healthData = [
  { year: 2010, region: 'East Africa', healthRiskIndex: 0.7 },
  { year: 2011, region: 'West Africa', healthRiskIndex: 0.75 },
  // Add more data points
];

const waterEnergyData = [
  { region: 'East Africa', year: 2010, waterScarcity: 40 },
  { region: 'West Africa', year: 2011, waterScarcity: 35 },
  // Add more data points
];

const disasterData = [
  { year: 2010, region: 'East Africa', displacement: 1000 },
  { year: 2011, region: 'West Africa', displacement: 1200 },
  // Add more data points
];

const Dashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const filterData = (data) => {
    return data.filter(item => 
      (selectedRegion === 'All' || item.region === selectedRegion) &&
      (selectedYear === 'All' || item.year === parseInt(selectedYear))
    );
  };

  const filteredAgriculturalData = filterData(agriculturalData);
  const filteredNutritionData = filterData(nutritionData);
  const filteredHealthData = filterData(healthData);
  const filteredWaterEnergyData = filterData(waterEnergyData);
  const filteredDisasterData = filterData(disasterData);

  const downloadPDF = (chartId) => {
    // Implement PDF download logic here
    alert(`Download PDF for chart: ${chartId}`);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Climate Change and Gender Dashboard</h1>
      <div className="mb-4 flex space-x-4">
        <div>
          <label htmlFor="regionFilter" className="mr-2">Filter by Region:</label>
          <select id="regionFilter" value={selectedRegion} onChange={handleRegionChange} className="border p-2">
            <option value="All">All</option>
            <option value="East Africa">East Africa</option>
            <option value="West Africa">West Africa</option>
            {/* Add more regions as needed */}
          </select>
        </div>
        <div>
          <label htmlFor="yearFilter" className="mr-2">Filter by Year:</label>
          <select id="yearFilter" value={selectedYear} onChange={handleYearChange} className="border p-2">
            <option value="All">All</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            {/* Add more years as needed */}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Agricultural Production</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={filteredAgriculturalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="yieldLoss" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
            <button onClick={() => downloadPDF('agriculturalChart')}>Download PDF</button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Food and Nutrition Security</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={filteredNutritionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="malnutritionRate" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
            <button onClick={() => downloadPDF('nutritionChart')}>Download PDF</button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Health Risks</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={filteredHealthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="healthRiskIndex" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
            <button onClick={() => downloadPDF('healthChart')}>Download PDF</button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Water and Energy</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={filteredWaterEnergyData} dataKey="waterScarcity" nameKey="region" cx="50%" cy="50%" outerRadius={100}>
                  {filteredWaterEnergyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <button onClick={() => downloadPDF('waterEnergyChart')}>Download PDF</button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Climate-Related Disasters</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={filteredDisasterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="displacement" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
            <button onClick={() => downloadPDF('disasterChart')}>Download PDF</button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;