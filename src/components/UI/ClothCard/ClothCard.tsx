import {ReactComponent as Favourite} from "../../../assets/images/favourites.svg";
import {FC, useState} from "react";
import {clothApi} from "../../../services/ClothApi/clothApi.ts";
import styles from "./ClothCard.module.css";

interface IClothCardProps {
    id: number;
    name: string;
    collectionName: string;
    price: number;
    isFavourite: boolean;
    isNew?: boolean;
    isSale?: boolean;
    salePercent?: number;
    imageUrl: string;
}

export const ClothCard: FC<IClothCardProps> = props => {
    const {
        id,
        name,
        imageUrl,
        collectionName,
        isSale = false,
        isFavourite = false,
        salePercent = 0,
        price,
        isNew = false
    } = props;



    const [isActiveFavourite, setIsFavourite] = useState<boolean>(isFavourite);
    const handleFavourites = () => {
        clothApi.patchClothById(id, {...props, isFavourite: !isFavourite}).then(() => setIsFavourite(prevState => !prevState));
    };

    return (
        <div className={styles.wrap}>
            <img src={imageUrl} alt="photo-cloth" className={styles.imagePhoto}/>
            {
                isSale ?
                    <div className={styles.saleInfo}>-{salePercent}%</div>
                    : null
            }
            {
                isNew ?
                    <div className={styles.new}>NEW</div>
                    : null
            }
            <div></div>
            <button className={styles.favouriteBtn} onClick={handleFavourites}>
                <Favourite className={isActiveFavourite ? styles.activeFavourite : styles.unactiveFavourite}/>
            </button>
            <div className={styles.nameCloth}>{name}</div>
            <div className={styles.collectionCloth}>{collectionName}</div>
            <span className={styles.aboutBuy}>
                <div>
                    {
                        isSale ?
                            <span className={styles.salePrice}>
                                    {price.toLocaleString()} ₽
                                <div>
                                {(price + price / 100 * salePercent).toLocaleString()} ₽
                                </div>
                            </span>
                            : `${price} ₽`
                    }
                </div>
                <div className={styles.color}></div>
            </span>
        </div>
    );
};
