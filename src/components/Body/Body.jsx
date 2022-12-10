import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./body.module.scss";
import { Outlet } from "react-router-dom";
import cn from "classnames";

const Body = () => {
  const [male, setMale] = useState(true);

  const handleClick = () => {
    setMale(!male);
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
        {/* <Link
          className={cn(styles.link, !male && styles.active)}
          onClick={handleClick}
          to={"girl"}
        >
          female
        </Link> */}
      </div>
      <Outlet />
    </div>
  );
};

export default Body;
