import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiet } from "../../features/dietSlice";
import styles from "./main.module.scss";
import { motion } from "framer-motion";
import { Dna } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Main = () => {
  const diet = useSelector((state) => state.diet.diet);
  const loader = useSelector((state) => state.diet.loader);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiet());
  }, [dispatch]);

  return (
    <>
      <section className={styles.banner}>
        <div className={styles.main_img}>
          <motion.div
            transition={{ duration: 2 }}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.text_content}
          >
            <h3>Do you like to eat tasty and healthy?</h3>
            <h1>Don't wait !</h1>
            <h4>Find the right and healthy way to eat with us</h4>
            <Link to={'/diet'}><button>View diets</button></Link>
          </motion.div>
        </div>
        <div className={styles.block}></div>
      </section>
      <section className={styles.diet_blocks}>
        {loader ? (
          <div className={styles.loader}>
            <Dna
              visible={true}
              height="200"
              width="200"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        ) : (
          diet.map((item, index) => {
            return (
              <motion.div
                transition={{ duration: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                key={index}
              >
                <Link to={'/diet'} className={styles.h1}><h1>{item.name}</h1></Link>
              </motion.div>
            );
          })
        )}
      </section>
    </>
  );
};

export default Main;
