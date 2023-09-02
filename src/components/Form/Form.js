import React, {useEffect, useState} from "react";
import "./form.scss";
import { Password } from "./Password";
import ShowAndHidePassword from "./Password";
import { CountrySelect } from "./CountrySelect";
import PhoneInput from "react-phone-number-input";
import {AxiosService} from "../../core/axios-service";
import {useNavigate} from "react-router";
// import "react-phone-input-2/lib/bootstrap.css";

function Form(props) {

  const { bg, text, body } = props;
  const [nameValue, setNameValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);
  const [formValue, setValue] = useState({});
  const [errors, setErrors] = useState({});
  const [currency, setCurrency] = useState('');
  const [billingDuration, setBillingDuration] = useState('');
  const [package_id, setPackageId] = useState('');
  const [category_id, setCategoryId] = useState('');
  const navigate = useNavigate();

  const handlePhoneChange = (event) => {
    formValue['phoneNumber'] = event;
    setValue((prev) => ({
      ...prev,
      ['phoneNumber']: event,
    }));
  };

  const handleChecked = (e:any) => {
    setIsChecked(!isChecked);
  };

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
    setErrors({});
    AxiosService.postRequest('auth/sign-up', inputValue2).then(
        function (resp:any) {
          if (resp?.success){
            AxiosService.notify('success', resp?.success);
            window.location = process.env.REACT_APP_CPANEL_URL+'/verify?p=' + resp.verify;
          }else{
            AxiosService.notify('error', resp?.error);
          }
          setSubmitting(false);
        },
        function (resp:any) {
          if (resp?.data?.errors){
            setErrors(resp?.data?.errors)
          }
          AxiosService.notify('error', resp?.data?.message);
          setSubmitting(false);
        }
    )
  };

  useEffect(()=>{
    let temp = AxiosService.localStorageGet('billing_currency');
    if (temp){
      setCurrency(temp);
    }

    temp = AxiosService.localStorageGet('billing_duration');
    if (temp){
      setBillingDuration(temp);
    }

    temp = AxiosService.localStorageGet('package_id');
    if (temp){
      setPackageId(temp);
    }
    temp = AxiosService.localStorageGet('category_id');
    if (temp){
      setCategoryId(temp);
    }
  }, []);

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit} style={{ backgroundColor: body }}>
        {props.formHeading && <h6 style={{ color: "black" }} className="col-md-8">
          <strong>{props.formHeading}</strong>
        </h6>}

        {category_id && <input type='hidden' name='category_id' value={category_id}/>}
        {currency && <input type='hidden' name='currency_code' value={currency}/>}
        {billingDuration && <input type='hidden' name='billing_duration' value={billingDuration}/>}
        {package_id && <input type='hidden' name='package_id' value={package_id}/>}

        <div className="form">
          <input
            type="text"
            name="name"
            required
            id='name'
            defaultValue={nameValue}
            onChange={handleInputChange}
          />
          <label htmlFor="name" className="label-name">
            <span className="content-name">Full Name *</span>
          </label>
        </div>

        <div className="form">
          <input
            type="text"
            name="organisation_name"
            required
            id='organisation_name'
            defaultValue={nameValue}
            onChange={handleInputChange}
          />
          <label htmlFor="organisation_name" className="label-name">
            <span className="content-name">Organisation Name *</span>
          </label>
        </div>

        {" "}
        <div className="form">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            defaultValue={formValue.email}
            onChange={handleInputChange}
          />
          <label htmlFor="email" className="label-name">
            <span className="content-name">Email *</span>
          </label>
        </div>{" "}
        <div className="form">
          <PhoneInput name="phoneNumber"
            placeholder="Phone number *"
            defaultValue={formValue.phoneNumber}
            onChange={handlePhoneChange}
          />
          {/* <label for="text" class="label-name">
            <span class="content-name">Mobile Number *</span>
          </label> */}
        </div>{" "}
        <div style={{ marginBottom: "20px" }}>
          {" "}
          <Password placeholder="Password" name='password' onChange={handleInputChange} />
          <Password placeholder="Confirm password" name='confirmpassword' onChange={handleInputChange} />
        </div>
        <CountrySelect />
        <input type="checkbox" name="color" checked={isChecked} onChange={handleChecked}
          style={{
            marginTop: "40px",
          }}
        />
        <span style={{
            fontFamily: " rebondG-Medium",
            color: "black",
            fontSize: "12px",
            marginTop: "90px",
          }}>
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
        <button className="overviewButton continueButton" style={{ backgroundColor: bg }}>
          {text}
        </button>
      </form>
    </>
  );
}

export default Form;
