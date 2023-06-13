import {useEffect, useState} from "react";
import {ClothResponse} from "../../services/ClothApi/type.ts";
import {Link, useParams} from "react-router-dom";
import {ReactComponent as RightArrow} from "../../assets/images/arrow-right.svg";
import {ReactComponent as Favourite} from "../../assets/images/favourites.svg";
import styles from "./ClothPage.module.css";
import {clothApi} from "../../services/ClothApi/clothApi.ts";

export const ClothPage = () => {

    const [clothData, setClothData] = useState<ClothResponse>();

    const [activeDescription, setActiveDescription] = useState(1);

    const {clothId} = useParams();

    useEffect(() => {
        clothApi.getClothById(Number(clothId)).then(setClothData);
    }, []);

    const handleChangeDescription = (descId: number) => {
        setActiveDescription(descId)
    }

    const handleAddToFavourite = () => {
        clothApi.patchClothById(clothData!.id, {
            ...clothData!,
            isFavourite: !clothData!.isFavourite
        }).then(() => clothApi.getClothById(Number(clothId)).then(setClothData));
    };

    const handleAddCart = () => {
        clothApi.patchClothById(clothData!.id, {
            ...clothData!,
            isCart: !clothData!.isCart
        }).then(() => clothApi.getClothById(Number(clothId)).then(setClothData));
    }

    return (
        <div className={styles.wrap}>
            <nav className={styles.nav}><Link to={"/"}>Главная</Link><RightArrow/>{clothData?.name}</nav>
            <span className={styles.currentClothBlock}>
                <img src={clothData?.imageUrl} alt="photo" className={styles.photoCloth}/>
                <div className={styles.clothTextInfo}>
                    <div className={styles.name}>{clothData?.name}</div>
                    <div className={styles.price}>{clothData?.price.toLocaleString()} ₽</div>
                    <div className={styles.capsule}>{clothData?.collectionName}</div>
                    <span className={styles.clothColor}>
                        <div>
                            ЦВЕТ:
                        </div>Черный с красно-золотым кантом
                    </span>
                    <span className={styles.btnWrap}>
                        <button className={!clothData?.isCart ? styles.addToCart : styles.deleteFromCart} onClick={handleAddCart}>
                            {
                                clothData?.isCart ? 'Удалить из корзины' : "Добавить в корзину"
                            }

                        </button>
                        <button className={styles.addToFavourite} onClick={handleAddToFavourite}>
                            <Favourite
                                className={clothData?.isFavourite ? styles.favouriteActive : styles.favuriteUnActive}/>
                        </button>
                    </span>
                    <span className={styles.clothDescription}>
                        <button onClick={() => handleChangeDescription(1)}
                                className={activeDescription === 1 ? styles.btnActiveDescription : styles.btnDescription}>
                            ОПИСАНИЕ
                        </button>
                        <button onClick={() => handleChangeDescription(2)}
                                className={activeDescription === 2 ? styles.btnActiveDescription : styles.btnDescription}>
                            СОСТАВ
                        </button>
                        <button onClick={() => handleChangeDescription(3)}
                                className={activeDescription === 3 ? styles.btnActiveDescription : styles.btnDescription}>
                            РАЗМЕР
                        </button>
                        <button onClick={() => handleChangeDescription(4)}
                                className={activeDescription === 4 ? styles.btnActiveDescription : styles.btnDescription}>
                            АРТИКУЛ
                        </button>
                    </span>
                    <div className={styles.descriptionText}>
                        Изделие выполнено из хлопка. Вельвет. Фасон кюлоты. Длинный фасон. Эластичный пояс. Декоративные пуговицы. По бокам два кармана.
                        <br/>
                        <br/>
                        Боковая длина (от проймы до низа) 87.0 cm.
                    </div>
                </div>
            </span>
        </div>
    );
};
