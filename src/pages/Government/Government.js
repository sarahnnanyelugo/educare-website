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
            <h1>Government</h1>

            <p className="col-md-10">
              In public service and governance, efficiency, transparency, and
              precision are paramount, and educare emerges as a transformative
              solution tailored to meet the unique needs of government entities.
              With our versatile software suite, we have gained trust of
              numerouse governments across the various states in the country and
              therefore has empowered them to navigate their multifaceted
              responsibilities with finesse and ease.
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
            With our HRM module, government agencies now optimize staffing and
            workforce management, ensuring that qualified personnel are
            strategically assigned to critical tasks that serve the public
            interest.
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
            Our Facility Management feature has ensured utmost consistency and
            efficiency in maintaining public infrastructure, ensuring it's
            safety and functionality for citizens.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-5 ">
          <h1 className="col-md-10 mt3">No hiccups with your finances</h1>
          <p className="col-md-10">
            Through our Finance module, governments can manage budgets, allocate
            resources wisely, and maintain accountability to taxpayers.
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
            The Daily Reporting and Analytics tools facilitate real-time
            insights, enabling data-driven decision-making for enhanced citizen
            services and operational efficiency.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-5 ">
          <h1 className="col-md-10">Efficient Calendar Management</h1>
          <p className="col-md-10">
            The government agencies have also been empowered with educare
            Calendar Module which ensures organized scheduling for public
            events, meetings, and citizen engagements.
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
            With the help of our integrated Mailbox feature, there is now an
            improved and seamless communication between departments of the
            government, representatives, and citizens.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-7 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Transform the way you serve your constituents by equipping
            government operations with educare powerful operational tools
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
