import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./manufacturing.scss";
import Img from "../../assets/images/manufacturing.png";

function Manufacturing() {
  return (
    <>
      <div className="col-md-12 manufacturing-container">
        <div className="col-md-5 offset-md-1">
          <h1>Manufacturing</h1>

          <p className="col-md-10">
            Educare emerges as a game-changing solution tailored to meet the
            unique needs of production facilities. Our comprehensive software
            suite has empowered manufacturing establishments to navigate their
            intricate operations seamlessly.
          </p>
          <GetStartedForm
            text=" Get started"
            bg="#0098DA"
            cls="gsmrep"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-dark"
          />
        </div>
      </div>
      <div className="flexy">
        <div className="col-md-7">
          {" "}
          <img className=" " src={Img} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-4 manu-divs">
          <h1>Efficient Facility Management</h1>
          <p>
            With our Facility Management Module, we have taken the production
            industry to a whole new level where equipments are properly managed
            and maintained. We have successfully Streamlined facility
            operations, track equipment maintenance schedules, and allocate
            resources effectively. Educare has taken charge of optimal
            utilization of all manufacturing assets and enhanced operational
            efficiency, resulting in improved productivity and reduced downtime.
          </p>
        </div>
      </div>
      <div className="col-md-12 grad manu-divs2">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-5 mt">
            <h1>Seamless Financial Management</h1>
            <p className="col-md-11">
              At educare we have handed manufacturing parastatals the ablity to
              take control of their financial processes with ease. This we
              achieved through our Finance module equiped to handle financial
              transactions, budgeting, and cost management.
            </p>
          </div>
          <div className="col-md-5 offset-md-2 mt">
            <h1 className="col-md-11">Insightful Reports and Analytics</h1>
            <p className="col-md-11">
              Our Insightful Reports and Analytics feature has given
              manufacturing companies the key to Unlock the power of data. This
              has empowered these establishments the ability to generate
              detailed production reports, quality control metrics, and
              operational analytics.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12  manu-divs2">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-5 mtt">
            <h1>Streamlined Production Scheduling</h1>
            <p className="col-md-11">
              With educare calendar module, manufacturing companies are able to
              efficiently schedule production processes, machine maintenance,
              and work shifts. With this feature, they seamlessly plan and
              manage production timelines, allocate resources, streamline
              workflows, optimize production capacity, meet customer demands,
              and ensure timely delivery of high-quality products.
            </p>
          </div>
          <div className="col-md-5 offset-md-2 mtt">
            <h1 className="col-md-11">Professional HR Management</h1>
            <p className="col-md-11">
              With our HRM module, factories are able to optimize workforce
              management, ensuring skilled staff are allocated appropriately for
              seamless production cycles.
            </p>
          </div>
        </div>
      </div>
      <center>
        <div className="col-md-8 unknown"></div>
      </center>
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-5 offset-md-1">
          <h2>Get started with us</h2>
          <p>Get ready to discover a better experience.</p>
        </div>
        <div className="offset-md-4 mt3">
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

export default Manufacturing;
