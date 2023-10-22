import ContentCard from '../UI/ContentCard';
import IconBtn from '../UI/IconBtn';

import classes from './SocialPanel.module.css';
import vk from '../../svg/VK.svg';
import wapp from '../../svg/whatsapp.svg';
import tg from '../../svg/telegram.svg';

function SocialPanel(props) {
    return (
        <ContentCard
            className={`${classes.panel} ${
                props.className ? props.className : ''
            }`}
        >
            <IconBtn src={vk} alt="Ссылка ВКонтакте" />
            <IconBtn src={wapp} alt="Ссылка Whatapp" />
            <IconBtn src={tg} alt="Ссылка Телеграм" />
        </ContentCard>
    );
}

export default SocialPanel;
