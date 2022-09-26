import React, { useState } from "react";
import style from './calcWeight.module.scss'

const CalcWeight = () => {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [act, setAct] = useState('');
  const [modal, setModal] = useState(false);
  const sum = Math.floor((88 + (13 * weight) + (4 * height) - (5 * age)) * act);

  const handleRas = () => {
    setModal(true);
  }

  return (
    <>
      <div className={style.main}>
        <div className={style.mainCalc}>
          <div>
            <input
              type='number'
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={style.inp}
              placeholder="Возраст, лет" />
          </div>
          <div>
            <input
              type='number'
              step='10'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={style.inp}
              placeholder="Рост, в см." />
          </div>
          <div>
            <input
              type='number'
              step='10'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={style.inp}
              placeholder="Вес, в кг." />
          </div>
          <div>
            <input
              type='number'
              value={act}
              onChange={(e) => setAct(e.target.value)}
              className={style.inp}
              placeholder="Коэффициент физ.активности" />
          </div>
          <div><button className={style.but} onClick={() => { handleRas() }}>Рассчитать</button></div>
        </div>
        <div className={style.active}>
          <ul className={style.fon}>
            <p>В зависимости от того, какой у вас образ жизни, выбирается соответствующий коэффициент:
              <li>Сидячий образ жизни – 1,2;</li>
              <li>Умеренная активность (легкие физические нагрузки либо занятия 1-3 раз в неделю) – 1,375;</li>
              <li>Средняя активность (занятия 3-5 раз в неделю) – 1,55;</li>
              <li>Активные люди (интенсивные нагрузки, занятия 6-7 раз в неделю) – 1,725;</li>
              <li>Спортсмены и люди, выполняющие сходные нагрузки (6-7 раз в неделю) – 1,9.</li>
            </p>
          </ul>
        </div>
      </div>
      <div className={style.modalMain}>
        <div className={style.modal}>{modal ? `Для похудения и поддержания вашего веса в тонусе, вам необходимо потреблять ${sum} калорий в день` : null}</div>
      </div>
    </>
  );
};

export default CalcWeight;