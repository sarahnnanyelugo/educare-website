import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./manufacturing.scss";
import Img from "../../assets/images/manufacturing.png";

function Manufacturing() {
  return (
    <>
      <div className="col-md-12 manufacturing-container">
        <div className="col-md-5 offset-md-1">
          <small>Manufacturing</small>
          <h1>Streamline, Optimize, and Accelerate Your Production Process</h1>
          <p className="col-md-10">
            Efficiency, precision, and agility are crucial in the competitive
            realm of manufacturing. Our all-inclusive Manufacturing module is
            specifically crafted to equip your business with state-of-the-art
            tools and capabilities, transforming your production process and
            propelling you towards operational excellence.
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
            Manage your production facilities, equipment maintenance, and
            resource allocation efficiently with our Facility Management
            feature. Streamline facility operations, track equipment maintenance
            schedules, and allocate resources effectively. Ensure optimal
            utilization of your manufacturing assets and enhance operational
            efficiency, resulting in improved productivity and reduced downtime.
          </p>
        </div>
      </div>
      <div className="col-md-12 grad manu-divs2">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-5 mt">
            <h1>Seamless Financial Management</h1>
            <p className="col-md-11">
              Take control of your financial processes with ease. Our
              Manufacturing module enables you to handle financial transactions,
              budgeting, and cost management specific to your manufacturing
              operations. Gain full visibility into your financial data, track
              expenses, manage budgets, and accurately allocate costs, ensuring
              financial stability and profitability in your manufacturing
              journey.
            </p>
          </div>
          <div className="col-md-5 offset-md-2 mt">
            <h1 className="col-md-11">Insightful Reports and Analytics</h1>
            <p className="col-md-11">
              Unlock the power of data with our advanced Reporting feature.
              Generate detailed production reports, quality control metrics, and
              operational analytics. Gain valuable insights into key performance
              indicators, identify areas for improvement, and make data-driven
              decisions to enhance overall manufacturing efficiency, quality,
              and output.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="col-md-12  manu-divs2">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-5 mtt">
            <h1>Streamlined Production Scheduling</h1>
            <p className="col-md-11">
              Efficiently schedule production processes, machine maintenance,
              and work shifts with our intuitive Calendar feature. Seamlessly
              plan and manage production timelines, allocate resources, and
              streamline workflows. Optimize production capacity, meet customer
              demands, and ensure timely delivery of high-quality products.
            </p>
          </div>
          <div className="col-md-5 offset-md-2 mtt">
            <h1 className="col-md-11">
              Enhanced Communication and Collaboration
            </h1>
            <p className="col-md-11">
              Enable seamless communication between different departments,
              managers, and production teams with our integrated Mailbox
              feature. Foster collaboration, exchange critical information, and
              address production-related challenges in real-time. Facilitate
              effective communication channels, ensuring everyone is on the same
              page, resulting in improved coordination and productivity.
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
          <p>
            Experience the power of our Distributions & Logistics module and
            unlock the true potential of your operations.
          </p>
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
