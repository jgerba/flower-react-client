import { NavLink } from 'react-router-dom';

import AddressPanel from '../components/AddressPanel';
import CallPanel from '../components/CallPanel';
import MenuBtn from '../components/MenuBtn';
import SocialPanel from '../components/SocialPanel';
import TextCard from '../components/TextCard';
import TextHeading from '../components/TextHeading';
import BouquetCard from '../components/BouquetCard';
import FeedBackForm from '../components/FeedBackForm';

function HomePage() {
    return (
        <main>
            <section>
                <h1>lower {<br />}flower</h1>
                <p>Создаём для тех, кто ценит свежесть и изящество цветка</p>
                <AddressPanel />
                <SocialPanel />
                <CallPanel />
                <MenuBtn>смотреть каталог</MenuBtn>
            </section>
            <section>
                <h2>каталог</h2>
                <p>
                    У нас самый большой выбор цветов, букетов, открыток и
                    подарков. Мы всегда поможем вам подобрать букет для вашего
                    события, наш менеджер вас проконсультирует и поможет
                    определиться с выбором
                </p>
                <p>Ознакомьтесь с нашими разделами каталога</p>
                <TextCard>
                    <TextHeading>готовые букеты из сухоцветов</TextHeading>
                    <ul>
                        <li>букеты</li>
                        <li>для интерьера</li>
                        <li>Композиции</li>
                    </ul>
                    <NavLink to="/catalogue">смотреть каталог</NavLink>
                </TextCard>
                <TextCard>
                    <TextHeading>Цветы</TextHeading>
                    <ul>
                        <li>Сборные букеты</li>
                        <li>Монобукеты</li>
                        <li>Композиции из цветов</li>
                        <li>розы</li>
                        <li>свадебные</li>
                    </ul>
                    <NavLink to="/catalogue">смотреть каталог</NavLink>
                </TextCard>
                <TextCard>
                    <TextHeading>дополнительно</TextHeading>
                    <ul>
                        <li>шары</li>
                        <li>игрушки</li>
                        <li>открытки</li>
                        <li>упаковка</li>
                    </ul>
                    <NavLink to="/catalogue">смотреть каталог</NavLink>
                </TextCard>
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
                    <TextHeading>1 шаг</TextHeading>
                    <p>Выберите какие цветы или подарки вы хотите купить</p>
                </div>
                <div>
                    <TextHeading>2 шаг</TextHeading>
                    <p>
                        Оформите заказ, и мы отправим вам подтверждение на
                        электронную почту, а так же менеджер свяжется с вами по
                        телефону или в WhatsApp
                    </p>
                </div>
                <div>
                    <TextHeading>3 шаг</TextHeading>
                    <p>
                        Наши флористы бережно подойдут к созданию букета цветов
                        в самом начале дня или накануне
                    </p>
                </div>
                <div>
                    <TextHeading>4 шаг</TextHeading>
                    <p>
                        Один из наших курьеров или партнёров доставит ваш заказ
                        по указанному адресу. Мы отправим вам сообщение в Whats
                        App как только заказ будет доставлен
                    </p>
                </div>
                <div>
                    <TextHeading>5 шаг</TextHeading>
                    <p>
                        Наслаждайтесь цветами , если вы заказали их для дома или
                        любовью, которой поделились, если вы заказали для друга
                    </p>
                </div>
            </section>
            <section>
                <h2>особенный</h2>
                <h2>повод?</h2>
                <p>
                    Мы готовы прийти на помощь и собрать уникальный букет, на
                    любой вкус, бюджет и для любого события по вашему
                    индивидуальному заказу.
                </p>
                <ul>
                    <li>учтем даже самые изысканные пожелания;</li>
                    <li>
                        подберем свежайшие цветы и сделаем уникальный букет или
                        композицию;
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

                <FeedBackForm />

                <img alt=""></img>
                <img alt=""></img>
                <img alt=""></img>
                <img alt=""></img>

                <div className="decorRect"></div>
                <SocialPanel />
            </section>
        </main>
    );
}

export default HomePage;
