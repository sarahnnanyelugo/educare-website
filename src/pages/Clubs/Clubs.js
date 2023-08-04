import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./clubs.scss";
import Dashboard from "../../assets/images/club-dashboard.png";
import ClubFeatures from "./ClubFeatures/ClubFeatures";
import Notification from "../../assets/images/bell.png";
import Notification2 from "../../assets/images/bell_faded.png";
import Support from "../../assets/images/support.png";
import Support2 from "../../assets/images/support_faded.png";
import Customize from "../../assets/images/pencil.png";
import Sync from "../../assets/images/sync.png";
import Sync2 from "../../assets/images/sync_faded.png";
import Conflict from "../../assets/images/thief.png";
import Calender from "../../assets/images/views.png";
import Calender2 from "../../assets/images/views2.png";
function Clubs() {
  return (
    <>
      <div className="col-md-12 clubs-nav-div col-12">
        {" "}
        <NavTwo
          title=" Clubs"
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "120px" }} />
      <div className="club-container">
        {" "}
        <center>
          <div className="col-md-5 club-div">
            <Heading
              text="Introducing Clubs"
              bg="transparent"
              boda="solid 1px #BB6C0F"
              color="#BB6C0F"
            />
            <h1>Building Leaders, Building Futures:</h1>
            <h4>Empower School Clubs with Educare's Club Module.</h4>
            <p>
              With Educare Club Module, your school's clubs become a hub of
              inspiration and growth. Embrace the heartbeat of your school and
              watch your clubs thrive like never before. Unleash the power of
              unity, engagement, and success with Educare's Club Module today!
            </p>
            <center className="mt6">
              <GetStartedForm
                text=" Get started"
                bgbtn="#4A13B2"
                cls="gsmclub"
                bg="#EA8713"
                backdropbg="modal-backdrop-purple"
              />
              <button className="demo">Request for demo</button>
            </center>
          </div>
        </center>
      </div>
      <center>
        <div className="col-md-7 club-dashboard">
          <img
            className="col-md-12 dashboard1"
            src={Dashboard}
            alt="Scholar"
            width="100%"
          />
        </div>
      </center>
      <div id="features" />
      <div className="flexy ol-md-12  club-title">
        <h1 className="offset-md-1">
          educare <span>Club</span> for your school
        </h1>
        <p className="col-md-3 offset-md-2">
          Educare's Club Module unlocks a world of opportunities for students,
          providing a platform where they can create, lead, and thrive. With the
          power to establish and manage clubs, students gain invaluable
          leadership experience, fostering a sense of ownership and pride.
        </p>
      </div>
      <div className="col-md-12 shadowed club-features-main22 flexy">
        <div className="features-divd col-md-10 offset-md-1 flexy">
          <div className="col-md-2">&nbsp;</div>
          <div className="col-md-4 ">
            <div className="col-md-11">
              <ClubFeatures
                icon={Calender2}
                title="Membership Management"
                paragraph="Joining a club is not just a membership; it's a pathway to unity and belonging. With Educare's Club Module, students can easily manage their club memberships, creating a vibrant community bound by shared interests. Embrace the spirit of togetherness and unlock the power of collective achievements."
              />
            </div>
          </div>{" "}
          <div className="col-md-4 one">
            <div className="col-md-11">
              <ClubFeatures
                icon={Customize}
                title="Create and Lead "
                paragraph="With Educare's Club Module, students are the architects of their dreams. Empower them to create and manage their very own clubs, bringing like-minded peers together to pursue shared interests. From brainstorming ideas to organizing activities, our platform ignites the spark of leadership,  ownership and pride in every club member."
              />
            </div>
          </div>
        </div>{" "}
      </div>{" "}
      <div className="features-divd col-md-10 offset-md-1  flexy">
        <div className="col-md-4 offset-md-2">
          <div className="col-md-11">
            <ClubFeatures
              icon={Notification}
              title="Data-Driven Decision Making"
              paragraph="Data becomes the secret to exceptional club management with Educare's Club Module. From attendance records to activity preferences, our platform collects valuable insights, empowering students to make informed decisions that propel their clubs to new heights. "
            />
          </div>
        </div>{" "}
        <div className="col-md-4 one">
          <div className="col-md-11">
            <ClubFeatures
              icon={Sync}
              title=" Flexibility and Customization"
              paragraph="At Educare, we believe in giving students the freedom to shape their club experiences. Our Club Module offers unparalleled flexibility and customization, allowing them to tailor club activities, schedules, and themes. Empower creativity and originality, nurturing an environment where every club stands as a unique expression of its members' aspirations.

"
            />
          </div>
        </div>
      </div>{" "}
      <div className="col-md-10 offset-md-1 club-get-started ">
        <div className="offset-md-1 flexy">
          <h2>Unite and Thrive Together</h2>

          <center className="mt4 offset-md-4">
            <GetStartedForm
              text=" Get started"
              bg="#EA8713"
              cls="gsmclub"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            />
            <button className="demo">Request for demo</button>
          </center>
        </div>
      </div>
    </>
  );
}

export default Clubs;
