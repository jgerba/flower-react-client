import ContentCard from '../components/UI/ContentCard';
import SectionHeader from '../components/UI/SectionHeader';
import InfoPanel from '../components/InfoPanel';
import FilterItem from '../components/FilterItem';

import classes from './Catalogue.module.css';

function CataloguePage() {
    return (
        <main className={classes.main}>
            <ContentCard>
                <SectionHeader></SectionHeader>
                <SectionHeader smallHeader={true}></SectionHeader>
                <p>
                    В нашем магазине самый большой выбор букетов для любых
                    событий:
                </p>
                <div className={classes['filter']}></div>
            </ContentCard>
            <InfoPanel />
            <div className={classes['sort-menu']}></div>

            <section className={classes['goods-section']}></section>
            <ContentCard className={classes['left-filter']}>
                <ul>
                    <h3>По свету</h3>
                    <FilterItem name="gentle">нежный</FilterItem>
                    <FilterItem name="bright">яркие</FilterItem>
                </ul>
                <ul>
                    <h3>По цвету</h3>
                    <FilterItem name="white">белый</FilterItem>
                    <FilterItem name="yellow">желтый</FilterItem>
                    <FilterItem name="green">зеленый</FilterItem>
                    <FilterItem name="red">красный</FilterItem>
                    <FilterItem name="orange">оранжевый</FilterItem>
                    <FilterItem name="pink">розовый</FilterItem>
                    <FilterItem name="blue">синий</FilterItem>
                </ul>
                <ul>
                    <h3>По формату</h3>
                    <FilterItem name="bouquet">букет</FilterItem>
                    <FilterItem name="vase">в вазе</FilterItem>
                    <FilterItem name="envelope">в конверте</FilterItem>
                    <FilterItem name="basket">в корзине</FilterItem>
                    <FilterItem name="box">в шляпной коробке</FilterItem>
                    <FilterItem name="crate">в ящике</FilterItem>
                </ul>
                <label htmlFor="price">
                    <input id="price" name="price" type="range" />
                </label>
            </ContentCard>
        </main>
    );
}

export default CataloguePage;
