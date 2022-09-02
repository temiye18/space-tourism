import React from "react";
// import Swiper core and required modules
import data from "../../data";
import classes from "./Crew.module.css";
import Container from "../../components/Utilities/Container";
import CrewItem from "./CrewItem";

const Crew = () => {
  return (
    <main className={classes.main}>
      <Container>
        <div className={classes.crew__container}>
          <h5 className={classes.crew__heading}>
            <span>03</span> SPACE LAUNCH 101
          </h5>
          <CrewItem crewData={data.crew} />
        </div>
      </Container>
    </main>
  );
};

export default Crew;
