import { useEffect, useId, useRef, useState } from 'react';
import classes from './FormInput.module.css';

let timer;

function FormInput(props) {
    const ref = useRef();
    const id = useId();
    const [value, setValue] = useState(props.value ? props.value : '');
    const [error, setError] = useState(false);

    // check if there empty text inputs, or wrong number value
    function checkValue(value) {
        if (
            (props.type !== 'number' && !value.trim()) ||
            (props.type === 'number' && value > 10000) ||
            (props.type === 'number' && value < 1)
        ) {
            return false;
        }

        return true;
    }

    function changeHandler(event) {
        const el = event.target;
        setValue(el.value);

        if (el.name === 'descr') return;

        props.onChange(el.value);
        // set timeout after changing value and check value after
        clearTimeout(timer);
        setError(false);

        timer = setTimeout(() => {
            if (!checkValue(el.value)) setError(true);
        }, 2000);
    }

    // if error add error class and style, remove if not
    useEffect(() => {
        ref.current.classList.toggle(classes.error, error);
    }, [error]);

    // check inputs immidiately after losing focus
    function blurHandler(event) {
        if (!checkValue(event.target.value)) setError(true);
    }

    return (
        <div className={classes.container}>
            <label htmlFor={id + `-${props.name}`} className={classes.label}>
                {props.title}
            </label>

            {!props.textarea ? (
                <input
                    ref={ref}
                    id={id + `-${props.name}`}
                    type={props.type ? props.type : 'text'}
                    name={props.name}
                    placeholder={props.placeholder}
                    maxLength={200}
                    className={`${classes.input} ${
                        props.className ? props.className : ''
                    }`}
                    value={value}
                    onChange={changeHandler}
                    onBlur={blurHandler}
                />
            ) : (
                <textarea
                    ref={ref}
                    id={id + `-${props.name}`}
                    type="text"
                    name={props.name}
                    placeholder={props.placeholder}
                    maxLength={300}
                    className={`${classes.input} ${classes.textarea} ${
                        props.className ? props.className : ''
                    }`}
                    value={value}
                    onChange={changeHandler}
                />
            )}
        </div>
    );
}

export default FormInput;
