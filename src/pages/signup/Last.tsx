import React, { useRef, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "../signup/Last.css";
import head from "../signup/head.png";
import Button from "../../button";
import Input from "../../assets/input";
import EmailConfirmation from "../signup/Email";

const CompleteProfileForm: React.FC = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const { token } = location.state || {};
  const [organizationName, setOrganizationName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  console.log("Received token:", token);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    if (error) setError(null);
  }, [organizationName, password, firstName, lastName]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!token) {
        setError("Token missing. Please check your verification link.");
        return;
      }

      try {
        const response = await fetch(`/api/user/complete-profile/${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            organizationName,
            password,
            firstName,
            lastName,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Profile completion failed.");
        }

        const data = await response.json();
        console.log("Profile completion response:", data);

        // Reset form fields
        setOrganizationName("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setSuccess(true);
      } catch (err: any) {
        setError(err.message || "Profile completion failed. Please try again.");
        console.error("Profile completion error:", err.message);
      }
    },
    [organizationName, password, firstName, lastName, token]
  );

  if (success) {
    return <EmailConfirmation />;
  }

  if (!token) {
    return <p>Invalid or missing token. Please check your verification link.</p>;
  }

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-icon">
          <img src={head} className="signhead-last" alt="header" />
        </div>
        <h2 className="signup-title">
          Calm and productive <br />
          email experience for your team
        </h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="contcon2">
            <Input
              label="Company name"
              text="Enter Company name"
              forgot=""
              ref={userRef}
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              type="text"
            />
          </div>

          <div className="name-inputs">
            <Input
              label="First name"
              width="203.29px"
              text="Enter First name"
              forgot=""
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
            />
            <Input
              label="Last name"
              width="203.29px"
              text="Enter Last name"
              forgot=""
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
            />
          </div>

          <div className="contcon21">
            <Input
              label="Password"
              text="Enter Your Password"
              forgot=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>

          <Button text="Start your 14 days trial" type="submit" />
        </form>

        <p className="signup-terms">
          By submitting this form, you agree to our <br />
          <span>Terms of Service</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default CompleteProfileForm;
