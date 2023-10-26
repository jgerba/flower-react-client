import { useState, useEffect } from 'react';

import ContentCard from '../UI/ContentCard';
import MenuBtn from '../UI/MenuBtn';
import FilterItem from './FilterItem';
import RangeSlider from './RangeSlider';

import classes from './FlagsFilter.module.css';

function FlagsFilter({
    className = null,
    items = [],
    onDropFlags = () => {},
    onFilter = () => {},
    onFlagSave = () => {},
    editForm = false,
}) {
    const [flagsArr, setFlagsArr] = useState([]);
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 10000 });

    // push it to the price range filter and reset it
    const [resetPrice, setResetPrice] = useState(false);

    // push flag to flagsArr
    // remove if it exists
    function applyFilterHandler(name) {
        setFlagsArr(state => {
            const newState = [...state];

            const index = newState.indexOf(name);
            index !== -1 ? newState.splice(index, 1) : newState.push(name);
            return newState;
        });
    }

    // filter items with price range and flagsArr options
    useEffect(() => {
        if (items.length === 0 || editForm) return;

        // when filters are droped show all bouquets
        if (
            flagsArr.length === 0 &&
            priceFilter.min === 0 &&
            priceFilter.max === 10000
        )
            return onDropFlags();

        const newArr = [
            ...items.filter(item => {
                const isInPriceRange =
                    item.price >= priceFilter.min &&
                    item.price <= priceFilter.max;

                if (!isInPriceRange) return;

                // if match in price and has no other filters - stop the search
                if (isInPriceRange && flagsArr.length === 0) return true;

                // if other filters enabled
                // find filter option matches with item.flags
                return flagsArr.some(option => {
                    return isInPriceRange && item.flags.includes(option);
                });
            }),
        ];

        onFilter(newArr);
    }, [flagsArr, priceFilter]);

    // show item current flags in edit form
    useEffect(() => {
        if (!editForm || items.flags.length === 0) return;

        clickFlags(items.flags);
    }, []);

    // click all checkboxes = saved flags
    function clickFlags(flags, reset = false) {
        const currentFlags = [];

        flags.forEach(flag => {
            if (!reset) currentFlags.push(flag);

            const input = document.querySelector(`input[name='${flag}']`);
            if (input) {
                input.click();
            }
        });

        setFlagsArr(reset ? [] : currentFlags);
    }

    // reset all checkboxes & drop filters
    function resetFilterHandler() {
        clickFlags(flagsArr, true);
        if (!editForm) {
            setPriceFilter({ min: 0, max: 10000 });
            setResetPrice(true);
        }
    }

    return (
        <ContentCard
            className={`${classes.filter} ${className ? className : ''}`}
        >
            <ul>
                <h3>По свету</h3>
                <FilterItem
                    name="gentle"
                    onCheck={name => applyFilterHandler(name)}
                >
                    нежный
                </FilterItem>
                <FilterItem
                    name="bright"
                    onCheck={name => applyFilterHandler(name)}
                >
                    яркие
                </FilterItem>
            </ul>
            <ul>
                <h3>По цвету</h3>
                <FilterItem
                    name="white"
                    onCheck={name => applyFilterHandler(name)}
                >
                    белый
                </FilterItem>
                <FilterItem
                    name="yellow"
                    onCheck={name => applyFilterHandler(name)}
                >
                    желтый
                </FilterItem>
                <FilterItem
                    name="green"
                    onCheck={name => applyFilterHandler(name)}
                >
                    зеленый
                </FilterItem>
                <FilterItem
                    name="red"
                    onCheck={name => applyFilterHandler(name)}
                >
                    красный
                </FilterItem>
                <FilterItem
                    name="orange"
                    onCheck={name => applyFilterHandler(name)}
                >
                    оранжевый
                </FilterItem>
                <FilterItem
                    name="pink"
                    onCheck={name => applyFilterHandler(name)}
                >
                    розовый
                </FilterItem>
                <FilterItem
                    name="blue"
                    onCheck={name => applyFilterHandler(name)}
                >
                    синий
                </FilterItem>
            </ul>
            <ul>
                <h3>По формату</h3>
                <FilterItem
                    name="bouquet"
                    onCheck={name => applyFilterHandler(name)}
                >
                    букет
                </FilterItem>
                <FilterItem
                    name="vase"
                    onCheck={name => applyFilterHandler(name)}
                >
                    в вазе
                </FilterItem>
                <FilterItem
                    name="envelope"
                    onCheck={name => applyFilterHandler(name)}
                >
                    в конверте
                </FilterItem>
                <FilterItem
                    name="basket"
                    onCheck={name => applyFilterHandler(name)}
                >
                    в корзине
                </FilterItem>
                <FilterItem
                    name="box"
                    onCheck={name => applyFilterHandler(name)}
                >
                    в шляпной коробке
                </FilterItem>
                <FilterItem
                    name="crate"
                    onCheck={name => applyFilterHandler(name)}
                >
                    в ящике
                </FilterItem>
            </ul>

            {editForm ? (
                <div>
                    <MenuBtn
                        onClick={() => {
                            onFlagSave(flagsArr);
                        }}
                    >
                        Сохранить отметки
                    </MenuBtn>
                </div>
            ) : (
                <div className={classes.slider}>
                    <h3>стоимость</h3>
                    <RangeSlider
                        min={0}
                        max={10000}
                        onChange={value => setPriceFilter(value)}
                        reset={resetPrice}
                        onCancelReset={() => setResetPrice(false)}
                    />
                </div>
            )}

            <MenuBtn blank={true} onClick={resetFilterHandler}>
                Сбросить фильтр
            </MenuBtn>
        </ContentCard>
    );
}

export default FlagsFilter;
