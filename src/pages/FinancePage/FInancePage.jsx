import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import "./finance-page.scss";
import Setting from "../../assets/images/purple-setting.svg";
import Track from "../../assets/images/p-screen.svg";
import Storage from "../../assets/images/p-tick.svg";
import Support from "../../assets/images/payroll.svg";
import Together from "../../assets/images/p-chart.svg";

import DashboardDisplay from "./DashboardDisplay/DashboardDisplay";
import Efficiency from "../../components/Efficiency/Efficiency";
import Prices from "../../components/Prices/Prices";
import { Link, NavLink } from "react-router-dom";
import Shield from "../../assets/images/security.json";
import Lottie from "react-lottie-player";
import { Prefooter } from "../../components/Prefooter/Prefooter";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
export const FinancePage = () => {
  return (
    <>
      <div className="col-md-12 nav-two-finance col-12">
        {" "}
        <NavTwo
          title="Finance"
          nav1="Features"
          // nav2="Pricing"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "140px" }} />

      <center>
        {" "}
        <div className="col-md-6 finance-intro">
          <Heading
            color="#3B0F8E"
            text="Introducing educare Finance"
            bg="#DED0FA"
            boda="#DED0FA"
          />
          <h1>
            Efficiency Meets Simplicity: Discover the All-Inclusive Educare
            Finance Solution
          </h1>
          <p className="col-md-11">
            Step into a future of financial empowerment with Educare Finance.
            Effortlessly manage invoicing, expenditures, and online payments.
            Gain full control over budgets and payroll, making strategic
            decisions with confidence. Experience stability, security, and
            unprecedented growth as Educare Finance becomes your unwavering
            ally.
          </p>
          <div className="flexy flexyM offset-md-4 mt4 finance-btns offset-1">
            <GetStartedForm
              text=" Get started"
              bg="#4A13B2"
              cls="gsmf"
              bgbtn="#4A13B2"
              backdropbg="modal-backdrop-purple"
            />
            <button className="demo">Request for demo</button>
          </div>
        </div>
      </center>
      <div id="features" />
      <center>
        <h1 className="col-md-3">Key features of our finance</h1>
      </center>
      <DashboardDisplay />

      <div className="col-md-12 integrated-finance">
        <center>
          <div className="col-md-5">
            <h1>Benefits of an Integrated Finance Suite for Your Business</h1>
          </div>
        </center>
        <div className="col-md-10 offset-md-1 flexy  mt">
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Optimize your business operations with efficiency"
                icon={Setting}
                paragraph="By automating essential financial processes, this powerhouse solution streamlines your operations, freeing up valuable time and resources. From invoicing to expense management, every aspect is seamlessly synchronized, paving the way for unrivaled productivity and growth. Take charge of your business like never before with Educare Finance Manager - the catalyst for a new era of success!"
              />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Empower Your Decisions, Elevate Your Business"
                icon={Track}
                paragraph="Elevate your decision-making game with Educare Finance Manager. Gain deep insights into your business's financial health, and make informed choices that steer your company towards prosperity. With real-time data at your fingertips, you'll gain the power to steer your business towards the future with confidence and clarity."
              />
            </div>
          </div>{" "}
          <div className="col-md-4">
            <div className="col-md-10">
              <Efficiency
                title="Simplify and Conquer: Automated Financial Management with Educare!"
                icon={Storage}
                paragraph="The key to overcoming complex financial challenges lies in simplicity. Educare Finance Manager simplifies your financial management through cutting-edge automation tools.  Let our Finance Manager be your trusted ally in conquering financial complexities, allowing you to focus on what you do best - propelling your business to new heights."
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 offset-md-3 flexy  mt7">
          <div className="col-md-6">
            <div className="col-md-11">
              <Efficiency
                title="Effortless Payroll Mastery: Educare Finance Manager Takes the Lead!"
                icon={Support}
                paragraph="Managing payroll doesn't have to be a daunting task. With Educare Finance Manager, payroll accounting becomes a breeze. Say goodbye to manual calculations and paperwork, and say hello to streamlined payroll processing."
              />
            </div>
          </div>{" "}
          <div className="col-md-6 offset-md-1 ml5 no-m">
            <div className="col-md-11">
              <Efficiency
                title="Payroll Power at Your Fingertips: Access Data on Demand with Educare!"
                icon={Together}
                paragraph="Instant access to crucial payroll data can make all the difference in business operations.  With Educare Finance Manager, never again let payroll become a hindrance to your business's smooth functioning; instead, turn it into a powerful asset that drives growth and success."
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="finance-plans col-md-12" id="pricing">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our Finance.
            </p>
          </div>
       
        </div>
        <div className="offset-md-4 recomendF">
          {" "}
          <button>Recommended</button>
        </div>
        <div className="col-md-10 offset-md-1 flexy prices-contain">
          <div className="col-md-3 zoom curve">
            {" "}
            <Prices
              package="Basic"
              amount="400.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
            
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            {" "}
            <Prices
              package="Professional"
              amount="600.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            {" "}
            <Prices
              package="Premium"
              amount="800.00"
              annualAmount="₦75 billed annually"
              paragraph="Per Student (Monthly)"
              currency="₦"
            />
          </div>{" "}
          <div className="col-md-3 zoom curve2">
            {" "}
            <Prices
              package="Enterprise"
              amount="Contact Us"
              url={""}
             
            />
          </div>
        </div>
        <center>
          <p>
            Kindly check out our{" "}
            <Link to={"/educare-business"} className="link">
              Pricing page
            </Link>{" "}
            for complete details
          </p>
        </center>
      </div> */}
      <div className="col-md-10 offset-md-1 flexy mt lottie-div">
        <div className="col-md-6 ">
          <h3>Security at the heart of everything</h3>
          <p>
            educare is dedicated to safeguarding the privacy and security of its
            customers’ data. To achieve this goal, we employ a range of robust,
            enterprise-level security features, and conduct regular audits of
            our applications, infrastructure, and internal policies. By doing
            so, we strive to ensure uninterrupted services and a secure
            environment for your data.
          </p>
        </div>
        <div className="col-md-5 offset-md-1">
          <Lottie
            loop
            animationData={Shield}
            play
            className="lottieee"
            style={{}}
          />
        </div>
      </div>
      <Prefooter
        text="Provide a Finance experience that 
              will scale your business upward."
      />
    </>
  );
};
