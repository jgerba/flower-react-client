import ContentCard from '../components/UI/ContentCard';
import SectionHeader from '../components/UI/SectionHeader';

import classes from './Catalogue.module.css';

function CataloguePage() {
    return (
        <main className={classes.main}>
            <ContentCard>
                <div>
                    <SectionHeader></SectionHeader>
                    <SectionHeader smallHeader={true}></SectionHeader>
                    <p>
                        В нашем магазине самый большой выбор букетов для любых
                        событий:
                    </p>
                    <div className={classes.filter}></div>
                </div>
            </ContentCard>
        </main>
    );
}

export default CataloguePage;
