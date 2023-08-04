import Carousel from "react-bootstrap/Carousel";
import Profile from "../../../assets/images/med-profile.png";
import Dashboard from "../../../assets/images/lib_manage.png";
import Diagnosis from "../../../assets/images/diagnosis.png";
import Report from "../../../assets/images/latest-report.png";
import Requisition from "../../../assets/images/text_book.png";
import Statement from "../../../assets/images/book_stack.png";
import Inventory from "../../../assets/images/borrowed_books.png";
import "./dashboard-display.scss";

function DashboardDisplay() {
  return (
    <>
      <div className="lib-dashboard-display-carousel flexy">
        <div className="col-md-3">
          <center>
            {" "}
            <h3>Simple & Intuitive</h3>
          </center>
        </div>
        <div className="col-md-9">
          <Carousel fade>
            <Carousel.Item>
              <div className="col-md-12 flexy">
                {" "}
                <div className="col-md-8">
                  {" "}
                  <div className="col-md-12 center-dashboard">
                    <img
                      className=""
                      src={Dashboard}
                      alt="Scholar"
                      width="100%"
                    />
                  </div>
                </div>
                <div className="col-md-4 wing-imgs2">
                  <img className="" src={Requisition} alt="Scholar" />
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="col-md-12 flexy">
                {" "}
                <div className="col-md-8">
                  {" "}
                  <div className="col-md-12 center-dashboard">
                    <img
                      className=""
                      src={Requisition}
                      alt="Scholar"
                      width="100%"
                    />
                  </div>
                </div>
                <div className="col-md-4 wing-imgs2">
                  <img className="" src={Statement} alt="Scholar" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-12 flexy">
                {" "}
                <div className="col-md-8">
                  {" "}
                  <div className="col-md-12 center-dashboard">
                    <img
                      className=""
                      src={Statement}
                      alt="Scholar"
                      width="100%"
                    />
                  </div>
                </div>
                <div className="col-md-4 wing-imgs2">
                  <img className="" src={Inventory} alt="Scholar" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="col-md-12 flexy">
                {" "}
                <div className="col-md-8">
                  {" "}
                  <div className="col-md-12 center-dashboard">
                    <img
                      className=""
                      src={Inventory}
                      alt="Scholar"
                      width="100%"
                    />
                  </div>
                </div>
                <div className="col-md-4 wing-imgs2">
                  <img className="" src={Dashboard} alt="Scholar" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default DashboardDisplay;
