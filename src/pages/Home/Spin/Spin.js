import React from "react";
import "./spin.scss";
import Img1 from "../../../assets/images/spin1.svg";
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
import { Link } from "react-router-dom";
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
  "Pastoral",
  "Student Admission",
  "CBT",
  "Calendar",
  "eClassroom",
  "Facility Management",
  "Hr Manager",
  "Timetable",
  "Report",
  "Library",
  "Mailbox",
];
const link = [
  "/finance",
  "/pastoral",
  "/admission",
  "/cbt",
  "/calendar",
  "/e-classroom",
  "/facility-manager",
  "/hrm",
  "timetable",
  "report",
  "library",
  "mailbox",
];
function Spin() {
  return (
    <>
      <div className="rotating-circle">
        {" "}
        <div className="rotating-circle-inner">
          {" "}
          {images.map((image, index) => (
            <>
              <Link to={link[index]} className="web-icons">
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className="rotating-image"
                  style={{
                    transform: `rotate(${
                      (360 / images.length) * index
                    }deg) translate(230px) rotate(-${
                      (360 / images.length) * index
                    }deg)`,
                  }}
                />{" "}
              </Link>{" "}
              <Link to={link[index]} className="mobile-icons">
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  className="rotating-image"
                  style={{
                    transform: `rotate(${
                      (360 / images.length) * index
                    }deg) translate(170px) rotate(-${
                      (360 / images.length) * index
                    }deg)`,
                  }}
                />{" "}
              </Link>
            </>
          ))}
          <br />
          {headings.map((heading, index) => (
            <>
              <small
                className="rotating-image web-icons"
                style={{
                  transform: `rotate(${
                    (360 / headings.length) * index
                  }deg) translate(230px) rotate(-${
                    (360 / headings.length) * index
                  }deg)`,
                }}
              >
                {heading}
              </small>
              <small
                className="rotating-image mobile-icons"
                style={{
                  transform: `rotate(${
                    (360 / headings.length) * index
                  }deg) translate(170px) rotate(-${
                    (360 / headings.length) * index
                  }deg)`,
                }}
              >
                {heading}
              </small>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Spin;
