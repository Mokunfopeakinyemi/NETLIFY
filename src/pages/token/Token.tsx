import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../assets/input";
import Button from "../../button";
import "./Token.css";
import head from "../signup/head.png";
import { useAuth } from "../AuthProvider";

const TokenValidation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setToken } = useAuth();

  // Get query params from URL
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const urlToken = searchParams.get("token") || "";

  const [tokenInput, setTokenInput] = useState<string>(urlToken);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!email) {
      setError("Email not found. Please restart the verification process.");
    }
  }, [email]);

  const handleTokenValidation = async () => {
    setError(null);

    if (!tokenInput) {
      setError("Token is required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://stage.api.withavail.com/api/user/verify-email/${tokenInput}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      setLoading(false);

      if (response.ok && data.success) {
        setToken(tokenInput); // Save token globally in context
        navigate("/complete-profile", { state: { email } });
      } else {
        setError(data.message || "Invalid token. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setError("An error occurred while verifying the token.");
    }
  };

  if (!email) {
    return (
      <div className="containsignup">
        <p className="error-message">
          Email not found. Please restart the verification process.
        </p>
      </div>
    );
  }

  return (
    <div className="containsignup">
      <div className="contup">
        <img className="head-cont" src={head} alt="Token Validation" />

        <div className="contcalm">
          <p className="calm">
            Please check your email and enter the token below:
          </p>
        </div>

        <div className="containemail">
          <div className="conteem">
            <div className="form-group2">
              <Input
                label="Token"
                text="Enter your token"
                value={tokenInput}
                forgot=""
                onChange={(e) => setTokenInput(e.target.value)}
                type="text"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>

        <div className="contconti">
          <Button
            type="button"
            disabled={loading}
            text={loading ? "Validating..." : "Validate Token"}
            onClick={handleTokenValidation}
            className="btn-submit"
          />
        </div>
      </div>
    </div>
  );
};

export default TokenValidation;
