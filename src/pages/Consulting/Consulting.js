import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./consulting.scss";
import Img2 from "../../assets/images/consult-im2.png";
import Img3 from "../../assets/images/consult-img3.png";
import Img4 from "../../assets/images/consult-img4.png";

function Consulting() {
  return (
    <>
      <div className="col-md-12 consulting-container ">
        <center>
          <div className="col-md-5">
            <small>Consulting</small>
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
      <div className="col-md-12 consult-divs ">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-5 mt ">
            <h1 className="col-md-10">
              Informative Reporting and Deliverables
            </h1>
            <p className="col-md-11">
              Leverage powerful analytics to provide valuable insights, showcase
              expertise, and drive client satisfaction. Generate comprehensive
              reports, deliverables, and metrics with our advanced Reporting
              feature.
            </p>
          </div>
          <div className="col-md-7">
            {" "}
            <img
              className="col-md-12 col-12"
              src={Img2}
              alt="Scholar"
              width="100%"
            />{" "}
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12 consult-divs2 ">
        <div className="col-md-10 offset-md-1  flexy">
          <div className="col-md-7">&nbsp;</div>
          <div className="col-md-5 ">
            <h1 className="col-md-10">Seamless Communication</h1>
            <p className="col-md-11">
              Leverage on our integrated Mailbox service to provide easy
              communication between consultants and clients. Encourage
              collaboration, provide project changes, and provide immediate
              client support. Establish a safe and effective communication
              channel to promote effective teamwork and customer satisfaction.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12 consult-divs2 ">
        <div className="col-md-10 offset-md-1  flexy">
          <div className="col-md-5 ">
            <h1 className="col-md-10">Progress Updates and Recommendations</h1>
            <p className="col-md-11">
              Enable consultants to provide progress updates and recommendations
              to clients through our Weekly Remarks feature. Empower your
              consultants to share valuable insights, project updates, and
              recommendations for enhanced project outcomes. Foster strong
              client relationships and deliver exceptional consulting services
              with regular progress updates.
            </p>
          </div>
          <div className="col-md-7">&nbsp;</div>
        </div>
      </div>{" "}
      <div className="col-md-12 consult-divs2 ">
        <div className="col-md-10 offset-md-1  flexy">
          <div className="col-md-6">
            {" "}
            <img
              className="col-md-12 col-12"
              src={Img3}
              alt="Scholar"
              width="100%"
            />{" "}
          </div>
          <div className="col-md-5 offset-md-1 mt6">
            <h1 className="col-md-10">Efficient Calendar Management</h1>
            <p className="col-md-11">
              Stay organized and manage consulting engagements effectively with
              our intuitive Calendar feature. Schedule client meetings, project
              milestones, and consulting engagements effortlessly. Coordinate
              activities, track project timelines, and ensure seamless
              communication between consultants and clients.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 consult-divs2 ">
        <div className="col-md-10 offset-md-1  flexy">
          <div className="col-md-5 mt5">
            <h1 className="col-md-10">Effortless Financial Management</h1>
            <p className="col-md-11">
              Take control of your consulting finances with ease. Our Consulting
              Services module enables you to manage financial transactions,
              project billing, and client invoicing efficiently. Streamline
              financial processes, accurately track project expenses, and ensure
              prompt client invoicing, empowering your consultants to focus on
              delivering exceptional services.
            </p>
          </div>
          <div className="col-md-6 offset-md-1">
            {" "}
            <img
              className="col-md-12 col-12"
              src={Img4}
              alt="Scholar"
              width="100%"
            />{" "}
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-7 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Be a part of the community of thriving consultants who use our
            platform to simplify financial administration, produce informative
            reports, and promote efficient teamwork for top-notch client
            experiences in the ever-changing consulting industry.
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

export default Consulting;
