import classes from './FilterItem.module.css';

function FilterItem(props) {
    return (
        <li className={classes.item}>
            <label htmlFor={props.name}>{props.children}</label>
            <input id={props.name} name={props.name} type="checkbox" />
        </li>
    );
}

export default FilterItem;
