import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import useFetch from '../hooks/use-fetch';

import AdminsTabs from '../components/admins/AdminsTabs';
import GoodsItem from '../components/admins/GoodsItem';
import OrdersItem from '../components/admins/OrdersItem';
import FeedsItem from '../components/admins/FeedsItem';
import EditItemForm from '../components/modals/EditItemForm';
import EditOrderForm from '../components/modals/EditOrderForm';
import EditFeedForm from '../components/modals/EditFeedForm';
import Backdrop from '../components/modals/Backdrop';
import TextHeader from '../components/UI/TextHeader';
import MenuBtn from '../components/UI/MenuBtn';

import classes from './AdminCabinet.module.css';
import crossImg from '../svg/closeBtn.svg';

function AdminCabinet() {
    const [showOrders, setShowOrders] = useState(true);
    const [showGoods, setShowGoods] = useState(false);
    const [showFeeds, setShowFeeds] = useState(false);
    const [url, setUrl] = useState('/orders');

    const [items, setItems] = useState([]);
    const [itemsToRender, setItemsToRender] = useState([]);
    const [itemToEdit, setItemToEdit] = useState(null);
    const [searchVal, setSearchVal] = useState('');

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [isNewItem, setIsNewItem] = useState(false);

    const { sendRequest, isLoading, error } = useFetch();

    // change download url according to tab selection
    useEffect(() => {
        if (showOrders) {
            setUrl('/orders');
        } else if (showGoods) {
            setUrl('/bouquets');
        } else {
            setUrl('/feedbacks');
        }

        // drop prev tab items
        if (items) {
            setItems([]);
            setItemsToRender([]);
        }
    }, [showOrders, showGoods, showFeeds]);

    // download all items
    useEffect(() => {
        sendRequest({ url: url }, applyItemsData);
    }, [url]);

    function applyItemsData(data) {
        console.log(data);
        if (!data) return;
        setItems(data);
        setItemsToRender(data);
    }

    // update item in items array after editing
    function modalChangeHandler(item) {
        setItems(items => {
            const index = items.findIndex(el => el._id === item._id);
            return items.toSpliced(index, 1, item);
        });
        setItemsToRender(items => {
            const index = items.findIndex(el => el._id === item._id);
            return items.toSpliced(index, 1, item);
        });
    }

    // filter items
    useEffect(() => {
        if (!searchVal) return setItemsToRender(items);

        const filteredItems = items.filter(item =>
            item.title.toLowerCase().match(searchVal.toLowerCase())
        );
        setItemsToRender(filteredItems);
    }, [searchVal]);

    // choose item to edit and send data to the modal inputs
    function showModalHandler(event, item = null) {
        if (event?.target.nodeName === 'IMG') return;

        if (event === 'BUTTON') {
            return;
        }

        if (item) {
            // open item to edit
            setItemToEdit(item);
        } else {
            // create new item
            setItemToEdit({
                title: '',
                price: 0,
                oldPrice: 0,
                src: '',
                description: '',
                new: false,
                sale: false,
                flags: [],
            });
            setIsNewItem(true);
        }

        setModalIsVisible(true);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
        setItemToEdit(null);
        setIsNewItem(false);
    }

    function searchHandler(event) {
        setSearchVal(event.target.value);
    }

    // change state of tabs
    function showTabsHandler(event) {
        switch (event.target.innerText) {
            case 'ЗАКАЗЫ':
                setShowOrders(true);
                setShowGoods(false);
                setShowFeeds(false);
                break;

            case 'ТОВАРЫ':
                setShowOrders(false);
                setShowGoods(true);
                setShowFeeds(false);
                break;

            case 'ОБРАТНАЯ СВЯЗЬ':
                setShowOrders(false);
                setShowGoods(false);
                setShowFeeds(true);
                break;

            default:
                console.log('Что-то сломалось...');
                break;
        }
    }

    function removeItemHandler(id) {
        // delete last letter 's' in url
        sendRequest(
            { url: `${url.slice(0, -1)}/${id}`, method: 'DELETE' },
            applyRemoveData()
        );

        function applyRemoveData() {
            setItems(items => {
                const newArr = [...items];
                const index = newArr.findIndex(item => item._id === id);
                newArr.splice(index, 1);
                return newArr;
            });
            setItemsToRender(items => {
                const newArr = [...items];
                const index = newArr.findIndex(item => item._id === id);

                newArr.splice(index, 1);
                return newArr;
            });
        }
    }

    return (
        <main className={classes.main}>
            <AdminsTabs
                onShowOrders={showTabsHandler}
                onShowGoods={showTabsHandler}
                onShowFeed={showTabsHandler}
            />

            <section className={classes.goods}>
                <TextHeader className={classes.header}>
                    {showOrders
                        ? 'Заказы'
                        : showGoods
                        ? 'Товары'
                        : 'Обратная связь'}
                </TextHeader>

                {showGoods && (
                    <MenuBtn
                        className={classes['create-btn']}
                        onClick={() => showModalHandler()}
                    >
                        Создать товар
                    </MenuBtn>
                )}

                <form
                    action=""
                    name="Форма поиска"
                    autoComplete="off"
                    className={classes['search_form']}
                    onSubmit={event => event.preventDefault()}
                >
                    <input
                        className={classes['search_input']}
                        type="search"
                        name="Поле поиска"
                        maxLength="30"
                        placeholder="Введите название для поиска"
                        value={searchVal}
                        onChange={searchHandler}
                    />
                    <button
                        className={classes['search_reset-btn']}
                        name="Сброс поиска"
                        type="reset"
                        onClick={() => {
                            setSearchVal('');
                        }}
                    >
                        <img src={crossImg} />
                    </button>
                </form>

                {itemsToRender.length !== 0 ? (
                    itemsToRender.map(item => {
                        return showOrders ? (
                            <OrdersItem
                                className={classes.item}
                                key={item._id}
                                item={item}
                                onClick={event => showModalHandler(event, item)}
                                onRemove={() => removeItemHandler(item._id)}
                            />
                        ) : showGoods ? (
                            <GoodsItem
                                className={classes.item}
                                key={item._id}
                                title={item.title}
                                price={item.price}
                                descr={item.description}
                                onClick={event => showModalHandler(event, item)}
                                onRemove={() => removeItemHandler(item._id)}
                            />
                        ) : (
                            <FeedsItem
                                className={classes.item}
                                key={item._id}
                                item={item}
                                onClick={event => showModalHandler(event, item)}
                                onRemove={() => removeItemHandler(item._id)}
                            />
                        );
                    })
                ) : (
                    <p className={classes.excuse}>
                        {`${
                            showOrders
                                ? 'Заказов'
                                : showGoods
                                ? 'Букетов'
                                : 'Запросов обратной связи'
                        } еще нет.${showGoods && ' Создайте первый букет'}`}
                    </p>
                )}
            </section>

            {modalIsVisible &&
                createPortal(
                    showOrders ? (
                        <EditOrderForm
                            item={itemToEdit}
                            onModalChange={item => modalChangeHandler(item)}
                            onClose={hideModalHandler}
                        ></EditOrderForm>
                    ) : showGoods ? (
                        <EditItemForm
                            item={itemToEdit}
                            onModalChange={item => modalChangeHandler(item)}
                            onClose={hideModalHandler}
                            isNewItem={isNewItem}
                        ></EditItemForm>
                    ) : (
                        <EditFeedForm
                            item={itemToEdit}
                            onModalChange={item => modalChangeHandler(item)}
                            onClose={hideModalHandler}
                        ></EditFeedForm>
                    ),
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
        </main>
    );
}

export default AdminCabinet;
