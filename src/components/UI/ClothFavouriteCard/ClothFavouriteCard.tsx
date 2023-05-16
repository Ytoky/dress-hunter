import styles from './ClothFavouriteCard.module.css'
import React, {FC} from "react";
import {clothResponse} from "../../../services/ClothApi/type.ts";
import {ReactComponent as Cross} from "../../../assets/images/cross.svg";
import {clothApi} from "../../../services/ClothApi/clothApi.ts";

interface IClothFavouriteCardProps extends clothResponse {
    updateContent: React.Dispatch<clothResponse[]>
}

export const ClothFavouriteCard: FC<IClothFavouriteCardProps> = (props) => {

    const {imageUrl, name, price, updateContent, id} = props

    const handleDeleteFromFavourite = () => {
        clothApi.patchClothById(id, {
            ...props,
            isFavourite: false
        }).then(() => clothApi.getClothes('?isFavourite=true').then(r => updateContent(r)));

    }

    return (
        <div className={styles.wrap}>
            <div>
                <button className={styles.crossBtn} onClick={handleDeleteFromFavourite}><Cross/></button>
                <img src={imageUrl} alt="photo" className={styles.photoImage}/>
                <div className={styles.name}>{name}</div>
                <div className={styles.price}>{price.toLocaleString()} ₽</div>
            </div>
            <button className={styles.addToCart}>Добавить в корзину</button>
        </div>
    );
};
