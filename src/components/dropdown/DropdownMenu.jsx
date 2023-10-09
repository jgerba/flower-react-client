import { useState } from 'react';

import DropOption from './DropOption';

import classes from './DropdownMenu.module.css';

function DropdownMenu(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentOption, setCurrentOption] = useState('Сначала дешевые');

    function selectOption(option) {
        setCurrentOption(option);
        props.onSort(option);
        setIsOpen(false);
    }

    return (
        <div
            className={`${classes.menu} ${
                props.className ? props.className : ''
            } ${isOpen ? classes['menu-is-open'] : ''} `}
        >
            <div
                className={classes['current-option']}
                onClick={() => setIsOpen(isOpen => !isOpen)}
            >
                <p>{currentOption}</p>
                <div className={classes.arrow}></div>
            </div>

            {isOpen && (
                <div>
                    <DropOption onSelect={option => selectOption(option)}>
                        Сначала дешевые
                    </DropOption>
                    <DropOption onSelect={option => selectOption(option)}>
                        Сначала дорогие
                    </DropOption>
                    <DropOption onSelect={option => selectOption(option)}>
                        Новинки
                    </DropOption>
                    <DropOption onSelect={option => selectOption(option)}>
                        Со скидкой
                    </DropOption>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;
