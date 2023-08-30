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
            Smart and progressive retail businesses are easily taking charge of
            their retail finances using educare Finance Module. This feature has
            empowered them to effectively manage financial transactions, track
            sales, and keep precise inventory records to ensure ideal stock
            levels and reduce expenses.
          </p>
        </div>
        <div className="col-md-5 offset-md-2">
          <h1>Streamlined Facility Management</h1>
          <p>
            With our Facility Management feature, retail businesses are now able
            to effectively manage the locations of their retail stores, visual
            merchandising, and store maintenance. This feature helps them to
            monitor and evaluate store performance, enhance visual merchandising
            tactics, and simplify store upkeep procedures.
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
              educare's advanced Requisition Feature has streamlined and
              elevated the requisition processes of retail businesses. Around
              the world, retail establisments are now abolishing manual
              paperwork and lengthy approval chains and embracing our
              cutting-edge software solution.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-10 offset-md-1 flexy mt retail-divs">
        <div className="col-md-5">
          <h1>Efficient Calendar Management</h1>
          <p>
            With our efficient Calendar Management Module, retail business
            owners are able to stay organized and maximize productivity. It
            further enables them to schedule promotions, sales events, and staff
            shifts effortlessly. With this module, coordinating activities,
            ensuring optimal staffing levels during peak times, and effectively
            planning marketing campaigns have become a cruise easy for
            Retailers.
          </p>
        </div>
        <div className="col-md-5 offset-md-2">
          <h1>Actionable Reports and Analytics</h1>
          <p>
            With our sophisticated Reporting feature, Retailers are empowered to
            produce detailed data on sales performance, inventory analysis, and
            customer insights. With this robust data analytics they are able to
            get insightful knowledge of client preferences, purchasing trends,
            and patterns.
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
