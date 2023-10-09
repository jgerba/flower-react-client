import classes from './AddressPanel.module.css';

function AddressPanel(props) {
    return (
        <article
            className={`${props.footer ? '' : classes.panel} ${
                props.className ? props.className : ''
            }`}
        >
            <address className={classes.address}>zakaz@loverflower.by</address>
            <p className={classes.description}>
                Доставка 24/7 по договоренности с оператором
            </p>

            <address className={classes.address}>ул. Тимирязева 67</address>
            <p className={classes.description}>
                10:00 до 21:00 {<br />}без выходных
            </p>

            {props.footer && (
                <div className={classes.call}>
                    <a href="tel:+37529-113-69-69">+375 (29) 113-69-69</a>
                    <p>прием звонков круглосуточно</p>
                </div>
            )}
        </article>
    );
}

export default AddressPanel;
