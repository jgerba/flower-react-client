import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useWindowSize from '../hooks/useWindowSize';

import Logo from './Logo';
import InfoPanel from './info/InfoPanel';

import classes from './Header.module.css';

function Header() {
    const [scrollDown, setScrollDown] = useState();
    const [scrollY] = useWindowSize();

    useEffect(() => {
        scrollY > 110 ? setScrollDown(true) : setScrollDown(false);
    }, [scrollY]);

    return (
        <header
            className={`${classes.header} ${scrollDown ? classes.dark : ''}`}
        >
            <nav className={classes.nav}>
                <ul className={classes.ul}>
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
                    <NavLink
                        className={`${classes.link} ${classes.search}`}
                        to="/search"
                    >
                        ПОИСК
                    </NavLink>
                </ul>
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
