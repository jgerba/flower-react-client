import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useFetch from '../hooks/use-fetch';

import BouquetCard from '../components/BouquetCard';

import classes from './Search.module.css';

function SearchPage() {
    const [bouquets, setBouquets] = useState([]);
    const [foundBouquets, setFoundBouquets] = useState([]);

    const searchValue = useSelector(state => state.bouqets.searchValue);

    const { sendRequest, isLoading, error } = useFetch();

    useEffect(() => {
        sendRequest({ url: '/bouquets' }, applyBouquetsData, false);
    }, []);

    function applyBouquetsData(data) {
        if (!data) return;
        setBouquets(data);
    }

    useEffect(() => {
        if (!searchValue) return setFoundBouquets([]);

        const filteredBouquets = bouquets.filter(bouquet =>
            bouquet.title.match(searchValue)
        );

        setFoundBouquets(filteredBouquets);
    }, [searchValue]);

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
                              id={item._id}
                              title={item.title}
                              price={item.price}
                              src={item.src}
                              new={item.new}
                              sale={item.sale}
                          />
                      ))
                    : searchValue && (
                          <p className={classes.excuse}>
                              Извините :( по данному запросу ничего нет, но мы
                              работаем над пополнением ассортимента
                          </p>
                      )}
            </section>

            <div className={classes['decor-ellipse-green-top-left']}></div>
            <div className={classes['decor-ellipse-purple-top-right']}></div>
            <div className={classes['decor-ellipse-purple-bottom-left']}></div>
            <div className={classes['decor-ellipse-green-bottom-right']}></div>
        </main>
    );
}

export default SearchPage;
