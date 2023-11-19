import { useEffect, useRef, useState } from 'react';

import useFetch from '../../hooks/useFetch';

import FormInput from '../FormInput';
import MenuBtn from '../UI/MenuBtn';
import TextHeader from '../UI/TextHeader';

import classes from './EditFeedForm.module.css';

function EditFeedForm({ item, onModalChange, onClose }) {
    const privateRef = useRef();
    const corporateRef = useRef();

    const [formVal, setFormVal] = useState({
        name: item.name,
        phone: item.phone,
        comment: item.comment,
        corporate: item.corporate,
        organization: item.organization,
        address: item.address,
        price: item.price,
        email: item.email,
        unp: item.unp,
        account: item.account,
        bank: item.bank,
        entries: item.entries,
    });

    // error from the inputs, cancel sbm if true
    const [hasError, setHasError] = useState(false);

    const { sendRequest, isLoading, error } = useFetch();

    // set initial check attr for corporate
    useEffect(() => {
        !item.corporate
            ? privateRef.current.setAttribute('checked', '')
            : corporateRef.current.setAttribute('checked', '');
    }, [item.corporate]);

    function submitHandler(event) {
        event.preventDefault();

        if (hasError) return;

        // data for the upload
        const dataObj = {};

        for (const [key, value] of Object.entries(formVal)) {
            // compare init and form values,
            // if have difference add to dataObj for upload
            // hanlde corporate value separately
            if (value !== item[key] && key !== 'corporate') {
                dataObj[key] = value;
            }

            // compare corporate value, add for upload if have difference
            if (key === 'corporate' && formVal.corporate !== item[key]) {
                dataObj[key] = formVal.corporate;
            }
        }

        if (Object.keys(dataObj).length === 0) return;

        sendRequest(
            {
                url: `/feedback/${item._id}`,
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

    function formChangeHandler(event, corporate = false, corpVal) {
        !corporate
            ? // upd form values except corporate
              setFormVal({
                  ...formVal,
                  [event.target.name]: event.target.value,
              })
            : // upd corporate value
              setFormVal({ ...formVal, corporate: corpVal });
    }

    return (
        <>
            <form
                action=""
                name="Feedback edit"
                className={`${classes.modal} ${
                    formVal.corporate ? '' : classes['modal-private']
                }`}
                onSubmit={submitHandler}
            >
                <TextHeader>Редактирование обратной связи</TextHeader>

                <FormInput
                    className={classes.capitalize}
                    title="Контактное лицо"
                    name="name"
                    placeholder="Имя до 30 символов - обязательное поле"
                    value={formVal.name}
                    required={true}
                    onError={val => setHasError(val)}
                    onChange={formChangeHandler}
                />

                <FormInput
                    title="Контактный номер телефона"
                    name="phone"
                    placeholder="Телефон клиента - обязательное поле"
                    value={formVal.phone}
                    type="tel"
                    required={true}
                    onError={val => setHasError(val)}
                    onChange={formChangeHandler}
                />

                <FormInput
                    title="Комментарий"
                    name="comment"
                    placeholder="Комментарий"
                    value={formVal.comment}
                    textarea={true}
                    onChange={formChangeHandler}
                />

                <section className={classes.corporate}>
                    <section className={classes['corporate__input']}>
                        <div
                            className={`${
                                formVal.corporate ? classes['input-gray'] : ''
                            }`}
                        >
                            <input
                                ref={privateRef}
                                name="corporate"
                                id="private"
                                type="radio"
                                value={false}
                                onChange={e => {
                                    formChangeHandler(e, true, false);
                                }}
                            />
                            <label htmlFor="private">Физическим лицам</label>
                        </div>

                        <div
                            className={`${
                                !formVal.corporate ? classes['input-gray'] : ''
                            }`}
                        >
                            <input
                                ref={corporateRef}
                                name="corporate"
                                id="corporate"
                                type="radio"
                                value={true}
                                onChange={e => {
                                    formChangeHandler(e, true, true);
                                }}
                            />
                            <label htmlFor="corporate">
                                для корпоративных клиентов
                            </label>
                        </div>
                    </section>

                    {formVal.corporate && (
                        <div className={classes['corporate__details']}>
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Наименование организации"
                                placeholder="Введите наименование вашей организации"
                                name="organization"
                                value={formVal.organization}
                                onChange={formChangeHandler}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Почтовый адрес"
                                placeholder="Введите почтовый адрес"
                                name="address"
                                value={formVal.address}
                                onChange={formChangeHandler}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Стоимость букета сотруднику (если разная – указать)"
                                placeholder="Укажите стоимость букета сотруднику"
                                name="price"
                                type="number"
                                value={formVal.price}
                                onChange={formChangeHandler}
                            />
                            <FormInput
                                title="Адрес электронной почты"
                                name="email"
                                placeholder="Адрес электронной почты"
                                value={formVal.email}
                                onChange={formChangeHandler}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="УНП"
                                placeholder="УНП"
                                name="unp"
                                type="number"
                                value={formVal.unp}
                                onChange={formChangeHandler}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Расчетный счет"
                                placeholder="Введите номер расчетного счета"
                                name="account"
                                type="number"
                                value={formVal.account}
                                onChange={formChangeHandler}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Код банка"
                                placeholder="Код банка"
                                name="bank"
                                type="number"
                                value={formVal.bank}
                                onChange={formChangeHandler}
                            />
                            <FormInput
                                containerClass={classes.container}
                                labelClass={classes.label}
                                title="Предполагаемое количество заявок в месяц"
                                placeholder="Введите предполагаемое количество заявок в месяц"
                                name="entries"
                                type="number"
                                value={formVal.entries}
                                onChange={formChangeHandler}
                            />
                        </div>
                    )}
                </section>

                <MenuBtn
                    className={`${classes['submit-btn']} ${
                        formVal.corporate ? classes['submit-btn--shift'] : ''
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

export default EditFeedForm;
