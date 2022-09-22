import React from "react";
import style from "./Calc.module.scss";
import { Link } from "react-router-dom";

const Calc = () => {
  return (
      <div>
        <div>
          <Link to={'calconday'}>Расчитать каллорийность съеденной еды за сегодня</Link>
          <Link to={'calcweight'}>Расчитать каллорийность для поддержания веса</Link>
        </div>
      </div>
  );
};

export default Calc;
