import React from "react";
import "./Check.css";
import Button from "../../button";
import head from "./head.png";
import { Link } from "react-router-dom";

const CheckInbox = () => {
  return (
    <div className="contcheck">
      <div className="containercheck">
        <div>
          <img src={head} className="headcheck" alt="" />
        </div>
        <h2 className="title">Check your inbox!</h2>
        <p className="message">
          If this email address was used to create an account, instructions to
          reset your password will be sent to you.
        </p>
        <Link className="open" to="/set">
          <Button text="Open Gmail" />
        </Link>
        <p className="signin-text">
          Just remembered your password? <Link to="/login" className="signcheck">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default CheckInbox;
