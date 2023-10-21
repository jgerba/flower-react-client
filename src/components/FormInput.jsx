import classes from './FormInput.module.css';

function FormInput(props) {
    return (
        <div className={classes.container}>
            <label htmlFor={props.id} className={classes.label}>
                {props.title}
            </label>
            {!props.textarea ? (
                <input
                    id={props.id}
                    type={props.type ? props.type : 'text'}
                    name={props.title}
                    placeholder={props.title}
                    className={`${classes.input} ${
                        props.className ? props.className : ''
                    }`}
                    onChange={event => props.onChange(event)}
                />
            ) : (
                <textarea
                    id={props.id}
                    type={props.type ? props.type : 'text'}
                    name={props.title}
                    placeholder={props.title}
                    className={`${classes.input} ${classes.textarea} ${
                        props.className ? props.className : ''
                    }`}
                    onChange={event => props.onChange(event)}
                />
            )}
        </div>
    );
}

export default FormInput;
