import React from 'react';
import { Link } from '@tanstack/react-router';
import { 
  Home, Users, GraduationCap, BookOpen, User, 
  ClipboardList, Calendar, FileText, Bus, Building2
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: User, label: 'Admin', path: '/admin' },
  { icon: Users, label: 'Students', path: '/students' },
  { icon: GraduationCap, label: 'Teachers', path: '/teachers' },
  { icon: BookOpen, label: 'Library', path: '/library' },
  { icon: ClipboardList, label: 'Class', path: '/class' },
  { icon: Calendar, label: 'Routine', path: '/routine' },
  { icon: FileText, label: 'Notice', path: '/notice' },
  { icon: Bus, label: 'Transport', path: '/transport' },
  { icon: Building2, label: 'Hostel', path: '/hostel' },
];

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-8">
          <GraduationCap className="w-8 h-8 text-purple-600" />
          <span className="text-xl font-bold text-purple-600">SPIK</span>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center space-x-3 px-4 py-2.5 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;