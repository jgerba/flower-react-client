import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useFetch from '../hooks/useFetch';

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
    // reset scroll position
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const isAuth = useSelector(state => state.auth.isAuth);

    const [showPage, setShowPage] = useState({
        orders: true,
        goods: false,
        feeds: false,
    });
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
        showPage.orders
            ? setUrl('/orders')
            : showPage.goods
            ? setUrl('/bouquets')
            : setUrl('/feedbacks');

        setSearchVal('');
        // drop prev tab items
        if (items) {
            setItems([]);
        }
    }, [showPage]);

    // download all items
    useEffect(() => {
        sendRequest({ url: url }, applyItemsData);
    }, [url]);

    useEffect(() => {
        if (isAuth) return;

        navigate('/login');
    }, [isAuth]);

    function applyItemsData(data) {
        console.log(data);

        if (!data) return;
        setItems(data);
    }

    // update rendered items on items change
    useEffect(() => {
        setItemsToRender(items);
    }, [items]);

    // update item in items array after editing or push if new
    function modalChangeHandler(item, isNew = false) {
        isNew
            ? setItems(items => {
                  const newData = [...items];
                  newData.push(item);
                  return newData;
              })
            : setItems(items => {
                  const index = items.findIndex(el => el._id === item._id);
                  return items.toSpliced(index, 1, item);
              });
    }

    function removeItemHandler(id) {
        // delete last letter 's' in url string
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
        }
    }

    function searchHandler(event) {
        setSearchVal(event.target.value);
    }

    // filter items
    useEffect(() => {
        if (!searchVal) return setItemsToRender(items);

        let filteredItems;
        url === '/bouquets'
            ? (filteredItems = items.filter(item =>
                  item.title.toLowerCase().match(searchVal.toLowerCase())
              ))
            : (filteredItems = items.filter(item =>
                  item.name.toLowerCase().match(searchVal.toLowerCase())
              ));
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
                price: 1,
                oldPrice: 1,
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

    // change state of tabs
    function showTabsHandler(event) {
        switch (event.target.innerText) {
            case 'ЗАКАЗЫ':
                if (showPage.orders) return;
                setShowPage({ orders: true, goods: false, feeds: false });
                break;

            case 'ТОВАРЫ':
                if (showPage.goods) return;
                setShowPage({ orders: false, goods: true, feeds: false });
                break;

            case 'ОБРАТНАЯ СВЯЗЬ':
                if (showPage.feeds) return;
                setShowPage({ orders: false, goods: false, feeds: true });
                break;

            default:
                console.log('Что-то сломалось...');
                break;
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
                    {showPage.orders
                        ? 'Заказы'
                        : showPage.goods
                        ? 'Товары'
                        : 'Обратная связь'}
                </TextHeader>

                {showPage.goods && (
                    <MenuBtn
                        className={classes['create-btn']}
                        onClick={showModalHandler}
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
                        placeholder={`Введите ${
                            url === '/bouquets' ? 'название' : 'имя'
                        } для поиска`}
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
                        return showPage.orders ? (
                            <OrdersItem
                                className={classes.item}
                                key={item._id}
                                item={item}
                                onClick={event => showModalHandler(event, item)}
                                onRemove={() => removeItemHandler(item._id)}
                            />
                        ) : showPage.goods ? (
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
                            showPage.orders
                                ? 'Заказов'
                                : showPage.goods
                                ? 'Букетов'
                                : 'Запросов обратной связи'
                        } еще нет.${
                            showPage.goods ? ' Создайте первый букет' : ''
                        }`}
                    </p>
                )}
            </section>

            {modalIsVisible &&
                createPortal(
                    showPage.orders ? (
                        <EditOrderForm
                            item={itemToEdit}
                            onModalChange={item => modalChangeHandler(item)}
                            onClose={hideModalHandler}
                        ></EditOrderForm>
                    ) : showPage.goods ? (
                        <EditItemForm
                            item={itemToEdit}
                            onModalChange={(item, isNew) =>
                                modalChangeHandler(item, isNew)
                            }
                            onClose={hideModalHandler}
                            newItem={isNewItem}
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
