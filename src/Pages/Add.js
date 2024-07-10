import React from 'react';
import './Add.css';

const Add = () => {
    return (
        <div className="form-container">
            <h2>Add Employee</h2>
            <form>
                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="empId">Emp ID</label>
                        <input type="text" id="empId" name="empId" placeholder="Enter your EmpId" required />
                    </div>
                </div>

                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Enter your First Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Enter your Last Name" required />
                    </div>
                </div>

                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <select id="department" name="department" required>
                            <option value="">-select-</option>
                            {/* Add department options here */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailId">Email ID</label>
                        <input type="email" id="emailId" name="emailId" placeholder="Enter your Email ID" required />
                    </div>
                </div>

                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="mobileNo">Mobile No</label>
                        <input type="text" id="mobileNo" name="mobileNo" placeholder="Enter your Mobile No" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" name="country" placeholder="Enter your Country" required />
                    </div>
                </div>

                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" name="state" placeholder="Enter your State" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" placeholder="Enter your City" required />
                    </div>
                </div>

                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="dob">DOB</label>
                        <input type="date" id="dob" name="dob" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfJoining">Date of Joining</label>
                        <input type="date" id="dateOfJoining" name="dateOfJoining" required />
                    </div>
                </div>

                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="photo">Photo</label>
                        <input type="file" id="photo" name="photo" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea id="address" name="address" placeholder="Enter your Address" required></textarea>
                    </div>
                </div>

                <div className="form-group-row">
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your Password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
                    </div>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Add;
