import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import SectionHeader from '../components/UI/SectionHeader';

import classes from './Success.module.css';
import logo from '../svg/loverFlower-pink.svg';

function Success() {
    // reset scroll position
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className={classes.main}>
            <div className={classes.header}>
                <SectionHeader>Запрос отправлен</SectionHeader>
                <SectionHeader smallHeader={true}>успешно!</SectionHeader>
            </div>

            <p className={classes.message}>
                Спасибо за то, что воспользовались нашим магазином! <br /> В
                близжайшее время с вами свяжется администратор
            </p>

            <NavLink className={classes.link} to="/">
                на главную
            </NavLink>

            <div className={classes['decor-flower']}></div>

            <div className={classes['decor-ellipse-green-top-left']}></div>
            <div className={classes['decor-ellipse-purple-top-right']}></div>
            <div className={classes['decor-ellipse-green-bottom-right']}></div>
            <div className={classes['decor-ellipse-purple-bottom-left']}></div>
            <img className={classes['logo']} src={logo} alt="Logo" />
        </main>
    );
}

export default Success;
