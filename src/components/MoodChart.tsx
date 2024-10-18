import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { date: '01/05', mood: 3 },
  { date: '02/05', mood: 4 },
  { date: '03/05', mood: 2 },
  { date: '04/05', mood: 5 },
  { date: '05/05', mood: 4 },
  { date: '06/05', mood: 3 },
  { date: '07/05', mood: 4 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-700">{`Data: ${label}`}</p>
        <p className="text-purple-600 font-bold">{`Humor: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const MoodChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="mood" 
            stroke="#8884d8" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default MoodChart;