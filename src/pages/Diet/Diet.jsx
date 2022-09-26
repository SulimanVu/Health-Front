import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDiet } from "../../features/dietSlice";
import { useSelector } from "react-redux/es/exports";
import styles from "../../pages/Diet/Diet.module.scss";
const Diet = () => {
  const dispatch = useDispatch();

  const diets = useSelector((state) => state.diet.diet);

  useEffect(() => {
    dispatch(fetchDiet());
  }, [dispatch]);

  return (
    <div className={styles.cardsbody}>
      {diets.map((item) => {
        return (
          <div className={styles.cards}>
            <div className={styles.image}>
              <img src={`http://localhost:3010/images/${item.image}`} alt="#" />
            </div>
            <div className={styles.cardtext}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Diet;
