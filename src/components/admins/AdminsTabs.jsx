import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { notifyActions } from '../../store/notify';

import useFetch from '../../hooks/useFetch';

import MenuBtn from '../UI/MenuBtn';

import classes from './AdminsTabs.module.css';

function AdminsTabs(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sendRequest = useFetch();

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
            <MenuBtn
                className={classes.btn}
                blank={true}
                onClick={props.onShowOrders}
            >
                Заказы
            </MenuBtn>
            <MenuBtn
                className={classes.btn}
                blank={true}
                onClick={props.onShowGoods}
            >
                Товары
            </MenuBtn>
            <MenuBtn
                className={classes.btn}
                blank={true}
                onClick={props.onShowFeed}
            >
                Обратная связь
            </MenuBtn>

            <MenuBtn className={classes['exit-btn']} onClick={logOut}>
                Выход из кабинета
            </MenuBtn>
        </aside>
    );
}

export default AdminsTabs;
