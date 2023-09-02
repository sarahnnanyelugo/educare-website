import React, {Component, useState} from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./master-form.scss";
import {AxiosService} from "../../core/axios-service";
function  MasterForm (props) {
  const [formValue, setValue] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  let [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e:any) =>{
    const { name, value } = e.target;
    formValue[name] = value;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any)=>{
    e.preventDefault();
    const inputValue2 = AxiosService.serialize(e.target);
    let url = "";
    setSubmitting(true);
    // setErrors({});
    AxiosService.postRequest('auth/book/contact/us', inputValue2).then(
        function (resp:any) {
          if (resp?.success){
            AxiosService.notify('success', resp?.success);
          }else{
            AxiosService.notify('error', resp?.error);
          }
          setSubmitting(false);
          e.target.reset();
          setCurrentStep(1)
        },
        function (resp:any) {
          AxiosService.notify('error', resp?.data?.message);
          // if (resp?.data?.errors){
          //   setErrors(resp?.data?.errors)
          // }
          setSubmitting(false);
        }
    )
  };

  const _next = () => {
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    setCurrentStep(currentStep);
  };

  const _prev = () => {
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setCurrentStep(currentStep);
  };

  const previousButton = () =>{
    if (currentStep !== 1) {
      return (
        <button className="prev-btn" type="button" onClick={_prev}>
          <i class="icofont-rounded-left"/> Previous
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button
          className="wizard-submit-btn col-md-12"
          type="button"
          onClick={_next}>
          Next
        </button>
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className=" wizard-form-container">
        {previousButton()}
        <Step1
          currentStep={currentStep}
          formValue={formValue}
          handleChange={handleInputChange} />
        <Step2
          currentStep={currentStep}
          formValue={formValue}
          handleChange={handleInputChange}
        />
        <Step3 currentStep={currentStep}
          formValue={formValue}
          handleChange={handleInputChange}
        />
        {nextButton()}
      </form>
    </React.Fragment>
  );
}

export default MasterForm;
