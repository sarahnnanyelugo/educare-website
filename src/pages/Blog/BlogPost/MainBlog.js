import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./blog-post.scss";
import { MainPostOne, LatestBlog } from "../../../TestData";
import { useLocation } from "react-router-dom";
import Arrow from "../../../assets/images/blog-arr.png";
// import {  } from "../../TestData";
import MiniBlog from "./MiniBlog";
function MainBlog() {
  const [data, setData] = useState({});
  const [id, setId] = useState(0);
  const location = useLocation();
  useEffect(() => {
    setId(location.state.blog_id);
  }, []);

  useEffect(() => {
    console.log(id);
    if (id != 0)
      setData(
        MainPostOne.find((obj) => {
          return obj.id === id;
        })
      );
  }, [id]);
  //   const { img, paragraph, url, title, date } = props;
  return (
    <>
      <div className="col-md-12 blog-container">
        <Link to={"/blog"} className="offset-md-1 blog-link2">
          <img className="aisa" src={Arrow} alt="Scholar" width="1%" /> Our blog
        </Link>
        {/* <center>
          
        </center> */}
      </div>
      <div className=" col-md-12 ">
        <div className="col-md-10 offset-md-1 flexy">
          {" "}
          <div className="col-md-7">
            {/* <img
              className="blog-imgg"
              src={data.img}
              alt="Scholar"
              width="100%"
            /> */}
          </div>
          <div className="col-md-5">
            <h2 className="main-blog-heading ">{data.title}</h2>
            <p>{data.date}</p>
          </div>
        </div>

        <div className="col-md-6 offset-md-3 mt5 blog-summary">
          <span dangerouslySetInnerHTML={{ __html: data?.paragraph }}></span>
        </div>
      </div>
      <div className="col-md-10 offset-md-1 mt">
        <h3>More from the Blog</h3>
        <p>
          The latest news, interviews, technologies, and resources on educare.
        </p>
        <section className="col-md-12 latest-news gap-5">
          {" "}
          {LatestBlog.map((data, index) => (
            <MiniBlog data={data} />
          ))}
        </section>
        <center>
          <Link to={"/blog"} className="more-link">
            {" "}
            <button className="more-blog">View all posts</button>
            {/* <img className="col-md-12 " src={Arrow} alt="Scholar" width="10%" /> */}
          </Link>
        </center>
      </div>
    </>
  );
}

export default MainBlog;
