import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./assignment.scss";
import Dashboard from "../../assets/images/ass-dashboard.png";
import Access from "../../assets/images/assign.png";
import Manage from "../../assets/images/publish.png";
import Learn from "../../assets/images/grade.png";
import Dashed1 from "../../assets/images/dashed_line_11.png";
import Dashed2 from "../../assets/images/dashed_line_22.png";
import Teacher from "../../assets/images/ass-teacher.png";
function Assignment() {
  return (
    <>
      <div className="col-md-12 assignment-nav-div col-12">
        {" "}
        <NavTwo
          title="Assignments"
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "120px" }} />
      <div className="container-fluid flexy assignment-div">
        <div className="col-md-5 offset-md-1 mt6 no-m">
          <Heading
            text="Introducing Assignments"
            bg="transparent"
            boda="solid 1px #2F99DA"
            color="#2F99DA"
          />
          <h1>Seamless Assignment Module: Experience the Educare Advantage!</h1>
          <p className="col-md-11">
            Unlock the pathway to academic success with Educare's Assignment
            Module. Our powerful platform allows subject teachers to create and
            manage assignments, while students can easily download, attempt, and
            submit their work within set deadlines. Elevate your school's
            learning experience with efficient assignment module that drives
            results.
          </p>
          <div className="flexy flexyM">
            <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmadm"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-blue"
            />
            <button className="demo">Request for demo</button>
          </div>
        </div>
        <div className="col-md-4 offset-md-1">
          <img
            className="col-md-12 dashboard1"
            src={Teacher}
            alt="Scholar"
            width="100%"
          />
        </div>
      </div>
      <div className="container-fluid assignment-dashboard">
        <center>
          <div className="col-md-7">
            <img
              className="col-md-12 dashboard1"
              src={Dashboard}
              alt="Scholar"
              width="100%"
            />
          </div>
          <div className="col-md-5">
            <h2>Seamless Assignment Management</h2>
            <h6 style={{ color: "grey" }}>Embrace the Future of Learning</h6>
            <p className="col-md-8">
              Educare's Assignment Module stands as a pillar of academic
              excellence, empowering teachers to create impactful assignments
              while providing students with a seamless submission experience
            </p>
          </div>
        </center>
        <div className="flexy col-md-10 offset-md-1 mt ass-details">
          <div className="col-md-4">
            <div className="col-md-8">
              <h4>Create Assignments!</h4>
              <p>
                Educare's Assignment Module puts the power of impactful
                assignments in the hands of educators. Effortlessly design
                assignments that inspire and challenge students, fostering a
                passion for learning and encouraging critical thinking.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-8">
              <h4>Seamless Submission</h4>
              <p>
                Say goodbye to assignment chaos with Educare's Submission
                Management. Our platform streamlines the process, allowing
                students to submit their work with ease, ensuring no assignment
                goes unnoticed.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-9">
              <h4>Elevate Learning Grading and Feedback</h4>
              <p>
                Empower students with valuable feedback through Educare's
                Grading and Feedback feature. Nurture continuous growth by
                providing personalized insights, encouraging improvement, and
                celebrating achievements.
              </p>
            </div>
          </div>
        </div>
        <div id="features" />
        <center>
          <div className="col-md-8 flexy mtt mb5 flexyM  ass-feats">
            <div className="col-md-1 col-1">
              <img className="" src={Access} alt="Scholar" width="100%" />
              <h5 className="mt1">Assign</h5>
            </div>{" "}
            <div className="col-md-4 col-4 mt7">
              <img className="" src={Dashed1} alt="Scholar" width="100%" />
            </div>{" "}
            <div className="col-md-1 col-1 mt5">
              <img className="" src={Manage} alt="Scholar" width="100%" />
              <h5 className="mt1">Publish</h5>
            </div>{" "}
            <div className="col-md-4 col-4 mt7">
              <img className="" src={Dashed2} alt="Scholar" width="100%" />
            </div>{" "}
            <div className="col-md-1 col-1">
              <img className="" src={Learn} alt="Scholar" width="100%" />
              <h5 className="mt1">Grade</h5>
            </div>
          </div>
        </center>
        <div className="offset-md-2 col-md-8 flexy mt">
          <div className="col-md-6">
            <div className="col-md-9">
              {" "}
              <h4>Stay On Track with Deadline and Reminders!</h4>
              <p>
                Never miss a deadline with Educare's Deadline and Reminders
                feature. Empower teachers and students alike with clear
                timelines, ensuring assignments are submitted on time. Stay
                focused and organized, making the most of every academic
                opportunity.
              </p>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="col-md-10">
              {" "}
              <h4>Uncover Integrity with Plagiarism Detection!</h4>
              <p>
                Promote academic integrity and originality with Educare's
                Plagiarism Detection. Safeguard the value of learning by
                identifying and addressing any instances of plagiarism. Foster a
                culture of honesty and respect, nurturing students' appreciation
                for authentic work.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 assign-get-started flexy">
        <center>
          <div className="col-md-7 ">
            <h2>
              Guarding Academic Excellence: Empower Integrity with Our Vigilant
              Plagiarism Detection!
            </h2>

            <center className="mt4">
              <GetStartedForm
                text=" Get started"
                bg="#0098DA"
                cls="gsmrep"
                bgbtn="#0098DA"
                backdropbg="modal-backdrop-dark"
              />
              <button className="demo">Request for demo</button>
            </center>
          </div>
        </center>
      </div>
    </>
  );
}

export default Assignment;
