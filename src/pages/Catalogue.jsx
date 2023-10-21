import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import useWindowSize from '../hooks/useWindowSize';
import useFetch from '../hooks/use-fetch';

import { styleActions } from '../store/style';

import ContentCard from '../components/UI/ContentCard';
import SectionHeader from '../components/UI/SectionHeader';
import FilterItem from '../components/filter/FilterItem';
import RangeSlider from '../components/filter/RangeSlider';
import BouquetCard from '../components/BouquetCard';
import MenuBtn from '../components/UI/MenuBtn';
import DropdownMenu from '../components/dropdown/DropdownMenu';
import ScrollBtn from '../components/ScrollBtn';

import classes from './Catalogue.module.css';

function CataloguePage() {
    const dispatch = useDispatch();

    const [bouquets, setBouquets] = useState([]);
    const [bouquetsToRender, setBouquetsToRender] = useState([]);
    const [sort, setSort] = useState('');
    const [filterArr, setFilterArr] = useState([]);
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 10000 });
    const [showScrollBtn, setShowScrollBtn] = useState();

    // need to push it to the filter item and reset it
    const [resetFilter, setResetFilter] = useState(false);

    const [scrollY, winWidth, winHeight] = useWindowSize();
    const { sendRequest, isLoading, error } = useFetch();

    // get bouquets data
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

        // when filters are droped show all bouquets
        if (
            filterArr.length === 0 &&
            priceFilter.min === 0 &&
            priceFilter.max === 10000
        )
            return setBouquetsToRender(bouquets);

        const newArr = [
            ...bouquets.filter(item => {
                const isInPriceRange =
                    item.price >= priceFilter.min &&
                    item.price <= priceFilter.max;

                if (!isInPriceRange) return;

                // if match in price and has no other filters - stop the search
                if (isInPriceRange && filterArr.length === 0) return true;

                // if other filters enabled
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

    // show scroll-up-btn after scrolling 1 screen down
    useEffect(() => {
        if (bouquets.length === 0) return;

        scrollY - winHeight >= 1
            ? setShowScrollBtn(true)
            : setShowScrollBtn(false);
    }, [scrollY, winWidth, winHeight]);

    // show full info panel before scrolling
    // minimize it before redirecting to other pages
    useEffect(() => {
        dispatch(styleActions.showInfoPanel());
        return () => dispatch(styleActions.minimizeInfoPanel());
    }, []);

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
                            item={item}
                        />
                    ))
                ) : (
                    <p className={classes.excuse}>
                        Извините :( по данному запросу ничего нет, но мы
                        работаем над пополнением ассортимента
                    </p>
                )}
            </section>

            {showScrollBtn && <ScrollBtn />}

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
