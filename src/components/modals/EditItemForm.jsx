import useFetch from '../../hooks/use-fetch';

import FormInput from '../FormInput';
import MenuBtn from '../UI/MenuBtn';

import classes from './EditItemForm.module.css';

function EditItemForm({ item, onItemChange }) {
    const { sendRequest, isLoading, error } = useFetch();

    function submitHandler(event) {
        event.preventDefault();

        const formEl = event.target;
        const itemObj = {
            title: formEl.title.value,
            price: formEl.price.value,
            description: formEl.descr?.value,
            src: formEl.src.value,
            new: formEl.new?.value,
            sale: formEl.sale?.value,
            flags: formEl.flags?.value,
        };

        sendRequest(
            { url: `/bouquet/${item._id}`, method: 'PATCH', body: itemObj },
            applyData
        );
    }

    function applyData(data) {
        onItemChange(data);
    }

    return (
        <form
            action=""
            name="Редактирование товара"
            className={classes.modal}
            onSubmit={submitHandler}
        >
            <FormInput
                title="Заголовок"
                name="title"
                value={item.title}
                onChange={() => {}}
            />
            <FormInput
                title="Цена"
                name="price"
                type="number"
                value={item.price}
                onChange={() => {}}
            />
            <FormInput
                title="Описание"
                name="descr"
                textarea={true}
                value={item.description}
                onChange={() => {}}
            />
            <FormInput
                title="Изображение"
                name="src"
                value={item.src}
                onChange={() => {}}
            />
            <FormInput
                title="Отметки"
                name="flags"
                value={item.flags}
                onChange={() => {}}
            />

            <MenuBtn blank={true}>Сохранить</MenuBtn>
        </form>
    );
}

export default EditItemForm;
