import React from 'react';
import './MenuIcon.css';

const MenuIcon = ({ toggleSidebar }) => {
  return (
    <div className="container" onClick={toggleSidebar}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default MenuIcon;
