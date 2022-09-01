import React from "react";
import { NavLink, useRouteMatch, Route, Redirect } from "react-router-dom";
import data from "../../data";
import Container from "../../components/Utilities/Container";
import TechnologyLanding from "./TechnologyLanding";
import TechnologyDetails from "./TechnologyDetails";
import classes from "./Technology.module.css";

const Technology = () => {
  const { path, url } = useRouteMatch();
  return (
    <main className={classes.main}>
      <Container>
        <div className={classes.tech__container}>
          <h5>
            <span>03</span> SPACE LAUNCH 101
          </h5>
        </div>
      </Container>
      <div className={classes.tech__navBox}>
        <nav className={classes.navBar}>
          <ul>
            {data.technology.map((tech) => {
              return (
                <li key={tech.id}>
                  <NavLink
                    to={`${url}/${tech.alt}`}
                    activeClassName={classes.active}
                  >
                    {tech.id}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <Route exact path={path}>
          <TechnologyLanding />
        </Route>

        <Route path={`${path}/:alt`}>
          <TechnologyDetails />
        </Route>

        <Route path={`${path}/:alt/*`}>
          <Redirect to="/technology" />
        </Route>
      </div>
    </main>
  );
};

export default Technology;
