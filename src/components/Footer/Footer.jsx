import React from "react";
import styles from "./footer.module.scss";
import logo from "../../public/logo.png";
import body_900 from "../../public/body_weight_900.png";
import body_400 from "../../public/body_weight_400.png";


import { useState } from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  return (
    <div className={active ? styles.footer_active : styles.footer}>
      <div className={styles.top}>
        <hr className={active ? styles.hr_active : ""} />
        <img
          onClick={() => setActive(!active)}
          alt="#"
          src={logo}
          className={active ? styles.logo_active : styles.logo}
        />
        <hr className={active ? styles.hr_active : ""} />
      </div>
      <div className={styles.active}>
        {active ? (
          <div className={styles.nav_top}>
            <ul>
              <li>
                <Link
                  to={"/"}
                  className={cn(
                    styles.link,
                    location.pathname === "/" && styles.active
                  )}
                >
                  Main
                </Link>
              </li>
              <li>
                <Link
                  to={"/diet"}
                  className={cn(
                    styles.link,
                    location.pathname === "/diet" && styles.active
                  )}
                >
                  diet
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className={cn(
                    styles.link,
                    location.pathname === "/about" && styles.active
                  )}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/calc/calconday"}
                  className={cn(
                    styles.link,
                    (location.pathname === "/calc/calconday" ||
                      location.pathname === "/calc/calcweight") &&
                      styles.active
                  )}
                >
                  calculate weight
                </Link>
              </li>
              <li>
                <Link
                  to={"/body/boy"}
                  className={cn(
                    styles.link,
                    (location.pathname === "/body/boy" ||
                      location.pathname === "/body/girl") &&
                      styles.active
                  )}
                >
                  build body
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <span>Видишь футер? И я не вижу, а он есть ...</span>
        )}
      </div>
      <div className={styles.body} >
        <img className={active ? styles.bolder_active : styles.bolder} src={body_900} alt="" />
        <img className={active ? styles.weight : styles.weight_active} src={body_400} alt="" />
      </div>
    </div>
  );
};

export default Footer;
