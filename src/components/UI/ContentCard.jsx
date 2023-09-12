import classes from './ContentCard.module.css';

function ContentCard(props) {
    return (
        <div
            className={`${classes.card} ${
                props.className ? props.className : ''
            }`}
            data-items={props.items ? props.items : ''}
        >
            {props.children}
        </div>
    );
}

export default ContentCard;
