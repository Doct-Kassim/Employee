import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul className="sidebar-nav">
        <li className="sidebar-item"><Link to="/">Dashboard</Link></li>
        <li className="sidebar-item"><Link to="/employee-list">Employee List</Link></li>
        <li className="sidebar-item"><Link to="/department">Department</Link></li>
        <li className="sidebar-item"><Link to="/report">Report Status</Link></li>
        <li className="sidebar-item"><Link to="/add">Add Employee</Link></li>
        <li className="sidebar-item"><Link to="/settings">Settings</Link></li>
      </ul>
    </aside>
  );
};

export default SideBar;
