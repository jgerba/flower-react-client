import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

import useFetch from '../hooks/use-fetch';

import { notifyActions } from '../store/notify';

import MenuBtn from '../components/UI/MenuBtn';
import AdminsTabs from '../components/AdminsTabs';
import GoodsItem from '../components/GoodsItem';
import EditItem from '../components/modals/EditItem';
import Backdrop from '../components/modals/Backdrop';
import TextHeader from '../components/UI/TextHeader';

import classes from './Goods.module.css';

function Goods() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.auth.isAuth);

    const [bouquets, setBouquets] = useState([]);
    const [bouquetsToRender, setBouquetsToRender] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

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

    function showModalHandler(props) {
        setModalIsVisible(true);
    }

    function hideModalHandler(props) {
        setModalIsVisible(false);
    }

    return (
        <main className={classes.main}>
            <AdminsTabs className={classes.tabs} />

            <TextHeader>Товары</TextHeader>

            <section className={classes.goods}>
                {bouquetsToRender.length !== 0 ? (
                    bouquetsToRender.map(item => (
                        <GoodsItem
                            className={classes.bouquet}
                            key={item._id}
                            title={item.title}
                            price={item.price}
                            descr={item.description}
                            onClick={showModalHandler}
                        />
                    ))
                ) : (
                    <p className={classes.excuse}>
                        Букетов еще нет. Создайте первый букет
                    </p>
                )}
            </section>

            {modalIsVisible &&
                createPortal(
                    <EditItem
                        className={classes['edit-item-modal']}
                    ></EditItem>,
                    document.getElementById('modal-root')
                )}
            {modalIsVisible &&
                createPortal(
                    <Backdrop
                        className={classes['edit-item-modal']}
                        onClick={hideModalHandler}
                    ></Backdrop>,
                    document.getElementById('backdrop-root')
                )}

            <MenuBtn className={classes['exit-btn']} onClick={logOut}>
                Выйти
            </MenuBtn>
        </main>
    );
}

export default Goods;
