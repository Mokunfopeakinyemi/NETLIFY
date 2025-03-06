import React from 'react';
import "./Email.css"
import { Link } from 'react-router-dom';

function EmailConfirmation() {
  return (
    <div className="email-confirmation-container">
      <div className="email-confirmation-content">
        <div className="email-confirmation-icon"></div>
        <Link to="" className="email-confirmation-title">Check your inbox!</Link>
        <p className="email-confirmation-message">
          Open the link sent to toye@gmail.com.
        </p>
        <p className="email-confirmation-message">
          No email? Check spam folder.
        </p>
        <Link to="/check" className="email-confirmation-button">Open Gmail</Link>
        <p className="email-confirmation-signin">
          Already have an account? <Link  to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default EmailConfirmation;