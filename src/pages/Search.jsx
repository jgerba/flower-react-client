import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useFetch from '../hooks/use-fetch';
import useWindowSize from '../hooks/useWindowSize';

import BouquetCard from '../components/BouquetCard';
import ScrollBtn from '../components/ScrollBtn';

import classes from './Search.module.css';

function SearchPage() {
    const [bouquets, setBouquets] = useState([]);
    const [foundBouquets, setFoundBouquets] = useState([]);
    const [showScrollBtn, setShowScrollBtn] = useState();

    const searchValue = useSelector(state => state.bouqets.searchValue);

    const { sendRequest, isLoading, error } = useFetch();
    const [scrollY, winWidth, winHeight] = useWindowSize();

    // get bouquets data
    useEffect(() => {
        sendRequest({ url: '/bouquets' }, applyBouquetsData, false);
    }, []);

    function applyBouquetsData(data) {
        if (!data) return;
        setBouquets(data);
    }

    // filter bouqets with search value and render them
    // if search value is empty reset rendered bouquets
    useEffect(() => {
        if (!searchValue) return setFoundBouquets([]);

        const filteredBouquets = bouquets.filter(bouquet =>
            bouquet.title.match(searchValue)
        );

        setFoundBouquets(filteredBouquets);
    }, [searchValue]);

    // show scroll up btn after scrolling 1 screen down
    useEffect(() => {
        if (bouquets.length === 0) return;

        scrollY - winHeight >= 1
            ? setShowScrollBtn(true)
            : setShowScrollBtn(false);
    }, [scrollY, winWidth, winHeight]);

    return (
        <main className={classes.main}>
            <h1 className={classes.header}>
                {searchValue
                    ? `Результат поиска:   ${searchValue}`
                    : 'Введите свой запрос'}
            </h1>
            <section className={classes.results}>
                {foundBouquets.length !== 0
                    ? foundBouquets.map(item => (
                          <BouquetCard
                              className={classes.bouquet}
                              key={item._id}
                              item={item}
                          />
                      ))
                    : searchValue && (
                          <p className={classes.excuse}>
                              Извините :( по данному запросу ничего нет, но мы
                              работаем над пополнением ассортимента
                          </p>
                      )}
            </section>

            {showScrollBtn && <ScrollBtn />}

            <div className={classes['decor-ellipse-green-top-left']}></div>
            <div className={classes['decor-ellipse-purple-top-right']}></div>
            <div className={classes['decor-ellipse-purple-bottom-left']}></div>
            <div className={classes['decor-ellipse-green-bottom-right']}></div>
        </main>
    );
}

export default SearchPage;
