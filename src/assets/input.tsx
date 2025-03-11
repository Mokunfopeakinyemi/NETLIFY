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
        <label className="emails-login">{label}</label>
        <div className="form-link">
          <input type="email" className="emaillogin" placeholder={text} />
          <Link to="/forgot" className="forgot-link">
            {forgot}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Input;
