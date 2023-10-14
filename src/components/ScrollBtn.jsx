import classes from './ScrollBtn.module.css';

import arrow from '../svg/up_btn_arrow.svg';

function ScrollBtn() {
    return (
        <button
            className={classes.btn}
            onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
        >
            <img src={arrow} />
        </button>
    );
}

export default ScrollBtn;
