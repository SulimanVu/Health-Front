import React from "react";
import style from './calcWeight.module.scss'

const CalcWeight = () => {
  return (
      <div className={style.marg}>
        <div>
          <input placeholder="Возраст, лет" />
        </div>
        <div>
          <input placeholder="Рост, в см." />
        </div>
        <div>
          <input placeholder="Вес, в кг." />
        </div>
      </div>
  );
};

export default CalcWeight;
