import React from 'react';
import './Regist.css';

const Regist = () => {
    return (
        <div className="RegiClass1-container">
            <div className="RegiClass1-header">
                <h2>Registration</h2>
                <a href="#" className="login-link">Login</a>
            </div>
            <form>
                <label htmlFor="username">Username<span className="required">*</span></label>
                <input type="text" id="username" name="username" required />
                <label htmlFor="email">Email<span className="required">*</span></label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password<span className="required">*</span></label>
                <input type="password" id="password" name="password" required />
                <label htmlFor="confirm-password">Confirm Password<span className="required">*</span></label>
                <input type="password" id="confirm-password" name="confirm-password" required />
                <button type="submit" className="signup-button">Sign up</button>
            </form>
        </div>
    );
};

export default Regist;
