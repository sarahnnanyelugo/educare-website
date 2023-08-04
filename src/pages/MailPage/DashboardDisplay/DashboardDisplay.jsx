import Carousel from "react-bootstrap/Carousel";

import SMS from "../../../assets/images/mailBoard.png";
import Delete from "../../../assets/images/mailDelete.png";
import Home from "../../../assets/images/mailHome.png";
import "./dashboard-display.scss";
function DashboardDisplay() {
  return (
    <>
      <div className="col-md-12 emptiedd flexy flexyM"></div>
      <div className="mailbox-display-carousel ">
        <Carousel fade>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={SMS} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img className="" src={SMS} alt="Scholar" width="100%" />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Home} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Home} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img className="" src={Delete} alt="Scholar" width="100%" />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Delete} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={SMS} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img className="" src={Home} alt="Scholar" width="100%" />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={SMS} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
        <center>
          <h3>Streamlined payroll accounting</h3>
        </center>
      </div>
      <div className="col-md-12 emptiedd2 flexy flexyM"></div>
    </>
  );
}

export default DashboardDisplay;
