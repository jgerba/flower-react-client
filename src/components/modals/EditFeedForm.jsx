import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import useFetch from '../../hooks/use-fetch';

import FormInput from '../FormInput';
import MenuBtn from '../UI/MenuBtn';
import TextHeader from '../UI/TextHeader';

import classes from './EditFeedForm.module.css';

function EditFeedForm({ item, onModalChange, onClose }) {
    const orderItems = useSelector(state => state.cart.orderItems);

    const privateRef = useRef();
    const corporateRef = useRef();

    const [isCorporate, setIsCorporate] = useState(item.corporate);

    const { sendRequest, isLoading, error } = useFetch();

    // set initial check attr for corporate
    useEffect(() => {
        !item.corporate
            ? privateRef.current.setAttribute('checked', '')
            : corporateRef.current.setAttribute('checked', '');
    }, [item.corporate]);

    //  check if there empty text inputs
    function checkInputs(el) {
        if (!el.name.value || !el.phone.value || !el.email.value) {
            return false;
        }

        return true;
    }

    function submitHandler(event) {
        event.preventDefault();

        const el = event.target;

        if (!checkInputs(el)) return;

        // const dataObj = {
        //     name: el.name.value,
        //     phone: +el.phone.value,
        //     email: el.email.value,
        //     recieverPhone: +el.recieverPhone?.value,
        //     recieverName: el.recieverName?.value,
        //     comment: el.comment?.value,
        //     corporate: isCorporate,
        //     address: isCorporate
        //         ? {
        //               city: el.city.value,
        //               street: el.street.value,
        //               building: el.building?.value,
        //               house: el.house?.value,
        //               flat: el.flat?.value,
        //               deliverTime: el.deliverTime?.value,
        //           }
        //         : {
        //               city: '',
        //               street: '',
        //               building: null,
        //               house: null,
        //               flat: null,
        //               deliverTime: '',
        //           },
        //     order: orderItems,
        // };

        // sendRequest(
        //     {
        //         url: `/feedback/${item._id}`,
        //         method: 'PATCH',
        //         body: dataObj,
        //     },
        //     applyData
        // );
    }

    // update edited item and close modal after submitting
    function applyData(data) {
        console.log(data);
        onModalChange(data);
        onClose();
    }

    return (
        <>
            <form
                action=""
                name="Feedback edit"
                className={`${classes.modal} ${
                    isCorporate ? '' : classes['modal-private']
                }`}
                onSubmit={submitHandler}
            >
                <TextHeader>Редактирование обратной связи</TextHeader>

                <FormInput
                    className={classes.capitalize}
                    title="Контактное лицо"
                    name="name"
                    placeholder="Имя до 30 символов - обязательное поле"
                    value={item.name}
                    onChange={() => {}}
                />

                <FormInput
                    title="Контактный номер телефона"
                    name="phone"
                    placeholder="Телефон клиента - обязательное поле"
                    value={item.phone}
                    type="phone"
                    onChange={() => {}}
                />

                <FormInput
                    title="Комментарий"
                    name="comment"
                    placeholder="Комментарий"
                    value={item.comment}
                    textarea={true}
                    onChange={() => {}}
                />

                <section className={classes.corporate}>
                    <section className={classes['corporate__input']}>
                        <div
                            className={`${
                                isCorporate ? classes['input-gray'] : ''
                            }`}
                        >
                            <input
                                ref={privateRef}
                                name="corporate"
                                id="private"
                                type="radio"
                                onChange={() => {
                                    setIsCorporate(false);
                                }}
                            />
                            <label htmlFor="private">Физическим лицам</label>
                        </div>

                        <div
                            className={`${
                                !isCorporate ? classes['input-gray'] : ''
                            }`}
                        >
                            <input
                                ref={corporateRef}
                                name="corporate"
                                id="corporate"
                                type="radio"
                                onChange={() => {
                                    setIsCorporate(true);
                                }}
                            />
                            <label htmlFor="corporate">
                                для корпоративных клиентов
                            </label>
                        </div>
                    </section>

                    {isCorporate && (
                        <div className={classes['corporate__details']}>
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Наименование организации"
                                placeholder="Введите наименование вашей организации"
                                name="organization"
                                value={item.organization}
                                onChange={() => {}}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Почтовый адрес"
                                placeholder="Введите почтовый адрес"
                                name="address"
                                value={item.address}
                                onChange={() => {}}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Стоимость букета сотруднику (если разная – указать)"
                                placeholder="Укажите стоимость букета сотруднику"
                                name="price"
                                value={item.price}
                                onChange={() => {}}
                            />
                            <FormInput
                                title="Адрес электронной почты"
                                name="email"
                                placeholder="Адрес электронной почты"
                                value={item.email}
                                onChange={() => {}}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="УНП"
                                placeholder="УНП"
                                name="unp"
                                value={item.unp}
                                onChange={() => {}}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Расчетный счет"
                                placeholder="Введите номер расчетного счета"
                                name="account"
                                value={item.account}
                                onChange={() => {}}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Код банка"
                                placeholder="Код банка"
                                name="bank"
                                value={item.bank}
                                onChange={() => {}}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Предполагаемое количество заявок в месяц"
                                placeholder="Введите предполагаемое количество заявок в месяц"
                                name="entries"
                                value={item.entries}
                                onChange={() => {}}
                            />
                        </div>
                    )}
                </section>

                <MenuBtn
                    className={`${classes['submit-btn']} ${
                        isCorporate ? classes['submit-btn--shift'] : ''
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

export default EditFeedForm;
