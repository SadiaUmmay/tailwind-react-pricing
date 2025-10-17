import React from 'react';
import { LineChart, Line } from 'recharts';

const data = [
  { name: 'Page A', uv: 400 },
  { name: 'Page B', uv: 100 },
  { name: 'Page C', uv: 200 },
];

const ResultChart = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={2} />
    </LineChart>
  );
};

export default ResultChart;
