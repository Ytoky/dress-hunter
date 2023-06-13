import {FC, useEffect, useState} from "react";
import {ReactComponent as Profile} from "../../../assets/images/profile.svg";
import {ReactComponent as Favourites} from "../../../assets/images/favourites.svg";
import {ReactComponent as Cart} from "../../../assets/images/cart.svg";
import {Link, useLocation} from "react-router-dom";
import styles from "./Header.module.css";
import {clothApi} from "../../../services/ClothApi/clothApi.ts";
import {ClothResponse} from "../../../services/ClothApi/type.ts";

export const Header: FC = () => {

    const [clothInCart, setClothInCart] = useState<ClothResponse[]>([]);

    const location = useLocation()

    useEffect(() => {
        clothApi.getClothes("?isCart=true").then(setClothInCart);
    }, [location]);


    return (
        <header className={styles.wrap}>
            <Link to={""}><h3>DRESS HUNTER</h3></Link>
            <nav className={styles.navPanel}>
                <Link to={"/catalog"}>Каталог</Link>
                <Link to={""}>О магазине</Link>
                <Link to={""}>Блог</Link>
                <Link to={"/contacts"}>Контакты</Link>
            </nav>
            <div className={styles.navUser}>
                <button>
                    <Profile/>
                </button>
                <Link to={"/favourites"}>
                    <Favourites/>
                </Link>
                <Link to={""}>
                    <Cart/>
                    {clothInCart.length ? <div className={styles.countCartItems}>{clothInCart.length}</div> : null}
                </Link>
            </div>
        </header>
    );
};
