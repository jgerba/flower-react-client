import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useWindowSize from '../hooks/useWindowSize';

import { bouqetActions } from '../store/bouqets';

import Logo from './Logo';
import InfoPanel from './info/InfoPanel';

import classes from './Header.module.css';
import crossImg from '../svg/closeBtn.svg';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const showInfoPanel = useSelector(state => state.style.fullInfoPanel);

    const [scrollDown, setScrollDown] = useState();
    const [showInput, setShowInput] = useState(false);

    const [scrollY] = useWindowSize();

    // minimize header after scrolling
    useEffect(() => {
        scrollY > 110 ? setScrollDown(true) : setScrollDown(false);
    }, [scrollY]);

    // add search value to store & redirect to search page
    function searchValueHandler(event) {
        dispatch(bouqetActions.applySearchValue(event.target.value.trim()));
        navigate('/search');
    }

    // reset form input & search value in store
    function resetInput() {
        setShowInput(false);
        dispatch(bouqetActions.applySearchValue(''));
    }

    return (
        <header
            className={`${classes.header} ${
                showInfoPanel && !scrollDown ? classes.transparent : ''
            }`}
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
                        <form
                            action=""
                            name="Форма поиска"
                            autoComplete="off"
                            className={classes['search_form']}
                            onSubmit={event => event.preventDefault()}
                        >
                            <input
                                className={classes['search_input']}
                                type="search"
                                name="Поле поиска"
                                maxLength="30"
                                placeholder="Введите свой запрос"
                                onChange={searchValueHandler}
                            />
                            <button
                                className={classes['search_reset-btn']}
                                name="Сброс поиска"
                                type="reset"
                                onClick={resetInput}
                            >
                                <img src={crossImg} />
                            </button>
                        </form>
                    )}
                </div>
            </nav>

            <InfoPanel
                showPanel={showInfoPanel}
                scrollDown={scrollDown}
                className={`${classes['info-panel']} ${
                    showInfoPanel && !scrollDown ? classes.show : ''
                }`}
            />
        </header>
    );
}

export default Header;
