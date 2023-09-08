import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./blog-post.scss";
import Arrow from "../../../assets/images/link-arrow.svg";

function MiniBlog({ data }) {
  const [blogId, setBlogId] = useState(0);
  //   const { img, paragraph, url, title, date } = props;
  useEffect(() => {
    setBlogId(data.blog_id);
  });
  return (
    <>
      <div className="col-md-3 blog-post-container-outer">
        {" "}
        <div className="blog-post-container ">
          <img className="" src={data.img} alt="Scholar" width="100%" />
          <div className="blog-post-container-inner">
            <p className="">{data.date}</p>
            <h5>{data.title}</h5>
            <p>{data.paragraph}</p>

            <div className="flexy">
              <img className="2 " src={Arrow} alt="Scholar" width="10%" />
              <div>
                <h6>{data.blogger}</h6>
                <p>{data.bloggerTitle}</p>
              </div>
            </div>
            {/* <div className="flexy flexyM">
              <Link
                to="/main-blog"
                state={{ blog_id: blogId }}
                className="blog-link"
              >
                Read post{" "}
                <img
                  className="col-md-12 "
                  src={Arrow}
                  alt="Scholar"
                  width="10%"
                />
              </Link>
              <p className="mt3">{data.date}</p>
            </div> {/* <div className="flexy flexyM">
              <Link
                to="/main-blog"
                state={{ blog_id: blogId }}
                className="blog-link"
              >
                Read post{" "}
                <img
                  className="col-md-12 "
                  src={Arrow}
                  alt="Scholar"
                  width="10%"
                />
              </Link>
         
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniBlog;
