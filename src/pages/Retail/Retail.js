import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./retail.scss";
import Img from "../../assets/images/calender-img.png";

function Retail() {
  return (
    <>
      <div className="col-md-12 retail-container">
        <center>
          <div className="col-md-5">
            <h1>Retail</h1>
            {/* <h1 className="col-md-11">
              Elevate Your Retail Business to New Heights
            </h1> */}
            <p>
              Progressive retail businesses around the globe depend on educare
              ERP daily in streamlining their operations, enhancing efficiency
              and in delivering exceptional customer service.
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
      <div className="col-md-10 offset-md-1 flexy mt retail-divs">
        <div className="col-md-5">
          <h1>Effortless Financial Management</h1>
          <p>
            Easily take charge of your retail finances. Effectively manage
            financial transactions, track sales, and keep precise inventory
            records with the help of our retail module. To ensure ideal stock
            levels and reduce expenses, gain insights into your financial data,
            keep an eye on revenue sources, and streamline inventory management.
          </p>
        </div>
        <div className="col-md-5 offset-md-2">
          <h1>Streamlined Facility Management</h1>
          <p>
            With our Facility Management function, you can effectively manage
            the locations of your retail stores, visual merchandising, and store
            maintenance. Monitor and evaluate store performance, enhance visual
            merchandising tactics, and simplify store upkeep procedures. Make
            sure your stores are kept up nicely, have a nice appearance, and
            provide a pleasant shopping experience for your clients.
          </p>
        </div>
      </div>
      <div className="col-md-12 grad ">
        {" "}
        <div className="col-md-10 offset-md-1 flexy mt retail-divs">
          <div className="col-md-6 img-div mt"></div>
          <div className="col-md-5 offset-md-1 mt">
            <h1>Automated Requisition Processes</h1>
            <p>
              Streamline and elevate your requisition processes with Educare's
              advanced Requisition Feature. Say goodbye to manual paperwork and
              lengthy approval chains. Our cutting-edge automation empowers your
              team to initiate requisitions seamlessly, while built-in workflows
              ensure swift and accurate approvals.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-10 offset-md-1 flexy mt retail-divs">
        <div className="col-md-5">
          <h1>Efficient Calendar Management</h1>
          <p>
            Stay organized and maximize productivity with our intuitive Calendar
            feature. Schedule promotions, sales events, and staff shifts
            effortlessly. Coordinate activities, ensure optimal staffing levels
            during peak times, and plan marketing campaigns effectively.
            Streamline operations and drive success with efficient calendar
            management.
          </p>
        </div>
        <div className="col-md-5 offset-md-2">
          <h1>Actionable Reports and Analytics</h1>
          <p>
            With our sophisticated Reporting function, you can produce detailed
            data on sales performance, inventory analysis, and customer
            insights. Utilise robust data analytics to get insightful knowledge
            of client preferences, purchasing trends, and patterns. For optimal
            profit, make wise choices, spot development opportunities, and
            perfect your retail methods.
          </p>
        </div>
      </div>
      <center>
        <div className="col-md-4 mt">
          {" "}
          <img className=" " src={Img} alt="Scholar" width="100%" />
        </div>
      </center>
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-7 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Join the community of prosperous merchants who rely on our platform
            to improve store operations, optimise financial procedures, and
            provide excellent customer experiences in the dynamic retail
            environment.
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

export default Retail;
