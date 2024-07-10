import React, { useState } from 'react';
import './MenuIcon.css';

const MenuIcon = ({ toggleSidebar }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    toggleSidebar();
    setIsActive(!isActive);
  };

  return (
    <div className={`container ${isActive ? 'change' : ''}`} onClick={handleClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
};

export default MenuIcon;
