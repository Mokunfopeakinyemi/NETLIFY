import React from "react";
import "./Forgot.css";
import { Link } from "react-router-dom";
import head from "../forgot/head.png";
import Button from "../../button";
import Input from "../../assets/input";

const Forgot = () => {
  return (
    <div className="reset-container">
      <div className="reset-card">
        <img className="head-logo" src={head} alt="" />
        <h2 className="reset">Reset your password</h2>
        <Input
          label="Email Address"
          text="Enter Your Email Address"
          forgot=""
        />
        <Link to="/emailconfirm">
          {" "}
          <Button text="Continue" />
        </Link>
        <p className="signin-text">
          <Link to="/" className="span-sign">
            Just remembered your password? Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Forgot;
