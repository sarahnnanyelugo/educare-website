import React from "react";
import Tick2 from "../../../assets/images/pink-tick.svg";
import "./why-eclassroom.scss";

function WhyEClassroom() {
  return (
    <>
      {" "}
      <div className="col-md-12 flexy  why-eclassroom-container">
        <div className="col-md-4 offset-md-">
          <h1>
            Why use educare <br />
            eClassroom?
          </h1>
        </div>
        <div className="col-md-4 ">
          <ul className="list-unstyled col-md-10">
            <li className="flexy flexyM ">
              <img className="" src={Tick2} alt="Scholar" />
              Time and Cost Savings
            </li>{" "}
            <li className="flexy flexyM mt2">
              <img className="" src={Tick2} alt="Scholar" />
              Global Reach
            </li>{" "}
            <li className="flexy flexyM mt2">
              <img
                className=""
                src={Tick2}
                alt="Scholar"
                width="7%"
                height="7%"
              />
              Seamless Interaction
            </li>
            <li className="flexy flexyM mt2">
              <img
                className=""
                src={Tick2}
                alt="Scholar"
                width="7%"
                height="7%"
              />
              Improved Access to Resources
            </li>{" "}
            <li className="flexy flexyM mt2">
              <img
                className=""
                src={Tick2}
                alt="Scholar"
                width="7%"
                height="7%"
              />
              Technology Integration Skills
            </li>
          </ul>{" "}
        </div>
        <div className="col-md-4">
          <ul className="list-unstyled col-md-12">
            <li className=" ">
              <img className="" src={Tick2} alt="Scholar" />
              Simple to use and easily scalable
            </li>{" "}
            <li className=" ">
              <img className="" src={Tick2} alt="Scholar" />
              Enhanced Teacher-Student Relationships
            </li>{" "}
            <li className=" ">
              <img className="" src={Tick2} alt="Scholar" />
              Enhanced Learning Flexibility
            </li>{" "}
            <li className=" ">
              <img className="" src={Tick2} alt="Scholar" />
              Continuous Learning Opportunities
            </li>{" "}
            <li className=" ">
              <img className="" src={Tick2} alt="Scholar" />
              Environmental Impact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WhyEClassroom;
