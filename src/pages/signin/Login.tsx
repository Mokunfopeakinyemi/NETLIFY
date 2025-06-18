import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import head from "../signup/head.png";
import Button from "../../button";
import Input from "../../assets/input";
import EmailConfirmation from "../signup/Email";
import AuthContext from "../AuthProvider";
import apiClient from "../../api/axios";

const LOGIN_URL = "/api/user/login";

const LoginForm = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { setAuth } = authContext;

  const userRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setError(null);
  }, [email, password]);

  const loginUrl = 'https://stage.api.withavail.com'
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${loginUrl}/api/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email,password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Check your email for the registration link.');
      } else {
        setMessage(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setMessage('Error sending email.');
    }
  };

  if (success) {
    return <EmailConfirmation />;
  }

  return (
    <form className="containtype" onSubmit={handleSubmit}>
      <div className="login-container-type">
        <div className="logo">
          <img className="ogo" src={head} alt="Logo" />
        </div>
        <p className="title-login">
          Calm and productive <br /> email experience for your team
        </p>

        {error && <p className="error-message">{error}</p>}

        <Input
          label="Email Address"
          text="Enter your email address"
          forgot=""
          ref={userRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />

        <Input
          label="Password"
          text="Enter your password"
          forgot="Forgot?"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <Button text="Sign In" />

        <p className="create-account-link-login">
          <Link className="create-login" to="/signup">
            New to Avail? Create an account
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
