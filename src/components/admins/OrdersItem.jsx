import classes from './OrdersItem.module.css';
import bin from '../../svg/bin.svg';

const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
};

function OrdersItem(props) {
    function dateHandler() {
        const date = new Date(props.created);
        return date.toLocaleDateString('ru-RU', options);
    }

    return (
        <div
            className={`${classes.item} ${
                props.className ? props.className : ''
            }`}
            onClick={props.onClick}
        >
            <p className={classes.created}>{dateHandler()}</p>
            <p className={classes.name}>{props.name}</p>
            <p className={classes.phone}>{props.phone}</p>
            <p className={classes.email}>{props.email}</p>
            <p className={classes.price}>{props.price}</p>

            <button
                className={classes['remove-btn']}
                onClick={() => props.onRemove()}
            >
                <img src={bin} alt="Мусорная корзина" />
            </button>
        </div>
    );
}

export default OrdersItem;
