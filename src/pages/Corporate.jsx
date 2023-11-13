import { useEffect, useState } from 'react';

import useFetch from '../hooks/use-fetch';

import SectionHeader from '../components/UI/SectionHeader';
import ContentCard from '../components/UI/ContentCard';
import MenuBtn from '../components/UI/MenuBtn';
import FormInput from '../components/FormInput';

import classes from './Corporate.module.css';
import logo from '../svg/loverFlower-orange.svg';

const formInitVal = {
    name: '',
    phone: '',
    comment: '',
    corporate: true,
    organization: '',
    address: '',
    price: '',
    email: '',
    unp: 0,
    account: 0,
    bank: 0,
    entries: 0,
};

function CorporatePage() {
    // reset scroll position
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formVal, setFormVal] = useState(formInitVal);
    const [hasError, setHasError] = useState(false);

    const { sendRequest, isLoading, error } = useFetch();

    function submitHandler(event) {
        event.preventDefault();

        if (hasError) return;
        if (!formVal.name || !formVal.phone) return;

        console.log(formVal);
        // upload edited data
        sendRequest(
            {
                url: `/feedback`,
                method: 'POST',
                body: formVal,
            },
            applyData
        );
    }

    function applyData(data) {
        console.log(data);
        setFormVal(formInitVal);
    }

    function formChangeHandler(event) {
        setFormVal({ ...formVal, [event.target.name]: event.target.value });
    }

    return (
        <main className={classes.main}>
            <SectionHeader className={classes.header}>Букеты</SectionHeader>

            <div className={classes['header-congrats']}>
                <h2>поздравления для</h2>
                <h2>Ваших работников</h2>
            </div>

            <p className={classes['descr-intro']}>
                Если у Вас большое количество сотрудников (или не очень) и вы
                устали помнить о каждом их Дне рождении и как чем поздравить, то
                <em> мы можем делать это за Вас</em>.
            </p>

            <section className={classes.descr}>
                <p>
                    Одним вариантом сотрудничества является предоставление нам
                    перечня сотрудников с Днями их рождений и мы уже
                    самостоятельно связываемся с каждым, изготавливаем букет
                    либо композицию и доставляем в удобное время сотруднику либо
                    по месту работы либо по месту жительства, так как в
                    настоящее время многие сотрудники продолжают выполнять
                    работу удалённо либо находятся на больничном или в отпуске.
                </p>

                <p>
                    Другим вариантом сотрудничества является заказ букетов
                    самостоятельно представителем организации за день до нужной
                    даты.
                </p>

                <p>
                    Так вы <em> экономите время</em> остальных сотрудников на
                    сбор денег на поиск подарка и доставку его получателю, а
                    также оберегаете себя от риска пропустить кого-либо из
                    важных организации людей, а именно так Вы проявляете заботу
                    и внимание к сотрудникам для того, чтобы и к делам Вашей
                    организации они относились со всей внимательностью и также
                    не пропускали важные дни.
                </p>
            </section>

            <section className={classes['descr-bouquet']}>
                <p className={classes['descr-strong']}>
                    Букеты могут изготавливаться в фирменном цвете организации и
                    есть возможность делать поздравления на Вашей фирменной
                    открытке, которую мы можем изготовить сами.
                </p>

                <p className={classes['descr-extra']}>
                    Стоимость одного букета не менее 60 рублей.
                </p>
            </section>

            <section className={classes['descr-extra']}>
                <div className={classes['descr-table']}>
                    <ContentCard className={classes['table-points']}>
                        <h4>Количество заявок в месяц</h4>
                    </ContentCard>

                    <ContentCard className={classes['table-points']}>
                        <p>1-2</p>
                    </ContentCard>

                    <ContentCard className={classes['table-points']}>
                        <p>3-10</p>
                    </ContentCard>

                    <ContentCard className={classes['table-points']}>
                        <p>Более 10</p>
                    </ContentCard>
                </div>

                <div className={classes['descr-table']}>
                    <ContentCard className={classes['table-points']}>
                        <h4>Приятные бонусы</h4>
                    </ContentCard>

                    <ContentCard className={classes['table-points']}>
                        <p>
                            Стоимость одной доставки по Минску – 10 рублей, за
                            пределы МКАД – от 20 рублей
                        </p>
                    </ContentCard>

                    <ContentCard className={classes['table-points']}>
                        <p>
                            Доставка бесплатно Букет-подарок руководителю в его
                            День рождения
                        </p>
                    </ContentCard>

                    <ContentCard className={classes['table-points']}>
                        <p>
                            Доставка бесплатно Букет-подарок руководителю в его
                            День рождения Праздничная ель перед Новым годом
                        </p>
                    </ContentCard>
                </div>
            </section>

            <section className={classes.steps}>
                <h3>этапы работы:</h3>

                <ol>
                    <li>Заполнение заявки</li>
                    <li>Подписание договора</li>
                    <li>Вручение цветов</li>
                    <li>Отчет о доставленных заказах</li>
                    <li>оплата</li>
                </ol>
            </section>

            <p
                className={`${classes['descr-order']} ${classes['descr-strong']}`}
            >
                Если у Вас единичный заказ, то можете выбрать букет в каталоге
                либо заказать индивидуальный букет и указать его стоимость, а
                при оформлении заказа в корзине указать, что оплата будет
                производиться с расчётного счёта организации.
            </p>

            <form
                action=""
                name="Форма обратной связи"
                className={classes.form}
                onSubmit={submitHandler}
            >
                <h4 className={classes['form-header']}>заполните заявку:</h4>

                <FormInput
                    containerClass={classes['input-container']}
                    labelClass={classes.label}
                    title="Наименование организации"
                    name="organization"
                    placeholder="Введите наименование вашей организации"
                    value={formVal.organization}
                    onChange={formChangeHandler}
                />

                <FormInput
                    containerClass={classes['input-container']}
                    labelClass={classes.label}
                    title="Почтовый адрес"
                    name="address"
                    placeholder="Введите почтовый адрес"
                    value={formVal.address}
                    onChange={formChangeHandler}
                />

                <FormInput
                    containerClass={classes['input-container']}
                    labelClass={classes.label}
                    title="Контактное лицо"
                    name="name"
                    placeholder="Введите имя контактного лица"
                    value={formVal.name}
                    required={true}
                    onError={val => setHasError(val)}
                    onChange={formChangeHandler}
                />

                <FormInput
                    containerClass={classes['input-container']}
                    labelClass={classes.label}
                    title="Контактный номер телефона"
                    name="phone"
                    type="tel"
                    placeholder="+7 (977) 777-77-77"
                    value={formVal.phone}
                    required={true}
                    onError={val => setHasError(val)}
                    onChange={formChangeHandler}
                />

                <FormInput
                    containerClass={classes['input-container']}
                    labelClass={classes.label}
                    title="Стоимость букета сотруднику (если разная – указать)"
                    name="price"
                    placeholder="Укажите стоимость букета сотруднику"
                    value={formVal.price}
                    onChange={formChangeHandler}
                />

                <FormInput
                    containerClass={classes['input-container']}
                    labelClass={classes.label}
                    title="Адрес электронной почты"
                    name="email"
                    placeholder="Укажите ваш адрес электронной почты"
                    value={formVal.email}
                    onChange={formChangeHandler}
                />

                <FormInput
                    containerClass={classes['input-container']}
                    labelClass={classes.label}
                    title="УНП"
                    name="unp"
                    placeholder="УНП"
                    type="number"
                    value={formVal.unp}
                    onChange={formChangeHandler}
                />

                <FormInput
                    containerClass={classes['input-container']}
                    labelClass={classes.label}
                    title="Расчетный счет"
                    name="account"
                    placeholder="Введите номер расчетного счета"
                    type="number"
                    value={formVal.account}
                    onChange={formChangeHandler}
                />

                <FormInput
                    containerClass={classes['input-container']}
                    labelClass={classes.label}
                    title="Код банка"
                    name="bank"
                    placeholder="Код банка"
                    type="number"
                    value={formVal.bank}
                    onChange={formChangeHandler}
                />

                <FormInput
                    containerClass={classes['input-container']}
                    labelClass={classes.label}
                    title="Предполагаемое количество заявок в месяц"
                    name="entries"
                    placeholder="Введите предполагаемое количество заявок в месяц"
                    type="number"
                    value={formVal.entries}
                    onChange={formChangeHandler}
                />

                <div className={classes['submit-section']}>
                    <MenuBtn type="submit">отправить</MenuBtn>

                    <small className={classes.agreement}>
                        Нажимая на кнопку «Отправить», я даю свое согласие на
                        обработку персональных данных, в соответствии с{' '}
                        <a>Политикой конфиденциальности</a>
                    </small>
                </div>
            </form>

            <img className={classes.logo} src={logo} alt="Lower Flower logo" />

            <div className={classes['decor-flower-left']}></div>
            <div className={classes['decor-flower-right']}></div>
            <div className={classes['decor-flower-middle-top']}></div>
            <div className={classes['decor-flower-middle-bottom']}></div>

            <div className={classes['decor-ellipse-top-left']}></div>
            <div className={classes['decor-ellipse-top-right']}></div>
            <div className={classes['decor-ellipse-middle']}></div>
            <div className={classes['decor-ellipse-bottom-left']}></div>
            <div className={classes['decor-ellipse-bottom-right']}></div>
        </main>
    );
}

export default CorporatePage;
