import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDiet } from '../../features/dietSlice';
import { useSelector } from 'react-redux/es/exports';
import img from '../../public/grecha.jpg'
import styles from '../../pages/Diet/Diet.module.scss'
const Diet = () => {

    const dispatch = useDispatch();

    const diets = useSelector((state) => state.diet.diet)

    useEffect(() => {
        dispatch(fetchDiet());
    }, [dispatch])

    return (
        <div className={styles.cardsbody}>
            <div className={styles.card}>
                {diets.map((item) => {
                    return (
                        <div>
                            <h2>
                                {item.name}
                            </h2>
                            <p>{item.description}</p>
                            <div className={styles.image}><img src={img} alt="" /></div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Diet;