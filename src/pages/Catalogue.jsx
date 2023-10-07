import ContentCard from '../components/UI/ContentCard';
import SectionHeader from '../components/UI/SectionHeader';
import InfoPanel from '../components/InfoPanel';
import FilterItem from '../components/FilterItem';
import RangeSlider from '../components/RangeSlider';
import BouquetCard from '../components/BouquetCard';

import classes from './Catalogue.module.css';
import DropdownMenu from '../components/DropdownMenu';

function CataloguePage() {
    return (
        <main className={classes.main}>
            <ContentCard className={classes.head}>
                <div className={classes.header}>
                    <SectionHeader>каталог</SectionHeader>
                    <SectionHeader smallHeader={true}>букетов</SectionHeader>
                </div>
                <p>
                    В нашем магазине самый большой выбор букетов для любых
                    событий:
                </p>
                <div className={classes['marks-filter']}></div>
            </ContentCard>

            <InfoPanel className={classes['info-panel']} />

            <DropdownMenu
                className={classes['sort-menu']}
                onSort={option => {
                    console.log(option);
                }}
            />

            <ContentCard className={classes['left-filter']}>
                <ul>
                    <h3>По свету</h3>
                    <FilterItem name="gentle">нежный</FilterItem>
                    <FilterItem name="bright">яркие</FilterItem>
                </ul>
                <ul>
                    <h3>По цвету</h3>
                    <FilterItem name="white">белый</FilterItem>
                    <FilterItem name="yellow">желтый</FilterItem>
                    <FilterItem name="green">зеленый</FilterItem>
                    <FilterItem name="red">красный</FilterItem>
                    <FilterItem name="orange">оранжевый</FilterItem>
                    <FilterItem name="pink">розовый</FilterItem>
                    <FilterItem name="blue">синий</FilterItem>
                </ul>
                <ul>
                    <h3>По формату</h3>
                    <FilterItem name="bouquet">букет</FilterItem>
                    <FilterItem name="vase">в вазе</FilterItem>
                    <FilterItem name="envelope">в конверте</FilterItem>
                    <FilterItem name="basket">в корзине</FilterItem>
                    <FilterItem name="box">в шляпной коробке</FilterItem>
                    <FilterItem name="crate">в ящике</FilterItem>
                </ul>

                <div className={classes.slider}>
                    <h3>стоимость</h3>
                    <RangeSlider
                        onChange={({ min, max }) =>
                            console.log(`min = ${min}, max = ${max}`)
                        }
                    />
                </div>
            </ContentCard>

            <section className={classes.goods}>
                {items.map(item => (
                    <BouquetCard
                        className={classes.bouquet}
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        src={item.src}
                        new={item.new}
                        sale={item.sale}
                    />
                ))}
            </section>
        </main>
    );
}

export default CataloguePage;

const items = [
    {
        id: 1,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 2,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: true,
        sale: false,
    },
    {
        id: 3,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: false,
    },
    {
        id: 4,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 5,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 6,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 7,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 8,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 9,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 10,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 11,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 12,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 13,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 14,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 15,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
    {
        id: 16,
        title: 'рубиновые искры',
        price: 167,
        src: 'https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666271382_64-mykaleidoscope-ru-p-buket-s-otkritkoi-vnutri-krasivo-67.jpg',
        descr: 'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
];
