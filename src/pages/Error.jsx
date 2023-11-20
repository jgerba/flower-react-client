import { NavLink } from 'react-router-dom';

import classes from './Error.module.css';
import logo from '../svg/lover flower-blue.svg';

function ErrorPage() {
    return (
        <main className={classes.main}>
            <h2 className={classes.header}>4</h2>
            <h2 className={classes.header}>0</h2>
            <h2 className={classes.header}>4</h2>

            <div className={classes.text}>
                <p>Ошибка 404</p>
                <p>Упс...Такой страницы нет</p>
                <NavLink className={classes.link} to="/">
                    на главную
                </NavLink>
            </div>

            <img className={classes.logo} src={logo} alt="Lower Flower logo" />

            <div className={classes['decor-flower-left']}></div>
            <div className={classes['decor-flower-right']}></div>

            <div className={classes['decor-ellipse-top']}></div>
            <div className={classes['decor-ellipse-bottom-left']}></div>
            <div className={classes['decor-ellipse-bottom-right']}></div>
        </main>
    );
}

export default ErrorPage;
