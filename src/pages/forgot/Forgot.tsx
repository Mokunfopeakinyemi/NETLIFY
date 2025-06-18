import React from "react";
import "./Forgot.css";
import { Link } from "react-router-dom";
import head from "../forgot/head.png";
import Button from "../../button";
import Input from "../../assets/input";
import { useRef, useEffect, useState } from "react";

const Forgot = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [user, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser("");
    setPassword("");
    setSuccess(true);
    console.log("Form Submitted");
    alert("Form Submitted");
  };
  return (
    <div className="reset-container">
      <div className="reset-card">
        <img className="head-logo" src={head} alt="" />
        <h2 className="reset">Reset your password</h2>
        <Input
          label="Email Address"
          text="Enter Your Email Address"
          forgot=""
          ref={userRef}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          type="email"
        />
        <Link className="confirm" to="/emailconfirm">
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
