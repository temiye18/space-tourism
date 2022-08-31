import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data";
import classes from "./Destination.module.css";

const DestinationDetails = () => {
  const { planet } = useParams();

  const destination = data.destinations.find(
    (destination) => destination.name === planet
  );
  return (
    <div className={classes.detail__box}>
      <div className={classes.detail__image}>
        <img src={destination.images.webp} alt={destination.name} />
      </div>
      <div className={classes.detail__content}>
        <h2>{destination.name}</h2>
        <p>{destination.description}</p>
        <div className={classes.hr}></div>
        <div className={classes.detail__metrics}>
          <div className={classes.detail__distance}>
            <p className={classes.distance__label}>AVG. DISTANCE</p>
            <h5 className={classes.distance__value}>{destination.distance}</h5>
          </div>
          <div className={classes.detail__duration}>
            <p className={classes.duration__label}>EST. TRAVEL TIME</p>
            <h5 className={classes.duration__value}>{destination.travel}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
