import classes from './CartItem.module.css';
import minus from '../svg/minus.svg';
import plus from '../svg/plus.svg';

function CartItem({
    item = {},
    onDecrement = () => {},
    onIncrement = () => {},
    onDelete = () => {},
}) {
    return (
        <div className={classes.item}>
            <img className={classes.image} src={item.src} alt={item.title} />
            <h5 className={classes.title}>{item.title}</h5>
            <p className={classes.price}>{`${item.price} ₽`}</p>

            <div className={classes['quantity-btns']}>
                <button onClick={() => onDecrement()}>
                    <img src={minus} alt="Минус" />
                </button>
                <p>{item.inCart}</p>
                <button onClick={() => onIncrement()}>
                    <img src={plus} alt="Плюс" />
                </button>
            </div>

            <button
                className={classes['delete-btn']}
                onClick={() => onDelete()}
            >
                Удалить
            </button>
        </div>
    );
}

export default CartItem;
