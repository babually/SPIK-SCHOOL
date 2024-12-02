import React from 'react';
import StatsCard from './StatsCard';
import ExamResults from './ExamResults';
import StudentDistribution from './StudentDistribution';
import StarStudents from './StarStudents';
import RecentActivity from './RecentActivity';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="space-y-8">
        <StatsCard />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ExamResults />
          </div>
          <div>
            <StudentDistribution />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StarStudents />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;