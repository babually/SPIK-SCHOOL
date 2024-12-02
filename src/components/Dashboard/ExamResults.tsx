import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Mon', teacher: 25, students: 40 },
  { name: 'Tue', teacher: 45, students: 30 },
  { name: 'Wed', teacher: 35, students: 55 },
  { name: 'Thu', teacher: 50, students: 35 },
  { name: 'Fri', teacher: 60, students: 45 },
  { name: 'Sat', teacher: 40, students: 60 },
  { name: 'Sun', teacher: 50, students: 45 },
];

const ExamResults = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">All Exam Results</h2>
        <select className="px-4 py-2 border rounded-lg text-sm">
          <option>Monthly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
          <span className="text-sm text-gray-600">Teacher</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          <span className="text-sm text-gray-600">Students</span>
        </div>
      </div>

      <LineChart width={700} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="teacher" 
          stroke="#9333EA" 
          strokeWidth={2}
          dot={false}
        />
        <Line 
          type="monotone" 
          dataKey="students" 
          stroke="#60A5FA" 
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default ExamResults;