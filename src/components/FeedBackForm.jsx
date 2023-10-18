import MenuBtn from './UI/MenuBtn';

import sign from '../svg/haveAnyQuestions.svg';
import classes from './FeedBackForm.module.css';

function FeedBackForm(props) {
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
                onSubmit={event => event.preventDefault()}
            >
                <p className={classes.descr}>
                    Отправьте ваш вопрос, заказ, предложение или жалобу через
                    форму обратной связи, и наш специалист свяжется с вами в
                    течение 15 минут.
                </p>
                <input placeholder="Ваше имя"></input>
                <input placeholder="+7 (977) 777-77-77"></input>
                <textarea placeholder="Ваш комментарий"></textarea>

                <MenuBtn>отправить</MenuBtn>

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
