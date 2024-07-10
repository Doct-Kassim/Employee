import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login-page'>
            <div className='backLog'>
                <div className="login-container">
                    <h2><i className="fa fa-user"></i> Sign In | Admin</h2>
                    <form>
                        <label htmlFor="username">USERNAME</label>
                        <input type="email" id="username" name="username" placeholder="Email" required />
                        <label htmlFor="password">PASSWORD</label>
                        <input type="password" id="password" name="password" placeholder="Password" required />
                        <a href="#" className="forgot-password">Forgot Password?</a>
                        <button type="submit" className="sign-in-button">SIGN IN</button>
                    </form>
                    <button className="home-button" onClick={() => window.location.href='home.html'}>Home Page</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
