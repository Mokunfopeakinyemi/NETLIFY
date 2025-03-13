import React from "react";
import { Link } from "react-router-dom";
import "./Setnew.css";
import Button from "../../button";
import Input from "../../assets/input";
import head from "./head.png";
const ResetPassword = () => {
  return (
    <div className="containerset">
      <div>
        <img src={head} className="headset" alt="" />
      </div>
      <h2 className="titleset">Set a new password</h2>{" "}
      <Input
        label="Email Address"
        text="Enter your email address"
        forgot=""
      />
      <Input label="Password" text="Enter your Password" forgot="forgot" />
      <Link className="butset" to="">
        <Button text="Set new password" />
      </Link>
      <p className="signin-text">
        {" "}
        <Link to="/login" className="signin-link">
          Just remembered your password? Sign In
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
