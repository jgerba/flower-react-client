import classes from './CallPanel.module.css';

function CallPanel(props) {
    return (
        <article
            className={`${classes.panel} ${
                props.className ? props.className : ''
            } ${props.showPanel && !props.scrollDown ? classes.show : ''}`}
        >
            <a className={classes.phone} href="tel:+37529-113-69-69">
                +375 (29) 113-69-69
            </a>

            {props.showPanel && !props.scrollDown && (
                <button className={classes.button}>заказать звонок</button>
            )}
        </article>
    );
}

export default CallPanel;
