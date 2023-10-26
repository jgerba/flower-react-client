import { useEffect, useRef, useState } from 'react';

import useFetch from '../../hooks/use-fetch';

import FormInput from '../FormInput';
import MenuBtn from '../UI/MenuBtn';
import TextHeader from '../UI/TextHeader';
import FlagsFilter from '../filters/FlagsFilter';

import classes from './EditItemForm.module.css';

function EditItemForm({ item, onItemChange, onClose }) {
    const noBadgeRef = useRef();
    const saleBadgeRef = useRef();
    const newBadgeRef = useRef();

    const [titleVal, setTitleVal] = useState(item.title);
    const [priceVal, setPriceVal] = useState(item.price);
    const [oldPriceVal, setOldPriceVal] = useState(item.oldPrice);
    const [imgSrcVal, setImgSrcVal] = useState(item.src);
    const [isBadImg, setIsBadImg] = useState(false);
    const [newBadgeVal, setNewBadgeVal] = useState(item.new);
    const [saleBadgeVal, setSaleBadgeVal] = useState(item.sale);
    const [flags, setFlags] = useState(item.sale);

    const { sendRequest, isLoading, error } = useFetch();

    // set initial check attr for badges
    useEffect(() => {
        if (!item.new && !item.sale) {
            noBadgeRef.current.setAttribute('checked', '');
            return;
        }

        item.sale
            ? saleBadgeRef.current.setAttribute('checked', '')
            : newBadgeRef.current.setAttribute('checked', '');
    }, [item.new, item.sale]);

    //  check if there empty text inputs, or wrong number value
    function checkInputs(item) {
        if (
            !item.title?.value.trim() ||
            !item.src?.value.trim() ||
            item.price?.value < 1 ||
            item.price?.value > 10000 ||
            (saleBadgeVal && item.oldPrice?.value < 1) ||
            (saleBadgeVal && item.oldPrice?.value > 10000)
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
            oldPrice: formEl.oldPrice.value,
            description: formEl.descr?.value,
            src: formEl.src.value,
            new: newBadgeVal,
            sale: saleBadgeVal,
            flags: flags,
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
        setImgSrcVal(value);
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
                placeholder="Заголовок товара до 25 символов - обязательное поле"
                value={item.title}
                onChange={value => setTitleVal(value)}
            />

            <FormInput
                title="Цена"
                name="price"
                type="number"
                placeholder="Цена товара от 1 до 10 000 рублей - обязательное поле"
                value={item.price}
                onChange={value => setPriceVal(value)}
            />
            {saleBadgeVal && (
                <FormInput
                    title="Старая цена"
                    name="oldPrice"
                    type="number"
                    placeholder="Цена товара до распродажи - обязательное поле"
                    value={item.oldPrice}
                    onChange={value => setOldPriceVal(value)}
                />
            )}

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

            <section className={classes['badge-input']}>
                <div className={classes['badge-input-none']}>
                    <label htmlFor="badge-none">Без значка </label>
                    <input
                        ref={noBadgeRef}
                        name="Badge"
                        id="badge-none"
                        type="radio"
                        onChange={() => {
                            setSaleBadgeVal(false);
                            setNewBadgeVal(false);
                        }}
                    />
                </div>

                <div className={classes['badge-input-sale']}>
                    <label htmlFor="badge-sale">Значок распродажи </label>
                    <input
                        ref={saleBadgeRef}
                        name="Badge"
                        id="badge-sale"
                        type="radio"
                        onChange={() => {
                            setSaleBadgeVal(true);
                            setNewBadgeVal(false);
                        }}
                    />
                </div>

                <div className={classes['badge-input-new']}>
                    <label htmlFor="badge-new">Значок новинки </label>
                    <input
                        ref={newBadgeRef}
                        name="Badge"
                        id="badge-new"
                        type="radio"
                        onChange={() => {
                            setSaleBadgeVal(false);
                            setNewBadgeVal(true);
                        }}
                    />
                </div>
            </section>

            <aside className={classes['test__card']}>
                <TextHeader className={classes['test__header']}>
                    Предварительный просмотр
                </TextHeader>
                <div>
                    {!isBadImg ? (
                        <img
                            className={classes['test__img']}
                            src={imgSrcVal}
                            alt={`Букет ${titleVal}`}
                            onError={() => setIsBadImg(true)}
                        />
                    ) : (
                        <div className={classes['test__img-place']}>
                            <p>Некорректный источник изображения!</p>
                        </div>
                    )}
                </div>

                <p className={classes['test__title']}>{titleVal}</p>

                <div className={classes['test__price-section']}>
                    <p className={classes['test__price']}>{`${priceVal} ₽`}</p>
                    {saleBadgeVal && (
                        <p
                            className={classes['test__old-price']}
                        >{`${oldPriceVal} ₽`}</p>
                    )}
                </div>

                {saleBadgeVal && (
                    <div className={classes['test__sale-badge']}>
                        <p>sale</p>
                    </div>
                )}
                {newBadgeVal && (
                    <div className={classes['test__new-badge']}>
                        <p>new</p>
                    </div>
                )}
            </aside>

            <FlagsFilter
                className={classes['flags-filter']}
                items={item}
                editForm={true}
                onFlagsUpd={flags => setFlags(flags)}
            />

            <MenuBtn type="submit" blank={true}>
                Сохранить
            </MenuBtn>
        </form>
    );
}

export default EditItemForm;
