import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import classes from "./Crew.module.css";

import React from "react";

const CrewItem = ({ crewData }) => {
  return (
    <Swiper
      className={classes.crewSwipe__box}
      modules={[Pagination]}
      spaceBetween={150}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {crewData.map((crew, index) => {
        return (
          <SwiperSlide className={classes.crewSwipe__item}>
            <div className={classes.crewSwipe__info}>
              <h4>{crew.role}</h4>
              <h3>{crew.name}</h3>
              <p>{crew.bio}</p>
            </div>
            <div className={classes.crewSwipe__img}>
              <img src={crew.images.webp} alt={crew.name} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CrewItem;
