import React, { useState } from "react";
import EyeClose from "../../../assets/images/eye-close.jpg";
import EyeOpen from "../../../assets/images/eye-open.svg";

export const Password = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-input form ">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
        placeholder={props.placeholder}
        autocomplete="new-password"
      />

      <span onClick={toggleShowPassword}>
        {showPassword ? (
          <img className="" src={EyeClose} alt="Scholar" width="5%" />
        ) : (
          <img className="" src={EyeOpen} alt="Scholar" width="4%" />
        )}
      </span>
    </div>
  );
};
