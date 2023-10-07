import MenuBtn from './UI/MenuBtn';

import classes from './BouquetCard.module.css';

function BouquetCard(props) {
    console.log(props.src);
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
        </div>
    );
}

export default BouquetCard;
