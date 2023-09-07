import MenuBtn from './MenuBtn';

function FeedBackForm() {
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
                <textarea placeholder="Ваш комментарий"></textarea>

                <MenuBtn>отправить</MenuBtn>
            </form>
        </>
    );
}

export default FeedBackForm;
