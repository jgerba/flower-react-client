import MenuBtn from './UI/MenuBtn';

function BouquetCard(props) {
    return (
        <div>
            <img alt={`Букет ${props.title}`}>{props.image}</img>
            <p>{props.title}</p>
            <p>{props.price}</p>
            <MenuBtn>В корзину</MenuBtn>
        </div>
    );
}

export default BouquetCard;
