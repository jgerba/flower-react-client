import MenuBtn from './UI/MenuBtn';

import classes from './BouquetCard.module.css';

function BouquetCard(props) {
    return (
        <div
            className={`${classes.card} ${
                props.className ? props.className : ''
            }`}
        >
            <img
                className={classes.image}
                src={props.src}
                alt={`Букет ${props.title}`}
            ></img>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.price}>{`${props.price} ₽`}</p>
            <MenuBtn className={classes.button} blank={true}>
                В корзину
            </MenuBtn>

            {props.sale && (
                <div className={classes['sale-badge']}>
                    <p>sale</p>
                </div>
            )}
            {props.new && (
                <div className={classes['new-badge']}>
                    <p>new</p>
                </div>
            )}
        </div>
    );
}

export default BouquetCard;
