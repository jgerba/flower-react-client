import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';

import useFetch from '../hooks/use-fetch';

import { notifyActions } from '../store/notify';

import MenuBtn from '../components/UI/MenuBtn';
import AdminsTabs from '../components/AdminsTabs';
import GoodsItem from '../components/GoodsItem';
import EditItemForm from '../components/modals/EditItemForm';
import Backdrop from '../components/modals/Backdrop';
import TextHeader from '../components/UI/TextHeader';

import classes from './Goods.module.css';

function Goods() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.auth.isAuth);

    const [items, setItems] = useState([]);
    const [itemsToRender, setItemsToRender] = useState([]);
    const [itemToEdit, setItemToEdit] = useState(null);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const { sendRequest, isLoading, error } = useFetch();

    useEffect(() => {
        sendRequest({ url: '/bouquets' }, applyItemsData, false);
    }, []);

    function applyItemsData(data) {
        if (!data) return;
        setItems(data);
        setItemsToRender(data);
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

    function itemChangeHandler(item) {
        setItems(items => {
            const index = items.findIndex(el => el._id === item._id);
            return items.toSpliced(index, 1, item);
        });
    }

    useEffect(() => {
        setItemsToRender(items);
    }, [items]);

    function showModalHandler(item) {
        setItemToEdit(item);
        setModalIsVisible(true);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
        setItemToEdit(null);
    }

    return (
        <main className={classes.main}>
            <AdminsTabs className={classes.tabs} />

            <TextHeader>Товары</TextHeader>

            <section className={classes.goods}>
                {itemsToRender.length !== 0 ? (
                    itemsToRender.map(item => (
                        <GoodsItem
                            className={classes.bouquet}
                            key={item._id}
                            title={item.title}
                            price={item.price}
                            descr={item.description}
                            onClick={() => showModalHandler(item)}
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
                    <EditItemForm
                        item={itemToEdit}
                        onItemChange={item => itemChangeHandler(item)}
                        onClose={hideModalHandler}
                    ></EditItemForm>,
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
