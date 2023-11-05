import classes from './OrdersItem.module.css';
import bin from '../../svg/bin.svg';

const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
};

function OrdersItem({
    className,
    item,
    onClick = () => {},
    onRemove = () => {},
}) {
    function dateHandler() {
        const date = new Date(item.createdAt);
        return date.toLocaleDateString('ru-RU', options);
    }

    return (
        <div
            className={`${classes.item} ${className ? className : ''}`}
            onClick={onClick}
        >
            <div className={classes.credentials}>
                <p className={classes.created}>{dateHandler()}</p>
                <p className={classes.name}>{item.name}</p>
                <p className={classes.phone}>{item.phone}</p>
                <p className={classes.email}>{item.email}</p>
                <p className={classes.price}>{item.totalPrice}</p>
            </div>

            <p className={classes.order}>{`Заказ: ${item.order.reduce(
                (accum, item) => {
                    //make title first letter capitalized
                    const capitalTitle =
                        item.title.charAt(0).toUpperCase() +
                        item.title.substring(1);

                    // omit the first comma
                    return accum + (accum === '' ? ' ' : ', ') + capitalTitle;
                },
                ''
            )}`}</p>

            <button
                className={classes['remove-btn']}
                onClick={() => onRemove()}
            >
                <img src={bin} alt="Мусорная корзина" />
            </button>
        </div>
    );
}

export default OrdersItem;
