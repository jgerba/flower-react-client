import useFetch from '../hooks/use-fetch';

import MenuBtn from './UI/MenuBtn';
import FormInput from './FormInput';

import sign from '../svg/haveAnyQuestions.svg';
import classes from './FeedBackForm.module.css';

function FeedBackForm(props) {
    const { sendRequest, isLoading, error } = useFetch();

    function checkInputs(el) {
        if (!el.name.value || !el.phone.value) {
            return false;
        }

        return true;
    }

    function submitHandler(event) {
        event.preventDefault();

        const el = event.target;

        // if has wrong inputs - block submitting
        if (!checkInputs(el)) return;

        const itemObj = {
            name: el.name.value,
            phone: +el.phone.value,
            comment: el.comment?.value,
        };

        // upload edited data
        sendRequest(
            {
                url: `/feedback`,
                method: 'POST',
                body: itemObj,
            },
            applyData
        );
    }

    function applyData(data) {
        console.log(data);
    }

    return (
        <article
            className={`${classes.feedback} ${
                props.className ? props.className : ''
            }`}
        >
            {props.homePage && (
                <div className={classes['header-container']}>
                    <h2 className={classes.header}>остались</h2>
                    <h2 className={classes.header}>вопросы?</h2>
                </div>
            )}

            <form
                action=""
                name="Форма обратной связи"
                className={classes.form}
                onSubmit={submitHandler}
            >
                <p className={classes.descr}>
                    Отправьте ваш вопрос, заказ, предложение или жалобу через
                    форму обратной связи, и наш специалист свяжется с вами в
                    течение 15 минут.
                </p>

                <FormInput
                    className={classes.input}
                    labelClass={classes.label}
                    title="Имя"
                    name="name"
                    placeholder="Ваше имя"
                    onChange={() => {}}
                />
                <FormInput
                    className={classes.input}
                    labelClass={classes.label}
                    title="Телефон"
                    name="phone"
                    type="phone"
                    placeholder="+7 (977) 777-77-77"
                    onChange={() => {}}
                />
                <FormInput
                    className={classes.input}
                    labelClass={classes.label}
                    title="Комментарий"
                    name="comment"
                    placeholder="Ваш комментарий"
                    textarea={true}
                    onChange={() => {}}
                />

                <MenuBtn type="submit">отправить</MenuBtn>

                <small className={classes.agreement}>
                    Нажимая на кнопку «Отправить», я даю свое согласие на
                    обработку персональных данных, в соответствии с{' '}
                    <a>Политикой конфиденциальности</a>
                </small>
            </form>

            <div className={classes['decor-back']}></div>
            <div className={classes['decor-shadow']}></div>

            <img
                className={classes.sign}
                src={sign}
                alt="Have any questions?"
            />
        </article>
    );
}

export default FeedBackForm;
