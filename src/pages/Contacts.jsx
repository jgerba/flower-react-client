import { useEffect } from 'react';

import SectionHeader from '../components/UI/SectionHeader';
import ContentCard from '../components/UI/ContentCard';
import FeedBackForm from '../components/FeedBackForm';

import classes from './Contacts.module.css';
import map from '../images/map.jpg';

function ContactsPage() {
    // reset scroll position
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className={classes.main}>
            <SectionHeader className={classes.header}>контакты</SectionHeader>

            <section className={classes.items}>
                <ContentCard className={classes['item-card']}>
                    <h3 className={classes['item-header']}>время работы</h3>
                    <p className={classes['item-text']}>
                        с 10:00 до 21:00 без выходных
                    </p>
                </ContentCard>

                <ContentCard className={classes['item-card']}>
                    <h3 className={classes['item-header']}>Адрес</h3>
                    <p className={classes['item-text']}>
                        г. Минск, ул. Тимирязева 67, комн. 112
                    </p>
                </ContentCard>

                <ContentCard className={classes['item-card']}>
                    <h3 className={classes['item-header']}>Телефон</h3>
                    <p className={classes['item-text']}>+375 (29) 113-69-69</p>
                </ContentCard>

                <ContentCard className={classes['item-card']}>
                    <h3 className={classes['item-header']}>E-mail</h3>
                    <p className={classes['item-text']}>zakaz@loverflower.by</p>
                </ContentCard>
            </section>

            <div className={classes['text-us-header']}>
                <SectionHeader smallHeader={true}>напишите</SectionHeader>
                <SectionHeader smallHeader={true}>нам</SectionHeader>
            </div>

            <FeedBackForm className={classes.feedback} contactsPage={true} />

            <div className={classes.map}>
                <h3 className={classes['item-header']}>Мы на карте</h3>
                <img src={map} alt="Карта" />
            </div>
        </main>
    );
}

export default ContactsPage;
