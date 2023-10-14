import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useWindowSize from '../hooks/useWindowSize';

import Logo from './Logo';
import InfoPanel from './info/InfoPanel';

import classes from './Header.module.css';
import crossImg from '../svg/closeBtn.svg';

function Header() {
    const dispatch = useDispatch();

    const [scrollDown, setScrollDown] = useState();
    const [showInput, setShowInput] = useState(false);

    const [scrollY] = useWindowSize();

    useEffect(() => {
        scrollY > 110 ? setScrollDown(true) : setScrollDown(false);
    }, [scrollY]);

    function searchValueHandler(params) {}

    return (
        <header
            className={`${classes.header} ${scrollDown ? classes.dark : ''}`}
        >
            <nav className={classes.nav}>
                <Logo />
                <NavLink className={classes.link} to="/catalogue">
                    КАТАЛОГ
                </NavLink>
                <NavLink className={classes.link} to="/payment">
                    ДОСТАВКА И ОПЛАТА
                </NavLink>
                <NavLink className={classes.link} to="/about">
                    О НАС
                </NavLink>
                <NavLink className={classes.link} to="/contacts">
                    КОНТАКТЫ
                </NavLink>
                <NavLink className={classes.link} to="/faq">
                    FAQ
                </NavLink>
                <div className={classes.search}>
                    {showInput || (
                        <button
                            className={`${classes['search_show-btn']} ${classes.link}`}
                            name="Открыть поиск"
                            onClick={() => setShowInput(true)}
                        >
                            ПОИСК
                        </button>
                    )}
                    {showInput && (
                        <form className={classes['search_form']}>
                            <input
                                className={classes['search_input']}
                                type="search"
                                id="search_input"
                                name="searchPhrase"
                                maxLength="30"
                                placeholder="Введите свой запрос"
                                onChange={searchValueHandler}
                            />
                            <button
                                className={classes['search_reset-btn']}
                                name="Сброс поиска"
                                type="reset"
                                onClick={() => setShowInput(false)}
                            >
                                <img src={crossImg} />
                            </button>
                        </form>
                    )}
                </div>
            </nav>

            <InfoPanel
                scrollDown={scrollDown}
                className={`${classes['info-panel']} ${
                    scrollDown ? classes.shrink : ''
                }`}
            />
        </header>
    );
}

export default Header;
