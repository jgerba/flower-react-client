import MenuBtn from '../UI/MenuBtn';

import classes from './EditItem.module.css';

function EditItem(props) {
    return (
        <form
            action=""
            name="Редактирование товара"
            className={classes.modal}
            onSubmit={event => event.preventDefault()}
        >
            <label htmlFor="title-edit">Заголовок</label>
            <input
                id="title-edit"
                type="text"
                name="title"
                placeholder="Заголовок"
                required
                className={classes.input}
                onChange={event => {}}
            />
            <label htmlFor="price-edit">Цена</label>
            <input
                id="price-edit"
                type="number"
                name="price"
                placeholder="Цена"
                required
                className={classes.input}
                onChange={event => {}}
            />
            <label htmlFor="descr-edit">Описание</label>
            <textarea
                id="descr-edit"
                type="text"
                name="descr"
                placeholder="Описание"
                className={`${classes.input} ${classes.textarea}`}
                onChange={event => {}}
            />
            <label htmlFor="src-edit">Изображение</label>
            <input
                id="src-edit"
                type="text"
                name="src"
                placeholder="Изображение"
                required
                className={classes.input}
                onChange={event => {}}
            />
            <label htmlFor="flags-edit">Отметки</label>
            <input
                id="flags-edit"
                type="text"
                name="flags"
                placeholder="Отметки"
                required
                className={classes.input}
                onChange={event => {}}
            />

            <MenuBtn blank={true}></MenuBtn>
        </form>
    );
}

export default EditItem;
