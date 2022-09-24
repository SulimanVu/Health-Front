import React from "react";
import { useSelector } from "react-redux";
import styles from "./oneMuscle.module.scss";

const OneMuscle = () => {

  const muscle = useSelector((state) => state.muscle.oneMuscle);
  const arrMuscle = useSelector((state) =>
    state.muscle.muscle.filter((item) => item.name === muscle)
  );

  return (
    <div className={styles.muscle_main}>
      {arrMuscle.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <div className={styles.muscle_img}>
              <img src={item.img} alt="#" />
            </div>
            <div className={styles.train_img}>
              <img src={item.training} alt="#" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OneMuscle;
