import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./blog-post.scss";
import Arrow from "../../../assets/images/link-arrow.svg";
import Img3 from "../../../assets/images/ln1.png";

function MiniBlog({ data }) {
  return (
    <>
      {data && <div className="blog-post-container col-md-6 ">
        <Link to={ '/blog/'+data.slug } state={{ blog_id: data.slug }}>
          <div className="text-center" style={{backgroundImage: 'url('+(data.thumbnail?data.thumbnail: Img3)+')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '200px', borderRadius:'15px'}}>
          </div>
        </Link>
        <h5>{data.title}</h5>
        <p>{data.paragraph}</p>
        <div className="flexy flexyM">
          <Link
            to={ '/blog/'+data.slug }
            state={{ blog_id: data.slug }}
            className="blog-link">
            Read post{" "}
            <img className="col-md-12 " src={Arrow} alt="Scholar" width="10%" />
          </Link>
          <p className="mt3">{data.date}</p>
        </div>
      </div>}
    </>
  );
}

export default MiniBlog;
