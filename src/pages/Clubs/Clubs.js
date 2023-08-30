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
import { Link } from "react-router-dom";
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
            <h1>Experience the Joy of Connection</h1>

            <p>
              With educare Club Module, your school's clubs become a hub of
              inspiration and growth. Embark on an exciting journey with our
              club module, where we nurture and elevate your passion to new
              heights through engaging events, workshops, and collaborative
              projects.
            </p>
            <center className="mt6">
              <GetStartedForm
                text=" Get started"
                bgbtn="#4A13B2"
                cls="gsmclub"
                bg="#EA8713"
                backdropbg="modal-backdrop-purple"
              />
              <Link to={"/contact-us"}>
                <button className="demo">Request for demo</button>
              </Link>
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
          educare's Club Module unlocks a world of opportunities for students,
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
                paragraph="Joining a club is not just a membership; it's a pathway to unity and belonging. educare's Club Module, allows administrators to create and manage member profiles, capturing details such as contact information, membership status, and preferences."
              />
            </div>
          </div>{" "}
          <div className="col-md-4 one">
            <div className="col-md-11">
              <ClubFeatures
                icon={Customize}
                title="Create and Lead "
                paragraph="Administrators can approve and create clubs within the system. It stores and displays information about each club, including club name, description, staff advisor, meeting times, and room locations."
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
              paragraph="With reporting and analytics features, clubs provides insights into membership data, event attendance, and financials. Data-driven decision making helps clubs strategize better, improve member experiences, and plan successful events. "
            />
          </div>
        </div>{" "}
        <div className="col-md-4 one">
          <div className="col-md-11">
            <ClubFeatures
              icon={Sync}
              title=" Flexibility and Customization"
              paragraph="Our software solutions offer flexibility in adapting to different club types and sizes. They often allow customization of membership forms, event registration fields, and branding elements to match the club’s unique identity.

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
            <Link to={"/contact-us"}>
              {" "}
              <button className="demo">Request for demo</button>
            </Link>
          </center>
        </div>
      </div>
    </>
  );
}

export default Clubs;
