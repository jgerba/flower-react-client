import { NavLink } from 'react-router-dom';

function MainNavigation() {
    return (
        <header>
            <nav>
                <ul>
                    <NavLink to="/" end>
                        LF
                    </NavLink>
                    <NavLink to="/catalogue">КАТАЛОГ</NavLink>
                    <NavLink to="/payment">ДОСТАВКА И ОПЛАТА</NavLink>
                    <NavLink to="/about">О НАС</NavLink>
                    <NavLink to="/contacts">КОНТАКТЫ</NavLink>
                    <NavLink to="/faq">FAQ</NavLink>
                    <NavLink to="/search">ПОИСК</NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
