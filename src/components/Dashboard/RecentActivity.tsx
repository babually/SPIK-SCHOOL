import React from 'react';
import { User2, DollarSign, GraduationCap } from 'lucide-react';

const activities = [
  {
    title: 'New Teacher',
    description: 'It is a long established readable.',
    time: 'Just now',
    icon: User2,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Fees Structure',
    description: 'It is a long established readable.',
    time: 'Today',
    icon: DollarSign,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600'
  },
  {
    title: 'New Course',
    description: 'It is a long established readable.',
    time: '24 Sep 2023',
    icon: GraduationCap,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600'
  }
];

const RecentActivity = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">All Exam Results</h2>
        <button>
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`${activity.iconBg} p-2 rounded-lg`}>
              <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{activity.title}</h3>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-2 text-purple-600 font-medium hover:bg-purple-50 rounded-lg transition-colors">
        View All
      </button>
    </div>
  );
};

export default RecentActivity;