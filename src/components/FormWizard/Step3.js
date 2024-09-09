import React, { useState } from "react";
import { CountrySelect } from "../../pages/ContactPage/Form/CountrySelect";
import PhoneInput from "react-phone-number-input";
// import "react-phone-input-2/lib/bootstrap.css";

function Step3(props) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [businessName, setBusinessName] = useState("");

  const [value, setValue] = useState();
  const handleChange = (event) => {
    setNameValue(event.target.value);
    console.log(nameValue);
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
    console.log(emailValue);
  };
  const handleBusinessNameChange = (event) => {
    setEmailValue(event.target.value);
    console.log(businessName);
  };

  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
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
          <span class="content-name">Organisation Name *</span>
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
          <span class="content-name">Email *</span>
        </label>
      </div>{" "}
      <div class="form">
        <input
          type="text"
          name="businessName"
          autocomplete="new-password"
          required
          value={businessName}
          onChange={handleBusinessNameChange}
        />
        <label for="text" class="label-name">
          <span class="content-name">Business name*</span>
        </label>
      </div>{" "}
      <br />
      <CountrySelect />
      <div class="form">
        <PhoneInput
          placeholder="Phone number *"
          value={value}
          onChange={setValue}
        />
      </div>{" "}
      <br />
      <select name="cars" id="cars">
        <option value="volvo">How did you hear about us?</option>
        <option value="School">Search engine (Google, Bing, etc.)</option>
        <option value="audi">Recommended by a colleague or peer</option>
        <option value="audi">Recommended by a student</option>
        <option value="audi">Recommended by a friend or family</option>
        <option value="audi">Social media (Twitter, Facebook, etc.)</option>
        <option value="audi">Event or conference</option>
        <option value="audi">Blog or article</option>
        <option value="audi">Other</option>
      </select>
      <button className="wizard-btn col-md-12">Submit</button>
    </React.Fragment>
  );
}

export default Step3;
