import { useEffect } from 'react';

import SectionHeader from '../components/UI/SectionHeader';
import ContentCard from '../components/UI/ContentCard';

import classes from './Payment.module.css';
import logo from '../svg/lover flower-beige.svg';

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
                    <ContentCard className={classes['payment-card']}>
                        <p>МЫ УЖЕ РАБОТАЕМ НАД НОВЫМИ СПОСОБАМИ ОПЛАТЫ!</p>
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
                        <br />
                        <span>
                            г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно
                            с 10.00 до 21.00
                        </span>
                    </li>
                </ul>

                <h3>Условия доставки:</h3>
                <ul>
                    <li>
                        Доставка осуществляется по городу Минску в пределах МКАД
                        <span> в любой день</span>
                    </li>
                    <li>
                        Возможность, сроки и стоимость доставки за пределы МКАД,
                        доставки в ночное время, праздники
                        <span> оговариваются с менеджером</span>
                    </li>
                </ul>
            </article>

            <ContentCard className={classes.extra}>
                <h3>Дополнительно:</h3>

                <div>
                    <p>
                        Доставка иному лицу возможна только в случае оплаты
                        заказа заказчиком. Доставка осуществляется не ранее чем
                        через 2 часа после оплаты заказа, но может быть ранее,
                        если букет есть в наличии либо по договорённости с
                        менеджером. <br />
                        Время ожидания курьера составляет 15 минут. <br />В
                        случае если на момент доставки цветов получателя нет
                        либо нет возможности по иным причинам произвести
                        доставку (указан неточный адрес, закрытая входная дверь,
                        контрольно-пропускная система и др.), мы оставляем за
                        собой право по собственному выбору:
                    </p>

                    <ul>
                        <li>оставить цветы тому, кто открыл дверь;</li>
                        <li>
                            согласовать с заказчиком повторную доставку, которая
                            оплачивается дополнительно;
                        </li>
                        <li>
                            отказаться от передачи цветов без возврата денежных
                            средств.
                        </li>
                    </ul>

                    <p>
                        Если вы либо иной получатель не получили заказ, вам
                        необходимо сообщить об этом менеджеру по телефону <br />
                        <span>+375 29 113 69 69</span>.
                    </p>
                </div>

                <h3>Возврат денег:</h3>

                <p>
                    Цветы надлежащего качества возврату и обмену не подлежат, а
                    если имеются какие-либо недостатки в цветах – возврат
                    производится лишь если эти недостатки не являются природными
                    и естественными изъянами растения. Возврат денежных средств
                    производится незамедлительно на тот счёт, с которого
                    произошла оплата, их же поступление на счёт зависит от
                    платёжной системы.
                </p>
            </ContentCard>

            <img className={classes.logo} src={logo} alt="Lower Flower logo" />

            <div className={classes['decor-flower-top']}></div>
            <div className={classes['decor-flower-middle']}></div>
            <div className={classes['decor-flower-bottom']}></div>

            <div className={classes['decor-ellipse-top-left']}></div>
            <div className={classes['decor-ellipse-top-middle-left']}></div>
            <div className={classes['decor-ellipse-top-middle-right']}></div>
            <div className={classes['decor-ellipse-top-right']}></div>
            <div className={classes['decor-ellipse-middle-left']}></div>
            <div className={classes['decor-ellipse-middle-right']}></div>
            <div className={classes['decor-ellipse-bottom-left']}></div>
            <div className={classes['decor-ellipse-bottom-right']}></div>
        </main>
    );
}

export default PaymentPage;
