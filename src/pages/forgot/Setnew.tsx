import React from "react";
import { Link } from "react-router-dom";
import "./Setnew.css";
import Button from "../../button";
import head from "./head.png";
const ResetPassword = () => {
  return (
    <div className="containerset">
      <div>
        <img src={head} className="headset" alt="" />
      </div>
      <h2 className="title">Set a new password</h2>{" "}
      <div className="form-groupset">
        <label className="emails">Password</label>
        <div className="form-set">
          <input
            type="password"
            className="emailset"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div className="form-groupset">
        <label className="emails">Confirm your Password</label>
        <div className="form-set">
          <input
            type="password"
            className="emailset"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <Link className="butset" to="">
        <Button text="Set new password" />
      </Link>
      <p className="signin-text">
        Just remembered your password?{" "}
        <Link to="/login" className="signin-link">Sign In</Link>
      </p>
    </div>
  );
};

export default ResetPassword;
