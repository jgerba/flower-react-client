import classes from './AboutHeader.module.css';

function AboutHeader(props) {
    return (
        <h2
            className={`${classes.header} ${props.white ? classes.white : ''} ${
                props.className ? props.className : ''
            }`}
        >
            {props.children}
        </h2>
    );
}

export default AboutHeader;
