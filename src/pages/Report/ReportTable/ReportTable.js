import React, { useEffect, useRef, useState } from "react";
import "./report-table.scss";
import Dashboard1 from "../../../assets/images/rp1.png";
import Dashboard2 from "../../../assets/images/rp2.png";
import Dashboard3 from "../../../assets/images/analysis.gif";
import Dashboard4 from "../../../assets/images/generate_result.png";

function ReportTable() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  return (
    <>
      <div className="reports-tab col-md-10 offset-md-1">
        <div className="tabs col-md-12">
          <button
            className={`tab ${checkActive(1, "active2")}`}
            onClick={() => handleClick(1)}
          >
            Generate Results
          </button>
          <button
            className={`tab ${checkActive(2, "active2")}`}
            onClick={() => handleClick(2)}
          >
            Analyze Results
          </button>
          <button
            className={`tab ${checkActive(3, "active2")}`}
            onClick={() => handleClick(3)}
          >
            Teacher/Principal’s comment
          </button>{" "}
          <button
            className={`tab ${checkActive(4, "active2")}`}
            onClick={() => handleClick(4)}
          >
            Transcript
          </button>{" "}
        </div>{" "}
        <div className="panels col-md-12 ">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div className="flexy">
              {" "}
              <div className="col-md-8">
                <div className="col-md-10 offset-md-1 mt9  no-m">
                  <img
                    className=""
                    src={Dashboard4}
                    alt="Scholar"
                    width="100%"
                  />
                </div>

                <div className="bid-ball-rad col-md-6 " />
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  {" "}
                  <h5>Automated Result Generation </h5>
                  <p>
                    By converting data into meaningful reports, our
                    user-friendly platform ensures the process of generating
                    results is streamlined and automated, thereby saving time,
                    ensuring accuracy, and providing instructors with thorough
                    performance analysis.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>
            {" "}
            <div className="flexy">
              {" "}
              <div className="col-md-8">
                <div className="col-md-10 offset-md-1 mt9  no-m">
                  <img
                    className=""
                    src={Dashboard3}
                    alt="Scholar"
                    width="100%"
                  />
                </div>
                <div className="bid-ball-rad col-md-6 " />
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  {" "}
                  <h5>Analyze Results </h5>
                  <p>
                    With educare powerful student analysis tools , you can
                    confidently dive deep into individual student performance,
                    identifying strengths, weaknesses, and growth areas. It
                    equips teachers with valuable insights to tailor their
                    instruction and nurture each student's full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(3, "active2")}`}>
            {" "}
            <div className="flexy">
              {" "}
              <div className="col-md-8">
                <div className="col-md-10 offset-md-1 mt9  no-m">
                  <img
                    className=""
                    src={Dashboard2}
                    alt="Scholar"
                    width="100%"
                  />
                </div>

                <div className="bid-ball-rad col-md-6 " />
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  {" "}
                  <h5>Impactful Feedback</h5>
                  <p>
                    educare's Report platform enables teachers to provide
                    impactful feedback through Teachers' Remark. Personalized
                    comments and observations foster students' self-awareness
                    and motivate them to excel. Nurture a growth mindset with
                    constructive feedback that inspires continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`panel ${checkActive(4, "active2")}`}>
            <div className="flexy">
              {" "}
              <div className="col-md-8">
                <div className="col-md-10 offset-md-1 mt9 no-m">
                  <img
                    className=""
                    src={Dashboard1}
                    alt="Scholar"
                    width="100%"
                  />
                </div>

                <div className="bid-ball-rad col-md-6 " />
              </div>
              <div className="col-md-4">
                <div className="col-md-11">
                  {" "}
                  <h5>Transcript Accessibility</h5>
                  <p>
                    educare's transcript feature lets educators create
                    comprehensive grade transcripts that showcase students'
                    accomplishments throughout their academic journey. This
                    gives way to a holistic view of a student's academic
                    performance, showcasing their full potential to colleges and
                    universities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportTable;
