import React, {FC, useEffect, useState} from "react";
import LatestBlog from "../../../pages/Home/LatetestBlog";
import {Link} from "react-router-dom";
import {getItems} from "../../../core/QueryResponseProvider";

const LatestNews: FC = () => {
    const [posts, setPosts] = useState([]);

    const getBlogPosts = () =>{
        getItems('auth/blogindex/index').then(function (request:any) {
            setPosts(request.posts)
        },function (request:any) {});
    };

    useEffect(()=>{
        getBlogPosts();
    });

    return (<>
        {posts.length>0 && <div className="col-md-12  latest-news-section">
            {" "}
            <div className="col-md-10 offset-md-1 ">
                <h1 className="text-center">Resources and Insights</h1>
                <p className="text-center">
                    The latest news, interviews, technologies, and resources on educare.
                </p>
                <section className="col-md-3 mt7">
                    {" "}
                    <div className="col-md-11 flexy gap-5 ">
                        {" "}
                        {posts.map((post:any) => (
                            <LatestBlog data={post}  key={post.slug}/>
                        ))}
                    </div>
                </section>
                <div className="text-center">
                    <Link to={"/blog"}>
                        <button className="resos-btn text-center">View all resources</button>
                    </Link>
                </div>

            </div>
        </div>}
    </>)
};

export {LatestNews}
