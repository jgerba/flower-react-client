import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cartActions } from '../store/cart';

import MenuBtn from './UI/MenuBtn';

import classes from './BouquetCard.module.css';

function BouquetCard({ className, item = {}, onError = () => {} }) {
    const dispatch = useDispatch();

    function addToCart() {
        dispatch(cartActions.addToCart(item));
    }

    return (
        <div className={`${classes.card} ${className ? className : ''}`}>
            <Link to={`/catalogue/${item._id}`}>
                <img
                    className={classes.image}
                    src={item.src}
                    alt={`Букет ${item.title}`}
                    onError={() => onError()}
                />
            </Link>

            <p className={classes.title}>{item.title}</p>
            <p className={classes.price}>{`${item.price} ₽`}</p>
            <MenuBtn
                className={classes.button}
                blank={true}
                onClick={addToCart}
            >
                В корзину
            </MenuBtn>

            {item.sale && (
                <div className={classes['sale-badge']}>
                    <p>sale</p>
                </div>
            )}
            {item.new && (
                <div className={classes['new-badge']}>
                    <p>new</p>
                </div>
            )}
        </div>
    );
}

export default BouquetCard;
