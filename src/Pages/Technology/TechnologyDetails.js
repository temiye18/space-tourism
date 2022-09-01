import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import data from "../../data";
import classes from "./Technology.module.css";

const TechnologyDetails = () => {
  const { alt } = useParams();
  const history = useHistory();

  const technology = data.technology.find((tech) => tech.alt === alt);

  useEffect(() => {
    if (!technology) {
      history.replace("/technology");
    }
  }, [history, technology]);

  if (!technology) {
    return null;
  }

  return (
    <div className={classes.tech__items}>
      <div className={classes.tech__item1}>
        <h6>THE TERMINOLOGY...</h6>
        <h3>{technology.name}</h3>
        <p>{technology.description}</p>
      </div>
      <div className={classes.tech__item2}>
        <img
          className={classes.tech__img1}
          src={technology.images.portrait}
          alt="space_ship"
        />
        {/* <img
          className={classes.tech__img2}
          src={technology.images.landscape}
          alt="space_ship"
        /> */}
      </div>
    </div>
  );
};

export default TechnologyDetails;
