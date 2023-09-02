import React, { useState, useEffect } from "react";
import "./search-bar.scss";
// import { BsSearch } from "react-icons/bs";
import Icon from "../../assets/images/search-icon1.png";
import Arrow from "../../assets/images/filter-arrow.png";
function SearchBar({ callback, posts }) {
  const [sortType, setSortType] = useState("ascending");

  // Sortby field i.e. title or description
  const [sortByField, setSortByField] = useState("date");

  // Store filter/latest posts
  const [result, setResult] = useState();

  const [state, setstate] = useState({
    query: "",
    orderBy: "",
    list: posts,
  });

  // Filter posts on typing in search input
  const handleChange = (e:any) =>{
    const { name, value } = e.target;
    setstate((prev) => ({
      ...prev,
      [name]: value,
    }));
    state[name] = value;
    callback(state, name, value );
  };

  const handleChangeOld = (e) => {
    const results = posts.filter((post) => {
      if (e.target.value === "") return posts;
      return (
        post["title"].toLowerCase().includes(e.target.value.toLowerCase()) ||
        post["paragraph"].toLowerCase().includes(e.target.value.toLowerCase())
      );
    });

    setResult(results);

    setstate({
      query: e.target.value,
      orderBy: sortType,
      list: sortFunc(results, sortType, sortByField),
    });
  };

  // Sort posts depending on sort type and available results
  function sortFunc(results, sortType, sortByField) {
    if (sortType === "DESC") {
      results.sort((a, b) => (a[sortByField] < b[sortByField] ? -1 : 1));
    } else if (sortType === "ASC") {
      results.sort((a, b) => (b[sortByField] > a[sortByField] ? 1 : -1));
    }
    return results;
  }

  // Dropdown to sort posts in ascending or descending order depending on title.
  function updatePosts(e) {
    setSortType(e);
    setstate({
      query: state.query,
      orderBy: sortType,
      list: !result
        ? sortFunc(posts, e, sortByField)
        : sortFunc(result, e, sortByField),
    });
  }
  useEffect(() => {
    callback(state);
  }, [state]);

  function sortBy(e) {
    setSortByField(e);
    setstate({
      query: state.query,
      search: state.query,
      orderBy: sortType,
      list: !result
        ? sortFunc(posts, sortType, e)
        : sortFunc(result, sortType, e),
    });
  }

  const searchForm = (e) =>{
    e.preventDefault();
    callback(state);
  };

  return (
    <>
      <form onSubmit={searchForm} className="flexy col-md-12">
        <div className="col-md-4">
          <div className="search-div">
            <div className="search-bar">
              {" "}
              <input
                type="search"
                name="query"
                onChangeCapture={handleChange}
                defaultValue={state.query}
              />
              <button className="search-btn" type="submit"/>
            </div>
          </div>
        </div>
        <div className="col-md-6">&nbsp;</div>
        <div className="col-md-3 sort-container flexy flexyM">
          <img className="filter-arrow" src={Arrow} alt="Scholar" />{" "}
          <select defaultValue={"DESC"} name='orderBy' onChangeCapture={handleChange}>
            <option value="DESC">Newest first</option>
            <option value="ASC">Oldest first</option>
          </select>
        </div>
      </form>
      {/*<ul>{state.list.length === 0 && <h3>Empty List !!!</h3>}</ul>*/}
    </>
  );
}

export default SearchBar;
