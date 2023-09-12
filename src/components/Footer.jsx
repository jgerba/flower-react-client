import { NavLink } from 'react-router-dom';

import TextHeader from './UI/TextHeader';
import AddressPanel from './AddressPanel';
import SocialPanel from './SocialPanel';

function Footer() {
    return (
        <footer>
            <h2>lf</h2>
            <div>
                <TextHeader>реквизиты</TextHeader>
                <p>
                    ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул.
                    Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с
                    BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22
                    220007, г. Минск, улица Толстого
                </p>
            </div>
            <div>
                <NavLink to="/catalogue">Каталог</NavLink>
            </div>
            <div>
                <NavLink to="/catalogue">Букет</NavLink>
            </div>
            <div>
                <NavLink to="/payment">ДОСТАВКА И ОПЛАТА</NavLink>
                <NavLink to="/about">О НАС</NavLink>
                <NavLink to="/contacts">КОНТАКТЫ</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
                <NavLink to="/corporate">
                    для корпоративных <br /> клиентов
                </NavLink>
            </div>
            <AddressPanel footer={true} />
            <SocialPanel />
        </footer>
    );
}

export default Footer;
