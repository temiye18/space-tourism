import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import classes from "./Navigation.module.css";
import menuBar from "../../assets/shared/icon-hamburger.svg";

const Navigation = () => {
  const [homeIsActive, setHomeIsActive] = useState(false);
  const [destinationIsActive, setDestinationIsActive] = useState(false);
  const [crewIsActive, setCrewIsActive] = useState(false);
  const [technologyIsActive, setTechnologyIsActive] = useState(false);

  const activeHome = () => {
    setHomeIsActive(true);
    setDestinationIsActive(false);
    setCrewIsActive(false);
    setTechnologyIsActive(false);
  };

  const activeDestination = () => {
    setHomeIsActive(false);
    setDestinationIsActive(true);
    setCrewIsActive(false);
    setTechnologyIsActive(false);
  };
  const activeCrew = () => {
    setHomeIsActive(false);
    setDestinationIsActive(false);
    setCrewIsActive(true);
    setTechnologyIsActive(false);
  };

  const activeTechnology = () => {
    setHomeIsActive(false);
    setDestinationIsActive(false);
    setCrewIsActive(false);
    setTechnologyIsActive(true);
  };

  const homeClass = homeIsActive ? classes.active : "";
  const destinationClass = destinationIsActive ? classes.active : "";
  const crewClass = crewIsActive ? classes.active : "";
  const technologyClass = technologyIsActive ? classes.active : "";
  // const activeLink = (navData) => (navData.isActive ? classes.active : "");
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
              <NavLink to="/home" className={homeClass} onClick={activeHome}>
                00 HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination/Moon"
                className={destinationClass}
                onClick={activeDestination}
              >
                01 DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew" className={crewClass} onClick={activeCrew}>
                02 CREW
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className={technologyClass}
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
