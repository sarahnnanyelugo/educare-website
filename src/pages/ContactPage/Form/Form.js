import { useState } from "react";
import "./form.scss";
import { Password } from "./Password";
import ShowAndHidePassword from "./Password";
import { CountrySelect } from "./CountrySelect";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input"; // import "react-phone-input-2/lib/bootstrap.css";
import { Link } from "react-router-dom";
function Form(props) {
  const [value, setValue] = useState();
  const { bg, text, body } = props;
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [textarea, setTextarea] = useState();
  // "The content of a textarea goes in the value attribute"
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
  const handleMessage = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <>
      <div className="contact-form-container" style={{ backgroundColor: body }}>
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
            <p class="content-name">Your Name *</p>
          </label>
        </div>{" "}
        <div class="form">
          <input
            type="email"
            name="email"
            autocomplete="new-password"
            required
            value={emailValue}
            onChange={handleEmailChange}
          />
          <label for="text" class="label-name">
            <p class="content-name">Your Email *</p>
          </label>
        </div>{" "}
        <div className=" formyphone ">
          <PhoneInput
            value={value}
            onChange={setValue}
            placeholder="Mobile number"
          />
          {/* <input
            type="tel"
            name="number"
            required
            value={emailValue}
            onChange={handleEmailChange}
          /> */}
          <label for="text" class="label-name">
            {/* <p class="content-name">Mobile number*</p> */}
          </label>
        </div>{" "}
        <div className=" formtext">
          <textarea
            value={textarea}
            onChange={handleMessage}
            rows={5}
            cols={5}
          />

          <label for="textarea" class="label-name" style={{ top: "-80px" }}>
            <p class="content-name2">Type your message here *</p>
          </label>
        </div>
        <input
          type="checkbox"
          name="color"
          checked={isChecked}
          onChange={handleChecked}
          style={{
            marginTop: "40px",
          }}
        />{" "}
        <span
          style={{
            fontFamily: " rebondG-Medium",
            fontSize: "12px",
            marginTop: "90px",
          }}
        >
          {" "}
          I agree to the{" "}
          <Link to={"/terms"}>
            {" "}
            <strong>Terms of Service</strong>
          </Link>{" "}
          and
          <Link to={"/terms"}>
            <strong> Privacy Policy.</strong>
          </Link>
        </span>
        <div>
          {" "}
          <button className="submitButton" style={{ backgroundColor: bg }}>
            {text}
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
