import head from "../signup/head.png";
import "./Signup.css";
import Button from "../../button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="containsignup">
      <div className="contup">
        <img className="head" src={head} alt="Signup Header" />
        <div className="contcalm">
          <p className="calm">
            Calm and productive email experience for your team
          </p>
        </div>
        <div className="containemail">
          <div className="conteem">
            <div className="form-group2">
              <p className="miniemail">Email</p>
              <input
                type="password"
                className="emaillog"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </div>
        <div className="contconti">
          <Link to="/">
            <Button text="Continue" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
