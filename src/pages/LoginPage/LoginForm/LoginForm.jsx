import { useState } from "react";
import { FacebookButton } from "../../../components/FacebookButton/FacebookButton";
import { Password } from "../../../components/Form/Password";
import { GoogleButton } from "../../../components/GoogleButton/GoogleButton";
import "./login-form.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input"; // import "react-phone-input-2/lib/bootstrap.css";
import { LinkedInButton } from "../../../components/LinkedInButton/LinkedInButton";

function LoginForm(props) {
  const { bg } = props;
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event) => {
    setNameValue(event.target.value);
    console.log(nameValue);
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    console.log(emailValue);
  };
  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <form className="log-in-form-container">
        <h6>
          Log in to access
          <br/> your account
        </h6>{" "}
        <div className="form">
          <input
              type="text"
              name="name"
              autoComplete="new-password"
              required
              value={nameValue}
              onChange={handleChange}
              className="phone-input"
          />
          <label htmlFor="text" className="label-name">
            <span className="content-name">Email *</span>
          </label>
        </div>
        {" "}
        <div>
          {" "}
          <Password placeholder="Password"/>
        </div>
        <input
            type="checkbox"
            name="color"
            checked={isChecked}
            onChange={handleChecked}
            style={{
              marginTop: "20px",
            }}
        />
        <span
            style={{
              fontFamily: " rebondG-Medium",
              fontSize: "12px",
            }}
        >
          {" "}
          I agree to the{" "}
          <strong>
            <a href="#">Terms of Service</a>
          </strong>{" "}
          and
          <strong>
            {" "}
            <a href="#">Privacy Policy</a>.
          </strong>
        </span>
        <button className="continueButton" style={{backgroundColor: bg}}>
          Continue
        </button>
        <div className="or flexy flexyM">
          <div className="col-md-5 bodda"></div>
          <div className="col-md-2">
            <center>
              {" "}
              <p>Or</p>
            </center>
          </div>
          <div className="col-md-5 bodda"></div>
        </div>
        <center>
          <small>Sign up using</small>
        </center>
        <GoogleButton/>
        <LinkedInButton/>
        <FacebookButton/>
      </form>
    </>
  );
}

export default LoginForm;
