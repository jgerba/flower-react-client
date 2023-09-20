import { NavLink } from 'react-router-dom';

import AddressPanel from '../components/AddressPanel';
import CallPanel from '../components/CallPanel';
import MenuBtn from '../components/UI/MenuBtn';
import SocialPanel from '../components/SocialPanel';
import TextHeader from '../components/UI/TextHeader';
import BouquetCard from '../components/BouquetCard';
import FeedBackForm from '../components/FeedBackForm';
import Footer from '../components/Footer';
import ShopCart from '../components/ShopCart';
import ContentCard from '../components/UI/ContentCard';

import logo from '../svg/loverFlower.svg';

import classes from './Home.module.css';

function HomePage() {
    return (
        <>
            <main className={classes.main}>
                <section className={classes['title-section']}>
                    <h2 className={classes['main-header']}>lower</h2>
                    <h1 className={classes['main-header']}>flower</h1>
                    <p className={classes.slogan}>
                        Создаём для тех, кто ценит свежесть и изящество цветка
                    </p>
                    <AddressPanel />
                    <SocialPanel />
                    <CallPanel />
                    <ShopCart />
                    <MenuBtn className={classes['title-catalogue-btn']}>
                        смотреть каталог
                    </MenuBtn>
                    <div className={classes['decor-flower']}></div>
                    <div className={classes['decor-flower-back']}></div>
                    <div className={classes['decor-flower-shadow']}></div>
                    <div className={classes['title__decor-oval-left']}></div>
                    <div className={classes['title__decor-oval-right']}></div>
                    <img
                        className={classes['lower-logo']}
                        src={logo}
                        alt="Logo"
                    />
                </section>
                <section className={classes['catalogue-section']}>
                    <h2
                        className={`${classes['section-header']} ${classes['catalogue-header']}`}
                    >
                        каталог
                    </h2>

                    <div className={classes['catalogue-intro']}>
                        <p>
                            У нас самый большой выбор цветов, букетов, открыток
                            и подарков. Мы всегда поможем вам подобрать букет
                            для вашего события, наш менеджер вас
                            проконсультирует и поможет определиться с выбором
                        </p>
                        <p>Ознакомьтесь с нашими разделами каталога</p>
                    </div>

                    <ContentCard
                        className={classes['catalogue__flowers-bouquet']}
                    >
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
                    <ContentCard
                        className={classes['catalogue__ready-bouquet']}
                    >
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

                    <ContentCard
                        className={classes['catalogue__extra-bouquet']}
                    >
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

                    <div
                        className={classes['catalogue__decor-oval-left']}
                    ></div>
                    <div
                        className={classes['catalogue__decor-oval-right']}
                    ></div>
                </section>
                <section>
                    <h2>Популярные</h2>
                    <h2>букеты</h2>

                    <BouquetCard />
                    <BouquetCard />
                    <BouquetCard />

                    <NavLink to="/catalogue">смотреть весь каталог</NavLink>
                </section>
                <section>
                    <h2>Как сделать</h2>
                    <h2>заказ</h2>
                    <div className="decorRect"></div>
                    <div className="decorRect vertical"></div>
                    <div>
                        <TextHeader>1 шаг</TextHeader>
                        <p>Выберите какие цветы или подарки вы хотите купить</p>
                    </div>
                    <div>
                        <TextHeader>2 шаг</TextHeader>
                        <p>
                            Оформите заказ, и мы отправим вам подтверждение на
                            электронную почту, а так же менеджер свяжется с вами
                            по телефону или в WhatsApp
                        </p>
                    </div>
                    <div>
                        <TextHeader>3 шаг</TextHeader>
                        <p>
                            Наши флористы бережно подойдут к созданию букета
                            цветов в самом начале дня или накануне
                        </p>
                    </div>
                    <div>
                        <TextHeader>4 шаг</TextHeader>
                        <p>
                            Один из наших курьеров или партнёров доставит ваш
                            заказ по указанному адресу. Мы отправим вам
                            сообщение в Whats App как только заказ будет
                            доставлен
                        </p>
                    </div>
                    <div>
                        <TextHeader>5 шаг</TextHeader>
                        <p>
                            Наслаждайтесь цветами , если вы заказали их для дома
                            или любовью, которой поделились, если вы заказали
                            для друга
                        </p>
                    </div>
                </section>
                <section>
                    <h2>особенный</h2>
                    <h2>повод?</h2>
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
                    <MenuBtn>
                        <NavLink to="/contacts">
                            собрать индивидуальный букет
                        </NavLink>
                    </MenuBtn>
                </section>
                <section>
                    <h2>остались</h2>
                    <h2>вопросы?</h2>

                    <FeedBackForm message="true" />

                    <img alt=""></img>
                    <img alt=""></img>
                    <img alt=""></img>
                    <img alt=""></img>

                    <div className="decorRect"></div>
                    <SocialPanel />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default HomePage;
