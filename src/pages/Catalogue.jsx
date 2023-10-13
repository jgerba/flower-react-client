import { useEffect, useState } from 'react';

import useWindowSize from '../hooks/useWindowSize';
import useFetch from '../hooks/use-fetch';

import ContentCard from '../components/UI/ContentCard';
import SectionHeader from '../components/UI/SectionHeader';
import FilterItem from '../components/filter/FilterItem';
import RangeSlider from '../components/filter/RangeSlider';
import BouquetCard from '../components/BouquetCard';
import MenuBtn from '../components/UI/MenuBtn';
import DropdownMenu from '../components/dropdown/DropdownMenu';

import classes from './Catalogue.module.css';

function CataloguePage() {
    const [showScrollBtn, setShowScrollBtn] = useState();
    const [bouquets, setBouquets] = useState([]);
    const [bouquetsToRender, setBouquetsToRender] = useState([]);
    const [sort, setSort] = useState('');
    const [filterArr, setFilterArr] = useState([]);
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 10000 });
    const [resetFilter, setResetFilter] = useState(false);

    const [scrollY, winWidth, winHeight] = useWindowSize();
    const { sendRequest, isLoading, error } = useFetch();

    // get bouquets data on loading page
    useEffect(() => {
        sendRequest({ url: '/bouquets' }, applyBouquetsData, false);
    }, []);

    function applyBouquetsData(data) {
        if (!data) return;
        setBouquets(data);
        setBouquetsToRender(data);
    }

    // sort bouquets array with dropdown filter
    useEffect(() => {
        if (bouquets.length === 0) return;

        switch (sort) {
            case 'Сначала дешевые':
                setBouquetsToRender(bouquets => [
                    ...bouquets.sort((a, b) => a.price - b.price),
                ]);
                break;
            case 'Сначала дорогие':
                setBouquetsToRender(bouquets => [
                    ...bouquets.sort((a, b) => b.price - a.price),
                ]);
                break;
            case 'Сначала новинки':
                setBouquetsToRender(bouquets => [
                    ...bouquets.sort((a, b) =>
                        a.new === b.new ? 0 : a.new ? -1 : 1
                    ),
                ]);
                break;
            case 'Сначала со скидкой':
                setBouquetsToRender(bouquets => [
                    ...bouquets.sort((a, b) =>
                        a.sale === b.sale ? 0 : a.sale ? -1 : 1
                    ),
                ]);
                break;
            default:
                throw new Error('Неправильное значение сортировки');
        }
    }, [sort]);

    // push filter option to filterArr
    // remove if it exists
    function applyFilterHandler(name) {
        setResetFilter(false);
        setFilterArr(state => {
            const newState = [...state];

            const index = newState.indexOf(name);
            index !== -1 ? newState.splice(index, 1) : newState.push(name);
            return newState;
        });
    }

    // filter items with price range and filterArr options
    useEffect(() => {
        if (bouquets.length === 0) return;

        // situation when filters are droped
        if (
            filterArr.length === 0 &&
            priceFilter.min === 0 &&
            priceFilter.max === 10000
        )
            return setBouquetsToRender(bouquets);

        const newArr = [
            ...bouquets.filter(item => {
                const isInPriceRange =
                    item.price > priceFilter.min &&
                    item.price < priceFilter.max;

                if (!isInPriceRange) return;
                if (isInPriceRange && filterArr.length === 0) return true;

                // find filter option matches with item.flags
                return filterArr.some(option => {
                    return isInPriceRange && item.flags.includes(option);
                });
            }),
        ];

        setBouquetsToRender(newArr);
    }, [filterArr, priceFilter]);

    // reset all checkboxes through props & drop filters
    function resetFilterHandler() {
        setFilterArr([]);
        setPriceFilter({ min: 0, max: 10000 });
        setResetFilter(true);
    }

    // show scroll up btn after scrolling 1 screen down
    useEffect(() => {
        if (bouquets.length === 0) return;

        scrollY - winHeight >= 1
            ? setShowScrollBtn(true)
            : setShowScrollBtn(false);
    }, [scrollY, winWidth, winHeight]);

    // function createBouquet(bouquetObj) {
    //     items.map(item =>
    //         sendRequest(
    //             {
    //                 url: '/bouquet',
    //                 method: 'POST',
    //                 body: item,
    //             },
    //             data => {
    //                 console.log(data);
    //                 setBouquets(prevBouq => {
    //                     const newBouq = [...prevBouq];
    //                     newBouq.unshift(data);
    //                     return newBouq;
    //                 });
    //             },
    //             false
    //         )
    //     );
    // }

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
            <DropdownMenu
                className={classes['sort-menu']}
                onSort={option => setSort(option)}
            />
            <ContentCard className={classes['left-filter']}>
                <ul>
                    <h3>По свету</h3>
                    <FilterItem
                        name="gentle"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        нежный
                    </FilterItem>
                    <FilterItem
                        name="bright"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        яркие
                    </FilterItem>
                </ul>
                <ul>
                    <h3>По цвету</h3>
                    <FilterItem
                        name="white"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        белый
                    </FilterItem>
                    <FilterItem
                        name="yellow"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        желтый
                    </FilterItem>
                    <FilterItem
                        name="green"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        зеленый
                    </FilterItem>
                    <FilterItem
                        name="red"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        красный
                    </FilterItem>
                    <FilterItem
                        name="orange"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        оранжевый
                    </FilterItem>
                    <FilterItem
                        name="pink"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        розовый
                    </FilterItem>
                    <FilterItem
                        name="blue"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        синий
                    </FilterItem>
                </ul>
                <ul>
                    <h3>По формату</h3>
                    <FilterItem
                        name="bouquet"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        букет
                    </FilterItem>
                    <FilterItem
                        name="vase"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        в вазе
                    </FilterItem>
                    <FilterItem
                        name="envelope"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        в конверте
                    </FilterItem>
                    <FilterItem
                        name="basket"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        в корзине
                    </FilterItem>
                    <FilterItem
                        name="box"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        в шляпной коробке
                    </FilterItem>
                    <FilterItem
                        name="crate"
                        onCheck={name => applyFilterHandler(name)}
                        uncheck={resetFilter}
                    >
                        в ящике
                    </FilterItem>
                </ul>
                <div className={classes.slider}>
                    <h3>стоимость</h3>
                    <RangeSlider
                        min={0}
                        max={10000}
                        onChange={value => {
                            setResetFilter(false);
                            setPriceFilter(value);
                        }}
                        reset={resetFilter}
                    />
                </div>

                <MenuBtn blank={true} onClick={resetFilterHandler}>
                    Сбросить фильтр
                </MenuBtn>
            </ContentCard>
            <section className={classes.goods}>
                {bouquetsToRender.length !== 0 ? (
                    bouquetsToRender.map(item => (
                        <BouquetCard
                            className={classes.bouquet}
                            key={item._id}
                            id={item._id}
                            title={item.title}
                            price={item.price}
                            src={item.src}
                            new={item.new}
                            sale={item.sale}
                        />
                    ))
                ) : (
                    <p className={classes.excuse}>
                        Извините :( по данному запросу ничего нет, но мы
                        работаем над пополнением ассортимента
                    </p>
                )}
            </section>

            {showScrollBtn && (
                <button
                    className={classes['scroll-btn']}
                    onClick={() =>
                        window.scroll({ top: 0, behavior: 'smooth' })
                    }
                ></button>
            )}

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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
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
        description:
            'Завораживающая глубина ваших чувств передана огненными красками этого букета',
        composition:
            'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
        new: false,
        sale: true,
    },
];
