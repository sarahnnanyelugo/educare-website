import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./logistics.scss";
import Waybill from "../../assets/images/waybill.png";
import Facility from "../../assets/images/manage-finance.png";
import Action from "../../assets/images/actionable.png";
import Enhanced from "../../assets/images/ecc.png";

function Logistics() {
  return (
    <>
      <div className="col-md-12 logistics-div">
        <div className="col-md-11 offset-md-1 flexy ">
          <div className="col-md-5">
            <small>Distribution & Logistics</small>
            <h1>Revolutionize Your Supply Chain Management</h1>
            <p>
              In the fast-paced world of distributions and logistics, optimizing
              your supply chain is key to gaining a competitive edge. Our
              comprehensive Distributions & Logistics module is designed to
              streamline your operations, enhance efficiency, and deliver
              exceptional customer service. With our robust features and
              user-friendly interface, you can take control of your supply chain
              like never before.
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
            Say goodbye to the complexities of financial management. Our
            Distributions & Logistics module provides you with the tools to
            effortlessly handle financial transactions, invoices, and payments
            specific to your distribution and logistics operations. Gain full
            visibility into your financial data, track expenses, generate
            accurate invoices, and efficiently manage payments, ensuring smooth
            cash flow and financial stability.
          </p>
          <h2>Efficient Facility Management</h2>
          <p>
            Track, monitor, and optimize your inventory, warehouses, and
            logistics facilities with our powerful Facility Management feature.
            From stock levels and storage locations to resource allocation and
            equipment maintenance, our module offers real-time insights,
            empowering you to make informed decisions, improve operational
            efficiency, and reduce costs.
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
              Generate comprehensive reports on distribution and logistics
              performance, inventory levels, and supply chain analytics with our
              advanced Reporting feature. Leverage powerful data visualization
              tools and gain valuable insights into key metrics and performance
              indicators. Identify bottlenecks, make data-driven decisions, and
              optimize your supply chain for maximum productivity and
              profitability.
            </p>
            <h1 className="col-md-10">Seamless Calendar Integration</h1>
            <p>
              Effortlessly schedule delivery routes, shipments, and
              transportation logistics with our intuitive Calendar feature. Plan
              and allocate resources effectively, optimize delivery routes, and
              ensure timely deliveries. Collaborate with your team, synchronize
              schedules, and streamline operations for enhanced productivity and
              customer satisfaction.
            </p>
          </div>
        </div>
      </div>
      <center>
        <div className="col-md-5  enhanced">
          <h1 className="col-md-9">Enhanced Communication and Collaboration</h1>
          <p>
            Effective communication is the backbone of successful distributions
            and logistics operations. Our module provides a centralized Mailbox
            feature, facilitating seamless and secure communication between
            suppliers, distributors, and logistics providers. Stay connected,
            exchange vital information, resolve issues promptly, and foster
            strong relationships for streamlined operations and optimized supply
            chain performance.
          </p>
          <img className=" " src={Enhanced} alt="Scholar" width="100%" />
        </div>
      </center>
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-4 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Experience the power of our Distributions & Logistics module and
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
