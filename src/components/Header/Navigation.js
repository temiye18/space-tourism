import React from "react";
import logo from "../../assets/shared/logo.svg";
import classes from "./Navigation.module.css";
import menuBar from "../../assets/shared/icon-hamburger.svg";

const Navigation = () => {
  return (
    <header>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.right__items}>
        <div className={classes.horizontal}></div>
        <nav>
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
      </div>
      <div className={classes.menu__bar}>
        <img src={menuBar} alt="menu" />
      </div>
    </header>
  );
};

export default Navigation;
