import AdminsTabs from '../components/AdminsTabs';

import classes from './AdminOrders.module.css';

function AdminOrders(params) {
    return (
        <main className={classes.main}>
            <AdminsTabs className={classes.tabs} />
        </main>
    );
}

export default AdminOrders;
