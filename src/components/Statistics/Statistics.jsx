import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    const data = [
  {
    name: 'A-01',
    mark: 60
  
  },
  {
    name: 'A-02',
    mark: 60
    
  },
  {
    name: 'A-03',
    mark: 60
    
  },
  {
    name: 'A-04',
    mark: 59  
  },  
  {
    name: 'A-05',
    mark: 58    
  },
  {
    name: 'A-06',
    mark: 60
    
  },
  {
    name: 'A-07',
    mark: 60
    
  },
  {
    name: 'A-08',
    mark: 60
    
  },
];
    return (
        <div className='text-center w-[80%] mx-auto'>
            <h2 className='text-xl font-bold bg-blue-50 h-46 p-8 my-8'>Assignment Quantity: {data.length}</h2>
         
            <ComposedChart
          width={800}
          height={450}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mark" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="mark" stroke="#ff7300" />
        </ComposedChart>
        </div>
    );
};

export default Statistics;