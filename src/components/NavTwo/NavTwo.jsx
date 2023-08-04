import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./nav-two.scss";
import Logo from "../../assets/images/logo2.png";

export const NavTwo = (props) => {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    // console.log(scrollPosition);
  };
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      // console.log("scrolling up");
      setScrollDirection(1);
    } else if (y < window.scrollY) {
      // console.log("scrolling down");
      setScrollDirection(-1);
    }
    setY(window.scrollY);
    handleScroll();
  };
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since it's going to run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  return (
    <div
      className={` col-md-12  fixed ${
        scrollPosition >= 400 && scrollDirection < 0 ? "hide" : ""
      }`}
    >
      <div className="col-md-10 offset-md-1 top-nav-container ">
        {props.headerIcon ? (
          <img
            className="logo dnM"
            src={props.headerIcon}
            alt="Scholar"
            // width="50%"
          />
        ) : (
          ""
        )}
        <div className="topnav-heading ">
          <h4>{props.title}</h4>
        </div>
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a href="#features">
              <button className="top-nav-links"> {props.nav1}</button>
            </a>
          </li>
          {/* <li className="list-inline-item">
            <a href={props.priceUrl}>
              {" "}
              <button className="top-nav-links"> {props.nav2}</button>
            </a>
          </li> */}
          <li className="list-inline-item">
            <NavLink to={"/blog"} activeClassName="active">
              <button className="top-nav-links"> {props.nav3}</button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
