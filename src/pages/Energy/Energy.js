import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./energy.scss";
import Img1 from "../../assets/images/energy-com.png";
import Img2 from "../../assets/images/energy-report.png";
import Img5 from "../../assets/images/energy-fac.png";
import Img3 from "../../assets/images/energy-coin.png";
import Img4 from "../../assets/images/govt_4.png";

function Energy() {
  return (
    <>
      <div className="col-md-12 energy-container ">
        <center>
          <div className="col-md-5 ">
            <h1>Energy & Utilities</h1>

            <p className="col-md-10">
              At educare, we understand the dynamic landscape of energy and
              utility companies, where efficient operations are paramount. We
              take pride in the fact that educare ERP has proven to be an
              invaluable asset for such enterprises, streamlining their complex
              workflows and ensuring optimal staffing levels for the critical
              tasks that keep the lights on.
            </p>
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmrep"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </div>
        </center>
      </div>
      <div className="col-md-12 div-one-energy">
        <div className="col-md-10 offset-md-1 flexy govt-divs">
          <div className="col-md-5 ">
            <h1 className="col-md-10 mt7"> We easily manage your finances</h1>
            <p className="col-md-10">
              The Finance platform simplifies financial tracking, enabling
              accurate budgeting and expense management, essential in the highly
              regulated energy sector.
            </p>
          </div>
          <div className="col-md-7  mt ">
            <img className=" " src={Img3} alt="Scholar" width="100%" />
          </div>
        </div>{" "}
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs">
        <div className="col-md-6  mt energy-dashboard">
          <img className=" " src={Img5} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-6 mt offset-md-1">
          <h1 className="col-md-9 mt">
            We ensure Smoother facility management
          </h1>
          <p className="col-md-10">
            Our Facility Management platform aids in maintaining and optimizing
            the vast infrastructure that powers communities, ensuring smooth
            operations and minimizing downtime.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs">
        <div className="col-md-5 mt">
          <h1 className="col-md-10 mt7">Be on time for activities</h1>
          <p className="col-md-11">
            Our Calendar platform keeps teams synchronized and organized, vital
            for time-sensitive tasks such as maintenance scheduling and outage
            management.
          </p>
        </div>
        <div className="col-md-6 offset-md-1 mt govt-cal">
          <center>
            <img className=" " src={Img4} alt="Scholar" />
          </center>
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 flexy govt-divs">
        <div className="col-md-6 mt">
          <img className=" " src={Img1} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-5 mt  offset-md-1 ">
          <h1 className="col-md-10 mt7">Improved communication</h1>
          <p className="col-md-10">
            Foster strong relationships, resolve issues promptly, and ensure
            exceptional customer satisfaction through effective communication
            channels.
          </p>
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 flexy govt-divs">
        <div className="col-md-5 mt">
          <h1 className="col-md-10 mt">Informative Reporting</h1>
          <p className="col-md-11">
            Daily Reporting ensures that vital operational data is captured and
            shared seamlessly, facilitating quick decision-making.
          </p>
        </div>
        <div className="col-md-6  mt   offset-md-1 inform-bg">
          <center>
            <img className=" " src={Img2} alt="Scholar" width="100%" />
          </center>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-7 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Experience the power of our operational tools, and deliver
            exceptional service in the ever-evolving energy and utilities
            landscape.
          </p>
        </div>
        <div className="offset-md-2 mt3">
          <GetStartedForm
            text=" Get started"
            bg="#0098DA"
            cls="gsmrep"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-dark"
          />
        </div>
      </div>
    </>
  );
}

export default Energy;
