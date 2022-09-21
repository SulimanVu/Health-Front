import React from "react";
import styles from "./header.module.scss";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={styles.logo}>
        <Link to={"/"}><img alt="#" src={logo} /></Link>
      </div>
      <div className={styles.nav_top}>
        <ul>
          <li><Link to={"/"} className={styles.link}>Main</Link></li>
          <li><Link to={"/diet"} className={styles.link}>diet</Link></li>
          <li><Link to={"/about"} className={styles.link}>About</Link></li>
          <li><Link to={"/about"} className={styles.link}>calculate weight</Link></li>
          
        </ul>
      </div>
    </header>
  );
};

export default Header;