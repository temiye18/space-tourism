import data from "../../data";
import classes from "./Technology.module.css";
const TechnologyLanding = () => {
  const technology = data.technology[0];
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

export default TechnologyLanding;
