import { useState } from 'react';

import useFetch from '../../hooks/use-fetch';

import FormInput from '../FormInput';
import MenuBtn from '../UI/MenuBtn';
import TextHeader from '../UI/TextHeader';

import classes from './EditItemForm.module.css';

function EditItemForm({ item, onItemChange, onClose }) {
    const [titleValue, setTitleValue] = useState(item.title);
    const [priceValue, setPriceValue] = useState(item.price);
    const [imgSrcValue, setImgSrcValue] = useState(item.src);
    const [isBadImg, setIsBadImg] = useState(false);

    const { sendRequest, isLoading, error } = useFetch();

    //  check if there empty text inputs, or wrong number value
    function checkInputs(item) {
        if (
            !item.title?.value.trim() ||
            !item.src?.value.trim() ||
            item.price?.value < 1 ||
            item.price?.value > 10000
        ) {
            return false;
        }

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

    function imgSrcHandler(value) {
        setIsBadImg(false);
        setImgSrcValue(value);
    }

    return (
        <form
            action=""
            name="Редактирование товара"
            className={classes.modal}
            onSubmit={submitHandler}
        >
            <TextHeader>Редактирование товара</TextHeader>

            <FormInput
                title="Заголовок"
                name="title"
                placeholder="Заголовок товара до 200 символов - обязательное поле"
                value={item.title}
                onChange={value => setTitleValue(value)}
            />
            <FormInput
                title="Цена"
                name="price"
                type="number"
                placeholder="Цена товара от 1 до 10 000 рублей - обязательное поле"
                value={item.price}
                onChange={value => setPriceValue(value)}
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
                onChange={imgSrcHandler}
            />

            <aside className={classes['test-item-card']}>
                <div>
                    {!isBadImg ? (
                        <img
                            className={classes.image}
                            src={imgSrcValue}
                            alt={`Букет ${titleValue}`}
                            onError={() => setIsBadImg(true)}
                        />
                    ) : (
                        <div className={classes['img-place-holder']}>
                            <p>Некорректный источник изображения!</p>
                        </div>
                    )}
                </div>

                <p className={classes.title}>{titleValue}</p>
                <p className={classes.price}>{`${priceValue} ₽`}</p>

                <MenuBtn className={classes.button} blank={true}>
                    В корзину
                </MenuBtn>

                {item.sale && (
                    <div className={classes['sale-badge']}>
                        <p>sale</p>
                    </div>
                )}
                {item.new && (
                    <div className={classes['new-badge']}>
                        <p>new</p>
                    </div>
                )}
            </aside>

            <section className={classes['badge-input']}>
                <div className={classes['badge-input-none']}>
                    <label htmlFor="badge-none">Без значка</label>
                    <input name="badge" id="badge-none" type="radio" />
                </div>

                <div className={classes['badge-input-sale']}>
                    <label htmlFor="badge-sale">Значок распродажи</label>
                    <input name="badge" id="badge-sale" type="radio" />
                </div>

                <div className={classes['badge-input-new']}>
                    <label htmlFor="badge-new">Значок новинки</label>
                    <input name="badge" id="badge-new" type="radio" />
                </div>
            </section>

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
