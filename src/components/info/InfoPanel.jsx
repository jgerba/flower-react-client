import AddressPanel from './AddressPanel';
import CallPanel from './CallPanel';
import SocialPanel from './SocialPanel';
import ShopCart from '../ShopCart';

import classes from './InfoPanel.module.css';

function InfoPanel(props) {
    return (
        <article
            className={`${classes.panel} ${
                props.className ? props.className : ''
            } ${props.showPanel && !props.scrollDown ? classes.show : ''}`}
        >
            <AddressPanel className={classes.address} />
            <SocialPanel className={classes.social} />
            <CallPanel
                className={classes.call}
                showPanel={props.showPanel}
                scrollDown={props.scrollDown}
            />
            <ShopCart className={classes.cart} />
        </article>
    );
}

export default InfoPanel;
