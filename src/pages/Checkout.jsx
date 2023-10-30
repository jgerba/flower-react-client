import FormInput from '../components/FormInput';
import MenuBtn from '../components/UI/MenuBtn';
import SectionHeader from '../components/UI/SectionHeader';
import TextHeader from '../components/UI/TextHeader';

import classes from './Checkout.module.css';

function Checkout(props) {
    return (
        <main className={classes.main}>
            <div className={classes.header}>
                <SectionHeader>оформление</SectionHeader>
                <SectionHeader smallHeader={true}>заказа</SectionHeader>
            </div>
            <form className={classes.form} action="">
                <div>
                    <h4>Контактные данные</h4>
                    <FormInput
                        labelClass={classes.label}
                        title="Ваше имя*"
                        placeholder="Введите ваше имя"
                        name="name"
                        onChange={() => {}}
                    />
                    <FormInput
                        labelClass={classes.label}
                        title="Ваш телефон*"
                        placeholder="+7 (977) 777-77-77"
                        name="phone"
                        type="tel"
                        onChange={() => {}}
                    />
                    <FormInput
                        labelClass={classes.label}
                        title="Ваш e-mail*"
                        placeholder="Введите вашу почту"
                        name="email"
                        type="email"
                        onChange={() => {}}
                    />
                    <FormInput
                        labelClass={classes.label}
                        title="Телефон получателя (необязательно)"
                        placeholder="+7 (977) 777-77-77"
                        name="extraPhone"
                        type="tel"
                        onChange={() => {}}
                    />
                    <FormInput
                        labelClass={classes.label}
                        title="Имя получателя (необязательно)"
                        placeholder="Введите имя получателя"
                        name="extraName"
                        onChange={() => {}}
                    />
                    <FormInput
                        labelClass={classes.label}
                        title="Комментарий к заказу"
                        placeholder="Примечания к вашеу заказу,  особые пожелания отделу доставки"
                        name="comment"
                        textarea={true}
                        onChange={() => {}}
                    />
                </div>

                <div className={classes.delivery}>
                    <h4>Доставка</h4>
                    <FormInput />
                    <FormInput />
                    <div>
                        <FormInput />
                        <FormInput />
                        <FormInput />
                    </div>
                    <FormInput />
                    <p>{`Стоимость доставки ${0} ₽`}</p>
                </div>

                <div>
                    <input type="text" />
                    <MenuBtn blank={true}>Применить</MenuBtn>
                </div>

                <div className={classes.total}>
                    <TextHeader>Общая сумма заказа</TextHeader>
                    <p>{`Скидка ${0} ₽`}</p>
                    <p>{`Доставка ${0} ₽`}</p>
                </div>

                <MenuBtn>Заказать</MenuBtn>
            </form>
        </main>
    );
}

export default Checkout;
