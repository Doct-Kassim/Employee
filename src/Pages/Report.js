import React from 'react';
import './Report.css';

const EmployeeReport = () => {
    return (
        <div className="report-container">
            <h1>Employee Sign-In Report</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Date of Reporting</th>
                        <th>Time of Reporting</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>HR</td>
                        <td>2024-06-24</td>
                        <td>08:00 AM</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>IT</td>
                        <td>2024-06-24</td>
                        <td>08:30 AM</td>
                    </tr>
                  
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeReport;
