import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./testimonial.scss";
function Testimonial() {
  return (
    <center>
      {" "}
      <div className="col-md-  testimonial-carousel">
        {" "}
        <Carousel>
          <Carousel.Item>
            <div className="col-md-5 mt4">
              <p>
                “Educare Lesson Planner has completely transformed the way I
                approach teaching! The user-friendly interface and powerful
                features allow me to design captivating lessons that truly
                engage my students. The ability to customize content based on
                their individual needs has led to improved learning outcomes.
                This tool has made lesson planning a breeze, and I can't imagine
                teaching without it!”
              </p>
              <h6>Sarah</h6>
              <small>High School Teacher</small>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-5 mt4">
              <p>
                “As a busy educator, time management is crucial. Educare Lesson
                Planner has been a game-changer for me. The seamless scheduling
                feature helps me optimize my teaching hours, ensuring I make the
                most of every minute in the classroom. It has reduced my
                administrative burden and given me more time to focus on what
                truly matters - fostering a love for learning in my students
              </p>
              <h6>Tora</h6>
              <small>10th grade teacher</small>
            </div>
          </Carousel.Item>{" "}
          <Carousel.Item>
            <div className="col-md-5 mt4">
              <p>
                “Since adopting Educare Lesson Planner, our school has witnessed
                a significant improvement in lesson planning and execution. The
                platform's seamless integration with our existing systems has
                made the transition effortless. Our teachers now have more time
                to focus on their students' individual needs, leading to
                improved academic performance and overall student satisfaction
              </p>
              <h6>Faith</h6>
              <small>8th grade teacher</small>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </center>
  );
}

export default Testimonial;
