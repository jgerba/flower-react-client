import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCookie } from '../utils/handleCookies';
import { authActions } from '../store/auth';
import { notifyActions } from '../store/notify';

import Logo from './Logo';
import AddressPanel from './info/AddressPanel';
import SocialPanel from './info/SocialPanel';

import classes from './Footer.module.css';

let timer;

function Footer() {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.auth.isAuth);
    const message = useSelector(state => state.notify.message);

    useEffect(() => {
        if (isAuth) return;

        const token = getCookie();

        if (token) {
            dispatch(authActions.logIn());
        } else {
            dispatch(authActions.logOut());
        }
    }, [isAuth]);

    useEffect(() => {
        if (!message) return;

        clearTimeout(timer);
        timer = setTimeout(() => {
            dispatch(notifyActions.clearMessage());
        }, 3000);
    }, [message]);

    return (
        <footer className={classes.footer}>
            <div className={`${classes.column} ${classes.credentials}`}>
                <Logo className={classes.logo} />
                <h3 className={classes.header}>реквизиты</h3>
                <p className={classes.descr}>
                    ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул.
                    Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с
                    BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22
                    220007, г. Минск, улица Толстого
                </p>
            </div>

            <div className={`${classes.column} ${classes.catalogue}`}>
                <NavLink className={classes.header} to="/catalogue">
                    Каталог
                </NavLink>
                <NavLink className={classes.header} to="/about">
                    О НАС
                </NavLink>
                <NavLink className={classes.header} to="/contacts">
                    КОНТАКТЫ
                </NavLink>
            </div>

            <div className={`${classes.column} ${classes.links}`}>
                <NavLink className={classes.header} to="/payment">
                    УСЛОВИЯ ДОСТАВКИ
                </NavLink>

                <NavLink className={classes.header} to="/corporate">
                    для корпоративных <br /> клиентов
                </NavLink>
                {isAuth ? (
                    <NavLink className={classes.header} to="/cabinet">
                        Кабинет администратора
                    </NavLink>
                ) : (
                    <NavLink className={classes.header} to="/login">
                        Вход
                    </NavLink>
                )}
            </div>

            <div className={`${classes.column} ${classes.address}`}>
                <AddressPanel footer={true} />
                <SocialPanel className={classes.social} />
            </div>

            {message && (
                <aside className={classes['info_pop-up']}>
                    <p>{message}</p>
                </aside>
            )}
        </footer>
    );
}

export default Footer;
