import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useFetch from '../hooks/use-fetch';

import { authActions } from '../store/auth';

import MenuBtn from '../components/UI/MenuBtn';

import classes from './Admins.module.css';

function Admins() {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.auth.isAuth);

    const { sendRequest, isLoading, error } = useFetch();

    function logOut() {
        sendRequest(
            {
                url: '/logout',
                method: 'POST',
            },
            () => navigate('/login')
        );
    }

    return (
        <main className={classes.main}>
            <MenuBtn onClick={logOut}>Выйти</MenuBtn>
        </main>
    );
}

export default Admins;
