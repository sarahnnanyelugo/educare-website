import React, { useState } from "react";
import { CountrySelect } from "../../pages/ContactPage/Form/CountrySelect";
import PhoneInput from "react-phone-number-input"; // import "react-phone-input-2/lib/bootstrap.css";

function Step3(props) {
    const [req, setReq] = useState("");

    const handleInputChange = (e:any) =>{
        setReq(e.target.value)
    };
    return (
        <div style={{display: props.currentStep !== 3?'none':''}}>
            <h6 className="mb4">Enter Your Message Below</h6>
            <div className="form-group mb-3">
                <label className="mb-2" htmlFor="subject">Subject</label>
                <input className="form-control" name="subject" id="subject" required onChange={props.handleInputChange}
                       defaultValue={props.formValue.subject}/>
            </div>
            <div className="form-group mb-3">
                <label className="mb-2" htmlFor="request">Message</label>
                <textarea className="form-control" id="request" cols="30" rows="10" required
                          onChange={handleInputChange} />
                <input type="hidden" name="request" value={req}/>
            </div>

            <button className="wizard-btn col-md-12">Submit</button>
        </div>
    );
}

export default Step3;
