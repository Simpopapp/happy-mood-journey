import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '01/05', mood: 3 },
  { date: '02/05', mood: 4 },
  { date: '03/05', mood: 2 },
  { date: '04/05', mood: 5 },
  { date: '05/05', mood: 4 },
  { date: '06/05', mood: 3 },
  { date: '07/05', mood: 4 },
];

const MoodChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="mood" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MoodChart;