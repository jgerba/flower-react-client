import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';

import ShopCart from './modals/ShopCart';
import Backdrop from './modals/Backdrop';

import cart from '../svg/cart.svg';
import classes from './ShopCartWidget.module.css';

function ShopCartWidget(props) {
    const totalItems = useSelector(state => state.cart.totalItems);

    const [showCart, setShowCart] = useState(false);

    function toggleCart() {
        showCart ? setShowCart(false) : setShowCart(true);
    }

    function closeCart() {
        setShowCart(false);
    }

    return (
        <article className={classes.container}>
            <button
                className={classes.cart}
                data-items={totalItems}
                onClick={toggleCart}
            >
                <img src={cart} alt="Корзина для покупок" />
            </button>

            <div className={classes['cart-badge']}>
                <p>{totalItems}</p>
            </div>

            {showCart &&
                createPortal(
                    <ShopCart onClose={closeCart} />,
                    document.getElementById('modal-root')
                )}

            {showCart &&
                createPortal(
                    <Backdrop onClick={closeCart} />,
                    document.getElementById('backdrop-root')
                )}
        </article>
    );
}

export default ShopCartWidget;
