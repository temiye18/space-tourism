import React from "react";
import { NavLink, Route, useRouteMatch, Redirect } from "react-router-dom";
import data from "../../data";
import Container from "../../components/Utilities/Container";
import DestinationDetails from "./DestinationDetails";
import DestinationLanding from "./DestinationLanding";
import classes from "./Destination.module.css";
const Destination = () => {
  const { path, url } = useRouteMatch();
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
                    <NavLink
                      activeClassName={classes.active}
                      to={`${url}/${destination.name}`}
                    >
                      {destination.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <Route exact path={path}>
          {/* <DestinationLanding /> */}
          <Redirect to="/destination/Moon" />
        </Route>
        <Route path={`${path}/:planet`}>
          <DestinationDetails />
        </Route>
        <Route path={`${path}/:planet/*`}>
          <Redirect to="/destination" />
        </Route>
      </Container>
    </main>
  );
};

export default Destination;
