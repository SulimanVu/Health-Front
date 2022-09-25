import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../features/productSlice";
import styles from "./calcOnDay.module.scss";

const CalcOnDay = () => {
  const products = useSelector((state) => state.product.products);

  const [calories, setCalories] = useState(0);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(null)
  const [product, setProduct] = useState(0)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  function handleCalculate(e) {
    setActive(true)
    const productCalories = products.find(item => {
        if(item.title === product){
            return item
        }
    })
    setCalories(productCalories.calories * value/100)
    e.preventDefault()
  }

  return (
    <div className={styles.form_conteiner}>
        <div className={styles.calories}>
        {active ? <h1>{calories} Ккал</h1> : false}
        </div>
      <form onSubmit={handleCalculate} className={styles.form}>
        <select value={product} onChange={(e) => setProduct(e.target.value)} name="" id="">
          <option value="">Выберите продукт</option>
          {products.map((product, index) => {
            return (
              <option key={index} value={product.title}>
                {product.title}
              </option>
            );
          })}
        </select>
        <input type="number" step={100} placeholder="Укажите кол-во в граммах" min={0} value={value} onChange={(e) => setValue(e.target.value)} />
        <button>Расчитать</button>
      </form>
    </div>
  );
};

export default CalcOnDay;
