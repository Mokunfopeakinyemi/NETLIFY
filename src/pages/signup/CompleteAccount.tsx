import React, { useEffect, useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const baseUrl = "https://stage.api.withavail.com";

const EmailVerificationPage: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const apiCalledRef = useRef(false);

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        console.error("No token found in URL params.");
        navigate("/", { state: { from: location.pathname } });
        return;
      }

      try {
        console.log("Verifying token:", token);
        const response = await axios.post(
          `${baseUrl}/api/user/verify-email/${token}`
        );

        console.log("Token verification successful:", response.data);

        // Navigate to profile completion form with token in state
        navigate("/last", {
          state: {
            token: response.data.data.token,
            from: location.pathname,
          },
        });
      } catch (error: any) {
        console.error(
          "Token verification failed:",
          error.response?.data || error.message
        );
        navigate("/", { state: { from: location.pathname } });
      }
    };

    if (!apiCalledRef.current) {
      apiCalledRef.current = true;
      verifyToken();
    }
  }, [token, navigate, location]);

  return <div>Verifying email... Please wait.</div>;
};

export default EmailVerificationPage;
