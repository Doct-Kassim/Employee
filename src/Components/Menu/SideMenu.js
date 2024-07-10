import React, { useState } from 'react';
import SideBar from './SideBar';
import MenuIcon from './MenuIcon';
import './App.css'; // Assuming you have some basic styles

const SideMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <MenuIcon toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} />
    </div>
  );
};

export default SideMenu;
