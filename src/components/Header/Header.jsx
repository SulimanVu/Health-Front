import React from "react";
import styles from "./Header.module.scss";
import logo from "../../public/logo.png";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <section className={styles.head}>
      <header>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img alt="#" src={logo} />
          </Link>
        </div>
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
      </header>
    </section>
  );
};

export default Header;
