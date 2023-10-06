import AddressPanel from './AddressPanel';
import CallPanel from './CallPanel';
import SocialPanel from './SocialPanel';
import ShopCart from './ShopCart';

import classes from './InfoPanel.module.css';

function InfoPanel(props) {
    return (
        <aside
            className={`${classes.panel} ${
                props.className ? props.className : ''
            }`}
        >
            <AddressPanel className={classes.address} />
            <SocialPanel className={classes.social} />
            <CallPanel className={classes.call} />
            <ShopCart className={classes.cart} />
        </aside>
    );
}

export default InfoPanel;
