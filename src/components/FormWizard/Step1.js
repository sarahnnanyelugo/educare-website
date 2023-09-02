import React from "react";
import { CountrySelect } from "../Form/CountrySelect";

function Step1(props) {
    return (
        <div  style={{display: props.currentStep !== 1?'none':''}}>
            <h6 className="mb3">Enter Organization Info Below!</h6>
            <div className="form-group mb-3">
                <label className="mb-2" htmlFor="organisation_type">Select type of organisation *</label>
                <select name="organisation_type" defaultValue={props.formValue.organisation_type}
                        id="organisation_type" onChange={props.handleInputChange}
                        placeholder="Select type of organisation *">
                    {/*<option value="">Select type of organisation *</option>*/}
                    <option value="Business">Business</option>
                    <option value="School">School</option>
                    <option value="Government">Government</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <div className="form-group mb-3">
                <label className="mb-2" htmlFor="client">Organization name*</label>
                <input type="text" name="client" id='client'
                       required onChange={props.handleInputChange} className="form-control"
                       placeholder="eg. Educare"
                       defaultValue={props.formValue.client}/>
                {/*<label htmlFor="organisation_name" className="label-name"><span className="content-name">Organization name*</span></label>*/}
            </div>
            <div className="form-group mb-3">
                <label className="mb-2" htmlFor="user_role">Select your role *</label>
                <select name="user_role" id="user_role" required
                        onChange={props.handleInputChange}
                        defaultValue={props.formValue.user_role}>
                    <option value="IT Administrator">IT Administrator</option>
                    <option value="Director">Director</option>
                    <option value="HR Manager">HR Manager</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group mb-3">
                <label className="mb-2" htmlFor="number_of_staffs">Number of Staffs *</label>
                <select name="number_of_staffs" id="number_of_staffs"
                        onChange={props.handleInputChange}
                        defaultValue={props.formValue.number_of_staffs}>
                    <option value="1 - 50">1 - 50</option>
                    <option value="51- 200">51- 200</option>
                    <option value="201 - 500">201 - 500</option>
                    <option value="1000+">1000+</option>
                </select>
            </div>
        </div>
    );
}

export default Step1;
