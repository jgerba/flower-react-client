import classes from './DropOption.module.css';

function DropOption(props) {
    return (
        <div
            className={classes.option}
            onClick={() => props.onSelect(props.children)}
        >
            <p className={classes.text}>{props.children}</p>
        </div>
    );
}

export default DropOption;
