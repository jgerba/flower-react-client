import FormInput from '../FormInput';
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
            <FormInput title="Заголовок" id="title-edit" onChange={() => {}} />
            <FormInput
                title="Цена"
                id="price-edit"
                type="number"
                onChange={() => {}}
            />
            <FormInput
                title="Описание"
                id="descr-edit"
                textarea={true}
                onChange={() => {}}
            />
            <FormInput title="Изображение" id="src-edit" onChange={() => {}} />
            <FormInput title="Отметки" id="flags-edit" onChange={() => {}} />

            <MenuBtn blank={true}></MenuBtn>
        </form>
    );
}

export default EditItem;
