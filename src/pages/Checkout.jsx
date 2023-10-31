import FormInput from '../components/FormInput';
import MenuBtn from '../components/UI/MenuBtn';
import SectionHeader from '../components/UI/SectionHeader';
import TextHeader from '../components/UI/TextHeader';
import ShopCart from '../components/modals/ShopCart';

import classes from './Checkout.module.css';

function Checkout(props) {
    return (
        <main className={classes.main}>
            <div className={classes.header}>
                <SectionHeader>оформление</SectionHeader>
                <SectionHeader smallHeader={true}>заказа</SectionHeader>
            </div>

            <ShopCart
                containerClass={classes.cart}
                checkoutClass={classes['cart__checkout']}
                goodsClass={classes['cart__goods']}
                checkout={true}
            />

            <form className={classes.form} action="">
                <section className={classes.contacts}>
                    <h4>Контактные данные</h4>
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Ваше имя*"
                        placeholder="Введите ваше имя"
                        name="name"
                        onChange={() => {}}
                    />
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Ваш телефон*"
                        placeholder="+7 (977) 777-77-77"
                        name="phone"
                        type="tel"
                        onChange={() => {}}
                    />
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Ваш e-mail*"
                        placeholder="Введите вашу почту"
                        name="email"
                        type="email"
                        onChange={() => {}}
                    />
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Телефон получателя (необязательно)"
                        placeholder="+7 (977) 777-77-77"
                        name="extraPhone"
                        type="tel"
                        onChange={() => {}}
                    />
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Имя получателя (необязательно)"
                        placeholder="Введите имя получателя"
                        name="extraName"
                        onChange={() => {}}
                    />
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Комментарий к заказу"
                        placeholder="Примечания к вашеу заказу,  особые пожелания отделу доставки"
                        name="comment"
                        textarea={true}
                        onChange={() => {}}
                    />
                </section>

                <section className={classes.delivery}>
                    <h4>Доставка</h4>
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Город*"
                        placeholder="Введите город"
                        name="city"
                        onChange={() => {}}
                    />
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Улица*"
                        placeholder="Введите улицу"
                        name="street"
                        onChange={() => {}}
                    />
                    <div className={classes['delivery-house']}>
                        <FormInput
                            containerClass={classes.container}
                            labelClass={classes.label}
                            title="Корп/стр"
                            placeholder="Корп/стр"
                            name="building"
                            onChange={() => {}}
                        />
                        <FormInput
                            containerClass={classes.container}
                            labelClass={classes.label}
                            title="Дом"
                            placeholder="Дом"
                            name="house"
                            onChange={() => {}}
                        />
                        <FormInput
                            containerClass={classes.container}
                            labelClass={classes.label}
                            title="Кв/офис"
                            placeholder="Кв/офис"
                            name="flat"
                            onChange={() => {}}
                        />
                    </div>
                    <FormInput
                        containerClass={classes.container}
                        labelClass={classes.label}
                        title="Время доставки"
                        placeholder="Введите время доставки"
                        name="extraName"
                        onChange={() => {}}
                    />
                    <small>{`Стоимость доставки оговаривается после подтверждения заказа нашим администратором`}</small>
                </section>

                <section className={classes.promo}>
                    <FormInput
                        containerClass={`${classes.container} ${classes['promo-container']}`}
                        labelClass={classes.label}
                        title="Промокод"
                        placeholder="Промокод"
                        name="promo"
                        onChange={() => {}}
                    />
                    <MenuBtn blank={true}>Применить</MenuBtn>
                </section>

                <section className={classes.total}>
                    <TextHeader>{`Общая сумма заказа ${0} ₽`}</TextHeader>
                    <p>{`Скидка = ${0} ₽`}</p>
                </section>

                <MenuBtn className={classes['submit-btn']}>Заказать</MenuBtn>
                <small className={classes.policy}>
                    Нажимая на кнопку «К Оплате», я даю свое согласие на
                    обработку персональных данных, в соответствии с
                    <a href=""> Политикой конфиденциальности</a>, а так же
                    ознакомлен с условиями оплаты и доставки
                </small>
            </form>
        </main>
    );
}

export default Checkout;
