import { NavLink } from 'react-router-dom';

import MenuBtn from '../components/UI/MenuBtn';
import SocialPanel from '../components/info/SocialPanel';
import TextHeader from '../components/UI/TextHeader';
import BouquetCard from '../components/BouquetCard';
import FeedBackForm from '../components/FeedBackForm';
import ContentCard from '../components/UI/ContentCard';
import OrderStep from '../components/UI/OrderStep';
import SectionHeader from '../components/UI/SectionHeader';

import logo from '../svg/loverFlower.svg';
import socialSign from '../svg/ourSocialNetworks.svg';
import specialImgGift from '../images/special-1.png';
import specialImgBouquet from '../images/special-2.png';
import specialImgCard from '../images/special-3.png';
import specialImgWreath from '../images/special-4.png';
import xmasTree from '../images/social1.png';
import xmasBouquet from '../images/social2.png';
import xmasToys from '../images/social3.png';
import strangeBouquet from '../images/social4.png';

import classes from './Home.module.css';

function HomePage() {
    return (
        <main className={classes.main}>
            <section
                className={`${classes['section']} ${classes['title-section']}`}
            >
                <div className={classes['title__header-section']}>
                    <h2 className={classes['title__header']}>lower</h2>
                    <h1 className={classes['title__header']}>flower</h1>
                    <p className={classes.slogan}>
                        Создаём для тех, кто ценит свежесть и изящество цветка
                    </p>
                    <MenuBtn className={classes['title__catalogue-btn']}>
                        смотреть каталог
                    </MenuBtn>
                </div>

                <div className={classes['title__decor-flower']}></div>
                <div className={classes['title__decor-flower-back']}></div>
                <div className={classes['title__decor-flower-shadow']}></div>
                <div className={classes['title__decor-ellipse-left']}></div>
                <div className={classes['title__decor-ellipse-right']}></div>
                <img className={classes['lower-logo']} src={logo} alt="Logo" />
            </section>
            <section
                className={`${classes['section']} ${classes['catalogue-section']}`}
            >
                <SectionHeader
                    className={classes['catalogue__header']}
                    smallHeader={true}
                >
                    каталог
                </SectionHeader>

                <div className={classes['catalogue__description']}>
                    <p>
                        У нас самый большой выбор цветов, букетов, открыток и
                        подарков. Мы всегда поможем вам подобрать букет для
                        вашего события, наш менеджер вас проконсультирует и
                        поможет определиться с выбором
                    </p>
                    <p>Ознакомьтесь с нашими разделами каталога</p>
                </div>

                <ContentCard className={classes['catalogue__flowers-bouquet']}>
                    <TextHeader>Цветы</TextHeader>
                    <ul className={classes['catalogue__list']}>
                        <li>Сборные букеты</li>
                        <li>Монобукеты</li>
                        <li>Композиции из цветов</li>
                        <li>розы</li>
                        <li>свадебные</li>
                    </ul>
                    <NavLink
                        className={classes['catalogue__link']}
                        to="/catalogue"
                    >
                        смотреть каталог
                    </NavLink>
                </ContentCard>
                <ContentCard className={classes['catalogue__ready-bouquet']}>
                    <TextHeader>
                        готовые букеты
                        <br />
                        из сухоцветов
                    </TextHeader>
                    <ul className={classes['catalogue__list']}>
                        <li>букеты</li>
                        <li>для интерьера</li>
                        <li>Композиции</li>
                    </ul>
                    <NavLink
                        className={classes['catalogue__link']}
                        to="/catalogue"
                    >
                        смотреть каталог
                    </NavLink>
                </ContentCard>

                <ContentCard className={classes['catalogue__extra-bouquet']}>
                    <TextHeader>дополнительно</TextHeader>
                    <ul className={classes['catalogue__list']}>
                        <li>шары</li>
                        <li>игрушки</li>
                        <li>открытки</li>
                        <li>упаковка</li>
                    </ul>
                    <NavLink
                        className={classes['catalogue__link']}
                        to="/catalogue"
                    >
                        смотреть каталог
                    </NavLink>
                </ContentCard>

                <div className={classes['catalogue__decor-ellipse-left']}></div>
                <div
                    className={classes['catalogue__decor-ellipse-right']}
                ></div>
                <p
                    className={`${classes['decor-sign']} ${classes['catalogue__bouquet-sign']}`}
                >
                    букеты
                </p>
                <p
                    className={`${classes['decor-sign']} ${classes['catalogue__flowers-sign']}`}
                >
                    Цветы
                </p>
                <p
                    className={`${classes['decor-sign']} ${classes['catalogue__extra-sign']}`}
                >
                    дополнительно
                </p>
            </section>
            <section
                className={`${classes['section']} ${classes['popular-section']}`}
            >
                <div className={classes['popular__header']}>
                    <SectionHeader smallHeader={true}>Популярные</SectionHeader>
                    <SectionHeader smallHeader={true}>букеты</SectionHeader>

                    <p className={classes['popular__description']}>
                        Самые любимые композиции наших клиентов
                    </p>
                </div>

                <div className={classes['popular__bouquets']}>
                    <BouquetCard
                        className={classes['popular__card']}
                        title="лучший день"
                        price={167}
                        src="https://venusinfleurs.ru/image/catalog/product/1380/1380_1.jpg"
                    />
                    <BouquetCard
                        className={classes['popular__card']}
                        title="лучший день"
                        price={167}
                        src="https://venusinfleurs.ru/image/catalog/product/1380/1380_1.jpg"
                    />
                    <BouquetCard
                        className={classes['popular__card']}
                        title="лучший день"
                        price={167}
                        src="https://venusinfleurs.ru/image/catalog/product/1380/1380_1.jpg"
                    />
                    <BouquetCard
                        className={classes['popular__card']}
                        title="лучший день"
                        price={167}
                        src="https://venusinfleurs.ru/image/catalog/product/1380/1380_1.jpg"
                    />
                </div>
                <NavLink
                    className={classes['popular__catalogue-link']}
                    to="/catalogue"
                >
                    смотреть весь каталог
                </NavLink>
                <div className={classes['popular__decor-ellipse-left']}></div>
                <div className={classes['popular__decor-ellipse-right']}></div>
            </section>
            <section
                className={`${classes['section']} ${classes['order-section']}`}
            >
                <div className={classes['order__header']}>
                    <SectionHeader smallHeader={true}>
                        Как сделать
                    </SectionHeader>
                    <SectionHeader smallHeader={true}>заказ</SectionHeader>
                </div>

                <div className={classes['order__steps']}>
                    <OrderStep step="1">
                        Выберите какие цветы или подарки вы хотите купить
                    </OrderStep>
                    <OrderStep step="2">
                        Оформите заказ, и мы отправим вам подтверждение на
                        электронную почту, а так же менеджер свяжется с вами по
                        телефону или в WhatsApp
                    </OrderStep>
                    <OrderStep step="3">
                        Наши флористы бережно подойдут к созданию букета цветов
                        в самом начале дня или накануне
                    </OrderStep>
                    <OrderStep step="4">
                        Один из наших курьеров или партнёров доставит ваш заказ
                        по указанному адресу. Мы отправим вам сообщение в Whats
                        App как только заказ будет доставлен
                    </OrderStep>
                    <OrderStep step="5">
                        Наслаждайтесь цветами , если вы заказали их для дома или
                        любовью, которой поделились, если вы заказали для друга
                    </OrderStep>
                </div>
                <div className={classes['order__back-flower']}></div>
                <img
                    className={classes['order__lower-logo']}
                    src={logo}
                    alt="Logo"
                />
            </section>
            <section
                className={`${classes['section']} ${classes['special-section']}`}
            >
                <div className={classes['special__header']}>
                    <SectionHeader smallHeader={true}>особенный</SectionHeader>
                    <SectionHeader smallHeader={true}>повод?</SectionHeader>
                </div>
                <div className={classes['special__description']}>
                    <p>
                        Мы готовы прийти на помощь и собрать уникальный букет,
                        на любой вкус, бюджет и для любого события по вашему
                        индивидуальному заказу.
                    </p>
                    <ul>
                        <li>учтем даже самые изысканные пожелания;</li>
                        <li>
                            подберем свежайшие цветы и сделаем уникальный букет
                            или композицию;
                        </li>
                        <li>оплатить можно при получении</li>
                    </ul>
                </div>

                <img
                    src={specialImgGift}
                    className={classes['special__img-gift']}
                    alt="Подарки"
                ></img>

                <div className={classes['special__images']}>
                    <img src={specialImgBouquet} alt="Букет цветов"></img>
                    <img src={specialImgCard} alt="Праздничная открытка"></img>
                    <img
                        src={specialImgWreath}
                        alt="Рожденственский венок"
                    ></img>
                </div>

                <MenuBtn className={classes['special__btn']}>
                    <NavLink to="/contacts">
                        собрать индивидуальный букет
                    </NavLink>
                </MenuBtn>

                <div className={classes['special__decor-ellipse-purple']}></div>
            </section>
            <section className={`${classes['feedback-section']}`}>
                <FeedBackForm message="true" homePage="true" />
                <div
                    className={classes['feedback__decor-ellipse-purple']}
                ></div>
                <div className={classes['feedback__decor-ellipse-green']}></div>
            </section>
            <section
                className={`${classes['section']} ${classes['social-section']}`}
            >
                <div className={classes['social__images']}>
                    <img src={xmasTree} alt="Christmas tree"></img>
                    <img src={xmasBouquet} alt="Christmas bouquet"></img>
                    <img src={xmasToys} alt="Christmas toys"></img>
                    <img src={strangeBouquet} alt="Creative bouquet"></img>
                </div>

                <div className={classes['social__sign']}>
                    <img src={socialSign} alt="ourSocialNetworks sign" />
                </div>
                <SocialPanel className={classes['social__panel']} />
                <p
                    className={`${classes['decor-sign']} ${classes['social__instagram-sign']}`}
                >
                    instagram
                </p>
                <div
                    className={classes['social__decor-ellipse-green-left']}
                ></div>
                <div
                    className={classes['social__decor-ellipse-green-center']}
                ></div>
                <div className={classes['social__decor-ellipse-purple']}></div>
            </section>
        </main>
    );
}

export default HomePage;
