import React from 'react';
import { Line, LineChart } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]
const ResultChart = () => {
    return (
<LineChart width={600} height={800} data={data}>
    <Line dataKey="uv" stroke="purple" strokeWidth={2} />
  </LineChart>

       
    );
};

export default ResultChart;