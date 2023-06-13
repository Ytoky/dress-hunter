import styles from './ClothFavouriteCard.module.css'
import React, {FC} from "react";
import {ClothResponse} from "../../../services/ClothApi/type.ts";
import {ReactComponent as Cross} from "../../../assets/images/cross.svg";
import {clothApi} from "../../../services/ClothApi/clothApi.ts";

interface IClothFavouriteCardProps extends ClothResponse {
    updateContent: React.Dispatch<ClothResponse[]>
}

export const ClothFavouriteCard: FC<IClothFavouriteCardProps> = (props) => {

    const {imageUrl, name, price, updateContent, id, isCart} = props

    const handleDeleteFromFavourite = () => {
        clothApi.patchClothById(id, {
            ...props,
            isFavourite: false
        }).then(() => clothApi.getClothes('?isFavourite=true').then(updateContent));
    }
    const handleAddCart = () => {
        clothApi.patchClothById(id, {
            ...props,
            isCart: !isCart
        }).then(() => clothApi.getClothes('?isFavourite=true').then(updateContent));
    }

    return (
        <div className={styles.wrap}>
            <div>
                <button className={styles.crossBtn} onClick={handleDeleteFromFavourite}><Cross/></button>
                <img src={imageUrl} alt="photo" className={styles.photoImage}/>
                <div className={styles.name}>{name}</div>
                <div className={styles.price}>{price.toLocaleString()} ₽</div>
            </div>
            <button className={isCart ? styles.deleteFromCart : styles.addToCart} onClick={handleAddCart}>
                {isCart ? 'Удалить из корзины' : 'Добавить в корзину'}
            </button>
        </div>
    );
};
