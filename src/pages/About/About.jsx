import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWork } from '../../features/workSlice';
import style from './about.module.scss';
import diet2 from './aboutImg/pngwing.com.png';
import { Triangle } from 'react-loader-spinner';
import znak from './aboutImg/znak.png';
import ovosh from './aboutImg/ovosh.png';

const About = () => {
    const work = useSelector(state => state.work.work);
    const loading = useSelector(state => state.work.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWork());
    }, [dispatch]);

    if (loading) {
        return <div className={style.loader}><Triangle
            height="400"
            width="400"
            color="#ffc00f"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
        </div>
    }

    return (
        <div className={style.abMain}>
            <div className={style.abImg}>
                <img src={znak} alt='as' />
            </div>
            <div className={style.abImg2}>
                <img src={ovosh} alt='ass' />
            </div>
            <div className={style.abImg3}>
                <img src={diet2} alt='asdasd' />
            </div>
            <div className={style.zag}><h1>Лучшие диетологи</h1></div>
            <div className={style.workMain}>{work.map((item) => {
                return <div className={style.wrapWork}>
                    <div className={style.wrapImg}><img src={`http://localhost:3010/images/${item.image}`} alt='asdw' /></div>
                    <div className={style.wrapText}>
                        <p><b>{item.name}</b></p>
                        <p>{item.description}</p>
                    </div>
                </div>
            })}</div>
        </div>
    );
};

export default About;