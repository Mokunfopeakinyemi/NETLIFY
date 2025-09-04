import React from "react";
import "./Email.css";
import { Link, useLocation } from "react-router-dom";

function EmailConfirmation() {
  const location = useLocation();
  const email = location.state?.email || "your email";

  return (
    <div className="email-confirmation-container">
      <div className="email-confirmation-content">
        <div className="email-confirmation-icon"></div>
        <Link to="/login" className="email-confirmation-title">
          Check your inbox!
        </Link>
        <p className="email-confirmation-message">
          Open the link sent to {email}.
        </p>
        <p className="email-confirmation-message">
          No email? Check spam folder.
        </p>
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="email-confirmation-button"
        >
          Open Gmail
        </a>
        <p className="email-confirmation-signin">
          <Link to="/"> Already have an account? Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default EmailConfirmation;
