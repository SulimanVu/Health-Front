import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWork } from '../../features/workSlice';
import style from './about.module.scss';
import diet2 from './aboutImg/pngwing.com.png';
import { Triangle } from 'react-loader-spinner';
import znak from './aboutImg/znak.png';
import ovosh from './aboutImg/ovosh.png';
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    const work = useSelector(state => state.work.work);
    const loading = useSelector(state => state.work.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        Aos.init({ duration: 2000 });
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
            <div className={style.zag}><h1>О диетологии</h1></div>
            <div className={style.tex1}>
                <div className={style.abImg}>
                    <img src={znak} alt='as' />
                </div>
                <div className={style.abText1}>Над вопросом правильного и здорового питания люди задумываются часто, но самостоятельно выбрать для себя оптимальный вариант диеты просто невозможно.
                    Диетология – это тот раздел медицины, который помогает сбалансированность питание человека. В эту область входит изучение принципов правильного питания, как здорового человека, так и больных людей.
                    Некоторые расстройства организма часто бывают связаны с нарушением питания, с избытком, либо дефицитом витаминов, микроэлементов. Для нормального функционирования организма, все питательные вещества должны быть в строгом балансе.
                </div>
            </div>
            <div className={style.tex1}>
                <div className={style.abText1}>Диетология решает эти вопросы, обеспечивая профилактическую альтернативу многим заболеваниям.
                    Врачи диетологи занимаются организацией рационального питания. Без риска для здоровья, они помогут стабилизировать вес, рекомендуют профилактические и лечебные диеты.
                </div>
                <div className={style.abImg}>
                    <img src={diet2} alt='as' />
                </div>
            </div>
            <div className={style.tex1}>
                <div className={style.abImg}>
                    <img src={ovosh} alt='as' />
                </div>
                <div className={style.abText1}>Основа этого научного направления считается практическая диетотерапия и лечебное питание.
                    Строгое разграничение питания – очень важное условие диетологии.
                    Но основным принципом, от которого будет зависеть эффективность диеты, следует назвать индивидуальность.
                </div>
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