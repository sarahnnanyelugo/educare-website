import React, {useState} from "react";
import {CountrySelect} from "../../pages/ContactPage/Form/CountrySelect";
import PhoneInput from "react-phone-number-input";

function Step2(props) {
    const [value, setValue] = useState();

    return (
        <div style={{display: props.currentStep !== 2?'none':''}}>
            <h6 className="mb3">Enter Your Contact Info Below!</h6>
            <div className="form mb-1">
                <input type="text" name="full_name"
                       required onChange={props.handleInputChange}
                       defaultValue={props.formValue.full_name}/>
                <label htmlFor="text" className="label-name">
                    <span className="content-name">Full Name *</span>
                </label>
            </div>
            <div className="form mb-1">
                <input type="email" name="email"
                       required onChange={props.handleInputChange}
                       defaultValue={props.formValue.email}/>
                <label htmlFor="text" className="label-name">
                    <span className="content-name">Email *</span>
                </label>
            </div>
            {" "}
            <br/>
            <CountrySelect name='country_code'/>

            <div className="form mb-3">
                <PhoneInput placeholder="Phone number *"
                            value={value}
                            name='phone'
                            onChange={setValue}/>
            </div>

            <div className="form-group mb-3">
                <label className="mb-2" htmlFor="how_did_you_hear_about_us">How did you hear about us?</label>
                <select name="how_did_you_hear_about_us"
                        id="how_did_you_hear_about_us"
                        onChange={props.handleInputChange}
                        defaultValue={props.formValue.how_did_you_hear_about_us}>
                    <option value="Search engine (Google, Bing, etc.)">Search engine (Google, Bing, etc.)</option>
                    <option value="Recommended by a colleague or peer">Recommended by a colleague or peer</option>
                    <option value="Recommended by a student">Recommended by a student</option>
                    <option value="Recommended by a friend or family">Recommended by a friend or family</option>
                    <option value="Social media (Twitter, Facebook, etc.)">Social media (Twitter, Facebook, etc.)
                    </option>
                    <option value="Event or conference">Event or conference</option>
                    <option value="Blog or article">Blog or article</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </div>
    );
}

export default Step2;
