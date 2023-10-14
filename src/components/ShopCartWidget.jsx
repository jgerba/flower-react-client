import { useState } from 'react';
import { createPortal } from 'react-dom';

import ShopCart from './modals/ShopCart';
import Backdrop from './UI/Backdrop';

import cart from '../svg/cart.svg';
import classes from './ShopCartWidget.module.css';

const items = 1;

function ShopCartWidget(props) {
    const [showCart, setShowCart] = useState(false);

    function closeCart() {
        setShowCart(false);
    }

    return (
        <article>
            <button
                className={classes.cart}
                data-items={items}
                onClick={() => {
                    setShowCart(true);
                }}
            >
                <img src={cart} alt="Корзина" />
            </button>
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
