import React, { useState } from 'react';
import './Department.css';

const Department = () => {
    const [department, setDepartment] = useState({
        id: 'D001',
        name: 'Human Resources',
        function: 'Manage employee relations',
        headId: 'H001',
        headName: 'John Doe',
        headEmail: 'john.doe@example.com'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartment((prevDepartment) => ({
            ...prevDepartment,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your update logic here, e.g., sending data to an API
        console.log('Department updated:', department);
    };

    return (
        <div className="department-page">
            <h1>Department Details</h1>
            <form className="department-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">Department ID</label>
                    <input type="text" id="id" name="id" value={department.id} onChange={handleChange} readOnly />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={department.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="function">Function</label>
                    <input type="text" id="function" name="function" value={department.function} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="headId">Head of Department ID</label>
                    <input type="text" id="headId" name="headId" value={department.headId} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="headName">Head of Department Name</label>
                    <input type="text" id="headName" name="headName" value={department.headName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="headEmail">Head of Department Email</label>
                    <input type="email" id="headEmail" name="headEmail" value={department.headEmail} onChange={handleChange} />
                </div>
                <button type="submit">Update Department</button>
            </form>
        </div>
    );
};

export default Department;
