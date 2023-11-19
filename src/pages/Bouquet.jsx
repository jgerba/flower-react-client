import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import handlePopItems from '../utils/handlePopItems';

import { cartActions } from '../store/cart';

import MenuBtn from '../components/UI/MenuBtn';
import ContentCard from '../components/UI/ContentCard';
import BouquetCard from '../components/BouquetCard';

import classes from './Bouquet.module.css';
import minus from '../svg/minus.svg';
import plus from '../svg/plus.svg';

function BouquetPage() {
    // reset scroll position
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = useDispatch();
    const { state } = useLocation();
    const cartItems = useSelector(state => state.cart.cartItems);

    const [item, setItem] = useState(state);
    const [popItems, setPopItems] = useState([]);
    const [isInCart, setIsInCart] = useState(false);

    const { sendRequest, isLoading, error } = useFetch();

    // check if item is in cart, use as init item if true
    useEffect(() => {
        const itemInCart = cartItems.find(el => el._id === state._id);

        if (itemInCart) {
            setItem(itemInCart);
            setIsInCart(true);
        }
    }, []);

    useEffect(() => {
        sendRequest({ url: '/bouquets' }, applyItemsData);
    }, []);

    function applyItemsData(data) {
        console.log(data);
        if (!data) return;

        const popularItems = handlePopItems(data, 4);
        setPopItems(popularItems);
    }

    // decrease number of items in cart
    function decreaseHandler() {
        if (item['inCart'] === 1) return;

        // if item is in cart => decrease item quantity in cart strore array
        if (isInCart) {
            dispatch(
                cartActions.decreaseQuantity({
                    _id: item._id,
                })
            );
        }

        // decrease item quantity in local item state
        setItem({ ...item, inCart: item['inCart'] - 1 });
    }

    // increase number of items in cart
    function increaseHandler() {
        if (item['inCart'] === 99) return;

        // if item is in cart => increase item quantity in cart strore array
        if (isInCart) {
            dispatch(
                cartActions.increaseQuantity({
                    _id: item._id,
                })
            );
        }

        // increase item quantity in local item state
        setItem({ ...item, inCart: item['inCart'] + 1 });
    }

    function addToCart() {
        dispatch(cartActions.addToCart(item));
        setIsInCart(true);
    }

    return (
        <main className={classes.main}>
            <article className={classes.bouquet}>
                <img
                    className={classes.bouquet__img}
                    src={item.src}
                    alt={item.title}
                />

                <section className={classes.bouquet__descr}>
                    <h1 className={classes.title}>{item.title}</h1>

                    <div className={classes['price-section']}>
                        <p className={classes.price}>{item.price} ₽</p>

                        {item.sale && (
                            <p className={classes.oldPrice}>
                                {item.oldPrice} ₽
                            </p>
                        )}
                    </div>

                    <p className={classes.descr}>{item.description}</p>

                    <div className={classes['add-cart']}>
                        <MenuBtn
                            blank={true}
                            onClick={addToCart}
                            disabled={isInCart}
                        >
                            {`${isInCart ? 'Уже в корзине' : 'В корзину'}`}
                        </MenuBtn>

                        <div className={classes['quantity-btns']}>
                            <button onClick={decreaseHandler}>
                                <img src={minus} alt="Минус" />
                            </button>

                            <p>{item.inCart}</p>

                            <button onClick={increaseHandler}>
                                <img src={plus} alt="Плюс" />
                            </button>
                        </div>
                    </div>
                </section>
            </article>

            <h3 className={classes.extra__header}>Дополнительно к заказу:</h3>

            <article className={classes.extra}>
                <ContentCard className={`${classes.extra__card}`}>
                    <h5>Удобрения для срезанных цветов</h5>
                    <p>
                        При указании об этом в пожеланиях к букету, мы приложим
                        пакетик удобрения для вас
                    </p>
                </ContentCard>
                <ContentCard className={`${classes.extra__card}`}>
                    <h5>подпишем открытку</h5>
                    <p>
                        В пожеланиях к букету укажите текст, какой хотите
                        разместить и выберите на сайте саму открытку
                    </p>
                </ContentCard>
                <ContentCard className={`${classes.extra__card}`}>
                    <h5>Фото букета перед отправкой</h5>
                    <p>
                        В примечании к заказу укажите об этом и мы отправим фото
                        готового букета перед доставкой. В праздничные дни в
                        связи с большой загруженностью такой возможности нет
                    </p>
                </ContentCard>
                <ContentCard className={`${classes.extra__card}`}>
                    <h5>Букет-сюрприз</h5>
                    <p>
                        Если хотите, чтобы получатель не знал, что ему вручат а
                        также от кого, то укажите об этом в примечании к заказу
                    </p>
                </ContentCard>
            </article>

            <article className={classes.ship}>
                <h3 className={classes.ship__header}>доставка и оплата</h3>

                <section>
                    <h4>Способы оплаты:</h4>
                    <ul>
                        <li>НАЛИЧНЫМИ ИЛИ БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ</li>
                        <li>НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ</li>
                    </ul>
                </section>

                <section>
                    <h4>стоимость доставки:</h4>
                    <ul>
                        <li>
                            <strong>Бесплатно</strong> – при заказе на сумму
                            <span> от 90 рублей</span>
                        </li>
                        <li>
                            <strong>10 рублей</strong> – при заказе на сумму
                            <span> менее 90 рублей</span>
                        </li>
                        <li>
                            Возможность, сроки и стоимость доставки за пределы
                            МКАД, доставки в ночное время, праздники
                            <span> оговариваются с менеджером</span>
                        </li>
                        <li>
                            Так же вы можете забрать ваш заказ самостоятельно по
                            адресу:
                            <span>
                                г. Минск, ул. Тимирязева д. 67, комн. 112
                                ежедневно с 10.00 до 21.00
                            </span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h4>Условия доставки:</h4>
                    <p>
                        Доставка осуществляется по городу Минску в пределах МКАД
                        <span>в любой день с 09.00 до 22.00.</span> Доставка в
                        ночное время осуществляется по договоренности с
                        оператором
                    </p>
                </section>
            </article>

            <article className={classes.popular}>
                <h3>вам может понравиться:</h3>

                <div className={classes['popular__items']}>
                    {popItems.length !== 0 ? (
                        popItems.map(item => (
                            <BouquetCard key={item._id} item={item} />
                        ))
                    ) : (
                        <p className={classes.excuse}>
                            Наверное что-то случилось
                        </p>
                    )}
                </div>
            </article>
        </main>
    );
}

export default BouquetPage;
