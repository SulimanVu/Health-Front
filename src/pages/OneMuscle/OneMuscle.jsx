import React from "react";
import { useSelector } from "react-redux";
import styles from "./oneMuscle.module.scss";
import { Dna } from "react-loader-spinner";

const OneMuscle = () => {
  const muscle = useSelector((state) => state.muscle.oneMuscle);
  const loader = useSelector((state) => state.muscle.loader);

  const arrMuscle = useSelector((state) =>
    state.muscle.muscle.filter((item) => item.name === muscle)
  );

  return (
    <div className={styles.muscle_main}>
      {arrMuscle.map((item, index) => {
        return (
          <div key={index}>
            <div className={styles.info_block}>
              <div className={styles.muscle_img}>
                {loader ? (
                  <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                  />
                ) : (
                  <img src={item.img} alt="#" />
                )}
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
