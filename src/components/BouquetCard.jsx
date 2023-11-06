import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cartActions } from '../store/cart';

import MenuBtn from './UI/MenuBtn';

import classes from './BouquetCard.module.css';

function BouquetCard({
    className,
    item = {},
    popular = false,
    onError = () => {},
}) {
    const dispatch = useDispatch();

    function addToCart() {
        dispatch(cartActions.addToCart(item));
    }

    return (
        <div className={`${classes.card} ${className ? className : ''}`}>
            <Link to={`/catalogue/${item._id}`}>
                <img
                    className={`${classes.image} ${
                        popular ? classes['popular-card'] : ''
                    }`}
                    src={item.src}
                    alt={`Букет ${item.title}`}
                    onError={() => onError()}
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
                        popular ? classes['popular-badge'] : ''
                    }`}
                >
                    <p>sale</p>
                </div>
            )}
            {item.new && (
                <div
                    className={`${classes['new-badge']} ${
                        popular ? classes['popular-badge'] : ''
                    }`}
                >
                    <p>new</p>
                </div>
            )}
        </div>
    );
}

export default BouquetCard;
