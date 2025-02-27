import React from "react";
import head from "../signup/head.png";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="containsignup">
      <div className="contup">
        <img className="head" src={head} alt="" />
        <div className="contcalm">
          <p className="calm">
            Calm and productive email experience for your team
          </p>
        </div>
        <div className="containemail">
          <div className="conteem">
            <p className="miniemail">Email</p>
            <input
              type="text"
              className="email"
              placeholder="Enter your email address"
            />
          </div>
        </div>
        <div className="contconti">
          <Link to="/email">
            <p className="conti">Continue</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
