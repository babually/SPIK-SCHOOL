import React from 'react';
import { Outlet } from '@tanstack/react-router';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      
      <main className="pl-64 pt-16">
        <Outlet />
      </main>
    </div>
  );
}

export default App;