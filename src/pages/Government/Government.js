import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./government.scss";
import Img from "../../assets/images/govt_1.png";
import Img2 from "../../assets/images/govt_2.png";
import Img3 from "../../assets/images/govt_3.png";
import Img4 from "../../assets/images/govt_4.png";

function Government() {
  return (
    <>
      <div className="col-md-12 govt-container ">
        <center>
          <div className="col-md-5">
            <small>Government</small>
            <h1>Empower Your Government Operations with educare</h1>
            <p className="col-md-10">
              good communication, streamlined HR procedures, and good financial
              management are essential in the world of government operations.
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
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-5 ">
          <h1 className="col-md-10">Streamlined HR Management</h1>
          <p className="col-md-10">
            Efficiently manage employee records, payroll, and benefits for
            government employees with our HR feature. Streamline HR processes,
            maintain accurate employee records, and ensure timely payroll
            management, fostering employee satisfaction and compliance with
            government regulations.
          </p>
        </div>
        <div className="col-md-6 offset-md-1  govt-map">
          <img className=" " src={Img3} alt="Scholar" width="100%" />
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-6  govt-map">
          <img className=" " src={Img2} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-6 offset-md-1">
          <h1 className="col-md-10 mt3">Facility Tracking</h1>
          <p className="col-md-10">
            You can easily track and manage government facilities, maintenance
            schedules, and resource allocation. Improve maintenance procedures,
            get real-time insights into facility operations, and allocate
            resources effectively.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-5 ">
          <h1 className="col-md-10 mt3">No hiccups with your finances</h1>
          <p className="col-md-10">
            Enable effective resource allocation and responsible financial
            management by streamlining financial procedures, monitoring budgets,
            and ensuring accurate expenditure management.
          </p>
        </div>
        <div className="col-md-6 offset-md-1 govt-map">
          <img className=" " src={Img} alt="Scholar" width="100%" />
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-6  govt-map">
          <img className=" " src={Img2} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-6 offset-md-1">
          <h1 className="col-md-10 mt3">Enlightening reports</h1>
          <p className="col-md-9">
            With our sophisticated Reporting function, you can create detailed
            reports on government operations, public services, and performance
            measures.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-5 ">
          <h1 className="col-md-10">Efficient Calendar Management</h1>
          <p className="col-md-10">
            Stay organized and manage government events, meetings, and public
            hearings effectively with our intuitive Calendar feature. Schedule
            events, coordinate meetings, and plan public hearings seamlessly.
          </p>
        </div>
        <div className="col-md-6 offset-md-1 govt-cal">
          <center>
            <img className=" " src={Img4} alt="Scholar" />
          </center>
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-6  govt-map">
          <img className=" " src={Img2} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-6  offset-md-1">
          <h1 className="col-md-10 mt">Better communications</h1>
          <p className="col-md-9">
            With the help of our integrated Mailbox feature, you can promote
            seamless communication between departments of the government,
            representatives, and citizens.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-7 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Transform the way you serve your constituents by empowering your
            government operations with our Government module
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

export default Government;
