import React from "react";
import { Heading } from "../../components/Heading/Heading";
import "./customers-stories.scss";
import Stories from "./Stories/Stories";
import { StoriesInfo } from "../../TestData";
import { Prefooter } from "../../components/Prefooter/Prefooter";
import Video from "../../assets/images/educare-video.mp4";

function CustomersStories() {
  return (
    <>
      <div className="col-md-12 stories-div">
        <center>
          <div className="col-md-5">
            {" "}
            <Heading
              text="Customer Stories"
              bg="#CEF0FF"
              color="#0098DA"
              boda="#CEF0FF"
            />
            <h1>Inspiring stories, real educare customers</h1>
            <p>
              We work closely with our customers to understand their goals and
              help them drive meaningful results. Here’s what that looks like in
              action.
            </p>
          </div>
        </center>
      </div>
      <div className="col-md-10 offset-md-1 mt9 stories-holder">
        <h3>Feature customers success stories</h3>

        <section className="row row-cols-1 row-cols-lg-3 g-2 g-lg-4 col-md-12 mt3">
          {StoriesInfo.map((data, index) => (
            <Stories data={data} />
          ))}
        </section>
        <center>
          <button>Load more in Customer Stories</button>
        </center>
      </div>
      <center>
        <div className="col-md-6">
          <h1>Watch Educare customers in action.</h1>
          <p className="col-md-8 mt2">
            Be inspired by trailblazers transforming businesses, changing the
            world, and shaping the future through Educare.
          </p>
        </div>
        <center>
          <div className="youtube-container col-md-8 mt4 mb5">
            <video
              width="100%"
              autoplay="false"
              loop="true"
              muted="false"
              playsinline="true"
              controls="true"
              src={Video}
            ></video>
          </div>
        </center>
      </center>
      <Prefooter texta="Get started now and experience ease in your workflow." />
    </>
  );
}

export default CustomersStories;
