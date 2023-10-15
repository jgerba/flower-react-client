import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import TextHeader from '../UI/TextHeader';
import MenuBtn from '../UI/MenuBtn';

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
                    <div key={item._id} className={classes.item}>
                        <p>{item.title}</p>
                    </div>
                ))}
            </section>

            <div className={classes.extra}></div>
            <div className={classes.total}></div>

            <button className={classes.cancel} onClick={() => props.onClose()}>
                <img src={cross} alt="Закрыть корзину" />
            </button>
            <MenuBtn className={classes.checkout} blank={true}>
                Оформить заказ
            </MenuBtn>
        </section>
    );
}

export default ShopCart;
