import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="homepage">
            <header className="header">
                <div className="welcome-text">
                    <h1>WELCOME TO ATEMS</h1>
                    <p>CONTROL WHAT YOU WANT</p>
                </div>
                <div className="user-info">
                    <span>KASSIM MNYONGE</span>
                    <div className="user-icon">
                        <i className="fa fa-user-circle"></i>
                    </div>
                </div>
            </header>
            <div className="content">
                <div className="card employee-card">
                    <h3>Employee</h3>
                    
                </div>
                <div className="card leave-request-card">
                    <h3>Department</h3>
                    
                </div>
                <div className="card projects-card">
                    <h3>Attendance</h3>
                    
                </div>
                <div className="card vacancies-card">
                    <h3>Home</h3>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
