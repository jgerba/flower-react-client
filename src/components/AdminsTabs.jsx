import { Link } from 'react-router-dom';

import classes from './AdminsTabs.module.css';

function AdminsTabs(props) {
    return (
        <aside
            className={`${classes.tabs} ${
                props.className ? props.className : ''
            }`}
        >
            <Link to="/orders">Заказы</Link>
            <Link to="/goods">Товары</Link>
            <Link to="/feedback">Обратная связь</Link>
        </aside>
    );
}

export default AdminsTabs;
