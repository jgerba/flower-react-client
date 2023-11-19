import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { cartActions } from '../store/cart';

import MenuBtn from '../components/UI/MenuBtn';

import classes from './Bouquet.module.css';
import minus from '../svg/minus.svg';
import plus from '../svg/plus.svg';

function BouquetPage() {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const cartItems = useSelector(state => state.cart.cartItems);

    const [item, setItem] = useState(state);
    const [isInCart, setIsInCart] = useState(false);

    // check if item is in cart, use as init item if true
    useEffect(() => {
        const itemInCart = cartItems.find(el => el._id === state._id);

        if (itemInCart) {
            setItem(itemInCart);
            setIsInCart(true);
        }
    }, []);

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
        </main>
    );
}

export default BouquetPage;
