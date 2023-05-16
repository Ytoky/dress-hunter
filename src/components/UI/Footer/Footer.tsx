import styles from './Footer.module.css'
import {Link} from "react-router-dom";
import {ReactComponent as Visa} from '../../../assets/images/visa.svg'
import {ReactComponent as Mastercard} from '../../../assets/images/mastercard.svg'


export const Footer = () => {
    return (
        <footer className={styles.wrap}>
            <div className={styles.infoWrap}>
                <div className={styles.nameStore}>
                    Dress Hunter
                    <span className={styles.offers}>
                        Договор оферы
                        <div>Политика конфиденциальности</div>
                    </span>
                </div>
                <div className={styles.mainInfo}>
                    <nav className={styles.navPanel}>
                        <Link to={''}>Каталог</Link>
                        <Link to={''}>О бренде</Link>
                        <Link to={''}>Контакты</Link>
                        <Link to={''}>Доставка и оплата</Link>
                        <Link to={''}>Возврат</Link>
                    </nav>
                    <div className={styles.aboutStore}>
                        <span className={styles.itemAbout}>
                            <div>ВРЕМЯ РАБОТЫ</div>
                            c 8:00 до 19:00
                        </span>
                        <span className={styles.itemAbout}>
                            <div>НАШИ КОНТАКТЫ</div>
                            8 800 000 00 00<br/>
                            dresshunter@yandex.ru
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.additionalInfoWrap}>
                <div>Сделано <Link to={'https://github.com/Ytoky'}>Ytoky(Иванов Артем)</Link></div>
                <div><Visa/><Mastercard/></div>
            </div>
        </footer>
    );
};
