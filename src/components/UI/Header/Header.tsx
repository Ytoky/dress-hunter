import {FC} from "react";
import {ReactComponent as Profile} from '../../../assets/images/profile.svg'
import {ReactComponent as Favourites} from '../../../assets/images/favourites.svg'
import {ReactComponent as Cart} from '../../../assets/images/cart.svg'
import {Link} from "react-router-dom";
import styles from './Header.module.css'

export const Header: FC = () => {
    return (
        <header className={styles.wrap}>
            <Link to={''}><h3>DRESS HUNTER</h3></Link>
            <nav className={styles.navPanel}>
                <Link to={''}>Каталог</Link>
                <Link to={''}>О бренде</Link>
                <Link to={''}>Блог</Link>
                <Link to={''}>Контакты</Link>
            </nav>
            <div className={styles.navUser}>
                <button>
                    <Profile/>
                </button>
                <Link to={'/favourites'}>
                    <Favourites/>
                </Link>
                <button>
                    <Cart/>
                </button>
            </div>
        </header>
    );
};
