function AddressPanel(props) {
    return (
        <article>
            <div>
                <address>zakaz@loverflower.by</address>
                <p>Доставка 24/7 по договоренности с оператором</p>
            </div>
            <div>
                <address>ул. Тимирязева 67</address>
                <p>10:00 до 21:00 {<br />}без выходных</p>
            </div>

            {props.footer && (
                <div>
                    <a href="tel:+37529-113-69-69">+375 (29) 113-69-69</a>
                    <p>прием звонков круглосуточно</p>
                </div>
            )}
        </article>
    );
}

export default AddressPanel;
