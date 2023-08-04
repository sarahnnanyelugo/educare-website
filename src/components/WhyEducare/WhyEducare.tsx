import React from "react";
import Tick2 from "../../assets/images/purple-tick.svg";
import "./why-educare.scss";
function WhyEducare() {
  return (
    <>
      {" "}
      <div className="col-md-12 flexy mt why-educare-container">
        <div className="col-md-4 offset-md-1">
          <h1>Why choose educare for Businesses</h1>
        </div>
        <div className="col-md-4 ">
          <ul className="list-unstyled col-md-10">
            <li className="flexy flexyM ">
              <img className="" src={Tick2} alt="Scholar" />
              Refreshingly simple to use—a modern products for a modern business
            </li>{" "}
            <li className="flexy flexyM mt2">
              <img className="" src={Tick2} alt="Scholar" />
              Dedicated support for migration, deployment, and trainings.
            </li>{" "}
            <li className="flexy flexyM mt2">
              <img
                className=""
                src={Tick2}
                alt="Scholar"
                width="7%"
                height="7%"
              />
              Extensive developer platform for custom solutions and integrations{" "}
            </li>
          </ul>{" "}
        </div>
        <div className="col-md-3">
          <ul className="list-unstyled col-md-12">
            <li className=" ">
              <img className="" src={Tick2} alt="Scholar" />
              Maximum productivity with minimum use{" "}
            </li>{" "}
            <li className=" ">
              <img className="" src={Tick2} alt="Scholar" />
              Price protection–get the best deal, always{" "}
            </li>{" "}
          </ul>
        </div>
      </div>
    </>
  );
}

export default WhyEducare;
