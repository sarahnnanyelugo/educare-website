import React from "react";
import { RandomComponent } from "./RandomComponent/RandomComponent";
import "./_home.scss";
import RedIcon from "../../assets/images/red-dots.svg";
import BlueIcon from "../../assets/images/blue-dots.svg";
import YellowIcon from "../../assets/images/yellow-dots.svg";
import HalfCircle from "../../assets/images/half-circle.svg";
import People from "../../assets/images/people.svg";
import Mail from "../../assets/images/edit.svg";
import People2 from "../../assets/images/people2.svg";
import Pastoral from "../../assets/images/pastoral.svg";
import Chart from "../../assets/images/chart.svg";
import Screen from "../../assets/images/screen.svg";
import Classroom from "../../assets/images/read-book.svg";
import Wallet from "../../assets/images/wallet.svg";
import Student from "../../assets/images/students.svg";
import Payroll from "../../assets/images/wages.svg";
import Training from "../../assets/images/training.svg";

import Message from "../../assets/images/message.svg";
import Features from "./Features/Features";
import EducareProducts from "./EducareProducts/EducareProducts";
import OtherEducareProducts from "./OtherEducareProducts/OtherEducareProducts";
import PinkChart from "../../assets/images/inventory.svg";
import Account from "../../assets/images/stroke.svg";
import Budjet from "../../assets/images/budget.svg";
import Requisition from "../../assets/images/project.svg";
import Facility from "../../assets/images/list.svg";
import Report2 from "../../assets/images/rep.svg";
import Calendar from "../../assets/images/calendar.svg";
import Configure from "../../assets/images/configure.svg";
import CBT from "../../assets/images/computer-setting.svg";
import Senior from "../../assets/images/rep.svg";
import Junior from "../../assets/images/junior.svg";
import Transcript from "../../assets/images/cert.svg";
import Insight from "../../assets/images/insights.svg";
import Transfer from "../../assets/images/transfer-manager.svg";
import Communication from "../../assets/images/book-review.svg";
import Mailbox from "../../assets/images/edit.svg";
import Result from "../../assets/images/result.svg";
import Question from "../../assets/images/question.svg";
import CBT2 from "../../assets/images/computer-setting.svg";
import Test from "../../assets/images/web-testing.svg";
import TestResult from "../../assets/images/tick.svg";
import Analysis from "../../assets/images/analyse.svg";
import Medical from "../../assets/images/med.svg";
import Lib from "../../assets/images/lib.svg";
import Remarks from "../../assets/images/remark.svg";
import Lesson from "../../assets/images/lesson.svg";
import Voting from "../../assets/images/voting.svg";
// import Eclassroom from "../../assets/images/read-book.svg";
import Points from "../../assets/images/meeting-points.svg";
import Hostel from "../../assets/images/yellow-chart.svg";
import Exeact from "../../assets/images/logout.svg";
import Activity from "../../assets/images/empty.svg";
import Timetable from "../../assets/images/timetable.svg";
import Work from "../../assets/images/fast-forward.svg";
import Performance from "../../assets/images/clock.svg";
import Recruitment from "../../assets/images/recruitment.svg";
import Access from "../../assets/images/control.svg";
import Striped from "../../assets/images/stripe-bg.png";
import { Link, NavLink } from "react-router-dom";
import { LatestBlogIndex } from "../../TestData";
import MiniBlog from "../Blog/BlogPost/MiniBlog";
import LatestBlog from "./LatetestBlog";
import Principles from "./Principles/Principles";
import Prin1 from "../../assets/images/prin1.png";
import Prin2 from "../../assets/images/prin2.png";
import Prin3 from "../../assets/images/prin3.png";
import Prin4 from "../../assets/images/prin4.png";
import Prin5 from "../../assets/images/prin5.png";

