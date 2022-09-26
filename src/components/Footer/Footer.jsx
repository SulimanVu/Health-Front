import React from "react";
import styles from "./footer.module.scss";
import logo from "../../public/logo.png";
import body_900 from "../../public/body_weight_900.png";
import body_400 from "../../public/body_weight_400.png";
import inst from "../../public/square-instagram.svg";
import whatsApp from "../../public/square-whatsapp.svg";
import facebook from "../../public/square-facebook.svg";
import telegramm from "../../public/telegram.svg";
import vk from "../../public/vk.svg";

import { useState } from "react";

const Footer = () => {
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
        <div className={styles.nav_top}>
          <ul className={active ? styles.ul_active : ""}>
            <li className={active ? styles.li_active : ""}>
              <img src={inst} alt="" />
            </li>
            <li className={active ? styles.li_active : ""}>
              <img src={whatsApp} alt="" />
            </li>
            <li className={active ? styles.li_active : ""}>
              <img src={facebook} alt="" />
            </li>
            <li className={active ? styles.li_active : ""}>
              <img src={telegramm} alt="" />
            </li>
            <li className={active ? styles.li_active : ""}>
              <img src={vk} alt="" />
            </li>
          </ul>
        </div>

        <span className={active ? styles.span_active : ""}>
          Видишь футер? И я не вижу, а он есть ...
        </span>
      </div>
      <div className={styles.body}>
        <img
          className={active ? styles.bolder_active : styles.bolder}
          src={body_900}
          alt=""
        />
        <img
          className={active ? styles.weight : styles.weight_active}
          src={body_400}
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
