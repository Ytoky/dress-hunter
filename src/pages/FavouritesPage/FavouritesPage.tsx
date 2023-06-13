import {Link} from "react-router-dom";
import {ReactComponent as Arrow} from "../../assets/images/arrow-right.svg";
import {FC, useEffect, useState} from "react";
import {ClothResponse} from "../../services/ClothApi/type.ts";
import {clothApi} from "../../services/ClothApi/clothApi.ts";
import {ClothFavouriteCard} from "../../components/UI/ClothFavouriteCard";
import styles from "./FavouritesPage.module.css";

export const FavouritesPage: FC = () => {

    const [favouriteContent, setFavouriteContent] = useState<ClothResponse[]>([]);

    useEffect(() => {
        clothApi.getClothes('?isFavourite=true').then(r => setFavouriteContent(r))
    }, []);

    return (
        <div className={styles.wrap}>
            <span className={styles.nav}>
                <Link to={"/"}>Главная</Link>
                <Arrow/>
                Избранное
            </span>
            <h1>Избранное</h1>
            <div className={styles.favouriteContent}>
                {
                    favouriteContent.map(favouriteCloth => <ClothFavouriteCard key={favouriteCloth.id} updateContent={setFavouriteContent} {...favouriteCloth}/>)
                }
            </div>
        </div>
    );
};
