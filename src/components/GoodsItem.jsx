import classes from './GoodsItem.module.css';
import bin from '../svg/bin.svg';

function GoodsItem(props) {
    return (
        <div
            className={`${classes.item} ${
                props.className ? props.className : ''
            }`}
            onClick={props.onClick}
        >
            <p className={classes.title}>{props.title}</p>
            <p className={classes.price}>{props.price}</p>
            <p className={classes.descr}>{props.descr}</p>

            <button
                className={classes['remove-btn']}
                onClick={() => props.onRemove()}
            >
                <img src={bin} alt="Мусорная корзина" />
            </button>
        </div>
    );
}

export default GoodsItem;
