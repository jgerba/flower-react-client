import classes from './GoodsItem.module.css';

function GoodsItem(props) {
    return (
        <div
            className={`${classes.item} ${
                props.className ? props.className : ''
            }`}
            onClick={() => props.onClick()}
        >
            <p className={classes.title}>{props.title}</p>
            <p className={classes.price}>{props.price}</p>
            <p className={classes.descr}>{props.descr}</p>
        </div>
    );
}

export default GoodsItem;
