import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDiet } from "../../features/dietSlice";
import styles from "./main.module.scss";

const Main = () => {
  const diet = useSelector((state) => state.diet.diet);
  console.log(diet);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiet());
  }, [dispatch]);
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.main_img}>
          <div className={styles.text_content}>
            <h3>Do you like to eat tasty and healthy?</h3>
            <h1>Don't wait !</h1>
            <h4>Find the right and healthy way to eat with us</h4>
            <button><Link to={"/#diet"}>View diets</Link></button>
          </div>
        </div>
        <div className={styles.block}></div>
      </section>
      <section className={styles.diet_blocks} id={'diet'}>
        {diet.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Main;
