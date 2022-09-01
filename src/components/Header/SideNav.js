import React from "react";
import { NavLink } from "react-router-dom";
import hamburger from "../../assets/shared/icon-close.svg";
import classes from "./SideNav.module.css";

const SideNav = ({ closeSideNav, sideNavIsOpen }) => {
  return (
    <aside className={`${sideNavIsOpen ? classes.showSideNav : ""}`}>
      <div className={classes.close__nav}>
        <img src={hamburger} alt="close" onClick={closeSideNav} />
      </div>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/home"
              activeClassName={classes.active}
              onClick={closeSideNav}
            >
              <span className={classes.link__span}>00</span> HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              activeClassName={classes.active}
              onClick={closeSideNav}
            >
              <span className={classes.link__span}>01</span> DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              activeClassName={classes.active}
              onClick={closeSideNav}
            >
              <span className={classes.link__span}>02</span> CREW
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              activeClassName={classes.active}
              onClick={closeSideNav}
            >
              <span className={classes.link__span}>03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
