import React from "react";

function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group">
      <h6>Enter your info below</h6>
      <select name="cars" id="cars">
        <option value="volvo">Select a role type *</option>
        <option value="School">IT Administrator</option>
        <option value="audi">Director</option>
        <option value="audi">HR Manager</option>
        <option value="audi">Other</option>
      </select>
      <br />
      <br />
      <select name="cars" id="cars">
        <option value="volvo">Number of</option>
        <option value="School">1 - 50</option>
        <option value="audi">51- 200</option>
        <option value="audi">201 - 500</option>
        <option value="audi">1000+</option>
      </select>
    </div>
  );
}

export default Step2;
