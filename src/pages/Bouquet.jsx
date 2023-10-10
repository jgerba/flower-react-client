import { useParams } from 'react-router-dom';

import classes from './Bouquet.module.css';

function BouquetPage() {
    const params = useParams();

    return (
        <main>
            <h1>1111</h1>
            <p>{params.bouquetId}</p>
        </main>
    );
}

export default BouquetPage;
