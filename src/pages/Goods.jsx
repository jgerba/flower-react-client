import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useFetch from '../hooks/use-fetch';

import { notifyActions } from '../store/notify';

import MenuBtn from '../components/UI/MenuBtn';
import AdminsTabs from '../components/AdminsTabs';
import GoodsItem from '../components/GoodsItem';

import classes from './Goods.module.css';

function Goods() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.auth.isAuth);

    const [bouquets, setBouquets] = useState([]);
    const [bouquetsToRender, setBouquetsToRender] = useState([]);

    const { sendRequest, isLoading, error } = useFetch();

    useEffect(() => {
        sendRequest({ url: '/bouquets' }, applyBouquetsData, false);
    }, []);

    function applyBouquetsData(data) {
        if (!data) return;
        setBouquets(data);
        setBouquetsToRender(data);
    }

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
        <main className={classes.main}>
            <AdminsTabs className={classes.tabs} />

            <section className={classes.goods}>
                {bouquetsToRender.length !== 0 ? (
                    bouquetsToRender.map(item => (
                        <GoodsItem
                            className={classes.bouquet}
                            key={item._id}
                            title={item.title}
                            price={item.price}
                            descr={item.description}
                            onClick={() => {}}
                        />
                    ))
                ) : (
                    <p className={classes.excuse}>
                        Букетов еще нет. Создайте первый букет
                    </p>
                )}
            </section>

            <MenuBtn className={classes['exit-btn']} onClick={logOut}>
                Выйти
            </MenuBtn>
        </main>
    );
}

export default Goods;
