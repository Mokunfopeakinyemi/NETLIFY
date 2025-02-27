import React from "react";
import head from "../signup/head.png"
import "./Last.css";

function SignupForm() {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-icon"><img src={head} alt="" /></div>
        <h2 className="signup-title">
          Calm and productive <br />
          email experience for your team
        </h2>
        <div className="contcon">
          <p className="mini">Company name</p>
          <input
            type="text"
            placeholder="Enter your Company name"
            className="signup-input"
          />
        </div>
        <div className="name-inputs">
          <div className="contcon">
            <p className="mini">First Name</p>
            <input
              type="text"
              placeholder="Enter your first name"
              className="signup-input"
            />
          </div>
          <div className="contcon">
            <p className="mini">Last Name</p>
            <input
              type="text"
              placeholder="Enter your last name"
              className="signup-input"
            />
          </div>
        </div>
        <div className="contcon">
          <p className="mini">Password</p>
          <input
            type="password"
            placeholder="Enter your Password"
            className="signup-input"
          />
        </div>
        <button className="signup-button">Start your 14 days trial</button>
        <p className="signup-terms">
          By submitting this form, you agree to our <br />
          <span>Terms of Service</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;