import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import "./school.scss";
import Img1 from "../../assets/images/cbt-school.png";
import Img2 from "../../assets/images/school2.png";
import Img3 from "../../assets/images/school1.png";
import Img4 from "../../assets/images/school5.png";
import Img5 from "../../assets/images/school3.png";
import Lagoon from "../../assets/images/lagoon.png";
import Meadow from "../../assets/images/meadow.png";
import Grange from "../../assets/images/grange.png";
import LBS from "../../assets/images/lbs.png";
import Charlse from "../../assets/images/charlse.png";
import Spring from "../../assets/images/spring.png";
import Wellspring from "../../assets/images/wellspring.png";
import Bereton from "../../assets/images/bereton.png";
function School() {
  return (
    <>
      <div className="col-md-12 sch-container ">
        <center>
          <div className="col-md-5">
            <small>School</small>
            <h1>Powerful School Operational Tools All in a Single Platform.</h1>
            <p className="col-md-10">
              Currently, schools across the globe use educare ERP in automating
              all facets of schools operations, from academics down to
              administration and this has led to providing a top-notch
              educational experience.
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
      <center>
        <h4>Trusted by leading schools</h4>
        <div className="col-md-8 col-12 schs-partners">
          <center>
            {" "}
            <img className="meadow" src={Meadow} alt="Scholar" />
            <img className="lagoon" src={Lagoon} alt="Scholar" />
            <img className="grange" src={Grange} alt="Scholar" />
            <img className="lbs" src={LBS} alt="Scholar" />
            <img className="charlse" src={Charlse} alt="Scholar" />
            <img className="spring" src={Spring} alt="Scholar" />
            <img className="wellspring" src={Wellspring} alt="Scholar" />
            <img className="bereton" src={Bereton} alt="Scholar" />
          </center>
        </div>
      </center>
      <center className="mtt">
        <h2> Some of Educare's Operational Tools for Schools</h2>
      </center>
      <div className="col-md-10 offset-md-1 flexy govt-divs mt6">
        <div className="col-md-5 ">
          <h1 className="col-md-10 mt3">Integrated Finance Suite</h1>
          <p className="col-md-10">
            From invoicing to order management to accounting, educare Finance
            has all the tools you need to streamline all of your back office
            operations. Gain insight into your financial performance and make
            informed decisions to help your business thrive.
          </p>
        </div>
        <div className="col-md-6 offset-md-1  govt-map">
          <img className=" " src={Img3} alt="Scholar" width="100%" />
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-6   govt-map">
          <img className=" " src={Img2} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-6 offset-md-1">
          <h1 className="col-md-8 mt3">Competent HR Management</h1>
          <p className="col-md-10">
            Effortlessly manage employee records, attendance, and payroll for
            teachers and staff with our HR feature. Streamline administrative
            processes, maintain accurate records, and ensure timely payroll
            management, allowing your school to focus on providing quality
            education.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-5">
          <h1 className="col-md-12 mt3">
            Seamless Computer-Based Testing (CBT)
          </h1>
          <p className="col-md-10">
            Facilitate Computer-Based Testing (CBT) for assessments and
            examinations with our dedicated CBT feature. Simplify test
            administration, grading, and result analysis, promoting fairness and
            accuracy in evaluating student performance.
          </p>
        </div>
        <div className="col-md-6 offset-md-1  govt-map">
          <img className=" " src={Img1} alt="Scholar" width="100%" />
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-6   govt-map">
          <img className=" " src={Img5} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-5   offset-md-1">
          <h1 className="col-md-10 mt3">Insightful Academic Reporting</h1>
          <p className="col-md-9">
            Gain valuable insights into student performance, track progress, and
            communicate academic achievements effectively.
          </p>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 flexy govt-divs mt8">
        <div className="col-md-5  ">
          <h1 className="col-md-10 mt3">Engaging eClassroom Experience</h1>
          <p className="col-md-10">
            Foster student engagement, provide personalized learning
            experiences, and ensure continuity of education beyond the
            traditional classroom setting.
          </p>
        </div>
        <div className="col-md-6 eclass-img offset-md-1">
          {" "}
          <img className=" " src={Img4} alt="Scholar" width="100%" />
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 report-get-started flexy">
        <div className="col-md-7 offset-md-1">
          <h2>Get started with us</h2>
          <p>
            Discover a better experience for your school with educare powerful
            tools.
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

export default School;
