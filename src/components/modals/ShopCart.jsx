import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { cartActions } from '../../store/cart';

import TextHeader from '../UI/TextHeader';
import MenuBtn from '../UI/MenuBtn';
import CartItem from '../CartItem';

import cross from '../../svg/closeCartBtn.svg';
import classes from './ShopCart.module.css';

function ShopCart(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.cartItems);

    const [itemsToRender, setItemsToRender] = useState([]);

    useEffect(() => {
        setItemsToRender(cartItems);
    }, [cartItems]);

    function makeaOrderHandler() {
        navigate('./checkout');
        props.onClose();
    }

    return (
        <section className={classes.cart}>
            <TextHeader className={classes.header}>Ваша корзина</TextHeader>

            <section className={classes.goods}>
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

            <section className={classes['checkout-section']}>
                <div className={classes.extra}></div>
                <div className={classes.total}>
                    <strong>Предварительный итог: {} руб.</strong>
                    <p>
                        Чтобы узнать стоимость доставки, перейдите к оформлению
                        заказа.
                    </p>
                </div>

                <MenuBtn
                    className={classes.checkout}
                    blank={true}
                    onClick={makeaOrderHandler}
                >
                    Оформить заказ
                </MenuBtn>
            </section>

            <button className={classes.cancel} onClick={() => props.onClose()}>
                <img src={cross} alt="Закрыть корзину" />
            </button>

            <div className={classes['decor-ellipse']}></div>
        </section>
    );
}

export default ShopCart;
