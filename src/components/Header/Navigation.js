import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import classes from "./Navigation.module.css";
import menuBar from "../../assets/shared/icon-hamburger.svg";

const Navigation = () => {
  const [destinationIsActive, setDestinationIsActive] = useState(false);
  const [crewIsActive, setCrewIsActive] = useState(false);
  const [technologyIsActive, setTechnologyIsActive] = useState(false);

  const disableActiveList = () => {
    setDestinationIsActive(false);
    setCrewIsActive(false);
    setTechnologyIsActive(false);
  };

  const activeDestination = () => {
    setDestinationIsActive(true);
    setCrewIsActive(false);
    setTechnologyIsActive(false);
  };
  const activeCrew = () => {
    setDestinationIsActive(false);
    setCrewIsActive(true);
    setTechnologyIsActive(false);
  };

  const activeTechnology = () => {
    setDestinationIsActive(false);
    setCrewIsActive(false);
    setTechnologyIsActive(true);
  };

  const destinationClass = destinationIsActive ? classes.active__li : "";
  const crewClass = crewIsActive ? classes.active : "";
  const technologyClass = technologyIsActive ? classes.active : "";
  const activeLink = (navData) => (navData.isActive ? classes.active : "");

  return (
    <header>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.right__items}>
        <div className={classes.horizontal}></div>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink
                to="/home"
                className={activeLink}
                onClick={disableActiveList}
              >
                00 HOME
              </NavLink>
            </li>
            <li className={destinationClass}>
              <NavLink
                to="/destination/Moon"
                className={activeLink}
                onClick={activeDestination}
              >
                01 DESTINATION
              </NavLink>
            </li>
            <li className={crewClass}>
              <NavLink to="/crew" className={activeLink} onClick={activeCrew}>
                02 CREW
              </NavLink>
            </li>
            <li className={technologyClass}>
              <NavLink
                to="/technology"
                className={activeLink}
                onClick={activeTechnology}
              >
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
