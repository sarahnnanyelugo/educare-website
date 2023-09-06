import React, { useEffect, useState } from "react";
import Arrow from "../../../assets/images/link-arrow.svg";
import { Link } from "react-router-dom";
import "./blog-post.scss";
const FocusedBlog = ({ data }) => {
  const [blogId, setBlogId] = useState(0);
  useEffect(() => {
    setBlogId(data.blog_id);
  });
  return (
    <>
      <div className="col-md-12 flexy focused-blog-div">
        <div className="col-md-6">
          {" "}
          <img className="aisa" src={data.img} alt="Scholar" width="95%" />
        </div>
        <div className="col-md-6">
          <div className="col-md-11">
            {" "}
            <small>{data.duration}</small>
            <h5 className="col-md-11">{data.heading}</h5>
            <small>{data.date}</small>
            <p>{data.paragraph}</p>
            <Link
              to="/main-blog"
              state={{ blog_id: blogId }}
              className="blog-link"
            >
              Read post{" "}
              <img className=" " src={Arrow} alt="Scholar" width="10%" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusedBlog;
