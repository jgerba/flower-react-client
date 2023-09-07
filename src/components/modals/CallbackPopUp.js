import FeedBackForm from '../FeedBackForm';

function CallBackPopUp() {
    return (
        <aside>
            <h3>заказать звонок</h3>
            <div className="decorRect"></div>
            <p>
                Впишите свои данные, и мы свяжемся с Вами. Ваши данные ни при
                каких обстоятельствах не будут переданы третьим лицам.
            </p>
            <FeedBackForm />
        </aside>
    );
}

export default CallBackPopUp;
