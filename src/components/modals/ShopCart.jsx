import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { cartActions } from '../../store/cart';

import TextHeader from '../UI/TextHeader';
import MenuBtn from '../UI/MenuBtn';
import CartItem from '../CartItem';

import cross from '../../svg/closeCartBtn.svg';
import classes from './ShopCart.module.css';

function ShopCart({
    checkout = false,
    containerClass = null,
    checkoutClass = null,
    goodsClass = null,
    onClose = () => {},
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.cartItems);

    const [itemsToRender, setItemsToRender] = useState([]);

    useEffect(() => {
        setItemsToRender(cartItems);
    }, [cartItems]);

    function makeaOrderHandler() {
        navigate('./checkout');
        onClose();
    }

    return (
        <section
            className={`${classes.cart} ${
                containerClass ? containerClass : ''
            }`}
        >
            <TextHeader className={classes.header}>
                {checkout ? 'Ваш заказ:' : 'Ваша корзина'}
            </TextHeader>
            <section
                className={`${classes.goods} ${goodsClass ? goodsClass : ''}`}
            >
                {itemsToRender.map(item => (
                    <CartItem
                        key={item._id}
                        item={item}
                        onDelete={() =>
                            dispatch(
                                cartActions.removePosition({ _id: item._id })
                            )
                        }
                        onDecrement={() =>
                            dispatch(
                                cartActions.decreaseQuantity({ _id: item._id })
                            )
                        }
                        onIncrement={() =>
                            dispatch(
                                cartActions.increaseQuantity({ _id: item._id })
                            )
                        }
                    />
                ))}
            </section>
            <section
                className={`${classes['checkout-section']} ${
                    checkoutClass ? checkoutClass : ''
                }`}
            >
                <div className={classes.extra}></div>
                <div className={classes.total}>
                    <strong>Предварительный итог: {0} руб.</strong>
                    {!checkout && (
                        <p>
                            Чтобы узнать стоимость доставки, перейдите к
                            оформлению заказа.
                        </p>
                    )}
                </div>

                {!checkout && (
                    <MenuBtn
                        className={classes.checkout}
                        blank={true}
                        onClick={makeaOrderHandler}
                    >
                        Оформить заказ
                    </MenuBtn>
                )}
            </section>
            {!checkout && (
                <button className={classes.cancel} onClick={() => onClose()}>
                    <img src={cross} alt="Закрыть корзину" />
                </button>
            )}
            {!checkout && <div className={classes['decor-ellipse']}></div>}
        </section>
    );
}

export default ShopCart;
