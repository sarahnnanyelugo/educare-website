import React, {useEffect, useState} from "react";
import "./blog.scss";
import { blogPostColOne } from "../../TestData";
import MiniBlog from "./BlogPost/MiniBlog";
import SearchBar from "../../components/SearchBar/SearchBar";
import {getItems} from "../../core/QueryResponseProvider";
import {Link} from "react-router-dom";

function Blog() {
    const [isLoading, setIsLoading] = useState(false);
    const [list, setLists] = useState([]);
    const [posts, setPosts] = useState({});
    const [params, setParams] = useState({});
    const [state, setState] = useState({
        query: "",
        orderBy: "",
        list: blogPostColOne,
    });

    function reducer(dt) {
        setState(dt);
        let prams = {};
        if (dt.query){
            prams.keywords = dt.query;
        }
        if (dt.orderBy){
            prams.orderBy = dt.orderBy;
        }
        setParams(prams);
        getBlogPosts();
    }

    const getBlogPosts = () =>{
        setIsLoading(true);
        getItems('auth/blog/index', params).then(function (request:any) {
            setPosts(request.posts);
            setLists(request.posts.data);
            setIsLoading(false);
        },function (request:any) {
            setIsLoading(false);
        });
    };

    const loadNext = () =>{
        if (posts.next_page_url && !isLoading){
            params.page = posts.current_page+1;
            setIsLoading(true);
            getItems('auth/blog/index', params).then(function (request:any) {
                setPosts(request.posts);
                request.posts.data.forEach(function (item:any) {
                    let index = list.findIndex((x:any)=>x.id==item.id)
                    if (index > -1){
                        list[index] = item;
                    }else{
                        list.push(item)
                    }
                });
                setLists(list);
                setIsLoading(false);
            },function (request:any) {
                setIsLoading(false);
            });
        }
    };

    useEffect(()=>{
        getBlogPosts();
    }, []);

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
                    {(list?.length>0) && list.map((data, index) => (
                        <MiniBlog data={data} />
                    ))}
                </div>
                {posts?.next_page_url && <div className="text-center">
                    <button onClick={loadNext} className="resos-btn text-center">Load More</button>
                </div>}
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
