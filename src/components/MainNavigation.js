import { NavLink } from 'react-router-dom';

import CallPanel from './CallPanel';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <NavLink className={classes.logo} to="/" end>
                        <p className={classes['logo-L']}>l</p>
                        <p className={classes['logo-F']}>f</p>
                    </NavLink>
                    <NavLink to="/catalogue">КАТАЛОГ</NavLink>
                    <NavLink to="/payment">ДОСТАВКА И ОПЛАТА</NavLink>
                    <NavLink to="/about">О НАС</NavLink>
                    <NavLink to="/contacts">КОНТАКТЫ</NavLink>
                    <NavLink to="/faq">FAQ</NavLink>
                    <NavLink to="/search">ПОИСК</NavLink>
                </ul>
            </nav>
            <CallPanel mainNav={true} />
        </header>
    );
}

export default MainNavigation;
