import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

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
            <Link to="/orders">Заказы</Link>
            <Link to="/goods">Товары</Link>
            <Link to="/feedback">Обратная связь</Link>

            <MenuBtn
                className={classes['exit-btn']}
                blank={true}
                onClick={logOut}
            >
                Выход из кабинета
            </MenuBtn>
        </aside>
    );
}

export default AdminsTabs;
