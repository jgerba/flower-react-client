import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import useFetch from '../hooks/use-fetch';

import FormInput from '../components/FormInput';
import MenuBtn from '../components/UI/MenuBtn';
import SectionHeader from '../components/UI/SectionHeader';
import TextHeader from '../components/UI/TextHeader';
import ShopCart from '../components/modals/ShopCart';

import classes from './Checkout.module.css';

function Checkout(props) {
    const formRef = useRef();
    const pickupRef = useRef();

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const [useDelivery, setUseDelivery] = useState(false);
    const [promo, setPromo] = useState('');
    const [acceptPromo, setAcceptPromo] = useState(null);

    const { sendRequest, isLoading, error } = useFetch();

    // set initial check attr for badges
    useEffect(() => {
        pickupRef.current.setAttribute('checked', '');
    }, []);

    //  check if there empty text inputs
    function checkInputs(el) {
        if (
            !el.name.value ||
            !el.phone.value ||
            !el.email.value ||
            cartItems.length === 0 ||
            (useDelivery && !el.city.value) ||
            (useDelivery && !el.street.value)
        ) {
            return false;
        }

        return true;
    }

    function submitHandler(event) {
        event.preventDefault();

        const el = formRef.current;

        if (!checkInputs(el)) return;

        const obj = {
            name: el.name.value,
            phone: +el.phone.value,
            email: el.email.value,
            recieverPhone: +el.recieverPhone?.value,
            recieverName: el.recieverName?.value,
            comment: el.comment?.value,
            delivery: useDelivery,
            address: useDelivery
                ? {
                      city: el.city?.value,
                      street: el.street?.value,
                      building: el.building?.value,
                      house: el.house?.value,
                      flat: el.flat?.value,
                      deliverTime: el.deliverTime?.value,
                  }
                : null,
            order: cartItems,
            promo: acceptPromo,
            totalPrice: totalPrice,
        };

        console.log(obj);

        sendRequest({ url: '/order', method: 'POST', body: obj }, applyData);

        function applyData(data) {
            console.log(data);
        }
    }

    return (
        <main
            className={`${classes.main} ${
                useDelivery ? classes['main-delivery'] : ''
            }`}
        >
            <div className={classes.header}>
                <SectionHeader>оформление</SectionHeader>
                <SectionHeader smallHeader={true}>заказа</SectionHeader>
            </div>

            <ShopCart
                containerClass={classes.cart}
                checkoutClass={classes['cart__checkout']}
                goodsClass={classes['cart__goods']}
                checkout={true}
            />

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
                        onChange={() => {}}
                    />
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Ваш телефон*"
                        placeholder="+7 (977) 777-77-77"
                        name="phone"
                        type="tel"
                        onChange={() => {}}
                    />
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Ваш e-mail*"
                        placeholder="Введите вашу почту"
                        name="email"
                        type="email"
                        onChange={() => {}}
                    />
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Телефон получателя (необязательно)"
                        placeholder="+7 (977) 777-77-77"
                        name="recieverPhone"
                        type="tel"
                        onChange={() => {}}
                    />
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Имя получателя (необязательно)"
                        placeholder="Введите имя получателя"
                        name="recieverName"
                        onChange={() => {}}
                    />
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Комментарий к заказу"
                        placeholder="Примечания к вашеу заказу,  особые пожелания отделу доставки"
                        name="comment"
                        textarea={true}
                        onChange={() => {}}
                    />
                </section>

                <section className={classes.delivery}>
                    <h4>Доставка</h4>

                    <section className={classes['delivery__input']}>
                        <div
                            className={`${
                                useDelivery ? classes['input-gray'] : ''
                            }`}
                        >
                            <input
                                ref={pickupRef}
                                name="delivery"
                                id="pickup"
                                type="radio"
                                onChange={() => {
                                    setUseDelivery(false);
                                }}
                            />
                            <label htmlFor="pickup">Самовывоз</label>
                        </div>

                        <div
                            className={`${
                                !useDelivery ? classes['input-gray'] : ''
                            }`}
                        >
                            <input
                                name="delivery"
                                id="delivery"
                                type="radio"
                                onChange={() => {
                                    setUseDelivery(true);
                                }}
                            />
                            <label htmlFor="delivery">Доставка курьером</label>
                        </div>
                    </section>

                    {useDelivery && (
                        <div className={classes['delivery__details']}>
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Город*"
                                placeholder="Введите город"
                                name="city"
                                onChange={() => {}}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Улица*"
                                placeholder="Введите улицу"
                                name="street"
                                onChange={() => {}}
                            />

                            <div className={classes['delivery-house']}>
                                <FormInput
                                    containerClass={classes.container}
                                    labelClass={classes.label}
                                    title="Корп/стр"
                                    placeholder="Корп/стр"
                                    name="building"
                                    onChange={() => {}}
                                />
                                <FormInput
                                    containerClass={classes.container}
                                    labelClass={classes.label}
                                    title="Дом"
                                    placeholder="Дом"
                                    name="house"
                                    onChange={() => {}}
                                />
                                <FormInput
                                    containerClass={classes.container}
                                    labelClass={classes.label}
                                    title="Кв/офис"
                                    placeholder="Кв/офис"
                                    name="flat"
                                    onChange={() => {}}
                                />
                            </div>

                            <FormInput
                                containerClass={`${classes.container} ${classes['time-input']}`}
                                labelClass={classes.label}
                                title="Время доставки"
                                placeholder="Введите время доставки"
                                name="deliverTime"
                                onChange={() => {}}
                                type="time"
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
