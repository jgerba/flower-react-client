import ContentCard from '../components/UI/ContentCard';
import SectionHeader from '../components/UI/SectionHeader';
import InfoPanel from '../components/InfoPanel';
import FilterItem from '../components/FilterItem';
import RangeSlider from '../components/RangeSlider';

import classes from './Catalogue.module.css';

function CataloguePage() {
    return (
        <main className={classes.main}>
            <ContentCard className={classes.head}>
                <div className={classes.header}>
                    <SectionHeader>каталог</SectionHeader>
                    <SectionHeader smallHeader={true}>букетов</SectionHeader>
                </div>
                <p>
                    В нашем магазине самый большой выбор букетов для любых
                    событий:
                </p>
                <div className={classes['filter']}></div>
            </ContentCard>
            <InfoPanel className={classes['info-panel']} />
            <div className={classes['sort-menu']}>
                <p>sort menu</p>
            </div>

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

                <div className={classes.slider}>
                    <h3>стоимость</h3>
                    <RangeSlider
                        onChange={({ min, max }) =>
                            console.log(`min = ${min}, max = ${max}`)
                        }
                    />
                </div>
            </ContentCard>

            <section className={classes.goods}></section>
        </main>
    );
}

export default CataloguePage;
