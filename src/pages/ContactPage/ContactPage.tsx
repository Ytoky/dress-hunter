import {ReactComponent as Arrow} from '../../assets/images/arrow-right.svg'
import {Link} from "react-router-dom";
import styles from './ContactPage.module.css'

export const ContactPage = () => {
    return (
        <div className={styles.wrap}>
            <nav className={styles.navPanel}>
                <Link to={'/'}>Главная</Link> <Arrow/> Контакты
            </nav>
            <span className={styles.contactWrap}>
                <h1>
                    Свяжитесь с нами, и мы с радостью поможем Вам
                </h1>
                <div className={styles.allContact}>
                    <div>
                        <div className={styles.contactItem}>
                            <span>отдел по работе с клиентами</span>
                            +7 (999) 999-99-99
                        </div>
                        <div className={styles.contactItem}>
                            <span>ПОЧТА</span>
                            dresshunter@yandex.ru
                        </div>
                        <div className={styles.contactItem}>
                            <span>Время работы</span>
                            c 8:00 до 19:00
                        </div>
                        <div className={styles.contactItem}>
                            <span>НАШИ СОЦСЕТИ</span>

                        </div>
                    </div>
                    <div>
                        <div className={styles.contactItem}>
                            <span>Юридический адрес</span>
308009, г. Белгород, Щорса
                        </div>
                        <div className={styles.contactItem}>
                            <span>Адрес для корреспонденции</span>
308004, г. Белгород, Щорса
                        </div>
                    </div>
                </div>
            </span>
        </div>
    );
};
