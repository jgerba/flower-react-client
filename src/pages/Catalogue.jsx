import SectionHeader from '../components/UI/SectionHeader';

import classes from './Catalogue.module.css';

function CataloguePage() {
    return (
        <main className={classes.main}>
            <div>
                <SectionHeader></SectionHeader>
                <SectionHeader smallHeader={true}></SectionHeader>
                <p></p>
            </div>
        </main>
    );
}

export default CataloguePage;
