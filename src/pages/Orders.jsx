import AdminsTabs from '../components/AdminsTabs';

import classes from './Orders.module.css';

function Orders(params) {
    return (
        <main className={classes.main}>
            <AdminsTabs className={classes.tabs} />
        </main>
    );
}

export default Orders;
