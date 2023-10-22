import useFetch from '../../hooks/use-fetch';

import FormInput from '../FormInput';
import MenuBtn from '../UI/MenuBtn';

import classes from './EditItemForm.module.css';

function EditItemForm({ item, onItemChange, onClose }) {
    const { sendRequest, isLoading, error } = useFetch();

    //  check if there empty text inputs, or wrong number value
    function checkInputs(item) {
        if (
            !item.title?.value.trim() ||
            !item.src?.value.trim() ||
            !item.price?.value < 1 ||
            !item.price?.value > 10000
        )
            return false;

        return true;
    }

    function submitHandler(event) {
        event.preventDefault();

        const formEl = event.target;

        // if has wrong inputs block submitting
        if (!checkInputs(formEl)) return;

        const itemObj = {
            title: formEl.title.value,
            price: formEl.price.value,
            description: formEl.descr?.value,
            src: formEl.src.value,
            new: formEl.new ? true : false,
            sale: formEl.sale ? true : false,
            flags: formEl.flags.value,
        };

        // upload edited item
        sendRequest(
            { url: `/bouquet/${item._id}`, method: 'PATCH', body: itemObj },
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
            name="Редактирование товара"
            className={classes.modal}
            onSubmit={submitHandler}
        >
            <FormInput
                title="Заголовок"
                name="title"
                placeholder="Заголовок товара до 200 символов - обязательное поле"
                value={item.title}
                onChange={() => {}}
            />
            <FormInput
                title="Цена"
                name="price"
                type="number"
                placeholder="Цена товара от 1 до 10 000 рублей - обязательное поле"
                value={item.price}
                onChange={() => {}}
            />
            <FormInput
                title="Описание"
                name="descr"
                textarea={true}
                placeholder="Описание товара до 300 символов"
                value={item.description}
                onChange={() => {}}
            />
            <FormInput
                title="Изображение"
                name="src"
                placeholder="Ссылка на изображение товара - обязательное поле"
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
