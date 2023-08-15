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
            <small>Energy & Utilities</small>
            <h1>
              Effortless Financial Management, Reporting, and Collaboration
            </h1>
            <p className="col-md-10">
              Revolutionize your consulting services with our comprehensive
              module. Seamlessly manage finances, generate insightful reports,
              and foster effective collaboration. Our intuitive interface and
              robust features empower consultants and clients for exceptional
              project experiences.
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
            <h1 className="col-md-10 mt7">Easily manage your finances</h1>
            <p className="col-md-10">
              Take dominion of your energy and utility finances with ease. Our
              Energy & Utilities module enables you to manage financial
              transactions, billing, and payments efficiently.
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
          <h1 className="col-md-6 mt">Smoother facility management</h1>
          <p className="col-md-10">
            Enhance operational efficiency, minimize downtime, and maximize the
            performance of your energy infrastructure.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs">
        <div className="col-md-5 mt">
          <h1 className="col-md-10 mt7">Be on time for activities</h1>
          <p className="col-md-11">
            Schedule maintenance activities, energy audits, and equipment
            inspections effortlessly. Coordinate resources, plan maintenance
            schedules effectively, and ensure optimal performance of your energy
            infrastructure.
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
            Leverage powerful analytics capabilities to gain valuable insights
            into energy usage patterns, identify areas for optimization, and
            track sustainability goals. Communicate your environmental impact
            and showcase your commitment to sustainability.
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
            Experience the power of our Energy & Utilities module, and deliver
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
