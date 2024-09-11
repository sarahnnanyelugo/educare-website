import React from "react";
import { Link } from "react-router-dom";
import { team } from "../../TestData";
import { Staff } from "./Staff";
import "./team.scss";
export const Team = () => {
  const management = team.filter((member) => member.cat_id === 1);
  const tech = team.filter((member) => member.cat_id === 2);
  const support = team.filter((member) => member.cat_id === 3);
  const assistant = team.filter((member) => member.cat_id === 4);

  return (
    <div>
      <div className="team-page">
        <center>
          {" "}
          <div className="col-md-5">
            {" "}
            <button>Team</button>
            <h1 style={{ color: "black" }}>Meet our Fabulous Team</h1>
            <p>
              Embark on your educare journey by either delving into our
              comprehensive video tutorials or connecting with our dedicated
              onboarding team for tailored support
            </p>
            <Link to={"/careers"} className="join">
              Join Us
            </Link>
            <Link to={"/contact-us"} className="call">
              Book a call
            </Link>
          </div>
        </center>
      </div>
      <h2
        className=" offset-md-1 col-md-10 staff-heading"
        style={{ color: "grey" }}
      >
        <span>MANA</span>GEMENT TEAM
      </h2>
      <div className="col-md-10 offset-md-1 row row-cols-1 row-cols-lg-4 g-2 g-lg-4">
        {" "}
        {management.map((data, index) => (
          <Staff key={index} data={data} />
        ))}
      </div>{" "}
      <br />
      <br />
      <br />
      <h2
        className=" offset-md-1 col-md-10   staff-heading"
        style={{ color: "grey" }}
      >
        <span>TECH </span>TEAM
      </h2>
      <div className="col-md-10 offset-md-1 row row-cols-1 row-cols-lg-4 g-2 g-lg-4">
        {" "}
        {tech.map((data, index) => (
          <Staff key={index} data={data} />
        ))}
      </div>{" "}
      <br />
      <br />
      <br />
      <h2
        className=" offset-md-1 col-md-10  staff-heading"
        style={{ color: "grey" }}
      >
        <span>SUPP</span>ORT TEAM
      </h2>
      <div className="col-md-10 offset-md-1 row row-cols-1 row-cols-lg-4 g-2 g-lg-4">
        {" "}
        {support.map((data, index) => (
          <Staff key={index} data={data} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <h2
        className=" offset-md-1 col-md-10  staff-heading"
        style={{ color: "grey" }}
      >
        <span>OFFI</span>CE ASSISTANTS
      </h2>
      <div className="col-md-10 offset-md-1 row row-cols-1 row-cols-lg-4 g-2 g-lg-4">
        {" "}
        {assistant.map((data, index) => (
          <Staff key={index} data={data} />
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};
