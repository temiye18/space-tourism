import React from "react";
import classes from "./Homepage.module.css";
import Container from "../Utilities/Container";

const Homepage = () => {
  return (
    <main className={classes.main}>
      <Container>
        <div className={classes.space__container}>
          <div className={classes.box__1}>
            <h5>SO, YOU WANT TO TRAVEL TO SPACE</h5>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div className={classes.box__2}>
            <div className={classes.explore}>
              <div className={classes.explore__content}>
                <h4>EXPLORE</h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Homepage;
