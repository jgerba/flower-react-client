import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import TextHeader from '../UI/TextHeader';
import MenuBtn from '../UI/MenuBtn';
import CartItem from '../CartItem';

import cross from '../../svg/closeCartBtn.svg';
import classes from './ShopCart.module.css';

function ShopCart(props) {
    const cartItems = useSelector(state => state.cart.cartItems);

    const [itemsToRender, setItemsToRender] = useState([]);

    useEffect(() => {
        setItemsToRender(cartItems);

        console.log(cartItems);
    }, [cartItems]);

    return (
        <section className={classes.cart}>
            <TextHeader className={classes.header}>Ваша корзина</TextHeader>

            <section className={classes.goods}>
                {itemsToRender.map(item => (
                    <CartItem
                        key={item._id}
                        className={classes.item}
                        item={item}
                    />
                ))}
            </section>

            <section>
                <div className={classes.extra}></div>
                <div className={classes.total}>
                    <p>Предварительный итог: {} руб.</p>
                    <p>
                        Чтобы узнать стоимость доставки, перейдите к оформлению
                        заказа.
                    </p>
                </div>

                <MenuBtn className={classes.checkout} blank={true}>
                    Оформить заказ
                </MenuBtn>
            </section>

            <button className={classes.cancel} onClick={() => props.onClose()}>
                <img src={cross} alt="Закрыть корзину" />
            </button>
        </section>
    );
}

export default ShopCart;
