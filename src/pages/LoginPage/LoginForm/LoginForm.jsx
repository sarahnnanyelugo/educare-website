import { useState } from "react";
import { FacebookButton } from "../../../components/FacebookButton/FacebookButton";
import { Password } from "../../../components/Form/Password";
import { GoogleButton } from "../../../components/GoogleButton/GoogleButton";
import "./login-form.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input"; // import "react-phone-input-2/lib/bootstrap.css";
import { LinkedInButton } from "../../../components/LinkedInButton/LinkedInButton";
import { Link } from "react-router-dom";

function LoginForm(props) {
  const [value, setValue] = useState();
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
      <form className=" log-in-form-container">
        <h6>
          Sign up and deploy your business in <br />
          seconds.
        </h6>{" "}
        <div class="form">
          <input
            type="text"
            name="name"
            autocomplete="new-password"
            required
            value={nameValue}
            onChange={handleChange}
          />
          <label for="text" class="label-name">
            <span class="content-name">Full Name *</span>
          </label>
        </div>{" "}
        <div class="form">
          <input
            type="text"
            name="name"
            autocomplete="new-password"
            required
            value={nameValue}
            onChange={handleChange}
          />
          <label for="text" class="label-name">
            <span class="content-name">Organisation *</span>
          </label>
        </div>{" "}
        <div class="form">
          <input
            type="text"
            name="name"
            autocomplete="new-password"
            required
            value={nameValue}
            onChange={handleChange}
          />
          <label for="text" class="label-name">
            <span class="content-name">Email *</span>
          </label>
        </div>{" "}
        <div class="form">
          <PhoneInput
            placeholder="Phone number *"
            value={value}
            onChange={setValue}
          />
          {/* <label for="text" class="label-name">
            <span class="content-name">Mobile Number *</span>
          </label> */}
        </div>{" "}
        <div>
          {" "}
          <Password placeholder="Password" />
          <Password placeholder="Confirm Password" />
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
          I agree to educare{" "}
          <strong>
            <Link to={"/terms"}>Terms of Service</Link>
          </strong>{" "}
          and
          <strong>
            {" "}
            <Link to={"/privacy"}>Privacy Policy</Link>.
          </strong>
        </span>
        <button className="continueButton" style={{ backgroundColor: bg }}>
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
        <GoogleButton />
        <LinkedInButton />
        <FacebookButton />
      </form>
    </>
  );
}

export default LoginForm;
