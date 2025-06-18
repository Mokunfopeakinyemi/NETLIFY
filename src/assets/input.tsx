import { Link } from "react-router-dom";
import "./input.css";
import React from "react";
interface InputProps {
  text: string;
  label: string;
  forgot: string;
  width?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, text, forgot, width = "423.58px", value, onChange, type = "text" },
    ref
  ) => {
    return (
      <div className="form-g" style={{ width }}>
        <div className="form-group-logininput" style={{ width }}>
          <div className="form-label-container">
            <label className="emails-login">{label}</label>
            <input
              type={type}
              ref={ref}
              className="emaillogin"
              placeholder={text}
              value={value}
              onChange={onChange}
              required
            />
          </div>
          {forgot && (
            <Link to="/forgot" className="forgot-link">
              {forgot}
            </Link>
          )}
        </div>
      </div>
    );
  }
);


export default Input;
