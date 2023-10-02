import MenuBtn from './UI/MenuBtn';

import logo from '../svg/have any questions_.svg';
import classes from './FeedBackForm.module.css';

function FeedBackForm(props) {
    return (
        <div
            className={`${classes.feedback} ${
                props.className ? props.className : ''
            }`}
        >
            <form className={classes.form}>
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
            <img className={classes.logo} src={logo} alt="Logo" />
        </div>
    );
}

export default FeedBackForm;
