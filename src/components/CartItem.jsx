import classes from './CartItem.module.css';

function CartItem({ item }) {
    return (
        <div className={classes.position}>
            <img className={classes.image} src={item.src} alt={item.title} />
            <h5 className={classes.title}>{item.title}</h5>
            <p className={classes.price}>{`${item.price} ₽`}</p>

            <div className={classes['quantity-btns']}>
                <button>-</button>
                <p>{item.inCart}</p>
                <button>+</button>
            </div>

            <button className={classes['delete-btn']}>Удалить</button>
        </div>
    );
}

export default CartItem;
