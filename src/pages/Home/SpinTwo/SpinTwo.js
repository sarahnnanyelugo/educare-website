import "./spin-two.scss";
import React from "react";
import Img1 from "../../../assets/images/spin1.svg";

import { Link } from "react-router-dom";
import Img2 from "../../../assets/images/spin2.svg";
import Img3 from "../../../assets/images/spin3.svg";
import Img4 from "../../../assets/images/spin4.svg";
import Img5 from "../../../assets/images/spin5.svg";
import Img6 from "../../../assets/images/spin6.svg";
import Img7 from "../../../assets/images/spin7.svg";
import Img8 from "../../../assets/images/spin8.svg";
import Img9 from "../../../assets/images/spin9.svg";
import Img10 from "../../../assets/images/spin10.svg";
import Img11 from "../../../assets/images/spin11.svg";
import Img12 from "../../../assets/images/spin12.svg";
const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  // Add more image URLs
];
const headings = [
  "Finance",
  "CBT",
  "Mailbox",
  "Library",
  "Student Admission",
  "Hr Manager",
  "eClassroom",
  "Calendar",
  "Report",
  "Facility Management",
  "Timetable",
  "Pastoral",
];
const link = [
  "/finance",
  "/cbt",
  "mail-box",
  "library",
  "/admission",
  "/hrm",
  "/e-classroom",
  "/calendar",
  "report",
  "/facility-manager",
  "timetable",
  "/pastoral",
];
function SpinTwo() {
  const earths = [];

  // for (let i = 0; i < 12; i++) {
  //   const rotationDegree = i * 30;

  //   earths.push(<div className="earth" style={earthStyle} key={i}></div>);
  // }
  function RotationDegreeCalculator(i, x) {
    const rotationDegree = i * 30;
    const animationDelay = i * 6.67;
    const earthStyle = {
      transform: `rotate(${rotationDegree}deg) translateX(${x}px)`,
      animationDelay: `-${animationDelay}s`,
    };
    return earthStyle;
  }
  return (
    <div className="">
      {" "}
      <div className="solar-system">
        <div className="circle offset-md-2"></div>
        <div className="sun">
          {images.map((image, index) => (
            <>
              <div
                className="earth "
                style={RotationDegreeCalculator(index, 280)}
              >
                <Link to={link[index]} className="web-icons">
                  <img key={index} src={image} alt={`Image ${index}`} />{" "}
                </Link>{" "}
                <br />
                <h6>{headings[index]}</h6>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpinTwo;
