import { useEffect, useRef, useState } from 'react';

import useFetch from '../../hooks/use-fetch';

import FormInput from '../FormInput';
import MenuBtn from '../UI/MenuBtn';
import TextHeader from '../UI/TextHeader';
import ContentCard from '../UI/ContentCard';

import classes from './EditOrderForm.module.css';

function EditOrderForm({ item, onItemChange, onClose }) {
    const { sendRequest, isLoading, error } = useFetch();

    //  check if there empty text inputs, or wrong number value
    function checkInputs(item) {
        // if (
        //     !titleVal ||
        //     !imgSrcVal ||
        //     priceVal < 1 ||
        //     priceVal > 10000 ||
        //     (saleBadgeVal && oldPriceVal < 1) ||
        //     (saleBadgeVal && oldPriceVal > 10000)
        // ) {
        //     return false;
        // }
        // return true;
    }

    function submitHandler(event) {
        event.preventDefault();

        const formEl = event.target;

        // if has wrong inputs - block submitting
        if (!checkInputs(formEl)) return;

        const itemObj = {
            // title: titleVal,
            // price: priceVal,
            // oldPrice: oldPriceVal,
            // description: descrVal,
            // src: imgSrcVal,
            // new: newBadgeVal,
            // sale: saleBadgeVal,
            // flags: flags,
        };

        sendRequest(
            {
                url: `/order/${item._id}`,
                method: 'PATCH',
                body: itemObj,
            },
            applyData
        );
    }

    // update edited item and close modal after submitting
    function applyData(data) {
        onItemChange(data);
        onClose();
    }

    return (
        <form
            action=""
            name="Редактирование заказа"
            className={classes.modal}
            onSubmit={submitHandler}
        >
            <TextHeader>Редактирование заказа</TextHeader>

            <FormInput
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
                title="Имя получателя"
                name="recieverName"
                placeholder="Имя получателя до 30 символов"
                value={item.recieverName}
                onChange={() => {}}
            />

            <FormInput
                title="Телефон получателя"
                name="receiverPhone"
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

            <MenuBtn type="submit" blank={true}>
                Сохранить
            </MenuBtn>
        </form>
    );
}

export default EditOrderForm;
