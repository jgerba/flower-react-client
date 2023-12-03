import { useEffect, useState } from 'react';

import useFetch from '../../hooks/useFetch';

import classes from './OrdersItem.module.css';
import bin from '../../svg/bin.svg';
import check from '../../svg/done.svg';
import uncheck from '../../svg/undone.svg';
import delivery from '../../svg/delivery.svg';

const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
};

function OrdersItem({
    className = null,
    item = {},
    onClick = () => {},
    onRemove = () => {},
}) {
    const [isDone, setIsDone] = useState(item.isDone);

    const sendRequest = useFetch();

    useEffect(() => {
        if (isDone === item.isDone) return;

        sendRequest(
            {
                url: `/order/${item._id}`,
                method: 'PATCH',
                body: { isDone: !item.isDone },
            },
            applyData
        );
    }, [isDone]);

    function applyData(data) {
        console.log(data);
    }

    function dateHandler() {
        const date = new Date(item.createdAt);
        return date.toLocaleDateString('ru-RU', options);
    }

    return (
        <div
            className={`${classes.item} ${className ? className : ''} ${
                isDone ? classes.isDone : ''
            }`}
            onClick={onClick}
        >
            <div className={classes.credentials}>
                <p className={classes.created}>{dateHandler()}</p>
                <p className={classes.name}>{item.name}</p>
                <p className={classes.phone}>{item.phone}</p>
                <p className={classes.email}>{item.email}</p>
                <p className={classes.price}>
                    {item.order?.reduce(
                        (sum, item) => sum + item.price * item.inCart,
                        0
                    )}
                </p>
                {item.delivery && <img src={delivery} alt="С доставкой" />}
            </div>

            <p className={classes.order}>{`Заказ: ${item.order?.reduce(
                (accum, item) => {
                    //make titles first letter capitalized
                    const capitalTitle =
                        item.title.charAt(0).toUpperCase() +
                        item.title.substring(1);

                    // omit the first comma
                    return accum + (accum === '' ? ' ' : ', ') + capitalTitle;
                },
                ''
            )}`}</p>

            <button
                className={classes['done-btn']}
                onClick={() => setIsDone(state => !state)}
            >
                <img
                    src={isDone ? uncheck : check}
                    alt={isDone ? 'Отметить невыполненным' : 'Выполнить'}
                />
            </button>

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
