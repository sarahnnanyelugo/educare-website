import React, { useEffect } from "react";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import Icon1 from "../../assets/images/target.png";
import Icon2 from "../../assets/images/tech.png";
import Icon3 from "../../assets/images/hands.png";
import Icon4 from "../../assets/images/balance.png";
import Icon5 from "../../assets/images/growth.png";
import Icon6 from "../../assets/images/opportunities.png";
import Dot1 from "../../assets/images/dot1.svg";
import Dot2 from "../../assets/images/dot2.svg";
import Dot3 from "../../assets/images/dot3.svg";
import Dot4 from "../../assets/images/dot4.svg";
import { educareJobs } from "../../TestData";

import "./careers.scss";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import Jobs from "./Jobs/Jobs";
function Careers() {
  const handleScroll = () => {
    const $element = document.querySelector(".parallax");
    const $follow = $element.querySelector(".follow");
    const followHeight = $follow.offsetHeight;
    const height = $element.offsetHeight;
    const window_height = window.innerHeight;

    const pos = window.pageYOffset || document.documentElement.scrollTop;
    const top = $element.offsetTop;

    // Check if element totally above or totally below viewport
    if (top + height - followHeight < pos || top > pos + window_height) {
      return;
    }

    const offset = parseInt(pos - top);
    console.log("pos", pos, "top", top, "offset", offset);
    if (offset > 0) {
      $follow.style.transform = `translateY(${offset}px)`;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
  });
  return (
    <>
      <div className="col-md-12 careers-div">
        <img className="offset-md-4" src={Dot1} alt="Scholar" />
        <img className="offset-md-11" src={Dot3} alt="Scholar" />
        <img className="offset-md-1 off-img " src={Dot2} alt="Scholar" />
        <center>
          <div className="col-md-6">
            <h1>We are shaping the future of education and business</h1>
            <p className="col-md-10">
              Join our team and help build innovative software for businesses
              and schools. Grow with us and get more from your career
            </p>
            <button className="explore">Explore open roles</button>
          </div>
        </center>
        <img className="offset-md-3" src={Dot4} alt="Scholar" />
        <img className="offset-md-10" src={Dot2} alt="Scholar" />
      </div>
      <div className="col-md-12 reason">
        <center>
          <div className="col-md-7">
            <h1>Why Educare?</h1>
            <p>
              At Educare, we believe that our success is driven by the
              exceptional talents and dedication of our team. As a leading
              software management company serving both educational institutions
              and businesses, we are committed to creating a work environment
              that fosters innovation, collaboration, and personal growth.
            </p>
            <p>
              Joining our team means being part of a dynamic and
              forward-thinking organization that is passionate about
              transforming the way education and businesses operate. Whether you
              are an experienced professional or a recent graduate, we offer
              exciting career opportunities in various roles and departments.
            </p>
          </div>
        </center>
      </div>
      <div className="col-md-12  believe-div ">
        <div className="col-md-10 offset-md-1 flexy  parallax">
          <div className="col-md-4  follow">
            <h1>What we believe in</h1>
          </div>
          <div className="col-md-4 offset-md-4">
            <div className="col-md-11 believe b-liv1">
              {" "}
              <img className="" src={Icon1} alt="Scholar" />
              <h3>Meaningful Impact</h3>
              <p>
                At Educare, your work directly contributes to improving the
                education sector and enabling businesses to thrive. You have the
                opportunity to make a real difference in the lives of students,
                educators, and professionals.
              </p>
            </div>{" "}
            <div className="col-md-11 believe b-liv3">
              {" "}
              <img className="" src={Icon3} alt="Scholar" />
              <h3>Collaborative Environment</h3>
              <p>
                We foster a culture of collaboration and teamwork. You will have
                the opportunity to collaborate with talented individuals from
                diverse backgrounds, leveraging their expertise and insights to
                solve complex challenges together.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-11 believe b-liv2">
              {" "}
              <img className="" src={Icon2} alt="Scholar" />
              <h3>Innovation and Technology</h3>
              <p>
                We are at the forefront of technological advancements and
                embrace innovation in everything we do. You will have the chance
                to work with cutting-edge technologies, explore new ideas, and
                contribute to the development of innovative software solutions.
              </p>
            </div>
            <div className="col-md-11 believe b-liv4">
              {" "}
              <img className="" src={Icon4} alt="Scholar" />
              <h3>Work-Life Balance</h3>
              <p>
                We understand the importance of work-life balance. We strive to
                create an environment that promotes well-being and allows you to
                maintain a healthy balance between your personal and
                professional life.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-7 offset-md-4 ">
          <div className="col-md-11 growth">
            {" "}
            <img className="" src={Icon5} alt="Scholar" />
            <h3>Professional Growth</h3>
            <p>
              We are committed to supporting the professional growth and
              development of our employees. We provide continuous learning
              opportunities, mentorship programs, and a supportive work
              environment that encourages you to expand your skills and take on
              new challenges.
            </p>
          </div>
        </div>
      </div>
      {/* <center>
        <div className="col-md-5 mt5">
          <h1>Opportunities to explore</h1>
          <img
            className="col-md-12 mt7"
            src={Icon6}
            alt="Scholar"
            width="100%"
          />
        </div>
        <h1>No opportunities right now</h1>
      </center> */}

      <div className="col-md-12  ">
        <center>
          <h1>Opportunities to explore</h1>
        </center>
        <div className="offset-md-1 col-md-10 mt5">
          <section className="row row-cols-2 row-cols-lg-2 g-2 g-lg-4 col-md-12">
            {educareJobs.map((data, index) => (
              <Jobs data={data} />
            ))}
          </section>
        </div>
      </div>

      <div className="col-md-10 offset-md-1 cv-div mtt">
        <center>
          <div className="col-md-7">
            <h1>Can’t find what you’re looking for?</h1>
            <p>Send a mail to us and drop your CV</p>
            <GetStartedForm
              text="Send a mail"
              bg="#0098DA"
              cls="gsmsp"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
          </div>
        </center>
      </div>
    </>
  );
}

export default Careers;
