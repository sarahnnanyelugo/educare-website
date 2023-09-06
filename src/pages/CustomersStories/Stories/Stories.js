import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./stories.scss";
import Arrow from "../../../assets/images/link-arrow.svg";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <br />
        <br />
        <Link onClick={toggleReadMore} className="read-more">
          {isReadMore ? "Read more " : " Show less"}
        </Link>
      </p>
      <br />
    </>
  );
};

function Stories({ data }) {
  const { schImg, schLogo, storyTitle, storyParagraph, testifier } = data;
  return (
    <div className=" col ">
      {" "}
      <div className="stories-component-div col col-md-12">
        <img src={schImg} alt="Scholar" width="100%" className="sch-img" />
        <div className="story-innerr">
          <img src={schLogo} alt="Scholar" width="30%" />
          <p className="title col-md-11">{storyTitle}</p>
          <p>
            <ReadMore>{storyParagraph}</ReadMore>
          </p>
          {/* <Link className="read-more" to={storyLink}>
            Read more <img src={Arrow} alt="Scholar" width="10%" />
          </Link> */}
          <h6>{testifier}</h6>
        </div>
      </div>
    </div>
  );
}

export default Stories;
