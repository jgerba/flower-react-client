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
    // checkout page logic
    checkout = false,

    // admins edit order modal logic
    editOrder = false,

    onClose = () => {},
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.cartItems);
    const orderItems = useSelector(state => state.cart.orderItems);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const [itemsToRender, setItemsToRender] = useState([]);

    useEffect(() => {
        setItemsToRender(editOrder ? orderItems : cartItems);
    }, [cartItems, orderItems]);

    function makeaOrderHandler() {
        navigate('./checkout');
        onClose();
    }

    return (
        <section
            className={`${classes.cart} ${
                checkout
                    ? classes['container-checkout']
                    : editOrder
                    ? classes['container-order']
                    : ''
            }`}
        >
            <TextHeader className={classes.header}>
                {checkout ? 'Ваш заказ:' : editOrder ? 'Заказ' : 'Ваша корзина'}
            </TextHeader>
            <section
                className={`${classes.goods} ${
                    checkout || editOrder ? classes['goods-checkout'] : ''
                }`}
            >
                {itemsToRender.map(item => (
                    <CartItem
                        key={item._id}
                        item={item}
                        onDelete={() =>
                            editOrder
                                ? dispatch(
                                      cartActions.removeOrderPosition({
                                          _id: item._id,
                                      })
                                  )
                                : dispatch(
                                      cartActions.removePosition({
                                          _id: item._id,
                                      })
                                  )
                        }
                        onDecrement={() =>
                            editOrder
                                ? dispatch(
                                      cartActions.decreaseOrderQuantity({
                                          _id: item._id,
                                      })
                                  )
                                : dispatch(
                                      cartActions.decreaseQuantity({
                                          _id: item._id,
                                      })
                                  )
                        }
                        onIncrement={() =>
                            editOrder
                                ? dispatch(
                                      cartActions.increaseOrderQuantity({
                                          _id: item._id,
                                      })
                                  )
                                : dispatch(
                                      cartActions.increaseQuantity({
                                          _id: item._id,
                                      })
                                  )
                        }
                    />
                ))}
            </section>
            <section
                className={`${classes['confirm-section']} ${
                    checkout
                        ? classes['confirm-checkout']
                        : editOrder
                        ? classes['confirm-order']
                        : ''
                }`}
            >
                {/* <div className={classes.extra}></div> */}
                <div
                    className={`${classes.total} ${
                        editOrder ? classes['total-order'] : ''
                    }`}
                >
                    <strong>Предварительный итог: {totalPrice} руб.</strong>
                    {/* {!checkout && !editOrder && (
                        <p>
                            Чтобы узнать стоимость доставки, перейдите к
                            оформлению заказа.
                        </p>
                    )} */}
                </div>

                {!checkout && !editOrder && (
                    <MenuBtn
                        className={classes.checkout}
                        blank={true}
                        onClick={makeaOrderHandler}
                    >
                        Оформить заказ
                    </MenuBtn>
                )}
            </section>
            {!checkout && !editOrder && (
                <button className={classes.cancel} onClick={() => onClose()}>
                    <img src={cross} alt="Закрыть корзину" />
                </button>
            )}
            {!checkout && !editOrder && (
                <div className={classes['decor-ellipse']}></div>
            )}
        </section>
    );
}

export default ShopCart;
