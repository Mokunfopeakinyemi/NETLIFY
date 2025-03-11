import React from "react";
import head from "../signup/head.png";
import "./Last.css";
import Input from "../../assets/input";
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
          <Input label="Company name" text="Enter Company name" forgot="" />
        </div>
        <div className="name-inputs">
          <Input label="First name" width="203.29px" text="Enter First name" forgot="" />
          <Input label="Last name" width="203.29px" text="Enter Last name" forgot="" />
        </div>
        <div className="contcon21">
          <Input label="Password" text="Enter Your Password" forgot="" />
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
