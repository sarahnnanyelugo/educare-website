import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { EducareForBusiness } from "./pages/EducareForBusiness/EducareForBusiness";
import { EducareForSchools } from "./pages/EducareForSchools/EducareForSchools";
import ScrollToTop from "./components/scrollToTop";
import EducarePackages from "./pages/EducarePackages/EducarePackages";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import Pastoral from "./pages/PastoralPage/PastoralPage";
import MedicalsPage from "./pages/MedicalsPage/MedicalsPage";
import EClassroomPage from "./pages/EClassroomPage/EClassroomPage";
import { HRMPage } from "./pages/HRMPage/HRMPage";
// import educareSchoolPackages from "./pages/educareSchoolPackages/educareSchoolPackages";
import { FinancePage } from "./pages/FinancePage/FInancePage";
import MailPage from "./pages/MailPage/MailPage";
import VotingSystem from "./pages/VotingSystem/VotingSystem";
import ContactPage from "./pages/ContactPage/ContactPage";
import Top from "./assets/images/top2.png";
import LessonPlanner from "./pages/LessonPlanner/LessonPlanner";
import Library from "./pages/Library/Library";
import Timetable from "./pages/Timetable/Timetable";
import WeeklyRemarks from "./pages/WeeklyRemarks/WeeklyRemarks";
import CBT from "./pages/CBT/CBT";
import Calendar from "./pages/Calendar/Calendar";
import Report from "./pages/Report/Report";
import WalletManager from "./pages/WalletManager/WalletManager";
import AdmissionPage from "./pages/AdmissionPage/AdmissionPage";
import FacilityManager from "./pages/FacilityManager/FacilityManager";
import Careers from "./pages/Careers/Careers";
import Support from "./pages/Support/Support";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";
import MiniBlog from "./pages/Blog/BlogPost/MiniBlog";
import MainBlog from "./pages/Blog/BlogPost/MainBlog";
import Logistics from "./pages/Logistics/Logistics";
import HealthCare from "./pages/HealthCare/HealthCare";
import Retail from "./pages/Retail/Retail";
import Construction from "./pages/Construction/Construction";
import FinanceServices from "./pages/FinanceServices/FinanceServices";
import Consulting from "./pages/Consulting/Consulting";
import Manufacturing from "./pages/Manufacturing/Manufacturing";
import Government from "./pages/Government/Government";
import Energy from "./pages/Energy/Energy";
import School from "./pages/School/School";
import BePartner from "./pages/BePartner/BePartner";
import AllProducts from "./pages/AllProducts/AllProducts";
import CustomersStories from "./pages/CustomersStories/CustomersStories";
import Assignment from "./pages/Assignment/Assignment";
import Clubs from "./pages/Clubs/Clubs";
import DailyReporting from "./pages/DailyReporting/DailyReporting";
import Dashboards from "./pages/Dashboards/Dashboards";
// import MiniBlog from "./pages/Blog/MiniBlog";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    // console.log(scrollPosition);
  };
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      // console.log("scrolling up");
      setScrollDirection(1);
    } else if (y < window.scrollY) {
      // console.log("scrolling down");
      setScrollDirection(-1);
    }
    setY(window.scrollY);
    handleScroll();
  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since it's going to run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="educare-business" element={<EducareForBusiness />} />
        <Route path="educare-schools" element={<EducareForSchools />} />
        <Route path="educare-packages" element={<EducarePackages />} />
        {/* <Route
          path="educare-school-packages"
          element={<educareSchoolPackages />}
        /> */}

        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="pastoral" element={<Pastoral />} />
        <Route path="medicals" element={<MedicalsPage />} />
        <Route path="e-classroom" element={<EClassroomPage />} />
        <Route path="hrm" element={<HRMPage />} />
        <Route path="finance" element={<FinancePage />} />
        <Route path="mail-box" element={<MailPage />} />
        <Route path="voting-system" element={<VotingSystem />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="lesson-planner" element={<LessonPlanner />} />
        <Route path="library" element={<Library />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="weekly-remarks" element={<WeeklyRemarks />} />
        <Route path="cbt" element={<CBT />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="report" element={<Report />} />
        <Route path="wallet-manager" element={<WalletManager />} />
        <Route path="admission" element={<AdmissionPage />} />
        <Route path="facility-manager" element={<FacilityManager />} />
        <Route path="careers" element={<Careers />} />
        <Route path="support" element={<Support />} />
        <Route path="about-us" element={<AboutUs />} />

        <Route  path='blog/*'>
          <Route path="" element={<Blog />} />
          <Route path=":postSlug" element={<MainBlog />} />
        </Route>

        <Route path="logistics" element={<Logistics />} />
        <Route path="healthcare" element={<HealthCare />} />
        <Route path="retail" element={<Retail />} />
        <Route path="construction" element={<Construction />} />
        <Route path="finance-services" element={<FinanceServices />} />
        <Route path="consulting" element={<Consulting />} />
        <Route path="manufacturing" element={<Manufacturing />} />
        <Route path="government" element={<Government />} />
        <Route path="energy" element={<Energy />} />
        <Route path="schools" element={<School />} />
        <Route path="be-partner" element={<BePartner />} />
        <Route path="all-products" element={<AllProducts />} />
        <Route path="customer-stories" element={<CustomersStories />} />
        <Route path="assignment" element={<Assignment />} />
        <Route path="clubs" element={<Clubs />} />
        <Route path="daily-reporting" element={<DailyReporting />} />
        <Route path="dashboards" element={<Dashboards />} />
      </Routes>
      <Footer />
      {/* <div
        className={`top col-md-1 offset-md-11  ${
          (scrollPosition >= 400 && scrollDirection < 0) || scrollPosition == 0
            ? "hide"
            : ""
        }`}
      >
        {" "}
        <a href="#nav">
          {" "}
          <img src={Top} alt="Scholar" />
        </a>
      </div> */}
    </>
  );
}

export default App;
