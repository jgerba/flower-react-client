import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cartActions } from '../store/cart';

import MenuBtn from './UI/MenuBtn';

import classes from './BouquetCard.module.css';
import imgFallBack from '../images/bouq-fallback.jpg';

function BouquetCard({ className, item = {}, home = false }) {
    const dispatch = useDispatch();

    const [isBadImg, setIsBadImg] = useState(false);

    function addToCart() {
        dispatch(cartActions.addToCart(item));
    }

    return (
        <div className={`${classes.card} ${className ? className : ''}`}>
            <Link to={`/catalogue/${item._id}`} state={item}>
                <img
                    className={`${classes.image} ${
                        home ? classes['home-card'] : ''
                    }`}
                    src={isBadImg ? imgFallBack : item.src}
                    alt={`Букет ${item.title}`}
                    onError={() => setIsBadImg(true)}
                />
            </Link>

            <p className={classes.title}>{item.title}</p>

            <div className={classes['price-section']}>
                <p className={classes.price}>{`${item.price} ₽`}</p>
                {item.sale && (
                    <p
                        className={classes['old-price']}
                    >{`${item.oldPrice} ₽`}</p>
                )}
            </div>

            <MenuBtn
                className={classes.button}
                blank={true}
                onClick={addToCart}
            >
                В корзину
            </MenuBtn>

            {item.sale && (
                <div
                    className={`${classes['sale-badge']} ${
                        home ? classes['home-badge'] : ''
                    }`}
                >
                    <p>sale</p>
                </div>
            )}
            {item.new && (
                <div
                    className={`${classes['new-badge']} ${
                        home ? classes['home-badge'] : ''
                    }`}
                >
                    <p>new</p>
                </div>
            )}
        </div>
    );
}

export default BouquetCard;
