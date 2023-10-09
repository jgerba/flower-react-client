import SectionHeader from '../components/UI/SectionHeader';
import ContentCard from '../components/UI/ContentCard';
import AboutHeader from '../components/UI/AboutHeader';

import classes from './About.module.css';

function AboutPage() {
    return (
        <main className={classes.main}>
            <SectionHeader className={classes.header}>о нас</SectionHeader>

            <AboutHeader className={classes.lower}>
                Lover <br /> flower
            </AboutHeader>
            <ContentCard className={classes['lower-p']}>
                <p>молодая команда разных людей с одинаковыми ценностями.</p>
                <p>
                    Мы считаем, что удовольствие от качества длится дольше, чем
                    удовольствие от низкой цены. И поэтому в создание нашей
                    букетерии мы вложили все, чем располагаем: душу, сердце,
                    время и мечты! Мы готовы обещать вам только то, что можем
                    сделать. А делаем мы только самое качественное, самое
                    интересное и обязательно уникальное. Мы всегда честны со
                    своими клиентами во всем – в нашем каталоге только те
                    букеты, которые вы действительно сможете купить.
                </p>
            </ContentCard>

            <div className={classes.guarantees}>
                <AboutHeader>гарантии</AboutHeader>
                <p>
                    Каждый цветок уникален и чтобы вы были уверены в качестве,
                    мы пришлем вам фотографию именно вашего букета до его
                    отправки получателю. Вся предоставленная Вами информация
                    конфиденциальна и будет известна только нам и курьеру для
                    осуществления доставки.
                </p>
            </div>

            <AboutHeader className={classes.order}>
                Заказ букетов на <br /> сайте компании <br /> Lower Flower –
                это:
            </AboutHeader>
            <ul className={classes['order-ul']}>
                <li>выбор оттенков и сортов цветков в любое время года;</li>
                <li>отправка фото готовой композиции перед отправкой;</li>
                <li>возможность заказать цветы с доставкой в течение часа;</li>
                <li>
                    выгодные цены – на сайте только те варианты, что Вы сможете
                    купить;
                </li>
                <li>
                    выгодные цены – на сайте только те варианты, что Вы сможете
                    купить;
                </li>
                <li>полная конфиденциальность по заказу;</li>
                <li>
                    мы подбираем открытку, воздушные шар, подарок по Вашему
                    желанию;
                </li>
                <li>
                    в нашем уютном цветочном магазине цветы, которые приятно
                    дарить.
                </li>
            </ul>

            <AboutHeader className={classes.end} white={true}>
                Природная гармония цвета, <br /> неповторимость бутонов <br /> и
                Ваши чувства <br />
                в нежных лепестках <br /> не оставят никого <br /> равнодушным.
            </AboutHeader>
            <p className={classes['end-p']}>
                Вы выбираете и заказываете цветочный сюрприз, <br /> а мы
                вкладываем в него душу!
            </p>

            <div className={classes['decor-flower-top-left']}></div>
            <div className={classes['decor-flower-top-right']}></div>
            <div className={classes['decor-flower-bottom']}></div>

            <div className={classes['decor-ellipse-top-left']}></div>
            <div className={classes['decor-ellipse-top-middle']}></div>
            <div className={classes['decor-ellipse-top-right']}></div>
            <div className={classes['decor-ellipse-bottom-left']}></div>
            <div className={classes['decor-ellipse-bottom-right']}></div>
        </main>
    );
}

export default AboutPage;
