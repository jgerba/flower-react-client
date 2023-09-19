import classes from './TextHeader.module.css';

function TextHeader(props) {
    return (
        <h3
            className={`${classes.head} ${
                props.className ? props.className : ''
            }`}
        >
            {props.children}
        </h3>
    );
}

export default TextHeader;
