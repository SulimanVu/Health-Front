import React, { useEffect } from "react";
import styles from "./boybody.module.scss";
import { useDispatch } from "react-redux";
import { fetchMuscle } from "../../../features/muscleSlice";
import { useNavigate } from "react-router-dom";

const BoyBody = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMuscle());
  }, [dispatch]);

  const handleClick = (e) => {
    localStorage.setItem('title', e.target.title);
    navigate("/oneMuscle");
  };

  return (
    <section className={styles.boy_section}>
      <div className={styles.muscle_map}>
        <img
          className={styles.background}
          src="https://musclewiki.com/static/Crops/00.-Blank-Figures.png"
          alt="#"
        />
        <img
          className={styles.traps_a}
          src="https://musclewiki.com/static/Crops/08.-TrapsLeft.png"
          alt="#"
          onClick={(e) => handleClick(e)}
          title="Трапецивидная мышца"
        />
        <img
          className={styles.traps_b}
          src="https://musclewiki.com/static/Crops/08.-TrapsRight.png"
          alt="#"
          onClick={(e) => handleClick(e)}
          title="Трапецивидная мышца"
        />
        <img
          className={styles.shoulders_a}
          src="https://musclewiki.com/static/Crops/07.A-Deltoids.png"
          alt="#"
          onClick={(e) => handleClick(e)}
          title="Плечо"
        />
        <img
          className={styles.shoulders_b}
          src="https://musclewiki.com/static/Crops/07.B-Deltoids.png"
          alt="#"
          onClick={(e) => handleClick(e)}
          title="Плечо"
        />
        <img
          className={styles.pecs}
          src="https://musclewiki.com/static/Crops/06.-Pecs.png"
          alt="#"
          onClick={(e) => handleClick(e)}
          title="Грудная клетка"
        />
        <img
          className={styles.biceps_a}
          src="https://musclewiki.com/static/Crops/05.A-Biceps.png"
          alt="#"
          onClick={(e) => handleClick(e)}
          title="Бицепс"
        />
        <img
          className={styles.biceps_b}
          src="https://musclewiki.com/static/Crops/05.B-Biceps.png"
          alt="#"
          onClick={(e) => handleClick(e)}
          title="Бицепс"
        />
        <img
          className={styles.forearm_a}
          src="https://musclewiki.com/static/Crops/14.A-Forearms.png"
          alt="#"
          onClick={(e) => handleClick(e)}
          title="Предплечье"
        />
        <img
          className={styles.forearm_b}
          src="https://musclewiki.com/static/Crops/14.B-Forearms.png"
          alt="#"
          onClick={(e) => handleClick(e)}
          title="Предплечье"
        />
        <img
          className={styles.obliques}
          src="https://musclewiki.com/static/Crops/04.-Obliques.png"
          alt="#"
          onClick={(e) => handleClick(e)}
          title="Пресс"
        />
        <img
          className={styles.quads_a}
          src="https://musclewiki.com/static/Crops/01.A-Quads.png"
          alt="#"
          title="Квадрицепс"
        />
        <img
          className={styles.quads_b}
          src="https://musclewiki.com/static/Crops/01.B-Quads.png"
          alt="#"
          title="Квадрицепс"
        />
        <img
          className={styles.calves_a}
          src="https://musclewiki.com/static/Crops/13.A-Calves.png"
          alt="#"
          title="Икроно́жная мышца"
        />
        <img
          className={styles.calves_b}
          src="https://musclewiki.com/static/Crops/13.B-Calves.png"
          alt="#"
          title="Икроно́жная мышца"
        />
        <img
          className={styles.back_traps_a}
          src="https://musclewiki.com/static/Crops/08.B-Traps.png"
          alt="#"
          title="Трапецивидная мышца"
        />
        <img
          className={styles.back_traps_b}
          src="https://musclewiki.com/static/Crops/08.C-Traps.png"
          alt="#"
          title="Трапецивидная мышца"
        />
        <img
          className={styles.back_shoulders_a}
          src="https://musclewiki.com/static/Crops/07.C-Deltoids.png"
          alt="#"
          title="Плечо"
        />
        <img
          className={styles.back_shoulders_b}
          src="https://musclewiki.com/static/Crops/07.D-Deltoids.png"
          alt="#"
          title="Плечо"
        />
        <img
          className={styles.triceps_a}
          src="https://musclewiki.com/static/Crops/09.A-Triceps.png"
          alt="#"
          title="Трицепс"
        />
        <img
          className={styles.triceps_b}
          src="https://musclewiki.com/static/Crops/09.B-Triceps.png"
          alt="#"
          title="Трицепс"
        />
        <img
          className={styles.back_lats_a}
          src="https://musclewiki.com/static/Crops/10.A-Lats.png"
          alt="#"
        />
        <img
          className={styles.back_lats_b}
          src="https://musclewiki.com/static/Crops/10.B-Lats.png"
          alt="#"
        />
        <img
          className={styles.back_lower}
          src="https://musclewiki.com/static/Crops/15.-Lower-Back.png"
          alt="#"
        />
        <img
          className={styles.back_forearms_a}
          src="https://musclewiki.com/static/Crops/14.C-Forearms.png"
          alt="#"
          title="Предплечье"
        />
        <img
          className={styles.back_forearms_b}
          src="https://musclewiki.com/static/Crops/14.D-Forearms.png"
          alt="#"
          title="Предплечье"
        />
        <img
          className={styles.back_glutes}
          src="https://musclewiki.com/static/Crops/11.-Glutes.png"
          alt="#"
        />
        <img
          className={styles.back_hamstrings_a}
          src="https://musclewiki.com/static/Crops/12.A-Hamstrings.png"
          alt="#"
        />
        <img
          className={styles.back_hamstrings_b}
          src="https://musclewiki.com/static/Crops/12.B-Hamstrings.png"
          alt="#"
        />
        <img
          className={styles.back_calves_a}
          src="https://musclewiki.com/static/Crops/13.C-Calves.png"
          alt="#"
        />
        <img
          className={styles.back_calves_b}
          src="https://musclewiki.com/static/Crops/13.D-Calves.png"
          alt="#"
        />
        <img
          className={styles.obliques_a}
          src="https://musclewiki.com/static/Crops/16.A-Obliques.png"
          alt="#"
        />
        <img
          className={styles.obliques_b}
          src="https://musclewiki.com/static/Crops/16.B-Obliques.png"
          alt="#"
        />
      </div>
    </section>
  );
};

export default BoyBody;
