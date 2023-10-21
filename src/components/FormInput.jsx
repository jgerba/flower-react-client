import { useId, useState } from 'react';
import classes from './FormInput.module.css';

function FormInput(props) {
    const id = useId();
    const [value, setValue] = useState(props.value);

    return (
        <div className={classes.container}>
            <label htmlFor={id + `-${props.name}`} className={classes.label}>
                {props.title}
            </label>

            {!props.textarea ? (
                <input
                    id={id + `-${props.name}`}
                    type={props.type ? props.type : 'text'}
                    name={props.name}
                    placeholder={props.title}
                    maxLength={200}
                    className={`${classes.input} ${
                        props.className ? props.className : ''
                    }`}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            ) : (
                <textarea
                    id={id + `-${props.name}`}
                    type="text"
                    name={props.name}
                    placeholder={props.title}
                    maxLength={300}
                    className={`${classes.input} ${classes.textarea} ${
                        props.className ? props.className : ''
                    }`}
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            )}
        </div>
    );
}

export default FormInput;
