import { NavLink } from 'react-router-dom';

import Logo from './Logo';
import CallPanel from './CallPanel';

import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
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
                    <NavLink className={classes.link} to="/search">
                        {
                            <svg
                                className={classes.icon}
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="ph:magnifying-glass-thin">
                                    <path
                                        id="Vector"
                                        d="M15.9489 15.5509L12.7239 12.326C13.8154 11.1308 14.3957 9.55591 14.3407 7.93829C14.2857 6.32068 13.5998 4.78882 12.4297 3.67051C11.2597 2.5522 9.69835 1.93626 8.0799 1.9545C6.46145 1.97273 4.91441 2.62368 3.76982 3.76807C2.62523 4.91246 1.974 6.45938 1.95548 8.07783C1.93696 9.69627 2.55263 11.2577 3.67073 12.428C4.78883 13.5982 6.32057 14.2844 7.93818 14.3397C9.55578 14.395 11.1308 13.8149 12.3261 12.7237L15.5512 15.9488C15.6039 16.0015 15.6755 16.0311 15.7501 16.0311C15.8247 16.0311 15.8962 16.0014 15.9489 15.9487C16.0017 15.8959 16.0313 15.8244 16.0313 15.7498C16.0313 15.6752 16.0016 15.6037 15.9489 15.5509ZM2.53175 8.15602C2.53175 7.0435 2.86165 5.95597 3.47974 5.03094C4.09782 4.10591 4.97632 3.38494 6.00416 2.9592C7.03199 2.53346 8.16299 2.42206 9.25413 2.6391C10.3453 2.85615 11.3476 3.39188 12.1342 4.17855C12.9209 4.96522 13.4566 5.9675 13.6737 7.05864C13.8907 8.14978 13.7793 9.28078 13.3536 10.3086C12.9278 11.3365 12.2069 12.215 11.2818 12.833C10.3568 13.4511 9.26927 13.781 8.15675 13.781C6.66542 13.7793 5.23566 13.1862 4.18113 12.1316C3.1266 11.0771 2.53343 9.64735 2.53175 8.15602Z"
                                        fill="white"
                                    />
                                </g>
                            </svg>
                        }
                        ПОИСК
                    </NavLink>
                </ul>
            </nav>
            {/* <CallPanel mainNav={true} /> */}
        </header>
    );
}

export default Header;
