import { NavLink } from 'react-router-dom';

import Logo from './Logo';
import AddressPanel from './info/AddressPanel';
import SocialPanel from './info/SocialPanel';

import classes from './Footer.module.css';

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={`${classes.column} ${classes.credentials}`}>
                <Logo className={classes.logo} />
                <h3 className={classes.header}>реквизиты</h3>
                <p className={classes.descr}>
                    ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул.
                    Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с
                    BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22
                    220007, г. Минск, улица Толстого
                </p>
            </div>
            <div className={`${classes.column} ${classes.catalogue}`}>
                <h3>
                    <NavLink className={classes.header} to="/catalogue">
                        Каталог
                    </NavLink>
                </h3>
            </div>
            <div className={`${classes.column} ${classes.bouquet}`}>
                <h3>
                    <NavLink className={classes.header} to="/catalogue">
                        Букет
                    </NavLink>
                </h3>
            </div>
            <div className={`${classes.column} ${classes.links}`}>
                <NavLink className={classes.header} to="/payment">
                    ДОСТАВКА И ОПЛАТА
                </NavLink>
                <NavLink className={classes.header} to="/about">
                    О НАС
                </NavLink>
                <NavLink className={classes.header} to="/contacts">
                    КОНТАКТЫ
                </NavLink>
                <NavLink className={classes.header} to="/faq">
                    FAQ
                </NavLink>
                <NavLink className={classes.header} to="/corporate">
                    для корпоративных <br /> клиентов
                </NavLink>
            </div>
            <div className={`${classes.column} ${classes.address}`}>
                <AddressPanel footer={true} />
                <SocialPanel className={classes.social} />
            </div>
        </footer>
    );
}

export default Footer;
