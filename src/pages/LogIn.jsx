import { useEffect, useRef, useState } from 'react';

import TextHeader from '../components/UI/TextHeader';
import MenuBtn from '../components/UI/MenuBtn';
import ContentCard from '../components/UI/ContentCard';

import classes from './LogIn.module.css';
import showPass from '../svg/showPass.svg';
import hidePass from '../svg/hidePass.svg';

function LogIn() {
    // const nameRef = useRef();

    const [passIsVisible, setPassIsVisible] = useState(false);

    return (
        <main className={classes.main}>
            <ContentCard>
                <form
                    action=""
                    name="Вход для администратора"
                    onSubmit={event => event.preventDefault()}
                    className={classes.form}
                    autoComplete="off"
                >
                    <TextHeader>Вход для администратора</TextHeader>

                    <label htmlFor="adm-login">Введите ваш логин</label>
                    <input
                        // ref={nameRef}
                        // className={`modal_input ${
                        //     props.error ? 'wrong-input' : ''
                        // }`}
                        id="adm-login"
                        type="text"
                        name="Логин администратора"
                        placeholder="Логин администратора"
                        required
                        className={classes.input}
                        onChange={event => {}}
                    />

                    <label htmlFor="adm-pass">Введите ваш пароль</label>
                    <input
                        // ref={nameRef}
                        // className={`modal_input ${
                        //     props.error ? 'wrong-input' : ''
                        // }`}
                        id="adm-pass"
                        type={passIsVisible ? 'text' : 'password'}
                        name="Пароль администратора"
                        placeholder="Пароль администратора"
                        required
                        className={classes.input}
                        onChange={event => {}}
                    />

                    <button
                        className={classes['toggle-pass']}
                        onClick={() => setPassIsVisible(state => !state)}
                    >
                        <img
                            src={passIsVisible ? hidePass : showPass}
                            alt={
                                passIsVisible
                                    ? 'Скрыть пароль'
                                    : 'Показать пароль'
                            }
                        />
                    </button>

                    <MenuBtn className={classes['submit-btn']}>Войти</MenuBtn>
                </form>
            </ContentCard>
        </main>
    );
}

export default LogIn;
