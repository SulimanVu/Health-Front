import React from 'react';
import style from './Calc.module.scss'

const Calc = () => {
    return (
        <div className={style.marg}>
            <div>
                <input placeholder='Возраст, лет' />
            </div>
            <div>
                <input placeholder='Рост, в см.' />
            </div>
            <div>
                <input placeholder='Вес, в кг.' />
            </div>
        </div>
    );
};

export default Calc;