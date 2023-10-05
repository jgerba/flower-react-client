import { NavLink } from 'react-router-dom';

import AddressPanel from '../components/AddressPanel';
import CallPanel from '../components/CallPanel';
import MenuBtn from '../components/UI/MenuBtn';
import SocialPanel from '../components/SocialPanel';
import TextHeader from '../components/UI/TextHeader';
import BouquetCard from '../components/BouquetCard';
import FeedBackForm from '../components/FeedBackForm';
import ShopCart from '../components/ShopCart';
import ContentCard from '../components/UI/ContentCard';
import OrderStep from '../components/UI/OrderStep';
import SectionHeader from '../components/UI/SectionHeader';

import logo from '../svg/loverFlower.svg';
import socialSign from '../svg/our social networks.svg';
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
                    <h2 className={classes['main-header']}>lower</h2>
                    <h1 className={classes['main-header']}>flower</h1>
                    <p className={classes.slogan}>
                        Создаём для тех, кто ценит свежесть и изящество цветка
                    </p>
                    <MenuBtn className={classes['title-catalogue-btn']}>
                        смотреть каталог
                    </MenuBtn>
                </div>

                <aside className={classes['title__extra-info-panel']}>
                    <AddressPanel className={classes['title__addr-panel']} />
                    <SocialPanel className={classes['title__soc-panel']} />
                    <CallPanel className={classes['title__call-panel']} />
                    <ShopCart className={classes['title__shop-cart']} />
                </aside>

                <div className={classes['decor-flower']}></div>
                <div className={classes['decor-flower-back']}></div>
                <div className={classes['decor-flower-shadow']}></div>
                <div className={classes['title__decor-oval-left']}></div>
                <div className={classes['title__decor-oval-right']}></div>
                <img className={classes['lower-logo']} src={logo} alt="Logo" />
            </section>
            <section
                className={`${classes['section']} ${classes['catalogue-section']}`}
            >
                <SectionHeader
                    className={classes['catalogue-header']}
                    smallHeader={true}
                >
                    каталог
                </SectionHeader>

                <div className={classes['cat-descr']}>
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
                    <ul className={classes['catalogue-list']}>
                        <li>Сборные букеты</li>
                        <li>Монобукеты</li>
                        <li>Композиции из цветов</li>
                        <li>розы</li>
                        <li>свадебные</li>
                    </ul>
                    <NavLink
                        className={classes['catalogue-nav']}
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
                    <ul className={classes['catalogue-list']}>
                        <li>букеты</li>
                        <li>для интерьера</li>
                        <li>Композиции</li>
                    </ul>
                    <NavLink
                        className={classes['catalogue-nav']}
                        to="/catalogue"
                    >
                        смотреть каталог
                    </NavLink>
                </ContentCard>

                <ContentCard className={classes['catalogue__extra-bouquet']}>
                    <TextHeader>дополнительно</TextHeader>
                    <ul className={classes['catalogue-list']}>
                        <li>шары</li>
                        <li>игрушки</li>
                        <li>открытки</li>
                        <li>упаковка</li>
                    </ul>
                    <NavLink
                        className={classes['catalogue-nav']}
                        to="/catalogue"
                    >
                        смотреть каталог
                    </NavLink>
                </ContentCard>

                <div className={classes['catalogue__decor-oval-left']}></div>
                <div className={classes['catalogue__decor-oval-right']}></div>
                <p
                    className={`${classes['decor-sign']} ${classes['catalogue__sign-bouquet']}`}
                >
                    букеты
                </p>
                <p
                    className={`${classes['decor-sign']} ${classes['catalogue__sign-flowers']}`}
                >
                    Цветы
                </p>
                <p
                    className={`${classes['decor-sign']} ${classes['catalogue__sign-extra']}`}
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

                    <p className={classes['popular-intro']}>
                        Самые любимые композиции наших клиентов
                    </p>
                </div>

                <div className={classes['popular-bouquets']}>
                    <BouquetCard
                        className={'popular-card'}
                        title="лучший день"
                        price="167.000 ₽"
                        src="https://venusinfleurs.ru/image/catalog/product/1380/1380_1.jpg"
                    />
                    <BouquetCard
                        className={'popular-card'}
                        title="лучший день"
                        price="167.000 ₽"
                        src="https://venusinfleurs.ru/image/catalog/product/1380/1380_1.jpg"
                    />
                    <BouquetCard
                        className={'popular-card'}
                        title="лучший день"
                        price="167.000 ₽"
                        src="https://venusinfleurs.ru/image/catalog/product/1380/1380_1.jpg"
                    />
                </div>
                <NavLink
                    className={classes['popular-catalogue-link']}
                    to="/catalogue"
                >
                    смотреть весь каталог
                </NavLink>
                <div className={classes['popular__decor-back']}></div>
                <div className={classes['popular__decor-oval-left']}></div>
                <div className={classes['popular__decor-oval-right']}></div>
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

                <div className={classes['order-steps']}>
                    <div className={classes['order-decor-rect']}></div>

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
                <div className={classes['order-back-flower']}></div>
                <img
                    className={classes['order-lower-logo']}
                    src={logo}
                    alt="Logo"
                />
            </section>
            <section
                className={`${classes['section']} ${classes['special-section']}`}
            >
                <div className={classes['special-header']}>
                    <SectionHeader smallHeader={true}>особенный</SectionHeader>
                    <SectionHeader smallHeader={true}>повод?</SectionHeader>
                </div>
                <div className={classes['special-descr']}>
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
                    className={classes['special-img-gift']}
                    alt="Подарки"
                ></img>

                <div className={classes['special-imgs']}>
                    <img src={specialImgBouquet} alt="Букет цветов"></img>
                    <img src={specialImgCard} alt="Праздничная открытка"></img>
                    <img
                        src={specialImgWreath}
                        alt="Рожденственский венок"
                    ></img>
                </div>

                <MenuBtn className={classes['special-btn']}>
                    <NavLink to="/contacts">
                        собрать индивидуальный букет
                    </NavLink>
                </MenuBtn>
            </section>
            <section className={`${classes['feedback-section']}`}>
                <FeedBackForm
                    className={classes['feedback-form']}
                    message="true"
                    homePage="true"
                />
                <div className={classes['feedback-decor-oval-red']}></div>
                <div className={classes['feedback-decor-oval-green']}></div>
            </section>
            <section
                className={`${classes['section']} ${classes['social-section']}`}
            >
                <div className={classes['social-images']}>
                    <img src={xmasTree} alt=""></img>
                    <img src={xmasBouquet} alt=""></img>
                    <img src={xmasToys} alt=""></img>
                    <img src={strangeBouquet} alt=""></img>
                </div>

                <div className={classes['social-sign']}>
                    <img src={socialSign} alt="Our social networks sign" />
                </div>
                <SocialPanel className={classes['social__panel']} />
                <p
                    className={`${classes['decor-sign']} ${classes['social__sign']}`}
                >
                    instagram
                </p>
                <div className={classes['social__decor-oval-green-left']}></div>
                <div
                    className={classes['social__decor-oval-green-center']}
                ></div>
                <div className={classes['social__decor-oval-red']}></div>
            </section>
        </main>
    );
}

export default HomePage;
