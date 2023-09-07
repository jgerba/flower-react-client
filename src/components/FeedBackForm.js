import MenuBtn from './UI/MenuBtn';

function FeedBackForm(props) {
    return (
        <>
            <div className="decorRect"></div>
            <p>
                Отправьте ваш вопрос, заказ, предложение или жалобу через форму
                обратной связи, и наш специалист свяжется с вами в течение 15
                минут.
            </p>
            <form>
                <input placeholder="Ваше имя"></input>
                <input placeholder="+7 (977) 777-77-77"></input>
                {props.message && (
                    <textarea placeholder="Ваш комментарий"></textarea>
                )}

                <MenuBtn>отправить</MenuBtn>

                <small>
                    Нажимая на кнопку «Отправить», я даю свое согласие на
                    обработку персональных данных, в соответствии с
                    <a>Политикой конфиденциальности</a>
                </small>
            </form>
        </>
    );
}

export default FeedBackForm;
