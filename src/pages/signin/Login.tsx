import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import head from "../signup/head.png";

function LoginForm() {
  return (
    <div className="login-container">
      <div className="logo">
        <img src={head} alt="" />
      </div>
      <h1 className="title">
        Calm and productive <br /> email experience for your team
      </h1>

      <div className="form-group">
        <label className="emails">Email address</label>
        <div className="form-group2">
          <input
            type="email"
            className="emaillog"
            placeholder="Enter your email address"
          />
          <Link to="/forgot" className="forgot-link">
            Forgot
          </Link>
        </div>
      </div>

      <div className="form-group">
        <label className="emails">Password</label>
        <input
          type="password"
          className="emaillog"
          placeholder="Enter your password"
        />
      </div>

      <Link to="" className="sign-in-button">Sign in</Link>
      <p className="create-account-link">
        New to Avail? <Link className="create" to="/">Create an account</Link>
      </p>
    </div>
  );
}

export default LoginForm;
