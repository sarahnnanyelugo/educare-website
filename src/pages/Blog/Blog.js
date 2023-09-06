import React, { useState } from "react";
import "./blog.scss";
import { blogPostColOne } from "../../TestData";
import MiniBlog from "./BlogPost/MiniBlog";
import SearchBar from "../../components/SearchBar/SearchBar";

import { Link } from "react-router-dom";
import { FilterDrop } from "../../components/Filter/FilterDrop";
import { Heading } from "../../components/Heading/Heading";

function Blog() {
  const [state, setState] = useState({
    query: "",
    list: blogPostColOne,
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
      <div className="col-md-10 offset-md-1 ">
        <div className="bold-heading">
          {" "}
          <h2>Schools</h2>
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
    </>
  );
}

export default Blog;
