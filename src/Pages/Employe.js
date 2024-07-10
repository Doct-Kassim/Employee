import React, { useState } from 'react';
import './Employe.css';

const EmployeeForm = () => {
    const [department, setDepartment] = useState('');
    const [reportingTime, setReportingTime] = useState('');
    const [reportingDate, setReportingDate] = useState('');

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    const handleReportingTimeChange = (event) => {
        setReportingTime(event.target.value);
    };

    const handleReportingDateChange = (event) => {
        setReportingDate(event.target.value);
    };

    const viewProfile = () => {
        // Logic for viewing profile
        alert('View Profile button clicked');
    };

    const updateProfile = () => {
        // Logic for updating profile
        alert('Update Profile button clicked');
    };

    return (
        <div className="container">
            <h1>Employee Form</h1>
            <form id="employeeForm">
                <label htmlFor="department">Choose Department:</label>
                <select id="department" name="department" value={department} onChange={handleDepartmentChange} required>
                    <option value="hr">HR</option>
                    <option value="it">IT</option>
                    <option value="finance">Finance</option>
                    <option value="marketing">Marketing</option>
                    <option value="operations">Operations</option>
                </select>

                <label htmlFor="reportingTime">Time of Reporting:</label>
                <input type="time" id="reportingTime" name="reportingTime" value={reportingTime} onChange={handleReportingTimeChange} required />

                <label htmlFor="reportingDate">Date of Reporting:</label>
                <input type="date" id="reportingDate" name="reportingDate" value={reportingDate} onChange={handleReportingDateChange} required />

                <div className="buttons">
                    <button type="button" onClick={viewProfile}>View Profile</button>
                    <button type="button" onClick={updateProfile}>Update Profile</button>
                </div>
            </form>
        </div>
    );
};

export default EmployeeForm;
