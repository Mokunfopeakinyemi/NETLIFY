import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import head from "../signup/head.png";
import Button from "../../button";

function LoginForm() {
  return (
    <div className="login-container">
      <div className="logo">
        <img className="ogo" src={head} alt="" />
      </div>
      <h1 className="title">
        Calm and productive <br /> email experience for your team
      </h1>
      <div className="form-g">
        <div className="form-group">
          <label className="emails">Email address</label>
          <div className="form-link">
            <input
              type="email"
              className="emaillogin"
              placeholder="Enter your email address"
            />
            <Link to="/forgot" className="forgot-link">
              Forgot
            </Link>
          </div>
        </div>
      </div>
      <div className="form-g">
        <div className="form-group">
          <label className="emails">Password</label>
          <div className="form-group2">
            <input
              type="password"
              className="emaillogin"
              placeholder="Enter your password"
            />
          </div>
        </div>
      </div>

      <Button text="Sign In" />

      <p className="create-account-link">
        New to Avail?{" "}
        <Link className="create" to="/last">
          Create an account
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
