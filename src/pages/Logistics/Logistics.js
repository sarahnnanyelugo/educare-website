import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./logistics.scss";
import Waybill from "../../assets/images/waybill.png";
import Facility from "../../assets/images/manage-finance.png";
import Action from "../../assets/images/actionable.png";
import Enhanced from "../../assets/images/daily-dashboard.png";

function Logistics() {
  return (
    <>
      <div className="col-md-12 logistics-div">
        <div className="col-md-11 offset-md-1 flexy ">
          <div className="col-md-5">
            <h1>Distribution & Logistics</h1>
            {/* <h1>Revolutionize Your Supply Chain Management</h1> */}
            <p>
              In the fast-paced world of distributions and logistics, optimizing
              your supply chain is key to gaining a competitive edge. Thousands
              of distribution and logistics company around the globe depend on
              educare ERP daily in streamlining their operations, enhancing
              efficiency and in delivering exceptional customer service.
            </p>
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmcal"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </div>
          <div className="col-md-7 truck-div">
            {" "}
            <img className=" " src={Waybill} alt="Scholar" width="100%" />
          </div>
        </div>
      </div>
      <div className="col-md-11 offset-md-1 flexy ease-finance">
        <div className="col-md-4 mt">
          <h2>Manage Finances with Ease</h2>
          <p>
            Logistics and Distribution Enterprises around the world are
            massively elevating their financial managements with educare Finance
            platform. This feature has provided them with the tools to
            effortlessly handle financial transactions, invoices, and payments
            specific to their distribution and logistics operations, thereby
            gainning full visibility into their financial data, tracking
            expenses, generating accurate invoices, and efficiently managing
            payments.
          </p>
          <h2>Efficient Facility Management</h2>
          <p>
            With educare Facility Management platform, Logistics and Distribution
            Enterprises are enabled to track, monitor, and optimize their
            inventory, warehouses, and logistics facilities. From stock levels
            and storage locations to resource allocation and equipment
            maintenance, our platform now offeres real-time insights, empowering
            them to make informed decisions, improve operational efficiency, and
            reduce costs.
          </p>
        </div>
        <div className="col-md-8">
          {" "}
          <img className=" " src={Facility} alt="Scholar" width="100%" />
        </div>
      </div>
      <div className="col-md-12 actionable">
        {" "}
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-6">
            <img className=" " src={Action} alt="Scholar" width="100%" />
          </div>
          <div className="col-md-5 offset-md-1">
            <h1 className="col-md-10">Actionable Reports and Analytics</h1>
            <p>
              Generating comprehensive reports analytics on distribution and
              logistics performance, inventory levels, and supply chain is very
              crucial for business growth. Logistics and Distribution
              Enterprises around the world unwaveringly entrusts this important
              responsibility to educare. With our advanced Reporting feature,
              distributors now have access to valuable insights into key data
              visualization metrics and performance indicators.
            </p>
            <h1 className="col-md-10">Seamless Calendar Integration</h1>
            <p>
              Using our smart Calendar platform, Logistics Businesses no longer
              see scheduling as a haculean task. With this feature, they are
              able to effortlessly schedule delivery routes, shipments, and
              transportation logistics. Moreso, they are harnessing the power of
              this tool to allocate resources effectively, optimize delivery
              routes, and ensure timely deliveries. This is indeed a great
              innovation to logistics around the world.
            </p>
          </div>
        </div>
      </div>
      <center>
        <div className="col-md-5  enhanced">
          <h1 className="col-md-9"> Concise Daily Reporting platform </h1>
          <p>
            With educare's Daily Reporting platform, productivity has reached new
            heights in Logistics Enterprise. This feature has empowered their
            staff to input their daily tasks with ease, ensuring accountability
            and streamlined work hours.
          </p>
          <img className=" " src={Enhanced} alt="Scholar" width="100%" />
        </div>
      </center>
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-4 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Experience the power of our Distributions & Logistics platform and
            unlock the true potential of your operations.
          </p>
        </div>
        <div className="offset-md-4 mt2">
          <GetStartedForm
            text=" Get started"
            bg="#0098DA"
            cls="gsmrep"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-dark"
          />
          {/* <button>Request for demo</button> */}
        </div>
      </div>
    </>
  );
}

export default Logistics;
