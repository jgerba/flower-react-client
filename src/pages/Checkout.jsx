import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { cartActions } from '../store/cart';
import useFetch from '../hooks/use-fetch';

import FormInput from '../components/FormInput';
import MenuBtn from '../components/UI/MenuBtn';
import SectionHeader from '../components/UI/SectionHeader';
import TextHeader from '../components/UI/TextHeader';
import ShopCart from '../components/modals/ShopCart';

import classes from './Checkout.module.css';

const formInitVal = {
    name: '',
    phone: '',
    email: '',
    recieverPhone: '',
    recieverName: '',
    comment: '',
    delivery: false,
    city: '',
    street: '',
    building: '',
    house: '',
    flat: '',
    deliverTime: '',
    order: [],
};

function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formRef = useRef();
    const pickupRef = useRef();

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const [formVal, setFormVal] = useState(formInitVal);

    // error from the inputs, cancel sbm if true
    const [hasError, setHasError] = useState(false);

    // for the future use
    const [promo, setPromo] = useState('');
    const [acceptPromo, setAcceptPromo] = useState(null);

    const { sendRequest, isLoading, error } = useFetch();

    // set initial check attr for badgesц
    useEffect(() => {
        pickupRef.current.setAttribute('checked', '');
    }, []);

    function submitHandler(event) {
        event.preventDefault();

        if (hasError) return;
        if (Object.keys(cartItems).length === 0) return;
        if (!formVal.name || !formVal.phone) return;

        sendRequest(
            {
                url: '/order',
                method: 'POST',
                body: { ...formVal, order: cartItems },
            },
            applyData
        );

        function applyData(data) {
            console.log(data);

            setFormVal(formInitVal);
            dispatch(cartActions.emptyCart());
            navigate('/success');
        }
    }

    function formChangeHandler(event) {
        setFormVal({
            ...formVal,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <main
            className={`${classes.main} ${
                formVal.delivery ? classes['main-delivery'] : ''
            }`}
        >
            <div className={classes.header}>
                <SectionHeader>оформление</SectionHeader>
                <SectionHeader smallHeader={true}>заказа</SectionHeader>
            </div>

            <ShopCart checkout={true} />

            <form
                ref={formRef}
                className={classes.form}
                action=""
                onSubmit={submitHandler}
            >
                <section className={classes.contacts}>
                    <h4>Контактные данные</h4>

                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Ваше имя*"
                        placeholder="Введите ваше имя"
                        name="name"
                        value={formVal.name}
                        required={true}
                        onError={val => setHasError(val)}
                        onChange={formChangeHandler}
                    />

                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Ваш телефон*"
                        placeholder="+7 (977) 777-77-77"
                        name="phone"
                        type="tel"
                        value={formVal.phone}
                        required={true}
                        onError={val => setHasError(val)}
                        onChange={formChangeHandler}
                    />

                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Ваш e-mail*"
                        placeholder="Введите вашу почту"
                        name="email"
                        type="email"
                        value={formVal.email}
                        onChange={formChangeHandler}
                    />

                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Телефон получателя (необязательно)"
                        placeholder="+7 (977) 777-77-77"
                        name="recieverPhone"
                        type="tel"
                        value={formVal.recieverPhone}
                        onChange={formChangeHandler}
                    />

                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Имя получателя (необязательно)"
                        placeholder="Введите имя получателя"
                        name="recieverName"
                        value={formVal.recieverName}
                        onChange={formChangeHandler}
                    />

                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Комментарий к заказу"
                        placeholder="Примечания к вашеу заказу,  особые пожелания отделу доставки"
                        name="comment"
                        textarea={true}
                        value={formVal.comment}
                        onChange={formChangeHandler}
                    />
                </section>

                <section className={classes.delivery}>
                    <h4>Доставка</h4>

                    <section className={classes['delivery__input']}>
                        <div
                            className={`${
                                formVal.delivery ? classes['input-gray'] : ''
                            }`}
                        >
                            <input
                                ref={pickupRef}
                                name="delivery"
                                id="pickup"
                                type="radio"
                                onChange={() => {
                                    setFormVal({
                                        ...formVal,
                                        delivery: false,
                                    });
                                }}
                            />
                            <label htmlFor="pickup">Самовывоз</label>
                        </div>

                        <div
                            className={`${
                                !formVal.delivery ? classes['input-gray'] : ''
                            }`}
                        >
                            <input
                                name="delivery"
                                id="delivery"
                                type="radio"
                                onChange={() => {
                                    setFormVal({
                                        ...formVal,
                                        delivery: true,
                                    });
                                }}
                            />
                            <label htmlFor="delivery">Доставка курьером</label>
                        </div>
                    </section>

                    {formVal.delivery && (
                        <div className={classes['delivery__details']}>
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Город*"
                                placeholder="Введите город"
                                name="city"
                                value={formVal.city}
                                onChange={formChangeHandler}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Улица*"
                                placeholder="Введите улицу"
                                name="street"
                                value={formVal.street}
                                onChange={formChangeHandler}
                            />

                            <div className={classes['delivery-house']}>
                                <FormInput
                                    containerClass={classes.container}
                                    labelClass={classes.label}
                                    title="Корп/стр"
                                    placeholder="Корп/стр"
                                    name="building"
                                    value={formVal.building}
                                    onChange={formChangeHandler}
                                />
                                <FormInput
                                    containerClass={classes.container}
                                    labelClass={classes.label}
                                    title="Дом"
                                    placeholder="Дом"
                                    name="house"
                                    value={formVal.house}
                                    onChange={formChangeHandler}
                                />
                                <FormInput
                                    containerClass={classes.container}
                                    labelClass={classes.label}
                                    title="Кв/офис"
                                    placeholder="Кв/офис"
                                    name="flat"
                                    value={formVal.flat}
                                    onChange={formChangeHandler}
                                />
                            </div>

                            <FormInput
                                containerClass={`${classes.container} ${classes['time-input']}`}
                                labelClass={classes.label}
                                title="Время доставки"
                                placeholder="Введите время доставки"
                                name="deliverTime"
                                type="time"
                                value={formVal.deliverTime}
                                onChange={formChangeHandler}
                            />

                            <small>{`Стоимость доставки оговаривается после подтверждения заказа нашим администратором`}</small>
                        </div>
                    )}
                </section>

                <section className={classes.promo}>
                    <FormInput
                        containerClass={`${classes.container} ${classes['promo-container']}`}
                        labelClass={classes.label}
                        title="Промокод"
                        placeholder="Промокод"
                        name="promo"
                        onChange={value => setPromo(value)}
                    />
                    <MenuBtn blank={true} onClick={() => setAcceptPromo(promo)}>
                        Применить
                    </MenuBtn>
                </section>

                <section className={classes.total}>
                    <TextHeader>{`Общая сумма заказа ${totalPrice} ₽`}</TextHeader>
                    <p>{`Скидка = ${0} ₽`}</p>
                </section>

                <MenuBtn className={classes['submit-btn']} type="submit">
                    Заказать
                </MenuBtn>
                <small className={classes.policy}>
                    Нажимая на кнопку «К Оплате», я даю свое согласие на
                    обработку персональных данных, в соответствии с
                    <a href="/ooops"> Политикой конфиденциальности</a>, а так же
                    ознакомлен с условиями оплаты и доставки
                </small>
            </form>
        </main>
    );
}

export default Checkout;
