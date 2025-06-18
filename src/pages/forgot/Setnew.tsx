import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Setnew.css";
import Button from "../../button";
import Input from "../../assets/input";
import head from "./head.png";

const ResetPassword = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [email, password]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation (optional)
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    console.log("Form Submitted");
    alert("Password reset successful!");
    setEmail("");
    setPassword("");
    setSuccess(true);
  };

  return (
    <div className="containerset">
      <div>
        <img src={head} className="headset" alt="Header" />
      </div>
      <h2 className="titleset">Set a new password</h2>
      {error && (
        <p ref={errRef} className="error">
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <Input
          label="Email Address"
          text="Enter your email address"
          forgot=""
          ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <Input
          label="Password"
          text="Enter your new password"
          forgot=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button className="butset" type="submit">
          <Button text="Set new password" />
        </button>
      </form>
      <p className="signin-text">
        <Link to="/login" className="signin-link">
          Just remembered your password? Sign In
        </Link>
      </p>
    </div>
  );
};

export default ResetPassword;
