import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDiet } from "../../features/dietSlice";
import { useSelector } from "react-redux/es/exports";
import styles from "../../pages/Diet/Diet.module.scss";
import { Dna } from "react-loader-spinner";
import { serverUrl } from '../../serverUrl';

const Diet = () => {
  const dispatch = useDispatch();

  const diets = useSelector((state) => state.diet.diet);
  const loader = useSelector((state) => state.diet.loader);

  useEffect(() => {
    dispatch(fetchDiet());
  }, [dispatch]);

  return (
    <>
      {loader ? (
        <div className={styles.loaders}>
          <Dna
            visible={true}
            height="300"
            width="300"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div className={styles.cardsbody}>
          {diets.map((item) => {
            return (
              <div className={styles.cards}>
                <div className={styles.image}>
                  <img
                    src={`${serverUrl}/images/${item.image}`}
                    alt="#"
                  />
                </div>
                <div className={styles.cardtext}>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Diet;
