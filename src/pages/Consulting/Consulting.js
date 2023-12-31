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
            <h1>Consulting</h1>

            <p className="col-md-10">
              Currently, Consulting Services around the world have keyed into
              the educare advantage. From seamlessly managing finances,
              generating insightful reports to fostering effective
              collaboration, educare has revolutionized the entire workflow.
              With our intuitive interface and robust features, consultants have
              been empowered to take consulting services to new heights.
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
              Consultants now leverage on powerful analytics to provide valuable
              insights, showcase expertise, and drive client satisfaction.
              Generate comprehensive reports, deliverables, and metrics with our
              advanced Reporting feature.
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
              Our integrated Mailbox services has efficiently fostered easy
              communication between consultants and clients. This has encouraged
              collaboration, and ensured immediate client support as well as
              established a safe and effective communication channel to promote
              effective teamwork and customer satisfaction.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12 consult-divs2 ">
        <div className="col-md-10 offset-md-1  flexy">
          <div className="col-md-5 ">
            <h1 className="col-md-10">Progress Updates and Recommendations</h1>
            <p className="col-md-11">
              We have equally enabled consultants to provide progress updates
              and recommendations to clients through our Weekly Remarks feature.
              With this powerful tool, Consultants can share valuable insights,
              project updates, and recommendations for enhanced project
              outcomes. This has fostered strong client relationships and
              delivered exceptional consulting services with regular progress
              updates.
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
              Organizing work schedules and appointments have never had it
              better. educare Calendar platform has redefined consulting
              engagements paving way to proper scheduling of client meetings,
              coordinated activities, seamless communication between consultants
              and clients and accurate tracking of project timelines.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-12 consult-divs2 ">
        <div className="col-md-10 offset-md-1  flexy">
          <div className="col-md-5 mt5">
            <h1 className="col-md-10">Effortless Financial Management</h1>
            <p className="col-md-11">
              The need to take control of your finances in your business can
              never be over emphasized. This, educare has brought forward to
              Consulting Services around the world. Our smart, intuitive and
              user-friendly finance platform has empowered Consultants to manage
              financial transactions, project billing, and client invoicing
              efficiently. This has successfully streamlined financial
              processes, and ensured prompt client invoicing, empowering
              consultants to focus on delivering exceptional services.
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
