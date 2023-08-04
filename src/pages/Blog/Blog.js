import React, { useState } from "react";
import "./blog.scss";
import { blogPostColOne } from "../../TestData";
import MiniBlog from "./BlogPost/MiniBlog";
import SearchBar from "../../components/SearchBar/SearchBar";

import { Link } from "react-router-dom";
import { FilterDrop } from "../../components/Filter/FilterDrop";

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
      <div className="col-md-12 blog-container">
        <center>
          <p> Our Blog</p>
          <h1>Resources and Insights</h1>
          <p>
            The latest news, interviews, technologies, and resources on educare.
          </p>
        </center>
      </div>
      <div className="flexy offset-md-1 flexyM mt9 col-md-10">
        <div className="col-md-12 col-6">
          <div className="col-md-12">
            {" "}
            <SearchBar callback={reducer} posts={blogPostColOne} />
          </div>
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
