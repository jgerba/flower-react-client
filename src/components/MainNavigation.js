import { NavLink } from 'react-router-dom';
import CallPanel from './CallPanel';

function MainNavigation() {
    return (
        <header>
            <nav className="nav">
                <ul className="nav__ul">
                    <NavLink className="home--logo" to="/" end>
                        <p>l</p>
                        <p className="home--logo__F">f</p>
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
