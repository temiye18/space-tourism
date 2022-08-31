import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import classes from "./Navigation.module.css";
import menuBar from "../../assets/shared/icon-hamburger.svg";

const Navigation = () => {
  const activeLink = (navData) => (navData.isActive ? classes.active : "");
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
              <NavLink to="/home" className={activeLink}>
                00 HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination" className={activeLink}>
                01 DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew" className={activeLink}>
                02 CREW
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" className={activeLink}>
                03 TECHNOLOGY
              </NavLink>
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
