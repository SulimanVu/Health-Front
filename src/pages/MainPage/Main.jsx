import React from "react";
import styles from "./main.module.scss";
import Product from '../../components/Product/Product';

const Main = () => {
  return (
    <>
      <section className={styles.banner}>
        <div className={styles.main_img}>
          <div className={styles.text_content}>
            <h3>Do you like to eat tasty and healthy?</h3>
            <h1>Don't wait !</h1>
            <h4>Find the right and healthy way to eat with us</h4>
            <button>View diets</button>
          </div>
          
        {/* 
        <div>
            <Product />
        </div>
        <div className={styles.block}></div>
      </section>
      <section className={styles.blocks}>
        
      </section>*/}
    </>
  );
};

export default Main;
