import { useState, useEffect } from 'react';

import ContentCard from '../UI/ContentCard';
import MenuBtn from '../UI/MenuBtn';
import FilterItem from './FilterItem';
import RangeSlider from './RangeSlider';

import classes from './FlagsFilter.module.css';

function FlagsFilter(props) {
    const [filterArr, setFilterArr] = useState([]);
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 10000 });

    // need to push it to the filter item and reset it
    const [resetFilter, setResetFilter] = useState(false);

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
        if (props.items.length === 0) return;

        // when filters are droped show all bouquets
        if (
            filterArr.length === 0 &&
            priceFilter.min === 0 &&
            priceFilter.max === 10000
        )
            return props.onDropFilter();

        const newArr = [
            ...props.items.filter(item => {
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

        props.onFilter(newArr);
    }, [filterArr, priceFilter]);

    // reset all checkboxes through props & drop filters
    function resetFilterHandler() {
        setFilterArr([]);
        setPriceFilter({ min: 0, max: 10000 });
        setResetFilter(true);
    }

    return (
        <ContentCard
            className={`${classes.filter} ${
                props.className ? props.className : ''
            }`}
        >
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
    );
}

export default FlagsFilter;
