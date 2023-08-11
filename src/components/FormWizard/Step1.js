import React from "react";
import { CountrySelect } from "../Form/CountrySelect";

function Step1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="form-group">
      <h6>Enter your info below</h6>

      <select name="cars" id="cars" placeholder="eeee">
        <option value="volvo">Select type of organisation *</option>
        <option value="School">Business</option>
        <option value="audi">Government</option>
        <option value="audi">Others</option>
      </select>
    </div>
  );
}

export default Step1;
