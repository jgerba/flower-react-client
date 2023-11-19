import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store/cart';
import useFetch from '../../hooks/useFetch';

import FormInput from '../FormInput';
import MenuBtn from '../UI/MenuBtn';
import TextHeader from '../UI/TextHeader';
import ShopCart from './ShopCart';

import classes from './EditOrderForm.module.css';

function EditOrderForm({ item, onModalChange, onClose }) {
    const dispatch = useDispatch();
    const orderItems = useSelector(state => state.cart.orderItems);

    const pickupRef = useRef();
    const deliveryRef = useRef();

    const [formVal, setFormVal] = useState({
        name: item.name,
        phone: item.phone,
        email: item.email,
        recieverPhone: item.recieverPhone,
        recieverName: item.recieverName,
        comment: item.comment,
        delivery: item.delivery,
        city: item.city,
        street: item.street,
        building: item.building,
        house: item.house,
        flat: item.flat,
        deliverTime: item.deliverTime,
        order: item.order,
    });

    // error from the inputs, cancel sbm if true
    const [hasError, setHasError] = useState(false);

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

    function submitHandler(event) {
        event.preventDefault();

        if (hasError) return;

        // data for the upload
        const dataObj = {};

        for (const [key, value] of Object.entries(formVal)) {
            // compare init and form values,
            // if have difference add to dataObj for upload
            // hanlde order value separately
            if (value !== item[key] && key !== 'order') {
                dataObj[key] = value;
            }

            // compare order arrays
            if (
                (key === 'order' && value.length !== orderItems.length) ||
                (key === 'order' &&
                    JSON.stringify(value) !== JSON.stringify(orderItems))
            ) {
                dataObj[key] = orderItems;
            }
        }

        if (Object.keys(dataObj).length === 0) return;

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
        onModalChange(data);
        onClose();
    }

    function formChangeHandler(event) {
        setFormVal({
            ...formVal,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <>
            <ShopCart editOrder={true} />

            <form
                action=""
                name="Order edit"
                className={classes.modal}
                onSubmit={submitHandler}
            >
                <TextHeader>Редактирование заказа</TextHeader>

                <FormInput
                    className={classes.capitalize}
                    title="Имя"
                    name="name"
                    placeholder="Имя до 30 символов - обязательное поле"
                    value={formVal.name}
                    required={true}
                    onError={val => setHasError(val)}
                    onChange={formChangeHandler}
                />

                <FormInput
                    title="Телефон"
                    name="phone"
                    placeholder="Телефон клиента - обязательное поле"
                    type="tel"
                    value={formVal.phone}
                    required={true}
                    onError={val => setHasError(val)}
                    onChange={formChangeHandler}
                />

                <FormInput
                    title="Электронная почта"
                    name="email"
                    placeholder="Электронная почта клиента"
                    value={formVal.email}
                    onChange={formChangeHandler}
                />

                <FormInput
                    className={classes.capitalize}
                    title="Имя получателя"
                    name="recieverName"
                    placeholder="Имя получателя до 30 символов"
                    value={formVal.recieverName}
                    onChange={formChangeHandler}
                />

                <FormInput
                    title="Телефон получателя"
                    name="recieverPhone"
                    placeholder="Телефон получателя"
                    type="tel"
                    value={formVal.recieverPhone}
                    onChange={formChangeHandler}
                />

                <FormInput
                    title="Комментарий к заказу"
                    name="comment"
                    placeholder="Комментарий к заказу"
                    textarea={true}
                    value={formVal.comment}
                    onChange={formChangeHandler}
                />

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
                                ref={deliveryRef}
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
                        </div>
                    )}
                </section>

                <MenuBtn
                    className={`${classes['submit-btn']} ${
                        formVal.delivery ? classes['submit-btn--shift'] : ''
                    }`}
                    type="submit"
                    blank={true}
                    disabled={hasError}
                >
                    Сохранить
                </MenuBtn>
            </form>
        </>
    );
}

export default EditOrderForm;
