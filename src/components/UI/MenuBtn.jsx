import classes from './MenuBtn.module.css';

function MenuBtn(props) {
    return (
        <button
            className={`${classes.btn} ${props.blank ? classes.blank : ''} ${
                props.className ? props.className : ''
            }`}
            onClick={props.onClick}
            type={props.type ? props.type : 'button'}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default MenuBtn;
