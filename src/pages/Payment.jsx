import { useEffect } from 'react';

import SectionHeader from '../components/UI/SectionHeader';
import ContentCard from '../components/UI/ContentCard';

import classes from './Payment.module.css';
import logo from '../svg/loverFlower-pink.svg';

function PaymentPage() {
    // reset scroll position
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className={classes.main}>
            <div className={classes.header}>
                <SectionHeader>Условия</SectionHeader>
                <SectionHeader smallHeader={true}>доставки</SectionHeader>
            </div>

            <article className={classes.attention}>
                <h4>Дорогие клиенты!</h4>
                <p>
                    Во время пандемии (COVID-19) компания Lover Flower призывает
                    всех меньше контактировать с другими людьми для защиты себя
                    и своих близких. Именно поэтому мы организовали
                    <span> БЕСКОНТАКТНУЮ ДОСТАВКУ</span>
                </p>
            </article>

            <article className={classes.payment}>
                <h3>Способы оплаты:</h3>
                <div className={classes.payment__options}>
                    <ContentCard className={classes['payment-card']}>
                        <p>
                            НАЛИЧНЫМИ, БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ или с
                            расчетного счета орагнизации
                        </p>
                    </ContentCard>
                    <ContentCard className={classes['payment-card']}>
                        <p>
                            НАЛИЧНЫМИ, БАНКОВСКОЙ КАРТОЙ ПРИ ДОСТАВКЕ КУРЬЕРОМ
                        </p>
                    </ContentCard>
                </div>
            </article>

            <article className={classes.delivery}>
                <h3>стоимость доставки:</h3>
                <ul>
                    <li>
                        <strong>Бесплатно</strong> – при заказе на сумму
                        <span> от 90 рублей</span>
                    </li>
                    <li>
                        <strong>10 рублей</strong> – при заказе на сумму
                        <span> менее 90 рублей</span>
                    </li>

                    <li>
                        Так же вы можете забрать ваш заказ самостоятельно по
                        адресу:
                        <span>
                            г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно
                            с 10.00 до 21.00
                        </span>
                    </li>
                </ul>
            </article>
        </main>
    );
}

export default PaymentPage;
