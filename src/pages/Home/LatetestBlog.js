import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../assets/images/link-arrow.svg";
import Img3 from "../../assets/images/ln1.png";

function LatestBlog({ data }) {
  const [blogId, setBlogId] = useState(0);
  useEffect(() => {
    setBlogId(data.blog_id);
  });
  return (
    <>
      <div className="latest-post-container col-md-12 ">
        <Link to={ '/blog/'+data.slug } state={{ blog_id: blogId }}>
        <div className="text-center" style={{backgroundImage: 'url('+(data.thumbnail?data.thumbnail: Img3)+')', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '200px', borderRadius:'15px'}}>
          {/*<img className="" src={data.thumbnail?data.thumbnail: Img3} alt={data.title} height="200" />*/}
        </div>
        </Link>
        <small>{data.posted_on}</small>
        <h6>{data.title}</h6>

        <div className="flexy flexyM">
          <Link to={ '/blog/'+data.slug }
            state={{ blog_id: blogId }} className="blog-link">
            Read post {" "}
            <img className="col-md-12 " src={Arrow} alt="Scholar" width="10%" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default LatestBlog;
