import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./dashboards.scss";
import Img1 from "../../assets/images/dashboard-d1.png";
import Img2 from "../../assets/images/dashboard-d2.png";
import Img3 from "../../assets/images/dashboard-d3.png";
import Img4 from "../../assets/images/dashboard-d4.png";

function Dashboards() {
  return (
    <div>
      {" "}
      <div className="col-md-12 dashboards-nav-div col-12">
        {" "}
        <NavTwo
          title=" Dashboards"
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "120px" }} />
      <div className="dashboards-container">
        {" "}
        <center>
          <div className="col-md-5 dashboards-div">
            <Heading
              text="Dashboards"
              bg="transparent"
              boda="solid 1px #ED2F59"
              color="#ED2F59"
            />
            <h1>An insight to all educare softwares</h1>
          </div>
        </center>
      </div>
      <center className="mt">
        <h1>Administrators</h1>
      </center>
      <div className="col-md-10 offset-md-1 flexy mt8 dashboards-views">
        <div className="col-md-7">
          {" "}
          <img className="col-md-12 " src={Img1} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-5 ">
          <h3>Dashboard</h3>
          <p>
            The admin dashboard provides an overview of key metrics, such as the
            number of active users, recent activities, and system status. It
            also offers access to various administrative functions.
          </p>
          <h3>User Management</h3>
          <p>
            Admins can add, edit, and remove users from the system. They can
            assign roles and permissions to teachers, staff, and students,
            ensuring appropriate access levels.
          </p>
          <h3>Attendance Tracking</h3>
          <p>
            The admin side allows tracking and managing overall attendance data
            for classes and individual students. Admins can view attendance
            reports, identify patterns, and address any attendance-related
            issues.
          </p>
        </div>
      </div>
      <div className="container-fluid grey-dashedbs mt8 dashboards-views">
        <center>
          <h1>Teachers</h1>
        </center>
        <div className="col-md-10 offset-md-1 flexy mt8">
          <div className="col-md-5 ">
            <h3>Manage subjects</h3>
            <p>
              Teachers can manage their assigned courses, view class details,
              and access student information within their classes.
            </p>
            <h3>Attendance Taking</h3>
            <p>
              Teachers can take attendance for their classes, mark students
              present or absent, and generate attendance reports.
            </p>
            <h3>Communication</h3>
            <p>
              Teachers can communicate with students through announcements,
              messaging, or discussion forums, facilitating seamless interaction
              and addressing queries.
            </p>
          </div>
          <div className="col-md-8">
            {" "}
            <img className="col-md-12 " src={Img2} alt="Scholar" width="100%" />
          </div>
        </div>
      </div>
      <center className="mt">
        <h1>Parents</h1>
      </center>
      <div className="col-md-10 offset-md-1 flexy mt8 dashboards-views">
        <div className="col-md-7">
          {" "}
          <img className="col-md-12 " src={Img3} alt="Scholar" width="100%" />
        </div>
        <div className="col-md-5 ">
          <h3>Dashboard</h3>
          <p>
            The parents’ dashboard provides an overview of their child’s
            academic performance, attendance, and upcoming assignments or
            events.
          </p>
          <h3>Attendance Monitoring</h3>
          <p>
            Parents can access real-time attendance reports, ensuring they are
            informed about their child’s class attendance and any potential
            attendance issues.
          </p>
          <h3>School Announcements</h3>
          <p>
            Parents receive school-wide announcements and important updates,
            keeping them informed about school events, holidays, or any changes
            to the academic calendar.
          </p>
        </div>
      </div>
      <div className="container-fluid grey-dashedbs mt8">
        <center>
          <h1>Students</h1>
        </center>
        <div className="col-md-10 offset-md-1 flexy mt8 dashboards-views">
          <div className="col-md-5 ">
            <h3>Access to subjects</h3>
            <p>
              Students can access their enrolled subjects and view subjects
              materials, announcements, and assignments.
            </p>
            <h3>Attendance Details</h3>
            <p>
              Students can view their attendance records, helping them stay
              informed about their class attendance.
            </p>
            <h3>Submission of Assignments</h3>
            <p>
              Students can submit their completed assignments through the
              software module, ensuring timely submissions.
            </p>
          </div>
          <div className="col-md-8">
            {" "}
            <img className="col-md-12 " src={Img4} alt="Scholar" width="100%" />
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 dashboard-get-started flexy">
        <div className="col-md-5 offset-md-1">
          <h2>Get started with educare today</h2>
        </div>
        <div className="offset-md-2 mt2 offset-1">
          <GetStartedForm
            text=" Get started"
            bg="#0098DA"
            cls="gsmcal"
            bgbtn="#0098DA"
            backdropbg="modal-backdrop-blue"
          />
          <button className="demo">Request for demo</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
