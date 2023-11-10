import { useEffect, useId, useRef, useState } from 'react';
import classes from './FormInput.module.css';

let timer;

function FormInput(props) {
    const ref = useRef();
    const id = useId();
    const [error, setError] = useState(false);

    // check if there empty text inputs, or wrong number value
    function checkValue(value) {
        if (
            (props.type !== 'number' && props.required && !value.trim()) ||
            (props.type === 'number' && value < 1) ||
            (props.type === 'number' && value === '')
        ) {
            return false;
        }

        return true;
    }

    function changeHandler(event) {
        props.onChange(event);

        if (!props.required) return;

        // check value 2 sec after change
        clearTimeout(timer);
        setError(false);

        timer = setTimeout(() => {
            if (!checkValue(event.target.value)) {
                setError(true);
            }
        }, 2000);
    }

    // if error add error class and style, remove if not
    useEffect(() => {
        if (!props.required) return;

        ref.current.classList.toggle(classes.error, error);
        props.onError(error);
    }, [error]);

    // check inputs immidiately after losing focus
    function blurHandler(event) {
        if (!props.required) return;

        if (!checkValue(event.target.value)) setError(true);
    }

    return (
        <div
            className={`${classes.container} ${
                props.containerClass ? props.containerClass : ''
            }`}
        >
            <label
                htmlFor={id + `-${props.name}`}
                className={`${classes.label} ${
                    props.labelClass ? props.labelClass : ''
                }`}
            >
                {props.title}
            </label>

            {props.type === 'number' ? (
                <input
                    ref={ref}
                    id={id + `-${props.name}`}
                    type="number"
                    name={props.name}
                    placeholder={props.placeholder}
                    className={`${classes.input} ${
                        props.className ? props.className : ''
                    }`}
                    value={props.value}
                    onChange={changeHandler}
                    onBlur={blurHandler}
                />
            ) : props.textarea ? (
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
                    value={props.value}
                    onChange={changeHandler}
                />
            ) : (
                <input
                    ref={ref}
                    id={id + `-${props.name}`}
                    type={props.type ? props.type : 'text'}
                    name={props.name}
                    placeholder={props.placeholder}
                    maxLength={props.name === 'src' ? '' : 25}
                    className={`${classes.input} ${
                        props.className ? props.className : ''
                    }`}
                    value={props.value}
                    onChange={changeHandler}
                    onBlur={blurHandler}
                />
            )}
        </div>
    );
}

export default FormInput;
