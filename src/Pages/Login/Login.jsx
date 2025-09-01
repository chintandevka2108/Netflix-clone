import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../../assets/logo.png';

export const Login = ({ onLogin }) => {
  const [signState, setSignState] = useState("Sign In");
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    // Your authentication logic goes here (e.g., API call)
    console.log("Authenticating...");

    // Assuming authentication is successful:
    onLogin(); // Call the function from App.jsx to set isLoggedIn to true
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={handleAuth}>
          {signState === "Sign Up" && (
            <input type="text" placeholder="Your Name" />
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Your Password" />
          <button type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ?
            <p>New To Netflix?<span onClick={() => { setSignState("Sign Up") }}>Sign Up Now</span></p>
            : <p>Already Have Account?<span onClick={() => { setSignState("Sign In") }}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  );
};