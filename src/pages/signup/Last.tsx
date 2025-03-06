import React from "react";
import head from "../signup/head.png";
import "./Last.css";
import Button from "../../button";

function SignupForm() {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-icon">
          <img src={head} className="signhead-last" alt="" />
        </div>
        <h2 className="signup-title">
          Calm and productive <br />
          email experience for your team
        </h2>
        <div className="contcon2">
          <div className="contimintype">
            <p className="minipas">Company name</p>
            <input
              type="text"
              placeholder="Enter your Company name"
              className="signup-inputpas"
            />
          </div>
        </div>
        <div className="name-inputs">
          <div className="contimin2">
            <p className="minipas">First Name</p>
            <input
              type="text"
              placeholder="Enter your first name"
              className="signupinput-pas"
            />
          </div>
          <div className="contimin2">
            <p className="minipas">Last Name</p>
            <input
              type="text"
              placeholder="Enter your Last name"
              className="signupinput-pas"
            />
          </div>
        </div>
        <div className="contcon21">
          <div className="contimintype">
            <p className="minipas">Password</p>
            <input
              type="password"
              placeholder="Enter your Password"
              className="signup-inputpas"
            />
          </div>
        </div>
        <Button text="Start your 14 days trial" />
        <p className="signup-terms">
          By submitting this form, you agree to our <br />
          <span>Terms of Service</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
