import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./oneMuscle.module.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchMuscle } from "../../features/muscleSlice";

const OneMuscle = () => {
  const dispatch = useDispatch();
  const title = localStorage.getItem("title");

  const arrMuscle = useSelector((state) =>
    state.muscle.muscle.filter((item) => item.name === title)
  );
  useEffect(() => {
    dispatch(fetchMuscle());
  }, [dispatch]);

  return (
    <div className={styles.muscle_main}>
      <Link className={styles.link} to={"/body/boy"}>
        <div className={styles.return}>
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/3916/3916800.svg?token=exp=1664109566~hmac=0927a750091f1e6fd0fcd9fc8b12ce78"
            alt=""
          />
          <span>Назад</span>
        </div>
      </Link>
      {arrMuscle.map((item, index) => {
        return (
          <div key={index}>
            <div className={styles.info_block}>
              <div className={styles.muscle_img}>
                <img src={item.img} alt="#" />
              </div>
              <div className={styles.muscle_text}>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
              </div>
            </div>

            <div className={styles.train_block}>
              <h1>Упражнения по прокачиванию данной мышцы</h1>
              <div className={styles.train_img}>
                {item.training.map((item, index) => {
                  return <img src={item} alt="#" key={index} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OneMuscle;
