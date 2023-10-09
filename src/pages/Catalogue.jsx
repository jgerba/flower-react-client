import ContentCard from '../components/UI/ContentCard';
import SectionHeader from '../components/UI/SectionHeader';
import InfoPanel from '../components/info/InfoPanel';
import FilterItem from '../components/filter/FilterItem';
import RangeSlider from '../components/filter/RangeSlider';
import BouquetCard from '../components/BouquetCard';
import MenuBtn from '../components/UI/MenuBtn';
import DropdownMenu from '../components/dropdown/DropdownMenu';

import classes from './Catalogue.module.css';

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
                    <FilterItem
                        name="gentle"
                        onCheck={name => console.log(name)}
                    >
                        нежный
                    </FilterItem>
                    <FilterItem
                        name="bright"
                        onCheck={name => console.log(name)}
                    >
                        яркие
                    </FilterItem>
                </ul>
                <ul>
                    <h3>По цвету</h3>
                    <FilterItem
                        name="white"
                        onCheck={name => console.log(name)}
                    >
                        белый
                    </FilterItem>
                    <FilterItem
                        name="yellow"
                        onCheck={name => console.log(name)}
                    >
                        желтый
                    </FilterItem>
                    <FilterItem
                        name="green"
                        onCheck={name => console.log(name)}
                    >
                        зеленый
                    </FilterItem>
                    <FilterItem
                        name="purple"
                        onCheck={name => console.log(name)}
                    >
                        красный
                    </FilterItem>
                    <FilterItem
                        name="orange"
                        onCheck={name => console.log(name)}
                    >
                        оранжевый
                    </FilterItem>
                    <FilterItem name="pink" onCheck={name => console.log(name)}>
                        розовый
                    </FilterItem>
                    <FilterItem name="blue" onCheck={name => console.log(name)}>
                        синий
                    </FilterItem>
                </ul>
                <ul>
                    <h3>По формату</h3>
                    <FilterItem
                        name="bouquet"
                        onCheck={name => console.log(name)}
                    >
                        букет
                    </FilterItem>
                    <FilterItem name="vase" onCheck={name => console.log(name)}>
                        в вазе
                    </FilterItem>
                    <FilterItem
                        name="envelope"
                        onCheck={name => console.log(name)}
                    >
                        в конверте
                    </FilterItem>
                    <FilterItem
                        name="basket"
                        onCheck={name => console.log(name)}
                    >
                        в корзине
                    </FilterItem>
                    <FilterItem name="box" onCheck={name => console.log(name)}>
                        в шляпной коробке
                    </FilterItem>
                    <FilterItem
                        name="crate"
                        onCheck={name => console.log(name)}
                    >
                        в ящике
                    </FilterItem>
                </ul>
                <div className={classes.slider}>
                    <h3>стоимость</h3>
                    <RangeSlider
                        onChange={({ min, max }) =>
                            console.log(`min = ${min}, max = ${max}`)
                        }
                    />
                </div>

                <MenuBtn blank={true}>Сбросить фильтр</MenuBtn>
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
            <div className={classes['decor-flower-left']}></div>
            <div className={classes['decor-flower-right']}></div>
            <div className={classes['decor-ellipse-purple-top-left']}></div>
            <div className={classes['decor-ellipse-purple-top-middle']}></div>
            <div className={classes['decor-ellipse-purple-top-right']}></div>
            <div className={classes['decor-ellipse-purple-middle']}></div>
            <div className={classes['decor-ellipse-green-middle']}></div>
            <div className={classes['decor-ellipse-green-bottom-left']}></div>
            <div className={classes['decor-ellipse-green-bottom-middle']}></div>
            <div className={classes['decor-ellipse-purple-bottom-right']}></div>
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
