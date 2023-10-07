import { useState } from 'react';

import classes from './FilterItem.module.css';

function FilterItem(props) {
    const [checked, setChecked] = useState(false);

    function checkItem() {
        setChecked(state => !state);
        props.onCheck(props.name);
    }

    return (
        <li className={classes.item}>
            <label className={classes.checkbox} htmlFor={props.name}>
                {props.children}
            </label>
            <input
                className={classes.input}
                type="checkbox"
                id={props.name}
                name={props.name}
                onChange={checkItem}
                checked={checked}
            />
            <span className={classes.checkmark}></span>
        </li>
    );
}

export default FilterItem;
