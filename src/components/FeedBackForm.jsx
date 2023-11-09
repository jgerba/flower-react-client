import { useState } from 'react';

import useFetch from '../hooks/use-fetch';

import MenuBtn from './UI/MenuBtn';
import FormInput from './FormInput';

import classes from './FeedBackForm.module.css';
import sign from '../svg/sign.svg';
import signRed from '../svg/sign_red.svg';

// init value for the form reset
const formInitVal = {
    name: '',
    phone: '',
    comment: '',
};

function FeedBackForm(props) {
    const [formVal, setFormVal] = useState({
        name: '',
        phone: '',
        comment: '',
    });
    const [hasError, setHasError] = useState(false);

    const { sendRequest, isLoading, error } = useFetch();

    function submitHandler(event) {
        event.preventDefault();

        if (hasError) return;
        if (!formVal.name || !formVal.phone) return;

        // upload edited data
        sendRequest(
            {
                url: `/feedback`,
                method: 'POST',
                body: formVal,
            },
            applyData
        );
    }

    function applyData(data) {
        console.log(data);
        setFormVal(formInitVal);
    }

    function formChangeHandler(event) {
        setFormVal({ ...formVal, [event.target.name]: event.target.value });
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
                    value={formVal.name}
                    required={true}
                    onError={val => setHasError(val)}
                    onChange={formChangeHandler}
                />
                <FormInput
                    className={classes.input}
                    labelClass={classes.label}
                    title="Телефон"
                    name="phone"
                    type="phone"
                    placeholder="+7 (977) 777-77-77"
                    value={formVal.phone}
                    required={true}
                    onError={val => setHasError(val)}
                    onChange={formChangeHandler}
                />
                <FormInput
                    className={classes.input}
                    labelClass={classes.label}
                    title="Комментарий"
                    name="comment"
                    placeholder="Ваш комментарий"
                    textarea={true}
                    value={formVal.comment}
                    onError={val => setHasError(val)}
                    onChange={formChangeHandler}
                />

                <MenuBtn type="submit">отправить</MenuBtn>

                <small className={classes.agreement}>
                    Нажимая на кнопку «Отправить», я даю свое согласие на
                    обработку персональных данных, в соответствии с{' '}
                    <a>Политикой конфиденциальности</a>
                </small>
            </form>

            {!props.contactsPage ? (
                <>
                    <div className={classes['decor-back']}></div>
                    <div className={classes['decor-shadow']}></div>
                </>
            ) : (
                <div className={classes['contacts__decor-back']}></div>
            )}

            <img
                className={classes.sign}
                src={!props.contactsPage ? sign : signRed}
                alt="Have any questions?"
            />
        </article>
    );
}

export default FeedBackForm;
