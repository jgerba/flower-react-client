import TextHeader from './TextHeader';

import classes from './OrderStep.module.css';

function OrderStep(props) {
    return (
        <div className={classes.card}>
            <TextHeader
                className={classes.header}
            >{`${props.step} шаг`}</TextHeader>
            <p className={classes.text}>{props.children}</p>
        </div>
    );
}

export default OrderStep;
