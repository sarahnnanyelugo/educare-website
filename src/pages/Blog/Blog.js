import React, { useState } from "react";
import "./blog.scss";
import { blogPostColOne, focusedBlogData } from "../../TestData";
import MiniBlog from "./BlogPost/MiniBlog";
import SearchBar from "../../components/SearchBar/SearchBar";

import { Link } from "react-router-dom";
import { FilterDrop } from "../../components/Filter/FilterDrop";
import { Heading } from "../../components/Heading/Heading";
import FocusedBlog from "./BlogPost/FocusedBlog";

function Blog() {
  const [activeIndex, setActiveIndex2] = useState(1);
  const handleClick2 = (index) => setActiveIndex2(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";
  const checkActive2 = (index, className) =>
    activeIndex === index ? className : "";

  const [state, setState] = useState({
    query: "",
    list: blogPostColOne,
  });
  const [state2, setState2] = useState({
    query: "",

    list2: focusedBlogData,
  });
  function reducer(dt) {
    setState(dt);
  }
  return (
    <>
      <div style={{ height: "80px" }} />
      <div className="col-md-12  blog-container">
        <div className="offset-md-1">
          <Heading text=" Blog" bg="#CEF0FE" boda="#CEF0FE" color="#0098DA" />
        </div>
        <div className="col-md-10 offset-md-1 flexy flexyM">
          <div className="blog-heading">
            <h1>Latest Posts</h1>
          </div>
          <div className="col-md-3">
            {" "}
            <SearchBar callback={reducer} posts={blogPostColOne} />
          </div>
        </div>
      </div>
      <div className="blog-tab">
        <div className="col-md-10 offset-md-1  ">
          {" "}
          <div className="tabs blog-options">
            <button
              className={`tab ${checkActive2(1, "active2")}`}
              onClick={() => handleClick2(1)}
            >
              Schools
            </button>
            <button
              className={`tab ${checkActive2(2, "active2")}`}
              onClick={() => handleClick2(2)}
              style={{ marginLeft: "20px" }}
            >
              Businesses
            </button>{" "}
            <button
              className={`tab ${checkActive2(3, "active2")}`}
              onClick={() => handleClick2(3)}
              style={{ marginLeft: "20px" }}
            >
              News & Events
            </button>
          </div>
        </div>
        <div className="panels">
          <div className={`panel ${checkActive(1, "active2")}`}>
            <div className="col-md-10 offset-md-1 ">
              <div className="bold-heading">
                {" "}
                <h2>Schools</h2>
              </div>
            </div>
            <div className="col-md-10 offset-md-1  mt">
              <div className="row ">
                {state2.list2.map((data, index) => (
                  <FocusedBlog data={data} />
                ))}
              </div>
            </div>
            <div className="col-md-10 offset-md-1  mt">
              <div className="row ">
                {state.list.map((data, index) => (
                  <MiniBlog data={data} />
                ))}
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className={`panel ${checkActive(2, "active2")}`}>2</div>
          <div className={`panel ${checkActive(3, "active2")}`}>3</div>
        </div>
      </div>
    </>
  );
}

export default Blog;
