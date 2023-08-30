import React from "react";
import Form from "../../components/Form/Form";
import { Heading } from "../../components/Heading/Heading";
import { NavTwo } from "../../components/NavTwo/NavTwo";
import ThreeItemComponent from "../../components/ThreeItemComponent/ThreeItemComponent";
import Key from "../../assets/images/key.svg";
import Padlock from "../../assets/images/padlock.svg";
import Tick from "../../assets/images/tick-shield.svg";
import Person from "../../assets/images/person.svg";
import Icon1 from "../../assets/images/mailicon-1.png";
import Icon2 from "../../assets/images/mailicon-2.png";
import Icon3 from "../../assets/images/mailicon-3.png";
import { Link, NavLink } from "react-router-dom";

import "./mail-page.scss";
import DashboardDisplay from "./DashboardDisplay/DashboardDisplay";
import Prices from "../../components/Prices/Prices";
import MailboxFAQ from "./MailboxFAQ/MailboxFAQ";
import { Prefooter } from "../../components/Prefooter/Prefooter";
function MailPage() {
  return (
    <>
      <div className="col-md-12 nav-two-mailbox col-12">
        {" "}
        <NavTwo
          title="MailBox"
          priceUrl="#pricing"
          nav1="Features"
          nav3="Resources"
        />
      </div>
      <div style={{ height: "130px" }} />
      <div className="col-md-12 mail-div">
        <div className="col-md-10 offset-md-1 flexy">
          <div className="col-md-6 mt div1">
            <Heading
              text="Introducing educare mailbox"
              bg="#F5DCF8"
              color="#C32BD6"
              boda="solid 1px #C32BD6"
            />
            <h2>
              More Than Just Emailing: Amplify Your Reach with educare's
              Intelligent Mailbox.
            </h2>
            <p>
              With educare intelligient Mailbox, You can Create and Send
              Personalised Bulk Emails and Track Delivery Status. Experience the
              Security, Encryption, Privacy, and Ad-free Environment your
              Business Email Deserves.
            </p>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="col-md-10">
              <Form
                bg="#C32BD6"
                text="Get started"
                formHeading="Sign up and onboard your school in seconds"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="features" />
      <center>
        <div className="col-md-6 mt">
          <h1>
            Privacy, Perfected: Discover the Unbeatable Features of Our Email
            Service.
          </h1>
        </div>
      </center>{" "}
      <center>
        <div className="col-md-6 mt3 ">
          <p>
            educare's mailbox module stands as the paragon of privacy and
            security, where data ownership, encryption, and user consent reign
            supreme.
          </p>
        </div>
      </center>
      <div className="col-md-10 offset-md-1 flexy mt">
        <div className="col-md-4">
          <div className="col-md-10">
            <ThreeItemComponent
              title="Empower Your Data Sovereignty"
              paragraph="With educare's mailbox module, you are the true owner of your data. We believe in empowering users with complete control over their information, ensuring that your valuable data remains in your hands at all times. Embrace the freedom to access, manage, and delete your data as you see fit, making educare the guardian of your digital sovereignty."
              icon={Key}
            />
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-10">
            <ThreeItemComponent
              title="Fortress of Encryption"
              paragraph="Privacy is not just a promise; it's a guarantee with educare's mailbox module. Every communication and piece of information transmitted through our platform is fortified with state-of-the-art encryption technology. Feel confident knowing that your messages and data are protected from prying eyes, ensuring a fortress of privacy that stands unyielding against any threat."
              icon={Key}
            />
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="col-md-10">
            <ThreeItemComponent
              title="Transparency in Every Byte"
              paragraph="At educare, we believe in transparent practices that build trust. Our mailbox module comes with crystal-clear privacy policies, leaving no room for ambiguity. You deserve to know how your data is handled, and we proudly uphold our commitment to openness, so you can use our platform with peace of mind."
              icon={Padlock}
            />
          </div>
        </div>
      </div>
      <div className="col-md-10 offset-md-2 flexy mt9">
        <div className="col-md-4">
          <div className="col-md-11">
            <ThreeItemComponent
              title="Shielded by Ironclad Security"
              paragraph="With educare, security is not just a feature; it's the foundation of our platform. Our mailbox module operates on a secure infrastructure, equipped with robust defenses against cyber threats. From top-notch firewalls to continuous monitoring, we leave no stone unturned in safeguarding your data and ensuring uninterrupted service."
              icon={Tick}
            />
          </div>
        </div>{" "}
        <div className="col-md-4 offset-md-1">
          <div className="col-md-11">
            <ThreeItemComponent
              title="Embrace the Freedom of User Control and Consent!"
              paragraph="At educare, your choices matter. Our mailbox module puts you in the driver's seat, allowing you to control your data and communications with ease. With user-centric features, you decide who can access your information, ensuring that consent is at the heart of every interaction. Feel empowered and protected on your digital journey with educare."
              icon={Person}
            />
          </div>
        </div>
      </div>
      <DashboardDisplay />
      <center>
        {" "}
        <div className=" col-md-9 flexy mtt">
          <div className="col-md-4">
            <div className="col-md-11 item-div">
              <ThreeItemComponent
                title="User Control and Consent"
                paragraph="Control every aspect of your email data. Our industry-leading privacy policies guarantee that only you own the data."
                icon={Icon3}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-11 item-div">
              <ThreeItemComponent
                title="Secure Attachment Handling"
                paragraph="Sharing files and documents via email can pose risks if not handled securely. Our solution offers secure attachment handling, ensuring that your sensitive files remain protected throughout transmission."
                icon={Icon2}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-md-11 item-div">
              <ThreeItemComponent
                title="Data Loss Prevention"
                paragraph="Safeguarding sensitive data is critical for your organization’s. Our solution incorporates robust data loss prevention measures, enabling you to define policies and rules to prevent accidental or intentional data leakage."
                icon={Icon1}
              />
            </div>
          </div>
        </div>
      </center>
      {/* <div className="mail-plans col-md-12" id="pricing">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our Mailbox.
            </p>
          </div>
         
        </div>
        <div className="offset-md-4 recomend2">
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
              // cls="curve"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            <div className="recomend2">
          
            </div>
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
            <Link to={"/educare-business"} className="linkp">
              Pricing page
            </Link>{" "}
            for complete details
          </p>
        </center>
      </div>    {/* <div className="mail-plans col-md-12" id="pricing">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our Mailbox.
            </p>
          </div>
         
        </div>
        <div className="offset-md-4 recomend2">
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
              // cls="curve"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            <div className="recomend2">
          
            </div>
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
            <Link to={"/educare-business"} className="linkp">
              Pricing page
            </Link>{" "}
            for complete details
          </p>
        </center>
      </div>    {/* <div className="mail-plans col-md-12" id="pricing">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our Mailbox.
            </p>
          </div>
         
        </div>
        <div className="offset-md-4 recomend2">
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
              // cls="curve"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            <div className="recomend2">
          
            </div>
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
            <Link to={"/educare-business"} className="linkp">
              Pricing page
            </Link>{" "}
            for complete details
          </p>
        </center>
      </div>    {/* <div className="mail-plans col-md-12" id="pricing">
        <div className="col-md-10 offset-md-1 flexy ">
          <div className="col-md-7">
            <h3>Pricing plans start at just ₦400/month</h3>
            <p className="paragraph">
              Select from a range of plans and supplementary features. You will
              not be charged until you are prepared to use our Mailbox.
            </p>
          </div>
         
        </div>
        <div className="offset-md-4 recomend2">
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
              // cls="curve"
            />
          </div>{" "}
          <div className="col-md-3 zoom">
            <div className="recomend2">
          
            </div>
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
            <Link to={"/educare-business"} className="linkp">
              Pricing page
            </Link>{" "}
            for complete details
          </p>
        </center>
      </div> */}
      <center>
        <div className="col-md-8 question-div">
          <h1>Frequently asked questions</h1>
          <MailboxFAQ />
        </div>
      </center>
      <Prefooter
        text="No ads. Secure. Private"
        paragraph="Host Your Business Email"
      />
    </>
  );
}

export default MailPage;
