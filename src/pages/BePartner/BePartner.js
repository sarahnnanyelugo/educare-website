import React from "react";
import GetStartedForm from "../../components/GetStartedForm/GetStartedForm";
import { Heading } from "../../components/Heading/Heading";
import "./be-partner.scss";
import Img1 from "../../assets/images/meta.png";
import Img2 from "../../assets/images/handsha.png";
import Img3 from "../../assets/images/stok.png";
import Img4 from "../../assets/images/part1.png";
import Img5 from "../../assets/images/part2.png";
import Img6 from "../../assets/images/part3.png";
import Img7 from "../../assets/images/part4.png";
import Standard from "../../assets/images/standard.png";
import Paystack from "../../assets/images/paystack2.png";
import Microsoft from "../../assets/images/microsoft.svg";
import Flutterwave from "../../assets/images/flutterwave2.svg";
import Aisa from "../../assets/images/aisa.svg";
import Grange from "../../assets/images/grange.png";
import LBS from "../../assets/images/lbs.png";
import Cobis from "../../assets/images/cobis.png";
import Apen from "../../assets/images/apen.png";
import Shake from "../../assets/images/partner-shake.png";
import { Link } from "react-router-dom";

function BePartner() {
  return (
    <>
      <div className="col-md-12 be-partner-container  ">
        <center>
          <div className="col-md-5">
            <Heading
              text="Become a partner"
              color="#0098DA"
              bg="#CEF0FF"
              boda="#CEF0FF"
            />
            <h1>Partner with educare to accelerate growth</h1>
            <p className="col-md-10">
              Join a global community of partners and help ambitious businesses
              with industry-leading products and softwares.
            </p>
            {/* <GetStartedForm
              text=" Get started"
              bg="#0098DA"
              cls="gsmrep"
              bgbtn="#0098DA"
              backdropbg="modal-backdrop-dark"
            /> */}
          </div>
        </center>
      </div>
      <div className="container-fluid partner-shadow">
        {" "}
        <div className="container edu-partnr">
          <center>
            {" "}
            <div className="col-md-6">
              {" "}
              <h1>Why become an educare Partner?</h1>
              <p className="col-md-8">
                Innovate, expand your customer reach, and grow your business
                with technical, marketing, and funding resources from educare.
              </p>
            </div>
          </center>
        </div>
      </div>
      <div className="container">
        <div className=" row-cols-1 row row-cols-lg-3 ">
          <div className="col">
            {" "}
            <div className="  partnrs-innovation partner-gains ">
              <center>
                <img className=" " src={Img1} alt="Scholar" />
                <h2>Innovation</h2>
                <p>
                  Unlock innovation and elevate your customer offerings with the
                  latest software solutions designed specifically for
                  educational institutions and businesses. Experiment, build,
                  and deliver differentiated experiences that set you apart from
                  the competition. Embrace the future of education with our
                  cutting-edge tools
                </p>
              </center>
            </div>
          </div>
          <div className="col">
            {" "}
            <div className="partnrs-reach partner-gains">
              <center>
                <img className=" " src={Img2} alt="Scholar" />
                <h2>Customer Reach</h2>
                <p>
                  Unlock growth potential for schools and businesses by
                  leveraging robust and expertly crafted software solutions.
                  Benefit from the extensive global network of educare, enabling
                  you to effortlessly scale your offerings and tap into new
                  markets. Stay ahead of the competition and discover untapped
                  customer segments with the power of educare technology.
                </p>
              </center>
            </div>
          </div>
          <div className="col">
            <div className="  partnrs-growth partner-gains ">
              <center>
                <img className=" " src={Img3} alt="Scholar" />
                <h2>Growth</h2>
                <p>
                  Tap into a wealth of resources, programs, and benefits
                  designed to enhance your school or business. Leverage
                  educare’s expertise and support to drive greater profitability
                  by delivering unique and valuable solutions. Experience a
                  competitive edge and unlock new avenues for success through
                  educare’s comprehensive software offerings.
                </p>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid partnrz-divs3">
        <div className="col-md-10 offset-md-1 mt partners-immgs2 row">
          <div className="col-md-4 pt-div">
            {" "}
            <center>
              <img className="cobis" src={Cobis} alt="Scholar" />
            </center>
          </div>{" "}
          <div className="col-md-4 pt-div">
            {" "}
            {/* <center>
              <img className="paystack" src={Paystack} alt="Scholar" />
            </center> */}
          </div>{" "}
          <div className="col-md-4 ">
            {" "}
            <center>
              <img className="grange" src={Microsoft} alt="Scholar" />
            </center>
          </div>
        </div>{" "}
        <div className="col-md-10 offset-md-1 partners-immgs2 row">
          <div className="col-md-4 pt-div"> </div>{" "}
          <div className="col-md-4 pt-div">
            {" "}
            <center>
              <img className="aisa" src={Aisa} alt="Scholar" />
            </center>
          </div>{" "}
          {/* <div className="col-md-4 ">
            {" "}
            <center>
              <img className="lbs" src={Apen} alt="Scholar" />
            </center>
          </div> */}
        </div>
        <center>
          <div className="col-md-4 partners-immgs2 row ">
            <center>
              <img className="standard" src={Standard} alt="Scholar" />
            </center>
          </div>
        </center>
      </div>
      <div className="container partner-benefits-1">
        <h6>Benefits for partners</h6>
        <h1>A program to grow your business</h1>
        <div className="col-md-5">
          <p>
            Achieve expertise in building, marketing, and selling educare as our
            valued partner. Access tools and resources to enhance customer
            engagement, deepen your product knowledge, and boost revenue.
          </p>
        </div>
        <div class="row row-cols-1 row-cols-lg-4 g-2 g-lg-3">
          <div class="col">
            <div class="p-3 border bg-light bene beneft1">
              <img className="" src={Img4} alt="Scholar" />
              <h4>Build</h4>
              <p>
                Collaborate with Stripe to develop innovative solutions and
                services. Enhance your expertise in management through
                comprehensive sales and technical training programs.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light  bene beneft2">
              <img className="" src={Img5} alt="Scholar" />
              <h4>Market</h4>
              <p>
                Boost the momentum of your marketing campaigns with
                preconfigured playbooks, customizable assets, and dedicated
                co-marketing funds.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light  bene beneft3">
              <img className="" src={Img6} alt="Scholar" />
              <h4>Sell</h4>
              <p>
                Submit collaborative selling opportunities to expedite deal
                closures. Gain financial incentives and exclusive discounts
                based on performance.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light  bene beneft4">
              <img className="" src={Img7} alt="Scholar" />
              <h4>Engage</h4>
              <p>
                Maintain close collaboration with our product roadmap and
                leadership teams as we forge a strong and enduring partnership.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container become-partner flexy">
        <div className="col-md-6">
          <h6>Get started</h6>
          <h1>Become an educare partner</h1>
          <p className="col-md-11">
            Join our mission to inspire students and support teachers worldwide.
            Be part of our global community, assisting ambitious businesses with
            leading-edge payment and financial infrastructure solutions, driving
            innovation in educational products and software.
          </p>
          <Link to={"/educare-business"}>
            {" "}
            <button>Get started now</button>
          </Link>
        </div>
        <div className="col-md-5 offset-md-1">
          <img className="aisa" src={Shake} alt="Scholar" width="100%" />
        </div>
      </div>
    </>
  );
}

export default BePartner;
