import React from "react";
import "./Forgot.css";
import { Link } from "react-router-dom";
import head from "../forgot/head.png";
import Button from "../../button";

const Forgot = () => {
  return (
    <div className="reset-container">
      <div className="reset-card">
        <img className="head-logo" src={head} alt="" />
        <h2 className="reset">Reset your password</h2>
        <div className="cont-input2">
          <div className="cont-input">
            <p className="e-address">Email address</p>
            <input
              type="email"
              placeholder="Enter your email address"
              className="input-field"
            />
          </div>
        </div>
        <Link className="tres" to="/">
          {" "}
          <Button text="Continue" />
        </Link>
        <p className="signin-text">
          Just remembered your password?{" "}
          <Link to="/" className="span-sign">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Forgot;
