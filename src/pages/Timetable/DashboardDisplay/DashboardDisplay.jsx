import Carousel from "react-bootstrap/Carousel";
import Profile from "../../../assets/images/med-profile.png";
import Dashboard from "../../../assets/images/timedash1.png";
import Diagnosis from "../../../assets/images/diagnosis.png";
import Report from "../../../assets/images/latest-report.png";
import Requisition from "../../../assets/images/timedash2.png";
import Statement from "../../../assets/images/timedash3.png";
import Inventory from "../../../assets/images/timedash4.png";
import "./dashboard-display.scss";
function DashboardDisplay() {
  return (
    <>
      <div className="timetable-dasboard-display-carousel ">
        <div className="offset-md-1 flexy dashboard-description">
          <h1>
            educare <span>Timetable</span> for your school
          </h1>
          <div className="col-md-4 offset-md-1">
            <div className="col-md-11">
              {" "}
              <p>
                {" "}
                Time is precious, and Educare Timetable puts it at your command.
                Create and manage your school's timetable with ease, using our
                versatile features to tailor it to perfection. With dedicated
                dashboards, teachers and students can access their
                individualized class schedules instantly. Embrace the magic of
                Educare Timetable and unlock the art of time management today.
              </p>
            </div>
          </div>
        </div>
        <Carousel fade>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Statement} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Dashboard}
                    alt="Scholar"
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Requisition} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Dashboard} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Requisition}
                    alt="Scholar"
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Statement} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Requisition} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Statement}
                    alt="Scholar"
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Inventory} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="col-md-12 flexy">
              {" "}
              <div className="col-md-2 wing-imgs">
                <img className="" src={Requisition} alt="Scholar" />
              </div>
              <div className="col-md-8">
                {" "}
                <div className="col-md-10 center-dashboard">
                  <img
                    className=""
                    src={Inventory}
                    alt="Scholar"
                    width="100%"
                  />
                </div>
              </div>
              <div className="col-md-2 wing-imgs2">
                <img className="" src={Dashboard} alt="Scholar" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default DashboardDisplay;
