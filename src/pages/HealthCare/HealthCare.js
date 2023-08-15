import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./health-care.scss";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave.svg";
import Aisa from "../../assets/images/aisa.svg";
import Img1 from "../../assets/images/hc1.png";
import Img2 from "../../assets/images/hc2.png";
import Img3 from "../../assets/images/hc3.png";
import Img4 from "../../assets/images/hc-dashboard2.png";
function HealthCare() {
  return (
    <>
      <div className="col-md-12 healthcare-div">
        <center>
          <div className="col-md-6  enhanced">
            <h1>Healthcare</h1>

            <p className="col-md-10">
              Educare has elevated Healthcare Establishments through
              comprehensive solutions. Our versatile software suite has
              empowered thousands of healthcare establishments to navigate their
              complex operations with finesse and ease.
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
      {/* <center> */}
      <div className="col-md-4 healthcare-partners flexy flexyM offset-md-4">
        {" "}
        <h5 style={{ flexGrow: 1 }}>We are trusted by</h5>
        <p>Upsillon Care Hospital</p>
      </div>
      {/* </center> */}
      <div className="col-md-10 offset-md-1 md-records">
        <center>
          <div className="col-md-5">
            <h2>Streamlined Medical Records</h2>
            <p>
              Say goodbye to cumbersome paperwork and endless filing. Our
              healthcare module enables healthcare professionals to securely
              store and access patient records with just a few clicks. From
              medical history and test results to prescriptions and treatment
              plans, all information is conveniently organized and readily
              available whenever and wherever it’s needed.
            </p>
          </div>
        </center>
        <div className="col-md-12 flexy ">
          <div className="col-md-3 offset-md-1 mt4">
            {" "}
            <img className="" src={Img1} alt="Scholar" width="100%" />
          </div>
          <div className="col-md-4 mt4">
            {" "}
            <img className="" src={Img2} alt="Scholar" width="100%" />
          </div>
          <div className="col-md-3">
            {" "}
            <img className="" src={Img3} alt="Scholar" width="100%" />
          </div>
        </div>
      </div>
      <div className=" col-md-12  flexy  hc-advantages">
        <div className="col-md-4 offset-md-1">
          <h2 className="col-md-10">Appointment Scheduling Made Simple</h2>
          <p>
            Gone are the days of manual appointment booking and scheduling
            conflicts. Our intuitive calendar feature allows healthcare
            providers to effortlessly manage appointments, ensuring optimal time
            management and patient convenience. Patients can book appointments
            online, receive automated reminders, and easily reschedule if
            needed, reducing no-shows and maximizing efficiency.
          </p>
          <GetStartedForm
            text=" Check it out"
            bg="#0098DA"
            cls="gsmrep"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-dark"
          />
        </div>{" "}
        <div className="col-md-4 offset-md-2">
          <h2 className="col-md-10">Seamless Communication</h2>
          <p>
            Collaboration and effective communication are at the core of
            exceptional patient care. Our integrated mailbox feature facilitates
            seamless communication between healthcare professionals, allowing
            secure and confidential exchange of messages, test results, and
            vital information. Stay connected, coordinate care, and provide
            timely updates for enhanced patient outcomes.
          </p>
          <GetStartedForm
            text="Check it out"
            bg="#0098DA"
            cls="gsmrep"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-dark"
          />
        </div>
      </div>
      <div className="col-md-10 offset-md-1 md-report">
        <center>
          <div className="col-md-7">
            <h2>Medical Reporting at Your Fingertips</h2>
            <p>
              Generating detailed medical reports has never been easier. Our
              healthcare module equips healthcare providers with robust
              reporting tools, enabling the creation of comprehensive medical
              reports, documentation, and analytics. From patient progress
              reports to referral letters, our reporting feature ensures
              accurate and timely information sharing for informed
              decision-making.
            </p>
            <img className="" src={Img4} alt="Scholar" width="100%" />
          </div>
        </center>
      </div>
      <div className="col-md-10 offset-md-1 report-get-started flexy md-rep">
        <div className="col-md-6 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Experience the power of our medicals module and unlock a new era of
            medical management efficiency. Join the growing community of
            healthcare professionals who trust our platform to deliver
            exceptional care, streamline operations, and prioritize patient
            well-being.
          </p>
        </div>
        <div className="offset-md-2 mt2">
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

export default HealthCare;