import Invoicing from "../../assets/images/invoice.svg";
import Budgeting from "../../assets/images/budgeting.svg";
import Reporting from "../../assets/images/report.svg";
import Maintainance from "../../assets/images/maintain.svg";
import Repairs from "../../assets/images/tools.svg";
import SEN from "../../assets/images/sen.svg";
import Wify from "../../assets/images/wify.svg";
import Sec from "../../assets/images/secu.svg";
import Export from "../../assets/images/exp.svg";
import QuestionT from "../../assets/images/q-types.svg";
import Appraisal from "../../assets/images/appraisal.svg";
import Club from "../../assets/images/club.svg";
import Assignment from "../../assets/images/assignment.svg";
import Mentor from "../../assets/images/mentor.svg";
import Behavior from "../../assets/images/behave.svg";
import EYFS from "../../assets/images/eyfs.svg";
import LandingImg from "../../assets/images/spin-img.png";
import Dashboard from "../../assets/images/dashicon.svg";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import PartnersSlider from "../../components/PartnersSlider/PartnersSlider";
import SpinTwo from "./SpinTwo/SpinTwo";
export const Home = () => {
  return (
    <>
      <div className="col-md-12 modern-solutions-container flexy">
        <div className="col-md-5 offset-md-1 first-heading">
          <h1 className="col-md-10">Modern ERP solution designed for You!</h1>
          <p>
            Unlock Your Business’s Potential with Cutting-Edge Software
            Solutions , whether adopting your first ERP or migrating from an
            existing one, choose a complete, modular solution that meets every
            business need.
          </p>
          <Link to={"/sign-up"}>
            {" "}
            <button className="gs-button">Sign Up and Deploy in Seconds</button>
          </Link>

          <Link to={"/contact-us"}>
            <button className="request-button">Request for Demo</button>
          </Link>
        </div>
        <div className="col-md-5  spin-div offset-md-1">
          {" "}
          {/* <img className="" src={LandingImg} alt="Scholar" width="100%" /> */}
          <SpinTwo />
        </div>
      </div>

      <div className="col-md-12 stripe-bg"></div>
      <div className="col-md-12 actions-container ">
        <div className="col-md-10 offset-md-1 flexy">
          {" "}
          <div className="col-md-4">
            {" "}
            <div className="col-md-11">
              {" "}
              <RandomComponent
                title="Pick your tools"
                icon={RedIcon}
                paragraph=" Choose from our wide range of tools and select the ones that best fit Your business’s unique needs and goals."
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-11">
              {" "}
              <RandomComponent
                title="Work smart not hard"
                icon={YellowIcon}
                paragraph="Our smart solutions empower you to work smarter, not harder, allowing you to achieve more in less time and with less effort."
              />
            </div>
          </div>
          <div className="col-md-4">
            {" "}
            <div className="col-md-11">
              {" "}
              <RandomComponent
                title="We’ve got your back"
                icon={BlueIcon}
                paragraph="You can count on our support and expertise every step of the way, so you can focus on your business’s growth and success."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 ">
        <PartnersSlider />
      </div>
      <div className="features-heading">
        <center>
          <h1>Featured Products</h1>
        </center>
      </div>
      <div className="col-md-12 features-general">
        {" "}
        <div
          className="col-md-12  flexy features-holder"
          style={{ paddingBottom: "50px" }}
        >
          <div className="col-md-1">&nbsp;</div>
          <div className="col-md-10  features-container flexy">
            <div className="col-md-6 first-container">
              <h3>educare for Business</h3>
              <p>
                Empower your team to work smarter, not harder, with our powerful
                software solution that simplifies complex tasks, frees up time,
                and drives business growth.
              </p>
              <br />
              <Link to={"/educare-business"}>
                {" "}
                <button>Get Started</button>
              </Link>
            </div>
            <div className="col-md-6">
              <div className="col-md-12 flexy">
                {" "}
                <div className="col-md-6 right-features">
                  <Features
                    feature="Finance"
                    detail="The one and only accounting and payroll solution your business will ever need."
                    icon={HalfCircle}
                    url={"./finance"}
                  />{" "}
                </div>{" "}
                <div className="col-md-6 hr-manager">
                  <Features
                    feature="HR Manager"
                    detail="Streamline your HR tasks with our comprehensive HR manager."
                    icon={People2}
                    url={"./hrm"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 flexy second-grid">
                {" "}
                <div className="col-md-6 right-features">
                  <Features
                    feature="MailBox"
                    detail="Simplify communication with our powerful mailbox."
                    icon={Mail}
                    url={"./mail-box"}
                  />{" "}
                </div>{" "}
                <div className="col-md-6">
                  <Features
                    feature="Facility Management"
                    detail="Optimize your workforce with our staff management module."
                    icon={People}
                    url={"./facility-manager"}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-md-12  flexy features-holder2">
            <div className="col-md-1">&nbsp;</div>
            <div className="col-md-10  features-container flexy ">
              <div className="col-md-6 first-container">
                <h3>educare for Schools</h3>
                <p>
                  Revolutionize your school’s operations and student learning
                  experiences with our innovative software solution.
                </p>
                <br />
                <Link to={"/educare-schools"}>
                  {" "}
                  <button>Get Started</button>
                </Link>
              </div>
              <div className="col-md-6">
                <div className="col-md-12 flexy">
                  {" "}
                  <div className="col-md-6 right-features">
                    <Features
                      feature="Report"
                      detail="Generate detailed school reports with ease using our user-friendly report."
                      icon={Chart}
                      url={"./report"}
                    />{" "}
                  </div>{" "}
                  <div className="col-md-6 pastoral">
                    <Features
                      feature="Pastoral"
                      detail="Enhance your institution’s pastoral care with our innovative software module"
                      icon={Pastoral}
                      url={"./pastoral"}
                    />{" "}
                  </div>
                </div>
                <div className="col-md-12 flexy second-grid">
                  {" "}
                  <div className="col-md-6 right-features">
                    <Features
                      feature="CBT"
                      detail="Revolutionize your testing process with our computer-based test module."
                      icon={Screen}
                      url={"./cbt"}
                    />{" "}
                  </div>{" "}
                  <div className="col-md-6">
                    <Features
                      feature="eClassroom"
                      detail="Versatile software module designed to enhance virtual learning and collaboration within schools."
                      icon={Classroom}
                      url={"./e-classroom"}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 ashen">
          {" "}
          <div className="col-md-10 offset-md-1 principles-div mt">
            <center>
              {" "}
              <h2>Principles that drive us to create great products</h2>
            </center>
            <div className="flexy mt4">
              <div className="col-md-4 contnrs">
                <div className="col-md-11">
                  <Principles
                    heading="Excellence"
                    detail="We strive for excellence in everything we do, delivering high-quality software solutions that exceed expectations and drive exceptional results for our clients."
                    icon={Prin1}
                  />
                </div>
              </div>{" "}
              <div className="col-md-4  contnrs">
                <div className="col-md-11">
                  <Principles
                    heading="Continuous Improvement"
                    detail="Our commitment to continuous improvement is backed by a solid foundation of knowledge and experience, ensuring that we provide the highest quality of service and solutions to our clients."
                    icon={Prin2}
                  />
                </div>
              </div>{" "}
              <div className="col-md-4  contnrs">
                <div className="col-md-11">
                  <Principles
                    heading="Innovation"
                    detail="We foster a culture of innovation, continuously pushing the boundaries to develop and refine software that anticipates future needs and embraces emerging technologies.."
                    icon={Prin3}
                  />
                </div>
              </div>
            </div>
            <div className="flexy  offset-md-2 mt7 col-md-8">
              <div className="col-md-6 contnrs">
                <div className="col-md-11">
                  <Principles
                    heading="Customer-Centricity"
                    detail="Our clients are at the heart of everything we do. We prioritize their success, actively listening to their feedback, and providing personalized support to ensure their satisfaction.."
                    icon={Prin4}
                  />
                </div>
              </div>{" "}
              <div className="col-md-6  contnrs">
                <div className="col-md-11">
                  <Principles
                    heading="Integrity"
                    detail="We uphold the highest ethical standards, maintaining integrity in our interactions with clients, partners, and employees. Trust and transparency are the foundation of our relationships."
                    icon={Prin5}
                  />
                </div>
              </div>{" "}
            </div>
            <center>
              {/* <Link to={"/"}>
                {" "}
                <button>Get started with us</button>
              </Link> */}
              <GetStartedForm
                text=" Get started with us"
                bg="#0098DA"
                cls="gsmcal"
                bgbtn="#0098DA"
                backdropbg="modal-backdrop-dark"
              />
            </center>
          </div>
        </div>
        <div className="col-md-12 products-container radiant">
          <center className="mt">
            <h1>All educare Products</h1>
          </center>
          <div className="col-md-10  flexy offset-md-1">
            <div className="col-md-4 first-product-column">
              <EducareProducts
                productName="Finance"
                productDetail="The one and only accounting and payroll solution your business will ever need"
                productIcon={HalfCircle}
                url={"./finance"}
              />
              <div className="col-md-12 flexy flexyM mt9">
                <div className="col-md-6 col-6 grid1">
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Invoicing}
                      productName="Invoicing"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Budgeting}
                      productName="Expense Management"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 other-components">
                    <OtherEducareProducts
                      productIcon={Requisition}
                      productName="Requisition"
                      url={"./"}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  {" "}
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={PinkChart}
                      productName="Inventory"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Budjet}
                      productName="Budget Management"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Reporting}
                      productName="Reporting"
                      url={"./"}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Calendar"
                  productDetail="Stay organized and on schedule with our intuitive calendar module."
                  productIcon={Calendar}
                  url={"./calendar"}
                />
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Facility Management"
                  productDetail="Efficiently manage your facilities with our innovative software module."
                  productIcon={People}
                  url={"./facility-manager"}
                />
              </div>
              <div className="col-md-12 flexy flexyM  ">
                <div className="col-md-6 col-6 other-components bb br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Facility}
                    productName="Facility List"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components bb ">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Report2}
                    productName="Facility Report"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 flexy flexyM ">
                <div className="col-md-6 col-6 other-components br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Repairs}
                    productName="Repairs"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Maintainance}
                    productName="Maintenance"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Wallet Manager"
                  productDetail="Take control of your finances with our intuitive wallet manager module."
                  productIcon={Wallet}
                  url={"./wallet-manager"}
                />
              </div>{" "}
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Students Admission"
                  productDetail="Transform your admissions process with our streamlined software module."
                  productIcon={Student}
                  url={"./admission"}
                />
              </div>{" "}
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Clubs"
                  productDetail="Track and monitor your School activities outside core curriculum."
                  productIcon={Student}
                  url={"./clubs"}
                />
              </div>
            </div>{" "}
            <div className="col-md-4 second-product-column">
              <div className="col-md-12 bb other-components">
                <EducareProducts
                  productName="Dashboards"
                  productDetail="An overview of the dashboards included in Educare."
                  productIcon={Dashboard}
                  url={"./dashboards"}
                />{" "}
              </div>
              <div className="col-md-12 other-components">
                <EducareProducts
                  productName="Reports"
                  productDetail="Customize, develop, and distribute report cards like you have never done before."
                  productIcon={Chart}
                  url={"./report"}
                />
              </div>
              <div className="col-md-12 flexy flexyM mt9">
                <div className="col-md-6 col-6 grid1">
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={EYFS}
                      productName="EYFS Report"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    <OtherEducareProducts
                      productIcon={Senior}
                      productName="Senior School Report"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 other-components">
                    <OtherEducareProducts
                      productIcon={Insight}
                      productName="Report Analysis"
                      url={"./"}
                    />{" "}
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  {" "}
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Junior}
                      productName="Junior School Report"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    <OtherEducareProducts
                      productIcon={SEN}
                      productName="Special Educational Needs (SEN) report"
                      url={"./"}
                    />
                  </div>
                  <div className="col-md-12 other-components">
                    <OtherEducareProducts
                      productIcon={Transcript}
                      productName="Transcripts"
                      url={"./"}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Mailbox"
                  productDetail="Simplify communication with our powerful mailbox"
                  productIcon={Mailbox}
                  url={"./mail-box"}
                />
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="CBT"
                  productDetail="Revolutionize your testing process with our computer-based test module."
                  productIcon={Screen}
                  url={"./cbt"}
                />
              </div>
              <div className="col-md-12 flexy flexyM bb">
                <div className="col-md-6 col-6 other-components br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Wify}
                    productName="Online/Offfline Capability"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Question}
                    productName="Question Bank"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 flexy flexyM bb">
                <div className="col-md-6 col-6 other-components br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={QuestionT}
                    productName="Question Types"
                    url={"./cbt"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Export}
                    productName="Result Export"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 flexy flexyM bb">
                <div className="col-md-6 col-6 other-components br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Sec}
                    productName="Security Features"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Analysis}
                    productName="Test Analysis"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Medicals"
                  productDetail="Streamline medical operations with our innovative software module"
                  productIcon={Medical}
                  url={"./medicals"}
                />
              </div>{" "}
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Library"
                  productDetail="Simplify your library management with our innovative software module."
                  productIcon={Lib}
                  url={"./library"}
                />
              </div>
            </div>
            <div className="col-md-4 third-product-column">
              <EducareProducts
                productName="HR Manager"
                productDetail="Streamline your HR tasks with our comprehensive HR manager."
                productIcon={People2}
                url={"./hrm"}
              />
              <div className="col-md-12 flexy flexyM mt9">
                <div className="col-md-6 col-6 grid1">
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Recruitment}
                      productName="Recruitment"
                      url={"./"}
                    />{" "}
                  </div>{" "}
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Training}
                      productName="Training"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Work}
                      productName="Work Leave"
                      url={"./"}
                    />{" "}
                  </div>
                </div>
                <div className="col-md-6 col-6">
                  {" "}
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Appraisal}
                      productName="Appraisals"
                      url={"./"}
                    />{" "}
                  </div>{" "}
                  <div className="col-md-12 bb other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Payroll}
                      productName="Payroll"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 bb other-components">
                    {" "}
                    {/* <OtherEducareProducts
                      productIcon={Performance}
                      url={"./"}
                      productName="Performance"
                    />{" "} */}
                    <OtherEducareProducts
                      productIcon={Access}
                      productName="Access Control"
                      url={"./"}
                    />
                  </div>
                </div>{" "}
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Timetable"
                  productDetail="Organize schedules with ease using our intuitive timetable module."
                  productIcon={Timetable}
                  url={"./timetable"}
                />
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="Pastoral"
                  productDetail="Enhance your institution’s pastoral care with our innovative software module"
                  productIcon={Pastoral}
                  url={"./pastoral"}
                />
              </div>
              <div className="col-md-12 flexy flexyM bb">
                <div className="col-md-6 col-6 other-components br ">
                  {" "}
                  <div className="col-md-12 bb">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Behavior}
                      productName="Behavioural Management"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12 other-components">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Exeact}
                      productName="Exeat Request"
                      url={"./"}
                    />{" "}
                  </div>
                </div>
                <div className="col-md-6 col-6 other-components ">
                  {" "}
                  <div className="col-md-12 bb">
                    {" "}
                    <OtherEducareProducts
                      productIcon={Activity}
                      productName="Hostel Management"
                      url={"./"}
                    />{" "}
                  </div>
                  <div className="col-md-12  other-components">
                    {" "}
                    {/* <OtherEducareProducts
                      productIcon={Activity}
                      productName="Activity Point"
                      url={"./"}
                    />{" "} */}
                    <OtherEducareProducts
                      productIcon={Hostel}
                      productName="Hostel Report"
                      url={"./"}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="col-md-12 flexy flexyM ">
                <div className="col-md-6 col-6 other-components br">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Mentor}
                    productName="Mentor’s Report"
                    url={"./"}
                  />{" "}
                </div>
                <div className="col-md-6 col-6 other-components ">
                  {" "}
                  <OtherEducareProducts
                    productIcon={Points}
                    productName="Points Analysis"
                    url={"./"}
                  />{" "}
                </div>
              </div>
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName="eClassroom"
                  productDetail="Empower Your School with eClassroom: A Comprehensive Software Module for Virtual Learning and Collaboration."
                  productIcon={Classroom}
                  url={"./e-classroom"}
                />
              </div>{" "}
              <div className="col-md-12 bt pd">
                <EducareProducts
                  productName=" Assignment"
                  productDetail="Create assignments for Students in your school."
                  productIcon={Assignment}
                  url={"./assignment"}
                />
              </div>{" "}
              <div className="col-md-12 bt pd bl">
                <EducareProducts
                  productName="Lesson Planner"
                  productDetail="Streamline and simplify your lesson planning process with our lesson planner."
                  productIcon={Lesson}
                  url={"./lesson-planner"}
                />
              </div>
            </div>
          </div>
          <center className="mt7">
            {" "}
            <Link to={"/all-products"}>
              {" "}
              <button>View all products</button>
            </Link>
          </center>
        </div>
        <div className="col-md-12 privacy-protection">
          <div className="col-md-6 offset-md-3">
            <center>
              <h1>educare’s Privacy and Protection</h1>
              <p>
                educare ensures maximum data privacy by implementing advanced
                security measures including encryption and secure communication
                channels.
              </p>
            </center>
          </div>
        </div>
      </div>
      {/* <Partners /> */}
      <div className="col-md-12  latest-news-section">
        {" "}
        <div className="col-md-10 offset-md-1 ">
          <center>
            <h1>Resources and Insights</h1>
            <p>
              The latest news, interviews, technologies, and resources on
              educare.
            </p>
          </center>
          <section className="col-md-3 mt7">
            {" "}
            <div className="col-md-11 flexy gap-5 ">
              {" "}
              {LatestBlogIndex.map((data, index) => (
                <LatestBlog data={data} />
              ))}
            </div>
          </section>
          <center>
            {" "}
            <Link to={"/blog"}>
              <button className="resos-btn ">View all resources</button>
            </Link>
          </center>
        </div>
      </div>
    </>
  );
};
