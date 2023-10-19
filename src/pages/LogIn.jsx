import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useFetch from '../hooks/use-fetch';

import { authActions } from '../store/auth';
import { notifyActions } from '../store/notify';

import TextHeader from '../components/UI/TextHeader';
import MenuBtn from '../components/UI/MenuBtn';
import ContentCard from '../components/UI/ContentCard';

import classes from './LogIn.module.css';
import showPass from '../svg/showPass.svg';
import hidePass from '../svg/hidePass.svg';

function LogIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formRef = useRef();
    const [passIsVisible, setPassIsVisible] = useState(false);

    const { sendRequest, isLoading, error } = useFetch();

    function fetchData() {
        sendRequest(
            {
                url: '/login',
                method: 'POST',
                body: {
                    name: formRef.current.login.value,
                    password: formRef.current.password.value,
                },
            },
            applyLogin,
            false
        );
    }

    function applyLogin(data) {
        dispatch(authActions.logIn(data.token));
        dispatch(notifyActions.applyMessage('Успешный вход'));
        navigate('/admins');
    }

    return (
        <main className={classes.main}>
            <ContentCard>
                <form
                    ref={formRef}
                    action=""
                    name="Вход для администратора"
                    onSubmit={event => event.preventDefault()}
                    className={classes.form}
                >
                    <TextHeader>Вход для администратора</TextHeader>

                    <label htmlFor="adm-login">Введите ваш логин</label>
                    <input
                        id="adm-login"
                        type="text"
                        name="login"
                        placeholder="Логин администратора"
                        required
                        className={classes.input}
                        onChange={event => {}}
                    />

                    <label htmlFor="adm-pass">Введите ваш пароль</label>
                    <input
                        id="adm-pass"
                        type={passIsVisible ? 'text' : 'password'}
                        name="password"
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

                    <MenuBtn
                        className={classes['submit-btn']}
                        onClick={fetchData}
                    >
                        Войти
                    </MenuBtn>
                </form>
            </ContentCard>
        </main>
    );
}

export default LogIn;
