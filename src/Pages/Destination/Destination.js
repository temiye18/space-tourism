import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import data from "../../data";
import Container from "../../components/Utilities/Container";
import classes from "./Destination.module.css";
const Destination = () => {
  const activeLink = (navData) => (navData.isActive ? classes.active : "");
  return (
    <main className={classes.main}>
      <Container>
        <div className={classes.dest__container}>
          <h5>
            <span>01</span> PICK YOUR DESTINATION
          </h5>
          <nav className={classes.navBar}>
            <ul>
              {data.destinations.map((destination, index) => {
                return (
                  <li key={index}>
                    <NavLink className={activeLink} to={destination.name}>
                      {destination.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <Outlet />
      </Container>
    </main>
  );
};

export default Destination;
