import head from "../signup/head.png";
import "./Signup.css";
import Button from "../../button";
import Input from "../../assets/input";
import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Signup = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const emailowner = location.state?.email || "your email";

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const loginUrl = "https://stage.api.withavail.com";

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setMessage("");
  }, [email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email is required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${loginUrl}/api/user/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Check your email for the registration link.");
        navigate("/emailconfirm", { state: { email } });
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      setMessage("Error sending email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="containsignup">
      <div className="contupsign">
        <img className="head-cont" src={head} alt="Signup Header" />

        <div className="contcalm">
          <p className="calm">
            Calm and productive email experience for your team
          </p>
        </div>

        <form onSubmit={handleSubmit} className="containemail">
          <div className="conteem">
            <div className="">
              <Input
                label="Email"
                text="Enter email address"
                forgot=""
                ref={userRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </div>
            {message && <p className="error-message">{message}</p>}
          </div>

          <div className="contconti">
            <Button
              type="submit"
              disabled={loading}
              text={loading ? "Sending..." : "Continue"}
              className="btn-submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
