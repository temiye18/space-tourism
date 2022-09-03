import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import hamburger from "../../assets/shared/icon-close.svg";
import classes from "./SideNav.module.css";

const SideNav = ({ closeSideNav, delayClose, sideNavIsOpen }) => {
  const [destinationIsActive, setDestinationIsActive] = useState(false);

  const disableActiveList = () => {
    setDestinationIsActive(false);
  };

  const activeDestination = () => {
    setDestinationIsActive(true);
  };

  const destinationClass = destinationIsActive ? classes.active__li : "";

  return (
    <aside className={`${sideNavIsOpen ? classes.showSideNav : ""}`}>
      <div className={classes.close__nav}>
        <img src={hamburger} alt="close" onClick={closeSideNav} />
      </div>

      <nav className={classes.nav}>
        <ul>
          <li onClick={disableActiveList}>
            <NavLink
              to="/home"
              activeClassName={classes.active}
              onClick={delayClose}
            >
              <span className={classes.link__span}>00</span> HOME
            </NavLink>
          </li>
          <li onClick={activeDestination} className={destinationClass}>
            <NavLink
              to="/destination/Moon"
              activeClassName={classes.active}
              onClick={delayClose}
            >
              <span className={classes.link__span}>01</span> DESTINATION
            </NavLink>
          </li>
          <li onClick={disableActiveList}>
            <NavLink
              to="/crew"
              activeClassName={classes.active}
              onClick={delayClose}
            >
              <span className={classes.link__span}>02</span> CREW
            </NavLink>
          </li>
          <li onClick={disableActiveList}>
            <NavLink
              to="/technology"
              activeClassName={classes.active}
              onClick={delayClose}
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
