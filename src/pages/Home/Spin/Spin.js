import React from "react";
import "./spin.scss";
import Img1 from "../../../assets/images/budgeting.svg";
import Img2 from "../../../assets/images/report.svg";
import Img3 from "../../../assets/images/tools.svg";
import Img4 from "../../../assets/images/sen.svg";
const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img1,
  Img2,
  Img3,
  Img4,
  Img1,
  Img2,
  Img3,
  Img4,
  // Add more image URLs
];
function Spin() {
  return (
    <>
      <div className="rotating-circle">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="rotating-image"
            style={{
              transform: `rotate(${
                (360 / images.length) * index
              }deg) translate(220px) rotate(-${
                (360 / images.length) * index
              }deg)`,
            }}
          />
        ))}
        <h1>center</h1>
      </div>
    </>
  );
}

export default Spin;
