import React from "react";
import Video from "../../assets/images/watch.svg";

function OverviewVideo() {
  return (
    <>
      {" "}
      <div className="col-md-12 overview-video">
        <center>
          <div className="col-md-12 flexy flexyM over-con">
            {" "}
            <img className="" src={Video} alt="Scholar" />
            <h6>Watch Overview</h6>
          </div>
        </center>
      </div>
    </>
  );
}

export default OverviewVideo;
