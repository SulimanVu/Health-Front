import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./body.module.scss";
import { Outlet } from "react-router-dom";
import cn from "classnames";

const Body = () => {
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(false);

  const handleClick = () => {
    setMale(!male);
    setFemale(!female);
  };

  return (
    <div className={styles.col}>
      <div className={styles.links}>
        <Link
          className={cn(styles.link, male && styles.active)}
          onClick={handleClick}
          to={"boy"}
        >
          male
        </Link>
        <Link
          className={cn(styles.link, female && styles.active)}
          onClick={handleClick}
          to={"girl"}
        >
          female
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
