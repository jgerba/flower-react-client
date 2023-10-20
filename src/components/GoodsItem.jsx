import classes from './GoodsItem.module.css';
import ContentCard from './UI/ContentCard';

function GoodsItem(props) {
    return (
        <ContentCard className={classes.item} onClick={() => props.onClick()}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.price}>{props.price}</p>
            <p className={classes.descr}>{props.descr}</p>
        </ContentCard>
    );
}

export default GoodsItem;
