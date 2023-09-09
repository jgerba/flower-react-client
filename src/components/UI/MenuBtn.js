import classes from './MenuBtn.module.css';

function MenuBtn(props) {
    return (
        <button
            className={`${classes.btn} ${props.blank ? classes.blank : ''}`}
        >
            {props.children}
        </button>
    );
}

export default MenuBtn;
