import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import useFetch from '../hooks/use-fetch';

import AdminsTabs from '../components/AdminsTabs';
import GoodsItem from '../components/GoodsItem';
import EditItemForm from '../components/modals/EditItemForm';
import Backdrop from '../components/modals/Backdrop';
import TextHeader from '../components/UI/TextHeader';
import MenuBtn from '../components/UI/MenuBtn';

import classes from './AdminGoods.module.css';
import crossImg from '../svg/closeBtn.svg';

function AdminGoods() {
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
        if (showOrders) setUrl('/orders');
        if (showGoods) setUrl('/bouquets');
        if (showFeeds) setUrl('/feeds');

        // drop prev tab items
        if (items) {
            setItems([]);
            setItemsToRender([]);
        }
    }, [showOrders, showGoods, showFeeds]);

    // download all items
    useEffect(() => {
        console.log(url);
        sendRequest({ url: url }, applyItemsData, false);
    }, [url]);

    function applyItemsData(data) {
        if (!data) return;
        setItems(data);
        setItemsToRender(data);
    }

    // update item in items array after editing
    function itemChangeHandler(item) {
        setItems(items => {
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
    function showModalHandler(item = null) {
        if (item) {
            setItemToEdit(item);
        } else {
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

    return (
        <main className={classes.main}>
            <AdminsTabs
                onShowOrders={showTabsHandler}
                onShowGoods={showTabsHandler}
                onShowFeed={showTabsHandler}
            />

            <section className={classes.goods}>
                <TextHeader className={classes.header}>Товары</TextHeader>
                <MenuBtn
                    className={classes['create-btn']}
                    onClick={() => showModalHandler()}
                >
                    Создать товар
                </MenuBtn>

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
                    itemsToRender.map(item => (
                        <GoodsItem
                            className={classes.item}
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
                        isNewItem={isNewItem}
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
        </main>
    );
}

export default AdminGoods;
