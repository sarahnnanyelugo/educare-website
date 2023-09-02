import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./blog-post.scss";
import { useLocation } from "react-router-dom";
import Arrow from "../../../assets/images/blog-arr.png";
import MiniBlog from "./MiniBlog";
import {useParams} from "react-router";
import {getItems} from "../../../core/QueryResponseProvider";
function MainBlog() {
  const params= useParams();
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [posts, setPosts] = useState([]);
  const location = useLocation();

  const getPostData = () =>{
    setLoading(true);
    getItems( 'auth/blog/' + params.postSlug ).then((resp:any)=>{
      setData(resp.post);
      setPosts(resp.related_posts);

      setLoading(false);
    }, (resp:any)=>{
      setLoading(false);
    })
  };

  useEffect(() => {
    getPostData();
  }, [params.postSlug]);

  return (
    <>
      {data && <>
        <div className="col-md-12 blog-container">
          <Link to={"/blog"} className="offset-md-1 blog-link2">
            <img className="aisa" src={Arrow} alt="Scholar" width="1%" /> Our blog
          </Link>
          <div className='row justify-content-center'>
            <h1 className="main-blog-heading col-md-7 text-center">{data.title}</h1>
            <p className='text-center'>{data.posted_on}</p>
          </div>
        </div>

        <div className="blog-post-container col-md-12 ">
          {data.thumbnail && <div className="col-md-10 offset-md-1 text-center">
            {" "}
            <img
              className="blog-imgg"
              src={data.thumbnail}
              alt="Scholar"
              height="250"
            />
          </div>}

          <div className="col-md-6 offset-md-3 mt5 blog-summary" dangerouslySetInnerHTML={{ __html: data?.body }}>
          </div>
        </div>

        {posts.length>0 && <div className="col-md-10 offset-md-1 mt">
          <h3>More from the Blog</h3>
          <p>
            The latest news, interviews, technologies, and resources on educare.
          </p>
          <section className="col-md-6 latest-news gap-5">
            {" "}
            {posts.map((post:any) => (
                <MiniBlog data={post}  key={post.slug}/>
            ))}
          </section>
          <div className="text-center">
            <Link to={"/blog"}>
              <button className="resos-btn text-center">View all Posts</button>
            </Link>
          </div>

        </div>}
      </>}
    </>
  );
}

export default MainBlog;
