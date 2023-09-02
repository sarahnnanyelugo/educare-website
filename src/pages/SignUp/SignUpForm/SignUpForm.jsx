import React, { useState } from "react";
import { FacebookButton } from "../../../components/FacebookButton/FacebookButton";
import { Password } from "../../../components/Form/Password";
import { GoogleButton } from "../../../components/GoogleButton/GoogleButton";
import { LinkedInButton } from "../../../components/LinkedInButton/LinkedInButton";
import "./sign-up-form.scss";
import PhoneInput from "react-phone-number-input";
import Form from "../../../components/Form/Form";
function SignUpForm(props) {
  const { bg } = props;

  return (
    <>
      <div className="log-in-form-container">
        <h6>
          Sign up and deploy your business in <br/>
          seconds.
        </h6>

        <Form text="Continue" bg={bg} />

        {/*<div className="or flexy flexyM">*/}
        {/*  <div className="col-md-5 bodda"/>*/}
        {/*  <div className="col-md-2 text-center">*/}
        {/*    <p>Or</p>*/}
        {/*  </div>*/}
        {/*  <div className="col-md-5 bodda"/>*/}
        {/*</div>*/}
        {/*<div className='text-center mb-2'>*/}
        {/*  <small>Sign up using</small>*/}
        {/*</div>*/}
        {/*<GoogleButton/>*/}
        {/*<LinkedInButton/>*/}
        {/*<FacebookButton/>*/}
      </div>
    </>
  );
}

export default SignUpForm;
