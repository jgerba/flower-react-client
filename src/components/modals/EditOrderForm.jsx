import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store/cart';
import useFetch from '../../hooks/use-fetch';

import FormInput from '../FormInput';
import MenuBtn from '../UI/MenuBtn';
import TextHeader from '../UI/TextHeader';
import ShopCart from './ShopCart';

import classes from './EditOrderForm.module.css';

function EditOrderForm({ item, onItemChange, onClose }) {
    const dispatch = useDispatch();
    const orderItems = useSelector(state => state.cart.orderItems);

    const pickupRef = useRef();
    const deliveryRef = useRef();

    const [useDelivery, setUseDelivery] = useState(item.delivery);

    const { sendRequest, isLoading, error } = useFetch();

    // set initial check attr for delivery
    useEffect(() => {
        !item.delivery
            ? pickupRef.current.setAttribute('checked', '')
            : deliveryRef.current.setAttribute('checked', '');
    }, [item.delivery]);

    // update cart view with order items
    useEffect(() => {
        dispatch(cartActions.updateOrderItems(item.order));
    }, []);

    //  check if there empty text inputs
    function checkInputs(el) {
        if (
            !el.name.value ||
            !el.phone.value ||
            !el.email.value ||
            orderItems.length === 0 ||
            (useDelivery && !el.city.value) ||
            (useDelivery && !el.street.value)
        ) {
            return false;
        }

        return true;
    }

    function submitHandler(event) {
        event.preventDefault();

        const el = event.target;

        if (!checkInputs(el)) return;

        const dataObj = {
            name: el.name.value,
            phone: +el.phone.value,
            email: el.email.value,
            recieverPhone: +el.recieverPhone?.value,
            recieverName: el.recieverName?.value,
            comment: el.comment?.value,
            delivery: useDelivery,
            address: useDelivery
                ? {
                      city: el.city.value,
                      street: el.street.value,
                      building: el.building?.value,
                      house: el.house?.value,
                      flat: el.flat?.value,
                      deliverTime: el.deliverTime?.value,
                  }
                : null,
            order: orderItems,
        };

        sendRequest(
            {
                url: `/order/${item._id}`,
                method: 'PATCH',
                body: dataObj,
            },
            applyData
        );
    }

    // update edited item and close modal after submitting
    function applyData(data) {
        console.log(data);
        onItemChange(data);
        onClose();
    }

    return (
        <>
            <ShopCart editOrder={true} />

            <form
                action=""
                name="Редактирование заказа"
                className={classes.modal}
                onSubmit={submitHandler}
            >
                <TextHeader>Редактирование заказа</TextHeader>

                <FormInput
                    className={classes.capitalize}
                    title="Имя"
                    name="name"
                    placeholder="Имя до 30 символов - обязательное поле"
                    value={item.name}
                    onChange={() => {}}
                />

                <FormInput
                    title="Телефон"
                    name="phone"
                    placeholder="Телефон клиента - обязательное поле"
                    value={item.phone}
                    type="phone"
                    onChange={() => {}}
                />

                <FormInput
                    title="Электронная почта"
                    name="email"
                    placeholder="Электронная почта клиента"
                    value={item.email}
                    onChange={() => {}}
                />

                <FormInput
                    className={classes.capitalize}
                    title="Имя получателя"
                    name="recieverName"
                    placeholder="Имя получателя до 30 символов"
                    value={item.recieverName}
                    onChange={() => {}}
                />

                <FormInput
                    title="Телефон получателя"
                    name="recieverPhone"
                    placeholder="Телефон получателя"
                    value={item.recieverPhone}
                    type="phone"
                    onChange={() => {}}
                />

                <FormInput
                    title="Комментарий к заказу"
                    name="comment"
                    placeholder="Комментарий к заказу"
                    value={item.comment}
                    textarea={true}
                    onChange={() => {}}
                />

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
                                ref={deliveryRef}
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
                                value={item.address.city}
                                onChange={() => {}}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Улица*"
                                placeholder="Введите улицу"
                                name="street"
                                value={item.address.street}
                                onChange={() => {}}
                            />

                            <div className={classes['delivery-house']}>
                                <FormInput
                                    containerClass={classes.container}
                                    labelClass={classes.label}
                                    title="Корп/стр"
                                    placeholder="Корп/стр"
                                    name="building"
                                    value={item.address.building}
                                    onChange={() => {}}
                                />
                                <FormInput
                                    containerClass={classes.container}
                                    labelClass={classes.label}
                                    title="Дом"
                                    placeholder="Дом"
                                    name="house"
                                    value={item.address.house}
                                    onChange={() => {}}
                                />
                                <FormInput
                                    containerClass={classes.container}
                                    labelClass={classes.label}
                                    title="Кв/офис"
                                    placeholder="Кв/офис"
                                    name="flat"
                                    value={item.address.flat}
                                    onChange={() => {}}
                                />
                            </div>

                            <FormInput
                                containerClass={`${classes.container} ${classes['time-input']}`}
                                labelClass={classes.label}
                                title="Время доставки"
                                placeholder="Введите время доставки"
                                name="deliverTime"
                                value={item.address.deliverTime}
                                onChange={() => {}}
                                type="time"
                            />
                        </div>
                    )}
                </section>

                <MenuBtn
                    className={`${classes['submit-btn']} ${
                        useDelivery ? classes['submit-btn--shift'] : ''
                    }`}
                    type="submit"
                    blank={true}
                >
                    Сохранить
                </MenuBtn>
            </form>
        </>
    );
}

export default EditOrderForm;
