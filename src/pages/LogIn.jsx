import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useFetch from '../hooks/useFetch';

import { authActions } from '../store/auth';
import { notifyActions } from '../store/notify';

import TextHeader from '../components/UI/TextHeader';
import MenuBtn from '../components/UI/MenuBtn';
import ContentCard from '../components/UI/ContentCard';
import FormInput from '../components/FormInput';

import classes from './LogIn.module.css';
import showPass from '../svg/showPass.svg';
import hidePass from '../svg/hidePass.svg';
import IconBtn from '../components/UI/IconBtn';

function LogIn() {
    // reset scroll position
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formRef = useRef();

    const [passIsVisible, setPassIsVisible] = useState(false);
    // error from the inputs, cancel sbm if true
    const [hasError, setHasError] = useState(false);

    const { sendRequest, isLoading, error } = useFetch();

    function fetchData(event) {
        event.preventDefault();

        // login as admin
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

    // send token to the store for storing as cookie
    function applyLogin(data) {
        dispatch(authActions.logIn(data.token));
        dispatch(notifyActions.applyMessage('Успешный вход'));
        navigate('/cabinet');
    }

    function submitHandler(event) {
        event.preventDefault();
        fetchData(event);
    }

    return (
        <main className={classes.main}>
            <ContentCard>
                <form
                    ref={formRef}
                    action=""
                    name="Вход для администратора"
                    className={classes.form}
                    onSubmit={submitHandler}
                >
                    <TextHeader>Вход для администратора</TextHeader>

                    <FormInput
                        title="Введите ваш логин"
                        name="login"
                        placeholder="Логин администратора"
                        required={true}
                        onChange={() => {}}
                        onError={val => setHasError(val)}
                    />

                    <FormInput
                        title="Введите ваш пароль"
                        name="password"
                        placeholder="Пароль администратора"
                        type={passIsVisible ? 'text' : 'password'}
                        required={true}
                        onChange={() => {}}
                        onError={val => setHasError(val)}
                    />
                    <IconBtn
                        src={passIsVisible ? hidePass : showPass}
                        alt={
                            passIsVisible ? 'Скрыть пароль' : 'Показать пароль'
                        }
                        className={classes['toggle-pass']}
                        onClick={() => setPassIsVisible(state => !state)}
                    />

                    <MenuBtn
                        type="submit"
                        className={classes['submit-btn']}
                        disabled={hasError}
                    >
                        Войти
                    </MenuBtn>
                </form>
            </ContentCard>

            <div className={classes['decor-flower-top']}></div>
            <div className={classes['decor-flower-bottom']}></div>

            <div className={classes['decor-ellipse-top']}></div>
            <div className={classes['decor-ellipse-middle']}></div>
        </main>
    );
}

export default LogIn;
