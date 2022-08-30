import React from "react";
import logo from "../../assets/shared/logo.svg";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      {/* <div className={classes.horizontal}></div> */}
      <ul>
        <li>
          <a href="#home">00 HOME</a>
        </li>
        <li>
          <a href="#destination">01 DESTINATION</a>
        </li>
        <li>
          <a href="#crew">02 CREW</a>
        </li>
        <li>
          <a href="#technology">03 TECHNOLOGY</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
