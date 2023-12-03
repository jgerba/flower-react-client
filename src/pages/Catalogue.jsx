import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import useWindowSize from '../hooks/useWindowSize';
import useFetch from '../hooks/useFetch';

import { styleActions } from '../store/style';

import ContentCard from '../components/UI/ContentCard';
import SectionHeader from '../components/UI/SectionHeader';
import BouquetCard from '../components/BouquetCard';
import DropdownMenu from '../components/dropdown/DropdownMenu';
import ScrollBtn from '../components/ScrollBtn';
import FlagsFilter from '../components/filters/FlagsFilter';

import classes from './Catalogue.module.css';

function CataloguePage() {
    // reset scroll position
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = useDispatch();

    const [items, setItems] = useState([]);
    const [itemsToRender, setItemsToRender] = useState([]);
    const [sort, setSort] = useState('');

    const [showScrollBtn, setShowScrollBtn] = useState();

    const [scrollY, winWidth, winHeight] = useWindowSize();
    const sendRequest = useFetch();

    // get bouquets data
    useEffect(() => {
        sendRequest({ url: '/bouquets' }, applyBouquetsData, false);
    }, []);

    function applyBouquetsData(data) {
        if (!data) return;
        setItems(data);
        setItemsToRender(data);
    }

    // sort bouquets array with dropdown filter
    useEffect(() => {
        if (items.length === 0) return;

        switch (sort) {
            case 'Сначала дешевые':
                setItemsToRender(items => [
                    ...items.sort((a, b) => a.price - b.price),
                ]);
                break;
            case 'Сначала дорогие':
                setItemsToRender(items => [
                    ...items.sort((a, b) => b.price - a.price),
                ]);
                break;
            case 'Сначала новинки':
                setItemsToRender(items => [
                    ...items.sort((a, b) =>
                        a.new === b.new ? 0 : a.new ? -1 : 1
                    ),
                ]);
                break;
            case 'Сначала со скидкой':
                setItemsToRender(items => [
                    ...items.sort((a, b) =>
                        a.sale === b.sale ? 0 : a.sale ? -1 : 1
                    ),
                ]);
                break;
            default:
                throw new Error('Неправильное значение сортировки');
        }
    }, [sort]);

    // show scroll-up-btn after scrolling 1 screen down
    useEffect(() => {
        if (items.length === 0) return;

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
            <div className={classes.head}>
                <div className={classes.header}>
                    <SectionHeader>каталог</SectionHeader>
                    <SectionHeader smallHeader={true}>букетов</SectionHeader>
                </div>
                <p>
                    В нашем магазине самый большой выбор букетов для любых
                    событий
                </p>
                <div className={classes['marks-filter']}></div>
            </div>

            <DropdownMenu
                className={classes['sort-menu']}
                onSort={option => setSort(option)}
            />

            <FlagsFilter
                className={classes['left-filter']}
                items={items}
                onDropFlags={() => setItemsToRender(items)}
                onFilter={filteredItems => setItemsToRender(filteredItems)}
            />

            <section className={classes.goods}>
                {itemsToRender.length !== 0 ? (
                    itemsToRender.map(item => (
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
