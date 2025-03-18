import head from "../signup/head.png";
import "./Signup.css";
import Button from "../../button";
import { Link } from "react-router-dom";
import Input from "../../assets/input";

const Signup = () => {
  return (
    <div className="containsignup">
      <div className="contup">
        <img className="head-cont" src={head} alt="Signup Header" />
        <div className="contcalm">
          <p className="calm">
            Calm and productive email experience for your team
          </p>
        </div>
        <div className="containemail">
          <div className="conteem">
            <div className="form-group2">
            <Input label="Email" text="Enter email address" forgot="" />
            </div>
          </div>
        </div>
        <div className="contconti">
          <Link to="/last">
            <Button text="Continue" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
