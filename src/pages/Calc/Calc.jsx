import React, { useState } from "react";
import style from "./Calc.module.scss";
import { Link, Outlet } from "react-router-dom";
import styles from "./Calc.module.scss";
import cn from "classnames";

const Calc = () => {
  const [first, setFirst] = useState(true);

  const handleClick = () => {
    setFirst(!first);
  };
  return (
    <div className={styles.col}>
      <div className={style.links}>
        <Link className={cn(styles.link, first && styles.active)} onClick={handleClick} to={"calconday"}>
          Расчитать каллорийность съеденной еды за сегодня
        </Link>
        <Link className={cn(styles.link, !first && styles.active)} onClick={handleClick} to={"calcweight"}>
          Расчитать каллорийность для поддержания веса
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Calc;
