import { Link } from "react-router-dom";
import "./input.css";

interface InputString {
  text: string;
  label: string;
  forgot: string;
  width?: string;
}

const Input = ({ label, text, forgot, width = "423.58px" }: InputString) => {
  return (
    <div className="form-g" style={{ width }}>
      <div className="form-group-logininput" style={{ width }}>
        <div className="form-label-container">
          <label className="emails-login">{label}</label>
          <input type="email" className="emaillogin" placeholder={text} />
        </div>{" "}
        <Link to="/forgot" className="forgot-link">
          {forgot}
        </Link>
      </div>
    </div>
  );
};

export default Input;
