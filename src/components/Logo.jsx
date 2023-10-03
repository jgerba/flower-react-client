import { NavLink } from 'react-router-dom';

import classes from './Logo.module.css';

function Logo() {
    return (
        <NavLink className={`${classes.logo} `} to="/" end>
            <p className={classes['logo-L']}>l</p>
            <p className={classes['logo-F']}>f</p>
        </NavLink>
    );
}

export default Logo;
