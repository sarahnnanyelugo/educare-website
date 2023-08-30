import Carousel from "react-bootstrap/Carousel";
import Profile from "../../../assets/images/med-profile.png";
import Dashboard from "../../../assets/images/medicalsDashboard.png";
import Diagnosis from "../../../assets/images/diagnosis.png";
import Report from "../../../assets/images/latest-report.png";

import "./medical-tab.scss";
function MedicalTabNav() {
  return (
    <div className="medcaro ">
      <Carousel fade indicatorLabels="1234">
        <Carousel.Item>
          <div className="col-md-12 flexy">
            {" "}
            <div className="col-md-4">
              <h2>Well-organized Workflows</h2>
              <p>
                educare's medical module brings harmony to your healthcare
                processes with well-organized workflows. From appointment
                scheduling to health records management, our platform
                streamlines every step, ensuring efficiency and precision. Say
                goodbye to administrative chaos and embrace a friendly medical
                ecosystem.
              </p>
            </div>
            <div className="col-md-8">
              {" "}
              <img className="" src={Dashboard} alt="Scholar" width="100%" />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="col-md-12 flexy">
            {" "}
            <div className="col-md-4">
              <h2>Safe and Sound</h2>
              <p>
                At educare, patient's safety is our top priority. With our
                medical module, we create a secure environment where health
                information is protected, and sensitive data is shielded. Our
                robust security measures ensure that only authorized personnel
                have access to medical records, giving patients peace of mind
                and fostering a nurturing healthcare experience.
              </p>
            </div>
            <div className="col-md-8">
              {" "}
              <img className="" src={Report} alt="Scholar" width="100%" />
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="col-md-12 flexy">
            {" "}
            <div className="col-md-4">
              <h2>Enhanced Health Services</h2>
              <p>
                Elevate your business's health services with educare's Medical
                Module, where excellence is the norm. From health assessments to
                previous medical records, our platform empowers healthcare
                providers to deliver personalized and timely interventions.
                Experience the transformative power of data-driven health
                services that nurture the wellbeing of your entire business
                community.
              </p>
            </div>
            <div className="col-md-8">
              {" "}
              <img className="" src={Diagnosis} alt="Scholar" width="100%" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="col-md-12 flexy">
            {" "}
            <div className="col-md-4">
              <h2>Customizable and Scalable</h2>
              <p>
                In a dynamic educational and business landscape, flexibility is
                paramount. educare's Medical Module scales with your business
                growth, adapting effortlessly to changing needs. With
                customizable features that cater to your unique requirements,
                you can shape a health solution that aligns perfectly with your
                vision for the future.
              </p>
            </div>
            <div className="col-md-8">
              {" "}
              <img className="" src={Profile} alt="Scholar" width="100%" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MedicalTabNav;
