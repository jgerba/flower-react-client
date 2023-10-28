import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { notifyActions } from '../store/notify';

import useFetch from '../hooks/use-fetch';

import MenuBtn from './UI/MenuBtn';

import classes from './AdminsTabs.module.css';

function AdminsTabs(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { sendRequest, isLoading, error } = useFetch();

    // logout from admin
    function logOut() {
        sendRequest(
            {
                url: '/logout',
                method: 'POST',
            },
            applyLogout
        );
    }

    function applyLogout() {
        dispatch(notifyActions.applyMessage('Успешный выход'));
        navigate('/login');
    }

    return (
        <aside
            className={`${classes.tabs} ${
                props.className ? props.className : ''
            }`}
        >
            <MenuBtn blank={true} onClick={event => props.onShowOrders(event)}>
                Заказы
            </MenuBtn>
            <MenuBtn blank={true} onClick={event => props.onShowGoods(event)}>
                Товары
            </MenuBtn>
            <MenuBtn blank={true} onClick={event => props.onShowFeed(event)}>
                Обратная связь
            </MenuBtn>

            <MenuBtn className={classes['exit-btn']} onClick={logOut}>
                Выход из кабинета
            </MenuBtn>
        </aside>
    );
}

export default AdminsTabs;
