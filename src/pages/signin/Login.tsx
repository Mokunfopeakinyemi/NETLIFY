import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import head from "../signup/head.png";
import Button from "../../button";
import Input from "../../assets/input";

function LoginForm() {
  return (
    <div className="containtype">
      <div className="login-container-type">
        <div className="logo">
          <img className="ogo" src={head} alt="" />
        </div>
        <p className="title-login">
          Calm and productive <br /> email experience for your team
        </p>
          <Input
            label="Email Address"
            text="Enter your email address"
            forgot=""
          />
          <Input label="Password" text="Enter your password" forgot="forgot" />

        <Button text="Sign In" />

        <p className="create-account-link-login">
          {" "}
          <Link className="create-login" to="/signup">
            New to Avail? Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
