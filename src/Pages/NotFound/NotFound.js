import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Utilities/Container";
import rocketVertical from "../../assets/404/rocket_vertical.png";
import rocketSide from "../../assets/404/rocket_side.png";

import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <main className={classes.main}>
      <Container>
        <div className={classes.errorContainer}>
          <div className={classes.error__item1}>
            <h1 className={classes.errorTitle}>404</h1>
            <h2 className={classes.errorSubtitle}>Page not found</h2>
            <p className={classes.errorText}>
              The page you are looking for does not exist.
            </p>

            <div className={classes.errorDiv}>
              <Link to="/" className={classes.errorLink}>
                Go Back Home
              </Link>
            </div>
          </div>

          <div className={classes.error__item2}>
            <img className={classes.img1} src={rocketSide} alt="404_image" />
            <img
              className={classes.img2}
              src={rocketVertical}
              alt="404_image"
            />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default NotFound;
