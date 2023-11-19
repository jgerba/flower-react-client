import { useEffect, useRef, useState } from 'react';

import useFetch from '../../hooks/useFetch';

import FormInput from '../FormInput';
import MenuBtn from '../UI/MenuBtn';
import TextHeader from '../UI/TextHeader';
import FlagsFilter from '../filters/FlagsFilter';
import ContentCard from '../UI/ContentCard';

import classes from './EditItemForm.module.css';

function EditItemForm({ item, onModalChange, onClose, newItem = false }) {
    const noBadgeRef = useRef();
    const saleBadgeRef = useRef();
    const newBadgeRef = useRef();

    const [formVal, setFormVal] = useState({
        title: item.title,
        price: item.price,
        oldPrice: item.oldPrice,
        src: item.src,
        description: item.description,
        new: item.new,
        sale: item.sale,
        flags: item.flags,
    });

    // error from the inputs, cancel sbm if true
    const [hasError, setHasError] = useState(false);

    // show sign if img src is broken
    const [isBadImg, setIsBadImg] = useState(false);

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

    function submitHandler(event) {
        event.preventDefault();

        if (hasError) return;

        // upload new item
        if (newItem) {
            if (
                !formVal.title ||
                !formVal.price ||
                formVal.price < 1 ||
                !formVal.src ||
                (formVal.sale && !formVal.oldPrice) ||
                (formVal.sale && formVal.oldPrice < 1)
            ) {
                return;
            }

            sendRequest(
                {
                    url: `/bouquet`,
                    method: 'POST',
                    body: formVal,
                },
                applyData
            );

            return;
        }

        const dataObj = {};

        // compare init and form values,
        // if have difference add to dataObj for upload
        for (const [key, value] of Object.entries(formVal)) {
            if (value !== item[key] && key !== 'flags') dataObj[key] = value;

            // compare flags arrays
            if (
                (key === 'flags' && value.length !== item[key].length) ||
                (key === 'flags' &&
                    JSON.stringify(value) !== JSON.stringify(item[key]))
            ) {
                dataObj[key] = value;
            }
        }

        if (Object.keys(dataObj).length === 0) return;

        // upload edited data
        sendRequest(
            {
                url: `/bouquet/${item._id}`,
                method: 'PATCH',
                body: dataObj,
            },
            applyData
        );
    }

    // update edited item and close modal after submitting
    function applyData(data) {
        console.log(data);

        onModalChange(data, newItem);
        onClose();
    }

    function formChangeHandler(event) {
        if (event.target.name === 'src') setIsBadImg(false);

        setFormVal({
            ...formVal,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <form
            action=""
            name="Bouquet edit"
            className={classes.modal}
            onSubmit={submitHandler}
        >
            <TextHeader>Редактирование товара</TextHeader>

            <FormInput
                title="Заголовок"
                name="title"
                placeholder="Заголовок товара до 25 символов - обязательное поле"
                value={formVal.title}
                required={true}
                onError={val => setHasError(val)}
                onChange={formChangeHandler}
            />

            <FormInput
                title="Цена"
                name="price"
                type="number"
                placeholder="Цена товара от 1 до 10 000 рублей - обязательное поле"
                value={formVal.price}
                required={true}
                onError={val => setHasError(val)}
                onChange={formChangeHandler}
            />
            {formVal.sale && (
                <FormInput
                    title="Старая цена"
                    name="oldPrice"
                    type="number"
                    placeholder="Цена товара до распродажи - обязательное поле"
                    value={formVal.oldPrice}
                    required={true}
                    onError={val => setHasError(val)}
                    onChange={formChangeHandler}
                />
            )}

            <FormInput
                title="Описание"
                name="description"
                textarea={true}
                placeholder="Описание товара до 300 символов"
                value={formVal.description}
                onChange={formChangeHandler}
            />

            <FormInput
                title="Изображение"
                name="src"
                placeholder="Ссылка на изображение товара - обязательное поле"
                value={formVal.src}
                required={true}
                onError={val => setHasError(val)}
                onChange={formChangeHandler}
            />

            <section className={classes['badge-input']}>
                <div className={classes['badge-input-none']}>
                    <label htmlFor="badge-none">Без значка </label>
                    <input
                        ref={noBadgeRef}
                        name="Badge"
                        id="badge-none"
                        type="radio"
                        onChange={() =>
                            setFormVal({ ...formVal, sale: false, new: false })
                        }
                    />
                </div>

                <div className={classes['badge-input-sale']}>
                    <label htmlFor="badge-sale">Значок распродажи </label>
                    <input
                        ref={saleBadgeRef}
                        name="Badge"
                        id="badge-sale"
                        type="radio"
                        onChange={() =>
                            setFormVal({ ...formVal, sale: true, new: false })
                        }
                    />
                </div>

                <div className={classes['badge-input-new']}>
                    <label htmlFor="badge-new">Значок новинки </label>
                    <input
                        ref={newBadgeRef}
                        name="Badge"
                        id="badge-new"
                        type="radio"
                        onChange={() =>
                            setFormVal({ ...formVal, sale: false, new: true })
                        }
                    />
                </div>
            </section>

            <ContentCard className={classes['test__card']}>
                <TextHeader className={classes['test__header']}>
                    Предварительный просмотр
                </TextHeader>
                <div>
                    {!isBadImg ? (
                        <img
                            className={classes['test__img']}
                            src={formVal.src}
                            alt={`Букет ${formVal.title}`}
                            onError={() => setIsBadImg(true)}
                        />
                    ) : (
                        <div className={classes['test__img-place']}>
                            <p>Некорректный источник изображения!</p>
                        </div>
                    )}
                </div>

                <p className={classes['test__title']}>{formVal.title}</p>

                <div className={classes['test__price-section']}>
                    <p
                        className={classes['test__price']}
                    >{`${formVal.price} ₽`}</p>
                    {formVal.sale && (
                        <p
                            className={classes['test__old-price']}
                        >{`${formVal.oldPrice} ₽`}</p>
                    )}
                </div>

                {formVal.sale && (
                    <div className={classes['test__sale-badge']}>
                        <p>sale</p>
                    </div>
                )}
                {formVal.new && (
                    <div className={classes['test__new-badge']}>
                        <p>new</p>
                    </div>
                )}
            </ContentCard>

            <FlagsFilter
                className={classes['flags-filter']}
                items={item}
                editForm={true}
                onFlagsUpd={flags => setFormVal({ ...formVal, flags: flags })}
            />

            <MenuBtn type="submit" blank={true}>
                Сохранить
            </MenuBtn>
        </form>
    );
}

export default EditItemForm;
