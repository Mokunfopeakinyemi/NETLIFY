import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { Link } from "react-router-dom";
import "../signup/Last.css";
import head from "../signup/head.png";
import Button from "../../button";
import Input from "../../assets/input";
import EmailConfirmation from "../signup/Email";
import AuthContext from "../AuthProvider";
import apiClient from "../../api/axios";

const REGISTER_URL = "/api/user/register";

const LoginForm = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { setAuth } = useMemo(() => authContext, [authContext]);

  const userRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    if (error) setError(null);
  }, [user, password]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const response = await apiClient.post(
          REGISTER_URL,
          JSON.stringify({ user, password }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );

        setUser("");
        setPassword("");
        console.log(JSON.stringify(response?.data));
        setSuccess(true);
      } catch (err: any) {
        setError("Login failed. Please check your credentials.");
        console.error("Login error:", err);
      }
    },
    [user, password]
  );

  if (success) {
    return <EmailConfirmation />;
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
        {/* {error && <p ref={errRef} className="error">{error}</p>} */}

        <form onSubmit={handleSubmit}>
          <div className="contcon2">
            <Input
              label="Company name"
              text="Enter Company name"
              forgot=""
              ref={userRef}
              value={user}
              onChange={(e) => setUser(e.target.value)}
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

          <Button text="Start your 14 days trial" />
        </form>

        <p className="signup-terms">
          By submitting this form, you agree to our <br />
          <span>Terms of Service</span> and <span>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
